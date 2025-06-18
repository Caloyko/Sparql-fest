import React, { useState, useMemo } from 'react'
import { sparqlQueries } from '../data/all-queries'
import Section from '../components/reusable/Section'
import Card from '../components/ui/Card'

const AllQueries = () => {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedConcepts, setSelectedConcepts] = useState([]);
  const [selectedOntologies, setSelectedOntologies] = useState([]);

  const allLevels = [...new Set(sparqlQueries.map(q => q.level))];
  const allSources = [...new Set(sparqlQueries.map(q => q.source).filter(Boolean))];
  const allConcepts = [...new Set(sparqlQueries.flatMap(q => q.sparqlConcepts))];
  const allOntologies = [...new Set(sparqlQueries.flatMap(q => q.ontologies))];


  const filteredQueries = useMemo(() => {
    return sparqlQueries.filter(query => {
      const matchesSearch = 
        typeof query.name === 'string' &&
        typeof search === 'string' &&
        query.name.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = selectedLevel ? query.level === selectedLevel : true;
      const matchesSource = selectedSource ? query.source === selectedSource : true;
      const matchesConcepts = selectedConcepts.length > 0
        ? selectedConcepts.every(concept => query.sparqlConcepts.includes(concept))
        : true;
      const matchesOntologies = selectedOntologies.length > 0
        ? selectedOntologies.every(onto => query.ontologies.includes(onto))
        : true;

      return matchesSearch && matchesLevel && matchesSource && matchesConcepts && matchesOntologies;
    });
  }, [search, selectedLevel, selectedSource, selectedConcepts, selectedOntologies]);

  return (
    <div>
      <Section
            id="all-queries"
            title="ALL SPARQL QUERIES"
            description="Discover all our SPARQL queries."
            variant="dark"
            bg={true}
        >
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="p-2 rounded" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            <option value="">All Levels</option>
            {allLevels.map(level => <option key={level} value={level}>{level}</option>)}
          </select>

          <select className="p-2 rounded" value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
            <option value="">All Sources</option>
            {allSources.map(source => <option key={source} value={source}>{source}</option>)}
          </select>

          <select multiple className="p-2 rounded" onChange={(e) => setSelectedConcepts([...e.target.selectedOptions].map(o => o.value))}>
            {allConcepts.map(concept => <option key={concept} value={concept}>{concept}</option>)}
          </select>

          <select multiple className="p-2 rounded" onChange={(e) => setSelectedOntologies([...e.target.selectedOptions].map(o => o.value))}>
            {allOntologies.map(onto => <option key={onto} value={onto}>{onto}</option>)}
          </select>

          
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredQueries.map((product,key) => 
          <Card key={key}  data={product}/>)}
      </div>
      </Section>
    </div>
  )
}

export default AllQueries