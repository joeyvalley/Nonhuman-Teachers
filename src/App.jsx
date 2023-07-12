import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import CalendarPage from './pages/Calendar'
import ContactPage from './pages/Contact'
import DonatePage from './pages/Donate'

import EventsPage from './pages/projects/Events'
import EarthwormsPage from './pages/projects/Earthworms'
import PlantOrphansPage from './pages/projects/PlantOrphans'
import TravelPage from './pages/projects/Travel'
import LESCSSPage from './pages/projects/LESCSS'
import FuturePage from './pages/projects/Future'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* Main Pages */}
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/donate/" element={<DonatePage />}></Route>
        <Route path="/contact/" element={<ContactPage />}></Route>
        {/* Sub-Pages */}
        <Route path="/projects/earthworms" element={<EarthwormsPage />}></Route>
        <Route path="/projects/events" element={<EventsPage />}></Route>
        <Route path="/projects/the-future" element={<FuturePage />}></Route>
        <Route path="/projects/lescss" element={<LESCSSPage />}></Route>
        <Route path="/projects/plant-orphans" element={<PlantOrphansPage />}></Route>
        <Route path="/projects/travel" element={<TravelPage />}></Route>
      </Routes>
    </>
  )
}