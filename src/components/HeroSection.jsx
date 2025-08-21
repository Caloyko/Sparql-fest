import React from 'react'
import ParticlesComponent from './Particles'
import { Link } from 'react-router-dom'

const HeroSection = () => {

        return (
            <div className="flex flex-col items-center mt-24 my-12 lg:mt-32">
                <div className="absolute inset-0 z-[-1]">
                    <ParticlesComponent id="particles" />
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
                    {" "}Learn SPARQL 
                    </span>
                    {" "}by example <br></br>with SPARQL Fest
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-600 dark:text-neutral-400 max-w-4xl">
                    Join a collaborative project around the Semantic Web.<br></br>
                    SPARQL Fest centralises SPARQL queries shared by the community to make it easier to learn by example, make the most of everyone's contributions and develop your skills, one query at a time.
                </p>
                <div className="flex-justify-center my-10">
            <Link to="/sparql-queries" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white'>
                 See all queries
            </Link>
            <a href="#about" className='py-3 px-4 mx-3 rounded-md border'>
                More about us
            </a>
          </div>
            </div>
          )

}

export default HeroSection