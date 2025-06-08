import React from 'react'
import QueryCard from '../components/QueryCard'
import { sparqlQueries } from '../data/queries'
import Section from '../components/reusable/Section'

const AllQueries = () => {
  return (
    <div>
      <Section
            id="all-queries"
            title="ALL SPARQL QUERIES"
            description="Discover all our SPARQL queries."
            variant="dark"
            bg={true}
        >
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {sparqlQueries.map((product,key) => 
          <QueryCard key={key}  data={product}/>)}
      </div>
      </Section>
    </div>
  )
}

export default AllQueries