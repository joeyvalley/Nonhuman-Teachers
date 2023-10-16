import "../styles/style.css";
import Navbar from "../components/Navbar";
import Events from "../components/Events";
import Video from "../components/Video";

export default function CalendarPage() {

  return (
    <div className="main">
      <Navbar currentPage="calendar" />
      <Events name="events" />
      <Video></Video>
    </div >
  );
}
