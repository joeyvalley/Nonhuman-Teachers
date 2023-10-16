import "../styles/style.css";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects"
import Video from "../components/Video";

export default function ProjectsPage() {

  return (
    <div className="main">
      <Navbar currentPage="projects" />
      <Projects name="projects" />
      <Video />
    </div >
  );
}
