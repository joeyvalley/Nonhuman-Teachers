import "../styles/style.css";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Video from "../components/Video";

export default function DonatePage() {

  return (
    <div className="main">
      <Navbar currentPage="support" />
      <Donate name="support" />
      <Video></Video>
    </div >
  );
}
