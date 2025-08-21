import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const QueryBasicData = ({data}) => {
    const { isDarkMode, setIsDarkMode } = useTheme();
    
    const { category, date, ontologies, sparqlConcepts } = data;

  return (
    <div>
    <ul
        class="mt-8 mx-auto max-w-xs text-left font-medium text-lg leading-none">
            
        
        <li>
            <p class="py-3.5 w-full flex items-center text-orange-800 dark:text-orange-100 border-b border-neutral-500 pb-2">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-orange-700 rounded-r-md"></span>
                SPARQL Prefixes used
            </p>
            <div className="py-4 px-2 pb-6 text-right">
                {(ontologies || []).map((tag, index) => (
                <Link
                    key={index}
                    to={`/sparql-prefixes/${tag}`}
                    className="inline-block bg-stone-300 rounded-full px-3 py-1 text-sm font-semibold text-orange-950 mr-2 mb-2"
                >
                    {tag}
                </Link>
                ))}
            </div>
        </li>

        
        <li>
            <p class="py-3.5 w-full flex items-center text-orange-800 dark:text-orange-100 border-b border-neutral-500 pb-2">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-orange-700 rounded-r-md"></span>
                Category
            </p>
            <div className="py-4 px-2 pb-6 text-right">
                <span
                    className="inline-block bg-orange-800 rounded-full px-3 py-1 text-sm font-semibold text-orange-100 mr-2 mb-2"
                >
                    {category}
                </span>
            </div>
        </li>
        <li>
            <p class="py-3.5 w-full flex items-center text-orange-800 dark:text-orange-100 border-b border-neutral-500 pb-2">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-orange-700 rounded-r-md"></span>
                SPARQL Concepts
            </p>
            <div className="py-4 px-2 pb-6 text-right">
                {(sparqlConcepts|| []).map((tag, index) => (
                <span
                    key={index}
                    className="inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-orange-950 mr-2 mb-2"
                >
                    {tag}
                </span>
                ))}
            </div>
        </li>

    </ul>
    </div>
  )
}

export default QueryBasicData