import React from 'react'
import Section from './reusable/Section'
import { sparqlQueries } from '../data/all-queries'
import { Link } from 'react-router-dom'
import Card from './ui/Card'
import { useTheme } from '../ThemeContext'

const LastsQueries = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  
  const latestQueries = [...sparqlQueries]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3)

  return (
    <>
        <div className="h-32 bg-gradient-to-b from-transparent to-white  dark:to-stone-900 w-full"></div>
        <Section
            id="queries"
            title="LAST QUERIES"
            description="Discover our most recently updated SPARQL queries."
            variant={isDarkMode ? "dark" : "light"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {latestQueries.map((query, key) => (
              <Card key={key} data={query}  withPrefix={true}/>
            ))}
          </div>
          <div className="flex justify-end mt-10">
          <Link to="/sparql-queries" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white'>
                 View all queries 
          </Link>
        </div>
      </Section>
    </>
   
  )
}

export default LastsQueries