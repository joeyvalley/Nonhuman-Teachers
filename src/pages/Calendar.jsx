import "../styles/style.css";
import Navbar from "../components/Navbar";
import Events from "../components/Events";

export default function CalendarPage() {

  return (
    <div className="main">
      <Navbar currentPage="calendar" />
      <Events name="events" />
    </div >
  );
}
