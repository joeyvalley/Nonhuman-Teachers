import "../styles/style.css";
import Navbar from "../components/Navbar";
import About from "../components/About";

export default function AboutPage() {

  return (
    <div className="main">
      <Navbar currentPage="about" />
      <About name="about" />
    </div >
  );
}
