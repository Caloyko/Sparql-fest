import React, { useEffect, useState } from 'react';
import InProgress from '../components/reusable/InProgress'
import { useParams } from 'react-router-dom';
import { sparqlPrefixes } from '../data/all-prefixes';
import Section from '../components/reusable/Section';



const PrefixDetail = () => {
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = sparqlPrefixes.filter(query => query.prefix === slug);
    console.log(findDetail)
    if (findDetail.length > 0){
      setDetail(findDetail[0]);
    }else{
      window.location.href = '/';
    }
  }, [slug])

  if (!detail) {
      return <div className="text-center py-10">Loading or not found...</div>;
    }
  console.log(slug)

  return (
    <div class="w-full px-4">
      <div className='flex flex-col items-center mt-20'>
      <img src={detail.logo} className='w-25 h-25' alt={detail.prefix} />
      </div>

    <Section
        id={detail.prefix}
        title={detail.name}
        description={detail.prefix}
        variant="dark"
        bg={false}
        >
            <h2 class="text-xl font-bold mt-4 mb-2">Description</h2>
            <p class="text-neutral-300 mb-6">{detail.description}</p>
            <p class="text-neutral-400 mb-6">{detail.version}</p>
            <p class="text-neutral-400 mb-6">{detail.category}</p>
            <h2 class="text-xl font-bold mt-4 mb-2">documentation</h2>
            <p class="text-neutral-300 mb-6">{detail.documentation}</p>
            <h2 class="text-md font-bold mt-4 mb-2">download</h2>
            <p class="text-neutral-300 mb-6">{detail.download}</p>
            <h2 class="text-md font-bold mt-4 mb-2">version</h2>
            <p class="text-neutral-300 mb-6">{detail.version}</p>
            
    </Section>
       
    </div>
  )
}

export default PrefixDetail