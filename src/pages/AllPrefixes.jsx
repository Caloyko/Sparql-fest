import React from 'react'
import InProgress from '../components/reusable/InProgress'
import TableList from '../components/reusable/TableList';
import { sparqlPrefixes } from '../data/all-prefixes';
import Section from '../components/reusable/Section';

const AllPrefixes = () => {
  
  return (<>
      <Section
            id="sparql-prefixes"
            title="SPARQL PREFIXES WE USE"
            description="List of all prefixes that are used in our queries."
            variant="dark"
        >
      <div className="flex -center h-screen">
            <TableList data={sparqlPrefixes} />
        </div>
    </Section>
  </>
  )
}

export default AllPrefixes