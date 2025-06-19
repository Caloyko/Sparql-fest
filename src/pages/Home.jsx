import { useEffect } from 'react';
import HeroSection from '../components/HeroSection'
import LastsQueries from '../components/LastsQueries'
import WhySparql from '../components/WhySparql'
import About from '../components/About'
import PrefixesSparql from '../components/PrefixesSparql'
import Contact from '../components/Contact'
import { useLocation } from 'react-router-dom';



const Home = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        const id = location.hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 0);
  }, [location]);

  return (
    <div>
      <HeroSection />
      <LastsQueries />
      <About />
      <WhySparql />
      <PrefixesSparql />
      <Contact />
      {/** TODO: add next event section */}
    </div>
  )
}

export default Home