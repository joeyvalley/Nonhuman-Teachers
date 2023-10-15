import "../styles/style.css";
import { Link } from "react-router-dom";
import Video from "../components/Video";


export default function Home() {

  return (
    <>
      <div className="home">
        <Link to="/about">
          <img src="/assets/nht-logo.png" alt="Logo" onClick={() => { console.log("hi bitch") }} />
        </Link>
      </div >
      <Video />
    </>
  );
}