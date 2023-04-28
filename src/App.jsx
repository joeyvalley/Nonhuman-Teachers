import "./style.css"
import axios from 'axios';
import { useRef, useState } from "react"

function App() {

  const videos = [
    { title: "The fungus Aspergillus niger growing fruiting bodies at 10x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/FDT2jp5.mp4" },
    { title: "Chromataphores in squid mantle at 4x magnification. Video by Bill Shin.", link: "https://i.imgur.com/lSpFsxe.mp4" },
    { title: "Green Stentor coeruleus and Vorticella at 25x magnification. Video by Frank Fox.", link: "https://i.imgur.com/ENiRikD.mp4" },
    { title: "Perspiration on a human fingertip at 5 - 40x magnification. Video by Tsutomu Tomita and Shun Miyazaki.", link: "https://i.imgur.com/KY947KI.mp4" },
    { title: "A ciliate from genus Pseudomicrothorax devours a cyanobacterial filament at 20x and 40x magnification. Video by Dr. Sally Warring.", link: "https://i.imgur.com/cTQqlEk.mp4" },
    { title: "Polychaete worm of the Syllidae family at 20x and 40x magnification. Video by Rafael Martín-Ledo.", link: "https://i.imgur.com/R4UIzum.mp4" }
  ]
  const startingVideo = randomVideo();
  const currSelection = useRef(null)
  const [video, setVideo] = useState(startingVideo.link)
  const [description, setDescription] = useState(startingVideo.title)

  function switchVideo() {
    const newVideo = randomVideo()
    const videoElement = currSelection.current
    videoElement.style.opacity = 0;
    setTimeout(() => {
      videoElement.src = newVideo.link;
      setDescription(newVideo.title)
      videoElement.load();
      videoElement.style.opacity = 1;
    }, 500);
  }

  function randomVideo() {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.EMAIL.value; // Get email value from the form
    console.log(email);
    const apiKey = '44ff24c95a644cc1984389326df6c2ef-us21'; // Replace with your MailChimp API key
    const listId = 'e3b39a30fb'; // Replace with your mailing list ID
    const server = apiKey.slice(-4); // Extract the server number from your API key (e.g., "us1" or "us20")

    try {
      const response = await axios({
        method: 'post',
        url: `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${apiKey}`,
        },
        data: {
          email_address: email,
          status: 'subscribed',
        },
      });

      if (response.status === 200) {
        console.log('Successfully added to the mailing list');
        // Handle successful subscription, e.g., show a message to the user
      } else {
        console.log('An error occurred:', response);
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.log('An error occurred:', error);
      // Handle the error, e.g., show an error message to the user
    }
  }

  return (
    <>
      <div className="container">
        <video autoPlay muted className="video" ref={currSelection} onEnded={switchVideo}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="newsletter">
        <form onSubmit={handleSubmit}>
          <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Join newsletter." required />
          <input type="submit" value="Subscribe" className="subscribe" />
        </form>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </>
  )
}

export default App
