import "../styles/style.css";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {

  return (
    <>
      <Navbar />
      {/* <div className="home">
        <img src="/assets/nht-logo.png" alt="Logo" />
      </div > */}
      <Video />
      <Footer></Footer>
    </>
  );
}