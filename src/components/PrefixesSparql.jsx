import React from 'react'
import imgPrefix from "../assets/images/PrefixeSparql.png"
import { Link } from 'react-router-dom'


const PrefixesSparql = () => {
  return (
    <>
        
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg px-12 gap-6 py-20">
    <div className="w-full md:w-1/2 px-10">
        <img
          src={imgPrefix}
          alt="SPARQL prefixes"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 mx-16 text-left space-y-4">
        <p className="text-sm text-orange-600 uppercase tracking-wide">
          What are prefixes?
        </p>

        <h2 className="text-2xl font-bold text-gray-800">
          Understand SPARQL Prefixes
        </h2>

        <p className="text-gray-600 text-base">
          SPARQL prefixes are shortcuts for long URIs, helping you write clearer,
          more readable queries. They reference vocabularies like RDF, OWL,
          schema.org, and biomedical ontologies like OBO or ORDO.
        </p>

        <Link
          to="/prefixes"
          className="inline-block mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-800  text-white font-medium hover:shadow-xl"
        >
          Explore all prefixes that we use →
        </Link>
      </div>
    </div>
    </>
  )
}

export default PrefixesSparql