import { useState } from "react";
import axios from 'axios';
import "../styles/newsletter.css"

export default function Newsletter() {
  const [email, setEmail] = useState();

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
    <div className="newsletter">
      <form onSubmit={handleSubmit}>
        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter email to join newsletter." value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="submit" value="Subscribe" className="subscribe" />
      </form>
    </div>
  )
}