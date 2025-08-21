import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sparqlPrefixes } from '../data/all-prefixes';
import Section from '../components/reusable/Section';
import { useTheme } from '../ThemeContext';



const PrefixDetail = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = sparqlPrefixes.filter(query => query.prefix === slug);
    if (findDetail.length > 0){
      setDetail(findDetail[0]);
    }else{
      window.location.href = '/';
    }
  }, [slug])

  if (!detail) {
      return <div className="text-center py-10">Loading or not found...</div>;
    }

  return (
    <div class="w-full px-4">
      <div className='flex flex-col items-center mt-20'>
      <img src={detail.logo} className='w-25 h-25' alt={detail.prefix} />
      </div>

    <Section
        id={detail.prefix}
        title={detail.name}
        description={detail.prefix}
        variant={isDarkMode ? "dark" : "light"}
        bg={false}
        >
            <h2 class="text-xl font-bold mt-4 mb-2">Description</h2>
            <p class="dark:text-neutral-300 mb-6">{detail.description}</p>
            <p class="dark:text-neutral-400 mb-6">{detail.version}</p>
            <p class="dark:text-neutral-400 mb-6">{detail.category}</p>
            <h2 class="text-xl font-bold mt-4 mb-2">documentation</h2>
            <p class="dark:text-neutral-300 mb-6">{detail.documentation}</p>
            <h2 class="text-md font-bold mt-4 mb-2">download</h2>
            <p class="dark:text-neutral-300 mb-6">{detail.download}</p>
            <h2 class="text-md font-bold mt-4 mb-2">version</h2>
            <p class="dark:text-neutral-300 mb-6">{detail.version}</p>
            
    </Section>
       
    </div>
  )
}

export default PrefixDetail