import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Health from './pages/Health'
import Education from './pages/Education'
import Environment from './pages/Environment'
import Science from './pages/Science'
import Culture from './pages/Culture'
import Travel from './pages/Travel'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/teknologi" element={<Technology />} />
        <Route path="/kesehatan" element={<Health />} />
        <Route path="/pendidikan" element={<Education />} />
        <Route path="/lingkungan" element={<Environment />} />
        <Route path="/sains" element={<Science />} />
        <Route path="/budaya" element={<Culture />} />
        <Route path="/wisata" element={<Travel />} />
        <Route path="/kontak" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
