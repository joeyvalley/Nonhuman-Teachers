import "../styles/style.css";
import Video from "../components/Video";
import { useState } from "react";
import axios from "axios";
import Newsletter from "../components/Newsletter";


export default function Home() {

  const [email, setEmail] = useState()

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.EMAIL.value; // Get email value from the form
    try {
      const response = await axios.post('api/subscribe', { email });

      if (response.status === 200) {
        setEmail("Thank you for subscribing!")
        // Handle successful subscription, e.g., show a message to the user
      } else {
        setEmail("An error occurred, please try again!")
        console.log('An error occurred:', response);
      }
    } catch (error) {
      setEmail("An error occurred, please try again.")
      console.log('An error occurred:', error);
    }
  }

  return (
    <>
      <div className="home">
        <div className="homeish">

          <p>Nonhuman Teachers is a registered 501(c)(3) non-profit organization based between Los Angeles and New York.</p>
          <p>We aim to promote new forms of ecological storytelling at a time when the relationship between humans and nature is under enormous pressure.</p>
          <p>For more information, please email us at <a href="mailto:info@nonhumanteachers.org">info@nonhumanteachers.org</a> or join our newsletter.</p>
          <Newsletter></Newsletter>
          <p>To support our efforts, please consider <a href="/donate">making a donation</a>.</p>
        </div>
      </div >
      <Video />
    </>
  );
}
