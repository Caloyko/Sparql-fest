import { useParams } from 'react-router-dom'
import { sparqlQueries } from '../data/queries';
import React, { useEffect, useState } from 'react';
import CodeBlock from '../components/ui/CodeBlock';
import QueryBasicData from '../components/QueryBasicData';
import Section from '../components/reusable/Section';
import { TbBulb } from 'react-icons/tb';

const QueryDetail = () => {
    const [hintIsOpen, setHintIsOpen] = useState(false);

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
                        <p class='px-4 py-6 text-xl font-bold text-neutral-300/30 text-opacity-80'>  <pre>
                {detail.query}</pre></p>
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
                    <p class="text-neutral-300 mb-6">{detail.context}</p>
                    <h2 class="text-xl font-bold mt-4 mb-2">Description</h2>
                    <p class="text-neutral-300 mb-6">{detail.description}</p>
                    <h2
                        className="flex items-center cursor-pointer select-none text-xl font-semibold mb-3"
                        onClick={() => setHintIsOpen(!hintIsOpen)}
                    > 
                    <TbBulb className="text-yellow-500 mr-2" size={24} />
                    Hints 
                    <button
                        aria-label={hintIsOpen ? "Hide hints" : "Show hints"}
                        className="ml-auto text-sm text-stone-200 hover:text-orange-è00"
                        onClick={(e) => {
                            e.stopPropagation();
                            setHintIsOpen(!hintIsOpen);
                        }}
                        >
                        {hintIsOpen ? "Hide" : "Show"}
                </button>
                </h2>
                {hintIsOpen && (
                    <ol className="ml-6 list-disc list-inside space-y-2 text-neutral-300">
                    {(detail.inidces || []).map((hint, i) => (
                        <li key={i}>{hint}</li>
                    ))}
                    </ol>
                )}
                    <h2 class="text-xl font-bold mt-10 mb-4">Query</h2>
                    <CodeBlock dataQuery={detail.query}/>
                    <h2 class="text-xl font-bold mt-10 mb-2">Results</h2>
                    {detail?.rdfResultExample == "" &&  <p class="text-neutral-300 mb-6 flex justify-center"> No result available for this query </p>}
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