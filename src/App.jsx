import "./styles/style.css";

import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import Admin from "./pages/Admin";
// Import components
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Support from './components/Support'
import DonationPage from './components/DonationForm'
import Projects from './components/Projects'
import TripReport from './components/TripReport'
//Import top-level components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
//Import video array
import videoList from "./api/videoList";

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
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/donate" element={<DonationPage />}></Route>
        <Route path="/projects/trip-report" element={<TripReport />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <Video videoInfo={selectedVideo}></Video>
      <Footer></Footer>
    </div>
  )
}