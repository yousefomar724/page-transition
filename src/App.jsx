import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()
  return (
    <div className='bg-[#c6d5c6] h-screen'>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
