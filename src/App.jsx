import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Donate from './pages/Donate'
// import Landing from './pages/Landing'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/donate/" element={<Donate />}></Route>
      </Routes>
    </>
  )
}