import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import CalendarPage from './pages/Calendar'
import ContactPage from './pages/Contact'
import DonatePage from './pages/Donate'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/donate/" element={<DonatePage />}></Route>
        <Route path="/contact/" element={<ContactPage />}></Route>
      </Routes>
    </>
  )
}