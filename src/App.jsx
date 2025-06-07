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

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <LastsQueries/>
      <WhySparql/>
      <About />
      <Ontologies />
      <Contact />
      <Footer />
    </>
  )
}

export default App