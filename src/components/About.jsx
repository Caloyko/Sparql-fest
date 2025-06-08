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
          
        <div className="flex flex-wrap justify-center items-stretch">
            <div className="relative p-2 w-full lg:w-1/2 h-full ">
              <img
                src={codeImg}
                alt="Coding"
                className="absolute top-16 left-16 rounded-lg border-2 border-orange-300"
              />      
              <img
                src={codeImg}
                alt="Coding"
                className="absolute top-6 left-6   h-full rounded-lg border-2 border-orange-300"
              />  
               <img
                src={codeImg}
                alt="Coding"
                className="relative z-10 rounded-lg   h-full border-2 border-orange-300"
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