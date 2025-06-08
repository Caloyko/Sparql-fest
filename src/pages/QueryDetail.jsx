import { useParams } from 'react-router-dom'
import { sparqlQueries } from '../data/queries';
import React, { useEffect, useState } from 'react';
import CodeBlock from '../components/ui/CodeBlock';
import SPARQLMonaco from '../components/ui/SPARQLViewer';
import QueryBasicData from '../components/QueryBasicData';

const QueryDetail = () => {
  
    const {slug} = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
      const findDetail = sparqlQueries.filter(query => query.slug === slug);
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
        <div class="container mx-auto mt-8">
        <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-8/12 px-4 mb-8 order-2 sm:order-1 md:order-1">
                <h1 class="text-4xl font-bold mt-4 mb-2">{detail.name}</h1>
                <h2 class="text-xl font-bold mt-4 mb-2">Context</h2>
                <p class="text-neutral-400 mb-4">{detail.context}</p>
                <h2 class="text-xl font-bold mt-4 mb-2">Description</h2>
                <p class="text-neutral-400 mb-4">{detail.description}</p>
                <h2 class="text-xl font-bold mt-4 mb-2">Query</h2>
                <CodeBlock/>
            </div>
            <div class="w-full md:w-4/12 px-4 mb-8 order-1 sm:order-2 md:order-1">
                <div class="px-4 py-6 rounded">
                   <QueryBasicData data={detail}/>
                </div>
            </div>
        </div>
    </div>
      

    )
}

export default QueryDetail