import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Donate from './pages/Donate'
// import Landing from './pages/Landing'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donate/" element={<Donate />}></Route>
      </Routes>
    </>
  )
}