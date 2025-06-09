import React from 'react'
import Section from './reusable/Section'
import { features } from '../constants'

const WhySparql = () => {
  return (
    <Section
        id="why-sparql"
        title="WHY LEARN SPARQL"
        description="Unlock the power of querying linked data efficiently."
        variant="dark"
    >
    <div className="flex flex-wrap mt-10 lg:mt-20">
    {features.map((feature, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
            <div className="flex mx-6 h-12 w-12 bg-neutral-800 text-orange-700 justify-center items-center rounded-full aspect-square">
            {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
            </div>

            <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md mb-20 text-neutral-500 w-full text-justify">
                {feature.description}
                </p>
            </div>
            </div>
        </div>
        ))}
    </div>
    </Section>
  )
}

export default WhySparql