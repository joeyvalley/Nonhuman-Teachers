import "./styles/style.css";

import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './components/About'
import Events from './components/Events'
import Contact from './components/Contact'
import Donate from './components/Donate'
import DonationPage from './components/DonationForm'
import Projects from './components/Projects'
// Import sub-pages
import BotanicalSpacesPage from './pages/projects/BotanicalSpaces'
import EventsPage from './pages/projects/Events'
import FuturePage from './pages/projects/Future'
import GroupsPage from './pages/projects/Groups'
import MediaPage from './pages/projects/Media'
import TripReport from './components/TripReport'
//Import top-level components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

export default function App() {
  return (

    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* Main Pages */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/calendar" element={<Events />}></Route>
        <Route path="/support" element={<Donate />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/donate" element={<DonationPage />}></Route>

        {/* Sub-Pages */}
        <Route path="/projects/groups-and-workshops" element={<GroupsPage />}></Route>
        <Route path="/projects/programming-and-events" element={<EventsPage />}></Route>
        <Route path="/projects/the-future" element={<FuturePage />}></Route>
        <Route path="/projects/botanical-spaces" element={<BotanicalSpacesPage />}></Route>
        <Route path="/projects/media" element={<MediaPage />}></Route>
        <Route path="/projects/trip-report" element={<TripReport />}></Route>
      </Routes>
      <Video></Video>
      <Footer></Footer>
    </div>

  )
}