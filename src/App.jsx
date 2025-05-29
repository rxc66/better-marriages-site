import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import MegPage from './components/MegPage'
import GetawayPage from './components/GetawayPage'
import ContactPage from './components/ContactPage'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const HomePage = () => (
    <>
      <Hero />
      <About />
      <Events />
      <Testimonials />
    </>
  )

  return (
    <Router>
      <div className="app">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meg" element={<MegPage />} />
            <Route path="/getaway" element={<GetawayPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
