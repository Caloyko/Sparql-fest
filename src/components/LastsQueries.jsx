import React from 'react'
import Section from './reusable/Section'
import { sparqlQueries } from '../data/queries'
import QueryCard from './QueryCard'
import { Link } from 'react-router-dom'

const LastsQueries = () => {
  const latestQueries = [...sparqlQueries]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3)

  return (
    <>
        <div className="h-32 bg-gradient-to-b from-transparent to-stone-900 w-full"></div>
        <Section
            id="queries"
            title="LAST QUERIES"
            description="Discover our most recently updated SPARQL queries."
            variant="dark"
        >
         <div className="px-[10vw]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {latestQueries.map((query, key) => (
              <QueryCard key={key} data={query}  withPrefix={true}/>
            ))}
          </div>
          <div className="flex justify-end mt-10">
          <Link to="/sparql-queries" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                 View all queries 
          </Link>
        </div>
        </div>
      </Section>
    </>
   
  )
}

export default LastsQueries