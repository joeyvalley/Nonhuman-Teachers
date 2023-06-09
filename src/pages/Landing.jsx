import "../styles/landing.css"
import axios from 'axios';
import { useEffect, useRef, useState } from "react"

export default function Landing() {

  const videos = [
    { title: "The fungus Aspergillus niger growing fruiting bodies at 10x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/FDT2jp5.mp4" },
    { title: "Chromataphores in squid mantle at 4x magnification. Video by Bill Shin.", link: "https://i.imgur.com/lSpFsxe.mp4" },
    { title: "Green Stentor coeruleus and Vorticella at 25x magnification. Video by Frank Fox.", link: "https://i.imgur.com/ENiRikD.mp4" },
    { title: "Perspiration on a human fingertip at 5 - 40x magnification. Video by Tsutomu Tomita and Shun Miyazaki.", link: "https://i.imgur.com/KY947KI.mp4" },
    { title: "A ciliate from genus Pseudomicrothorax devours a cyanobacterial filament at 20x and 40x magnification. Video by Dr. Sally Warring.", link: "https://i.imgur.com/cTQqlEk.mp4" },
    { title: "Formation of silver dendrites at 3x magnification. Video by Wojtek Plonka.", link: "https://i.imgur.com/xrukDYR.mp4" },
    { title: "The rotifer Limnias melicerta at 200x magnification. Video by Wim van Egmond.", link: "https://i.imgur.com/iIntJym.mp4" },
    { title: "5-day time-lapse of rat hippocampal neurons at 20x magnification. Video by Thomas A. Zangle and Soorya Pradeep.", link: "https://i.imgur.com/FDOon9v.mp4" },
    { title: "Polychaete worm of the Syllidae family at 20x and 40x magnification. Video by Rafael Martín-Ledo.", link: "https://i.imgur.com/R4UIzum.mp4" }
  ]
  const startingVideo = randomVideo();
  const currSelection = useRef(null)
  // const [video, setVideo] = useState(startingVideo.link)
  const [description, setDescription] = useState(startingVideo.title)
  const [email, setEmail] = useState()

  useEffect(() => {
    setTimeout(() => {
      currSelection.current.style.opacity = 1;
    }, 100);
  }, [])


  function switchVideo() {
    const newVideo = randomVideo()
    const videoElement = currSelection.current
    videoElement.style.opacity = 0;
    setTimeout(() => {
      videoElement.src = newVideo.link;
      setDescription(newVideo.title)
      videoElement.load();
      videoElement.style.transition = "opacity 500ms ease-in-out";
      videoElement.style.opacity = 1;
    }, 500);
  }

  function randomVideo() {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.EMAIL.value; // Get email value from the form
    try {
      const response = await axios.post('/api/subscribe', { email });

      if (response.status === 200) {
        setEmail("Thank you for subscribing!")
        // Handle successful subscription, e.g., show a message to the user
      } else {
        setEmail("An error occurred, please try again.")
        console.log('An error occurred:', response);
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      setEmail("An error occurred, please try again.")
      console.log('An error occurred:', error);
      // Handle the error, e.g., show an error message to the user
    }
  }


  return (
    <>
      <div className="logo" onClick={() => window.location.reload()}>
        <img src="assets/nht-logo.png" alt="NHT logo" className="logo-img" />
      </div >
      <div className="container">
        <video autoPlay muted playsInline className="video" ref={currSelection} onEnded={switchVideo}>
          <source src={startingVideo.link} type="video/mp4" />
        </video>
      </div>
      <div className="newsletter">
        <form onSubmit={handleSubmit}>
          <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter email to join newsletter." value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="submit" value="Subscribe" className="subscribe" />
        </form>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </>
  )
}
