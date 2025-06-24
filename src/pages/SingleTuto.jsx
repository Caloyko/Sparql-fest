import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allTutos } from '../data/all-tutos';
import Section from '../components/reusable/Section';
import TutoSection from '../components/TutoSection';

const SingleTuto = () => {
    const {slug} = useParams();
    const [detail, setDetail] = useState(null);
    const [activeSection, setActiveSection] = useState('');


    useEffect(() => {
      const findDetail = allTutos.filter(tuto => tuto.slug === slug);
      if (findDetail.length > 0){
        setDetail(findDetail[0]);
      }else{
        window.location.href = '/';
      }
    }, [slug])
  
    if (!detail) {
        return <div className="text-center py-10">Loading or not found...</div>;
      }


      const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        setActiveSection(id)
        console.log(activeSection)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const getAllSparqlConcepts = () => {
        const concepts = [];
    
        detail.content.forEach(section => {
            if (section.sparql_concept) {
                section.sparql_concept.forEach(concept => {
                    concepts.push(concept);
                });
            }
        });
    
        return concepts;
    };
    const allSparqlConcepts = getAllSparqlConcepts();

    const headerImage = detail?.img ? detail.img : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80';

    return (
      <>
        {/* Header Image */}
        <Section
         id={detail.slug}
         title={detail.title}
         description={detail.date.toLocaleDateString()}
         >

        <div
            className="relative w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${headerImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60 flex justify-center items-center">
                <div className="flex flex-wrap justify-center items-center mx-4">
                    {allSparqlConcepts.map((concept, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gradient-to-r from-orange-400 to-orange-800 py-1 px-3 rounded-lg mr-2 mb-2 shadow-md"
                        >
                            {concept.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>


  
        {/* Main Content */}
        <div className="grid grid-cols-7 gap-4 p-4 min-h-screen">
        <aside className="self-start sticky top-0 col-span-2 shadow-lg rounded-lg p-4 pt-20">
            <ul>
                {detail.content.map((section) => (
                    <li key={section.id}>
                        <a 
                            onClick={() => handleScrollToSection(section.id)} 
                            className={`block p-2 rounded transition cursor-pointer 
                                ${activeSection === section.id ? 'text-orange-500' : 'hover:border-orange-500 hover:bg-stone-800 hover:border rounded-xl hover:text-orange-500'}`}
                        >
                            {section.section_title}
                        </a>
                        {section.sparql_concept && section.sparql_concept.length > 0 && (
                            <ul className="ml-4 list-disc">
                                {section.sparql_concept.map((concept, index) => (
                                    <li key={index}>
                                        <a 
                                            onClick={() => handleScrollToSection(section.id)} 
                                            className="block p-2 rounded hover:bg-stone-300 hover:text-orange-700 transition cursor-pointer"
                                        >
                                            {concept.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>

          
          <div className=" overflow-y-auto  col-span-5  shadow-lg rounded-lg p-6">
            <div className="min-h-screen">
               {detail.content.map((section, key) => (
                    <TutoSection key={key} section={section} />
                ))}
            </div>
          </div>
        </div>
        </Section>

      </>
  )
}

export default SingleTuto