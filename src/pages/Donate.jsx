import "../styles/style.css";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";

export default function DonatePage() {

  return (
    <div className="main">
      <Navbar currentPage="donate" />
      <Donate name="donate" />
    </div >
  );
}
