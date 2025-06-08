import React from 'react'
import HeroSection from '../components/HeroSection'
import LastsQueries from '../components/LastsQueries'
import WhySparql from '../components/WhySparql'
import About from '../components/About'
import Ontologies from '../components/Ontologies'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <LastsQueries />
      <WhySparql />
      <About />
      <Ontologies />
      <Contact />
    </div>
  )
}

export default Home