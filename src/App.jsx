import { Routes, Route } from 'react-router-dom'
import Sayt from './pages/Sayt'
import Admin from './pages/Admin'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sayt />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default App
