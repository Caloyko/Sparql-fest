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
          <div className="mb-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-white font-semibold text-lg">
                {total} quer{total !== 1 ? 'ies' : 'y'} found
              </div>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('');
                  setSelectedSource('');
                  setSelectedConcepts([]);
                  setSelectedOntologies([]);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Reset Filters
              </button>
            </div>

            {/* FILTER SECTION */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left: Filters */}
              <div className="flex flex-wrap gap-2 flex-1">
                <select className="p-2 rounded" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="">All Categories</option>
                  {allCategories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>

                <select className="p-2 rounded" value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
                  <option value="">All Sources</option>
                  {allSources.map(source => <option key={source} value={source}>{source}</option>)}
                </select>

                <select multiple className="p-2 rounded" value={selectedConcepts} onChange={(e) => setSelectedConcepts([...e.target.selectedOptions].map(o => o.value))}>
                  {allConcepts.map(concept => <option key={concept} value={concept}>{concept}</option>)}
                </select>

                <select multiple className="p-2 rounded" value={selectedOntologies} onChange={(e) => setSelectedOntologies([...e.target.selectedOptions].map(o => o.value))}>
                  {allOntologies.map(onto => <option key={onto} value={onto}>{onto}</option>)}
                </select>
              </div>
              {/* Right: Search */}
            <div className="flex-1 flex justify-end">
              <input
                type="text"
                placeholder="Search by name..."
                className="p-2 rounded w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            </div>

            <hr className="border-gray-500 my-2" />

{/* ACTIVE FILTER BADGES */}
<div className="flex flex-wrap gap-2">
    {selectedCategory && (
      <span className="bg-blue-600 text-white px-2 py-1 rounded flex items-center">
        {selectedCategory}
        <button onClick={() => setSelectedCategory('')} className="ml-2">×</button>
      </span>
    )}
    {selectedSource && (
      <span className="bg-green-600 text-white px-2 py-1 rounded flex items-center">
        {selectedSource}
        <button onClick={() => setSelectedSource('')} className="ml-2">×</button>
      </span>
    )}
    {selectedConcepts.map(concept => (
      <span key={concept} className="bg-purple-600 text-white px-2 py-1 rounded flex items-center">
        {concept}
        <button onClick={() => setSelectedConcepts(prev => prev.filter(c => c !== concept))} className="ml-2">×</button>
      </span>
    ))}
    {selectedOntologies.map(onto => (
      <span key={onto} className="bg-pink-600 text-white px-2 py-1 rounded flex items-center">
        {onto}
        <button onClick={() => setSelectedOntologies(prev => prev.filter(o => o !== onto))} className="ml-2">×</button>
      </span>
    ))}
  </div>
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