import About from "../components/About"
import Contact from "../components/Contact"
import Donate from "../components/Donate"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"

export default function Sections() {
  return (
    <div className="main">
      <Navbar />
      <About />
      <Projects />
      <Donate />
      <Contact />
    </div>
  );
}