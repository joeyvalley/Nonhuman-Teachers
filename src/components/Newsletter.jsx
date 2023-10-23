import { useState } from "react";
import axios from "axios";
import "../styles/newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const enteredEmail = e.target.EMAIL.value; // Get email value from the form
    try {
      const { status, data } = await axios.post('/api/subscribe', { email: enteredEmail });
      console.log(status);
      if (status === 200) {
        if (data.message === "subscribed") {
          setEmail("Thanks for subscribing! Talk soon.");
        } else {
          setEmail("You are already subscribed to this newsletter. Thanks!");
        }
      } else {
        setEmail("Whoops, an error occurred. Try again later.");
      }
    } catch (error) {
      setEmail("Whoops, an error occurred. Try again later.");
    }
  }

  return (
    <div className="newsletter">
      <form onSubmit={handleSubmit}>
        <input type="email" name="EMAIL" className="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="submit" value="Subscribe" className="subscribe" />
      </form>
    </div>
  );
}
