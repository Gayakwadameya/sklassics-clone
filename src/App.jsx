
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AIProjects from './pages/AIProjects'
import OurWorks from './pages/OurWorks'
import WebDesigns from './pages/WebDesigns'
import Tutor from './pages/Tutor'
import Workshop from './pages/Workshop'
import LMS from './pages/LMS'
import Wedding from './pages/Wedding'
import Profiles from './pages/Profiles';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-projects" element={<AIProjects />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/web-designs" element={<WebDesigns />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
