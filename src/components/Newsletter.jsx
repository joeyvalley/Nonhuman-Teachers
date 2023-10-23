import { useState } from "react";
// import axios from 'axios';
import "../styles/newsletter.css"
import signUp from "../api/subscribe";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.EMAIL.value; // Get email value from the form
    const res = await signUp(email);

    if (res === "subscribed") {
      setEmail("Thanks for subscribing! Talk soon : )");
    } else if (res === "exists") {
      setEmail("You are already subscribed! Thanks tho : )")
    }
    else {
      setEmail("Sorry, there was an error. Please try again!")
    }
    setTimeout(() => {
      setEmail("E-mail")
    }, 5000);
  }

  return (
    <div className="newsletter">
      <form onSubmit={handleSubmit}>
        <input type="email" name="EMAIL" className="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="submit" value="Subscribe" className="subscribe" />
      </form>
    </div>
  )
}