import React from 'react'
import Section from './reusable/Section'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/images/SPARQL-ex.png"
import { checklistItems } from "../constants";

const About = () => {
  return (
    <>
        <Section
            id="about"
            title="ABOUT SPARQL FEST"
            description="A community gathering to explore, learn, and create with SPARQL."
            variant="light"
        >
          <p className='text-neutral-900 mb-4'><span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>SPARQL Fest</span> is a collaborative platform that brings together the community to learn, share, and explore SPARQL.
          It curates real SPARQL queries from people, organizations, and events to make the language easier to understand and apply.</p>
          
        <div className="flex flex-wrap justify-center items-stretch">
            <div className="relative p-2 w-full lg:w-1/2 flex items-center justify-center mb-24">
              <img
                src={codeImg}
                alt="Coding"
                className="absolute top-1/6  left-1/6 rounded-lg border-2 border-orange-300"
              />      
              <img
                src={codeImg}
                alt="Coding"
                className="absolute top-1/10  left-1/5 rounded-lg border-2 border-orange-300"
              />  
               <img
                src={codeImg}
                alt="Coding"
                className="relative z-10 rounded-lg border-2 border-orange-300"
              />
            </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-100 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        </Section>
    </>
  )
}

export default About