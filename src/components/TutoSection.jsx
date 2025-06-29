import React, { useState } from 'react';
import CodeBlock from './ui/CodeBlock';
import { FaLink, FaComment } from 'react-icons/fa6';
import w3cImg from "../assets/images/prefixes/w3c.jpg"
import { FaArrowDown, FaArrowUp, FaInfo, FaPencilAlt } from 'react-icons/fa';
import { TbBulb } from 'react-icons/tb';
import Markdown from 'react-markdown'
import { allTutoQueries } from '../data/queries-data/tuto-ex';
import TableResults from './reusable/TableResults';


const TutoSection = ({ section }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hintIsOpen, setHintIsOpen] = useState(false);
    const [resIsOpen, setResIsOpen] = useState(false);
    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    console.log(allTutoQueries)
    const findquery = allTutoQueries.filter(tuto => tuto.slug === section.query);
    console.log(findquery[0])
    const query = findquery[0]
    console.log(query)
    console.log(query?.rdfResultExample)
    return (
        <section id={section.id} className="mb-12 mt-5">
            <h2 className="text-2xl font-bold mb-2 text-orange-500">{section.section_title}</h2>

            <Markdown>{section.description}</Markdown>

            {section.sparql_concept && section.sparql_concept.length > 0 && (
                <div className="mt-4">
                    {section.sparql_concept.map((concept, index) => (
                        <div key={`concept${index}`} className="mb-6 ">
                            <div className="flex items-center">
                            <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-800 py-1 px-3 rounded-lg">
                                {concept.name}
                            </span>
                            {concept.w3c_link && (
                            <a
                                href={concept.w3c_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-blue-500 underline flex  space-x-2"
                            >
                                <img
                                    src={w3cImg} 
                                    alt="W3C Link"
                                    className="w-5 h-5 rounded-full"
                                />
                                <p className='text-xs'>W3C link <FaLink className="inline ml-1" /></p>
                            </a>)}
                            </div>
                           
                            <hr className="my-2 border-t border-gray-300" />
                            <div className="flex items-start mt-4">
                                      <div className="flex-shrink-0">
                                            <FaInfo className="w-5 h-5 mr-2" />
                                        </div>
                                    <span>
                                        <Markdown>{concept.description}</Markdown>
                                    </span>
                                </div>
                            {concept.example && (
                                <div className="mt-2">
                                    <CodeBlock dataQuery={concept.example} header={true} line={false} headerTitle='Example'/>
                                </div>
                            )}
                            {concept.example_comment && (
                                <div className="flex items-start">
                                      <div className="flex-shrink-0">
                                            <FaComment className="w-5 h-5 mr-2" />
                                        </div>
                                    <span>
                                        <Markdown>{concept.example_comment}</Markdown>
                                    </span>
                                </div>
                            )}
                            
                        </div>
                    ))}
                    
                </div>
            )}

{query && (
            <div className="border rounded-lg p-4 mb-4 mt-5">
            <div className="flex items-center cursor-pointer " onClick={toggleDetails}>
                <FaPencilAlt className=' text-orange-500' />
                <h1 className="ml-2 text-lg font-semibold flex-grow ">Write query to learn</h1>
                {isOpen ? <FaArrowUp /> : <FaArrowDown />}
            </div>

            {isOpen && (
                <div className="mt-4">
                    <h1 className='text-xl'>{query.name}</h1>
                    <h2 className="font-bold mt-4 mb-2">Description</h2>
                    <p className="text-neutral-300 mb-6">{query.description}</p>

                    <h2 className="font-bold mt-4 mb-2">Contexte</h2>
                    <p className="text-neutral-300 mb-6">{query.context}</p>

                    <h2
                        className="flex items-center cursor-pointer select-none text-xl font-semibold mb-3"
                        onClick={() => setHintIsOpen(!hintIsOpen)}
                    > 
                    <TbBulb className="text-yellow-500 mr-2" size={24} />
                    Hints 
                    <button
                        aria-label={hintIsOpen ? "Hide hints" : "Show hints"}
                        className="ml-auto text-sm text-stone-200 hover:text-orange-500"
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
                    {(query.inidces || []).map((hint, i) => (
                        <li key={i}>{hint}</li>
                    ))}
                    </ol>
                )}
                    <h2 class="text-xl font-bold mt-10 mb-4">Query</h2>
                    
                    <CodeBlock dataQuery={query.query}/>
                    {
                        query?.rdfResultExample && (
                            <>
                            <h2 class="flex items-center cursor-pointer select-none text-xl font-semibold mb-3">Results
                            <button
                            aria-label={hintIsOpen ? "Hide hints" : "Show hints"}
                            className="ml-auto text-sm text-stone-200 hover:text-orange-500"
                            onClick={(e) => {
                                e.stopPropagation();
                                setResIsOpen(!resIsOpen);
                            }}
                            >
                            {resIsOpen ? "Hide" : "Show"}
                    </button>

                            </h2>
                            {resIsOpen && 
                                <TableResults data={query.rdfResultExample} />
                            }
                            </>
                        )
                    }

                </div>
            )}
        </div>)}
        <Markdown>{section.conclusion}</Markdown>
        </section>
    );
};

export default TutoSection