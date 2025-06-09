import React from 'react'
import HeroSection from '../components/HeroSection'
import LastsQueries from '../components/LastsQueries'
import WhySparql from '../components/WhySparql'
import About from '../components/About'
import PrefixesSparql from '../components/PrefixesSparql'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <LastsQueries />
      <About />
      <WhySparql />
      <PrefixesSparql />
      <Contact />
    </div>
  )
}

export default Home