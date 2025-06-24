import React from 'react'
import CodeBlock from './ui/CodeBlock';
import { FaLink, FaComment } from 'react-icons/fa6';
import w3cImg from "../assets/images/prefixes/w3c.jpg"
import { FaInfo } from 'react-icons/fa';
import { tutoQueries } from "../data/queries-data/tutos/tutosquery"
const TutoSection = ({ section }) => {
    console.log(tutoQueries)
    const findquery = tutoQueries.filter(tuto => tuto.slug === section.query);
    console.log(findquery[0])
    const query = findquery[0]
    console.log(query)
    return (
        <section id={section.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-orange-500">{section.section_title}</h2>

            <p>{section.description}</p>

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
                                        {concept.description}
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
                                        {concept.example_comment}
                                    </span>
                                </div>
                            )}
                            
                        </div>
                    ))}
                </div>
            )}

            <p>{query.name}</p>
            {/**
             * Write a query  to learn (open and close)
             * Description
             * Context
             * Query
             * direction to all querys with this concept
             */}
        </section>
    );
};

export default TutoSection