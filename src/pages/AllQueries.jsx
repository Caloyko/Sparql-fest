import React, { useState, useMemo, useEffect } from 'react'
import { sparqlQueries } from '../data/all-queries'
import Section from '../components/reusable/Section'
import Card from '../components/ui/Card'
import MultiSelectDropdown from '../components/reusable/MultiSelectDropDown'
import { FiSearch } from 'react-icons/fi';

const AllQueries = () => {
  const [visibleCount, setVisibleCount] = useState(20);

  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSource, setSelectedSource] = useState([]);
  const [selectedConcepts, setSelectedConcepts] = useState([]);
  const [selectedOntologies, setSelectedOntologies] = useState([]);
  const [total, setTotal] = useState(0);
  

  const allCategories = [...new Set(sparqlQueries.map(q => q.category).filter(Boolean))];
  const allSources = [...new Set(sparqlQueries.map(q => q.source).filter(Boolean))];
  const allConcepts = [...new Set(sparqlQueries.flatMap(q => q.sparqlConcepts))];
  const allOntologies = [...new Set(sparqlQueries.flatMap(q => q.ontologies))];


  useEffect(() => {
    setVisibleCount(20);
  }, [search, selectedCategories, selectedSource, selectedConcepts, selectedOntologies]);
  
  const filteredQueries = useMemo(() => {
    return sparqlQueries.filter(query => {
      const matchesSearch = 
        typeof query.name === 'string' &&
        typeof search === 'string' &&
        query.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategories = selectedCategories.length > 0 
        ? selectedCategories.includes(query.category)
        : true;
      const matchesSource = selectedSource.length > 0
        ? selectedSource.includes(query.source)
        : true;
      console.log(selectedSource)
      const matchesConcepts = selectedConcepts.length > 0
        ? selectedConcepts.every(concept => query.sparqlConcepts.includes(concept))
        : true;
      const matchesOntologies = selectedOntologies.length > 0
        ? selectedOntologies.every(onto => query.ontologies.includes(onto))
        : true;

      return matchesSearch && matchesCategories && matchesSource && matchesConcepts && matchesOntologies;
    });
  }, [search, selectedCategories, selectedSource, selectedConcepts, selectedOntologies]);

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
            {/* ACTIVE FILTER BADGES */}
<div className="flex flex-wrap gap-2">
    {selectedCategories.map(categorie => (
        <span key={categorie} className="bg-lime-600 text-white px-2 py-1 rounded flex items-center">
          {categorie}
          <button
            onClick={() => setSelectedCategories(prev => prev.filter(c => c !== categorie))}
            className="ml-2"
          >
            ×
          </button>
        </span>
      ))}
    {selectedSource.map(source => (
    <span key={source} className="bg-teal-600 text-white px-2 py-1 rounded flex items-center">
      {source}
      <button
        onClick={() => setSelectedSource(prev => prev.filter(s => s !== source))}
        className="ml-2"
      >
        ×
      </button>
    </span>
  ))}
    {selectedConcepts.map(concept => (
      <span key={concept} className="bg-purple-600 text-white px-2 py-1 rounded flex items-center">
        {concept}
        <button onClick={() => setSelectedConcepts(prev => prev.filter(c => c !== concept))} className="ml-2">×</button>
      </span>
    ))}
    {selectedOntologies.map(onto => (
      <span key={onto} className="bg-pink-800 text-white px-2 py-1 rounded flex items-center">
        {onto}
        <button onClick={() => setSelectedOntologies(prev => prev.filter(o => o !== onto))} className="ml-2">×</button>
      </span>
    ))}
  </div>

            {/* FILTER SECTION */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full">
              {/* Left: Filters */}
              <div className="flex flex-wrap gap-2 w-full">
                <MultiSelectDropdown
                    options={allCategories}
                    selectedOptions={selectedCategories}
                    onChange={setSelectedCategories}
                    placeholder="All categories"
                  />

                <MultiSelectDropdown
                  options={allSources}
                  selectedOptions={selectedSource}
                  onChange={setSelectedSource}
                  placeholder="All Sources"
                />

                <MultiSelectDropdown
                  options={allConcepts}
                  selectedOptions={selectedConcepts}
                  onChange={setSelectedConcepts}
                  placeholder="Select concepts"
                />

                <MultiSelectDropdown
                  options={allOntologies}
                  selectedOptions={selectedOntologies}
                  onChange={setSelectedOntologies}
                  placeholder="Select prefix"
                />
              </div>
              {/* Right: Search */}
              <div className="w-full sm:w-1/3 flex justify-end items-start sm:items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className=" border border-neutral-500  placeholder-neutral-400 px-4 pr-10 py-2 rounded-full w-50 focus:w-64 transition-all duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500/70 pointer-events-none" />
                </div>
              </div>
            </div>

            <hr className="border-gray-500 my-2" />
            <div className="flex justify-between items-center">
              <div className="text-white font-semibold text-lg">
                {total} quer{total !== 1 ? 'ies' : 'y'} found
              </div>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategories([]);
                  setSelectedSource([]);
                  setSelectedConcepts([]);
                  setSelectedOntologies([]);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded"
              >
                Reset Filters
              </button>
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