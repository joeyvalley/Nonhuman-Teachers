import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import CalendarPage from './pages/Calendar'
import ContactPage from './pages/Contact'
import DonatePage from './pages/Donate'
import DonationPage from './components/DonationForm'
import ProjectsPage from './pages/Projects'

import EventsPage from './pages/projects/Events'
import BotanicalSpacesPage from './pages/projects/BotanicalSpaces'
import MediaPage from './pages/projects/Media'
import FuturePage from './pages/projects/Future'
import GroupsPage from './pages/projects/Groups'

// import DonationForm from "./components/DonationForm"

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* Main Pages */}
      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route path="/calendar" element={<CalendarPage />}></Route>
      <Route path="/support/" element={<DonatePage />}></Route>
      <Route path="/donate/" element={<DonationPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact/" element={<ContactPage />}></Route>
      {/* Sub-Pages */}
      <Route path="/projects/groups-and-workshops" element={<GroupsPage />}></Route>
      <Route path="/projects/programming-and-events" element={<EventsPage />}></Route>
      <Route path="/projects/the-future" element={<FuturePage />}></Route>
      <Route path="/projects/botanical-spaces" element={<BotanicalSpacesPage />}></Route>
      <Route path="/projects/media" element={<MediaPage />}></Route>
      {/* Alternate Pages */}
      {/* <Route path="/donations" element={<DonationForm />}></Route> */}
    </Routes>
  )
}