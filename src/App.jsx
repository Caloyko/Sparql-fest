import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Contact from './components/Contact'
import LastsQueries from './components/LastsQueries'
import WhySparql from './components/WhySparql'
import About from './components/About'
import Ontologies from './components/Ontologies'
import Metrics from './components/Metrics'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllQueries from './pages/AllQueries'

const App = () => {
  return (
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sparql-queries" element={<AllQueries/>}/>
            </Routes>
            <Footer />
      </BrowserRouter>
  )
}

export default App