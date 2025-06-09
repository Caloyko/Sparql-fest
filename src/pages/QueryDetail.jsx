import { useParams } from 'react-router-dom'
import { sparqlQueries } from '../data/queries';
import React, { useEffect, useState } from 'react';
import CodeBlock from '../components/ui/CodeBlock';
import SPARQLMonaco from '../components/ui/SPARQLViewer';
import QueryBasicData from '../components/QueryBasicData';
import Section from '../components/reusable/Section';

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
    
      const headerImage = detail.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80';


    return (
        <>

        <div
            className="relative w-full h-64 bg-center bg-cover overflow-hidden flex pl-6"
            style={{ backgroundImage: `url(${headerImage})` }}
                    aria-label={`Header image for ${detail.name}`}>
                        <p class='px-4 py-6 text-xl font-bold text-neutral-300 text-opacity-80'>  <pre>
                {`PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    SELECT ?person ?name ?email WHERE {
    ?person a foaf:Person .
    ?person foaf:name ?name .
    OPTIONAL { ?person foaf:mbox ?email }
    } LIMIT 100
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    SELECT ?person ?name ?email WHERE {
    ?person a foaf:Person .
    ?person foaf:name ?name .
    OPTIONAL { ?person foaf:mbox ?email }
    } LIMIT 100`}</pre></p>
        </div>
        
        <div class="container mx-auto mt-8">
        <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-8/12 px-4">
            <Section
                id={detail.slug}
                title={detail.name}
                description={detail.date}
                variant="dark"
                bg={false}
                >
                    <h2 class="text-xl font-bold mt-4 mb-2">Context</h2>
                    <p class="text-neutral-400 mb-4">{detail.context}</p>
                    <h2 class="text-xl font-bold mt-4 mb-2">Description</h2>
                    <p class="text-neutral-400 mb-4">{detail.description}</p>
                    <h2 class="text-xl font-bold mt-4 mb-2">Query</h2>
                    <CodeBlock/>
            </Section>
               
            </div>
            <div class="w-full md:w-4/12 px-4 mb-8">
                <div class="px-4 py-6 rounded">
                   <QueryBasicData data={detail}/>
                </div>
            </div>
        </div>
    </div>
    </>
        
      

    )
}

export default QueryDetail