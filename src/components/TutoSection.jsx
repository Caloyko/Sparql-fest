import React from 'react'

const TutoSection = ({ section }) => {
    
    return (
        <section id={section.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{section.section_title}</h2>
            <p>{section.description}</p>

            {section.sparql_concept && section.sparql_concept.length > 0 && (
                <ul className="ml-4 list-disc">
                    {section.sparql_concept.map((concept, index) => (
                        <li key={`conceptpt${index}`}>{concept.name}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default TutoSection