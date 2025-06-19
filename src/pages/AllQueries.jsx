import React, { useState, useMemo, useEffect } from 'react'
import { sparqlQueries } from '../data/all-queries'
import Section from '../components/reusable/Section'
import Card from '../components/ui/Card'

const AllQueries = () => {
  const [visibleCount, setVisibleCount] = useState(20);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedConcepts, setSelectedConcepts] = useState([]);
  const [selectedOntologies, setSelectedOntologies] = useState([]);
  const [total, setTotal] = useState(0);
  

  const allCategories = [...new Set(sparqlQueries.map(q => q.category))];
  const allSources = [...new Set(sparqlQueries.map(q => q.source).filter(Boolean))];
  const allConcepts = [...new Set(sparqlQueries.flatMap(q => q.sparqlConcepts))];
  const allOntologies = [...new Set(sparqlQueries.flatMap(q => q.ontologies))];


  useEffect(() => {
    setVisibleCount(20);
  }, [search, selectedCategory, selectedSource, selectedConcepts, selectedOntologies]);
  
  const filteredQueries = useMemo(() => {
    return sparqlQueries.filter(query => {
      const matchesSearch = 
        typeof query.name === 'string' &&
        typeof search === 'string' &&
        query.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? query.category === selectedCategory : true;
      const matchesSource = selectedSource ? query.source === selectedSource : true;
      const matchesConcepts = selectedConcepts.length > 0
        ? selectedConcepts.every(concept => query.sparqlConcepts.includes(concept))
        : true;
      const matchesOntologies = selectedOntologies.length > 0
        ? selectedOntologies.every(onto => query.ontologies.includes(onto))
        : true;

      return matchesSearch && matchesCategory && matchesSource && matchesConcepts && matchesOntologies;
    });
  }, [search, selectedCategory, selectedSource, selectedConcepts, selectedOntologies]);

  useEffect(() => {
    setTotal(filteredQueries.length);
  }, [filteredQueries]);

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
          <div className="mb-4 text-white font-semibold text-lg">
            {total} quer{total !== 1 ? 'ies' : 'y'} found
          </div>
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="p-2 rounded" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categoires</option>
            {allCategories.map(category => <option key={category} value={category}>{category}</option>)}
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
      {filteredQueries.slice(0, visibleCount).map((product, key) => (
        <Card key={key} data={product} />
      ))}
      </div>
      {visibleCount < filteredQueries.length && (
       <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 20)}
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
          >
            Load More
          </button>
        </div>
      )}
      </Section>
    </div>
  )
}

export default AllQueries