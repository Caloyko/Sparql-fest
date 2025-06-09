import React from 'react'
import { sparqlQueries } from '../data/queries'
import Section from '../components/reusable/Section'
import Card from '../components/ui/Card'

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {sparqlQueries.map((product,key) => 
          <Card key={key}  data={product}/>)}
      </div>
      </Section>
    </div>
  )
}

export default AllQueries