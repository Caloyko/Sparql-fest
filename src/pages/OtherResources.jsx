import React from 'react'
import Section from '../components/reusable/Section'
import { allSources } from '../data/all-sources'
import TableList from '../components/reusable/TableList'

const OtherResources = () => {
  return (
    <Section
            id="resources"
            title="Other resources"
            description="List of all the resources we use or which may be interesting for learning sparql."
            variant="dark"
      >
      <div className="flex-center">
          <TableList data={allSources} />
      </div>
    </Section>
  )
}

export default OtherResources