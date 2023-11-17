import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import Admin from "./pages/Admin";
import About from './pages/About'
import Contact from './pages/Contact'
import Support from './pages/Support'
import DonationPage from './pages/DonationForm'
import Projects from './pages/Projects'
import TripReport from './pages/TripReport'
//Import top-level components
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import MobileFooter from "./components/MobileFooter";
//Import video array
import videoList from "./api/videoList";
//Import CSS
import "./styles/style.css";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  function randomVideo() {
    return videoList[Math.floor(Math.random() * videoList.length)];
  }

  const handleVideoChange = () => {
    setSelectedVideo(randomVideo());
  };

  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onLogoClick={handleVideoChange} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/donate" element={<DonationPage />}></Route>
        <Route path="/human-encounters" element={<TripReport />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <Video videoInfo={selectedVideo}></Video>
      <MobileFooter></MobileFooter>
    </div>
  )
}