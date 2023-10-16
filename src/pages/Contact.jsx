import "../styles/style.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Video from "../components/Video";

export default function ContactPage() {

  return (
    <div className="main">
      <Navbar currentPage="contact" />
      <Contact name="contact" />
      <Video />
    </div >
  );
}
