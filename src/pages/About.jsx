import "../styles/style.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Video from '../components/Video'

export default function AboutPage() {

  return (
    <div className="main">
      <Navbar currentPage="about" />
      <About name="about" />
      <Video></Video>
    </div >
  );
}
