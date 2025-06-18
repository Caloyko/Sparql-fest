import React, { useEffect, useState } from 'react';
import { allSources } from '../data/all-sources';
import { useParams } from 'react-router-dom';
import Section from '../components/reusable/Section';

const ResourceDetail = () => {const {slug} = useParams();
const [detail, setDetail] = useState([]);
useEffect(() => {
  const findDetail = allSources.filter(query => query.id === slug);
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
    <img src={detail.logo} className='w-25 h-25' alt={detail.id} />
    </div>

  <Section
      id={detail.id}
      title={detail.name}
      description={detail.prefix}
      variant="dark"
      bg={false}
      >
          <h2 class="text-xl font-bold mt-4 mb-2">Description</h2>
          <p class="text-neutral-300 mb-6">Find more information at : <a href={detail.namespace} target="_blank" className="text-orange-400 hover:underline">{detail.namespace}</a></p>
          {detail?.other ? (<>
          <h2 class="text-xl font-bold mt-4 mb-2">Other Info</h2>
          <ul className="space-y-4">
            {detail.other.map((article, index) => (
                <li key={index} className="p-4 border rounded-lg shadow-md text-neutral-300">
                    <div className="font-bold mb-2">Type: <span className='bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md'>{article.type}</span></div>
                    <div className="font-bold">Name: <span className="font-normal">{article.name}</span></div>
                    <div className="font-bold">Metadata: <br></br> <span className="font-normal">{article.metadata}</span></div>
                    <div className="font-bold">Link: <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">{article.link}</a></div>
                </li>
            ))}
        </ul></>) : undefined }
         
          
  </Section>
     
  </div>
)
}

export default ResourceDetail