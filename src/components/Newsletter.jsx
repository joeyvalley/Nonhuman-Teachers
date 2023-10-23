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
      console.log(response.status);

      if (response.status === 200) {
        setEmail("Thank you for subscribing!")
      } else {
        setEmail("An error occurred, please try again.")
        console.log('An error occurred:', response);
      }
    } catch (error) {
      if (error.status === 400) {
        console.log(error.response.data.title);
      }
    }
  }

  return (
    <div className="newsletter">
      <form onSubmit={handleSubmit}>
        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="submit" value="Subscribe" className="subscribe" />
      </form>
    </div>
  )
}