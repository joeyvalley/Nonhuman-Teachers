import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App;