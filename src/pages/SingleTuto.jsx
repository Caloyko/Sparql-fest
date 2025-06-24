import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allTutos } from '../data/all-tutos';

const SingleTuto = () => {
    const headerImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80';
    const {slug} = useParams();
    console.log(slug)
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        console.log("here")
      const findDetail = allTutos.filter(tuto => tuto.slug === slug);
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
    return (
      <>
        {/* Header Image */}
        <div
          className="relative w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">{detail.title}</h1>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-7 gap-4 p-4 min-h-screen">
          <aside className="self-start sticky top-0 col-span-2 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Sommaire</h2>
            <ul>
            {detail.content.map((section, key) => (
              <li><a href={`#${section.id}`} className="block p-2 rounded hover:bg-blue-100 transition">{section.section_title}</a></li>
            ))}
            </ul>
          </aside>
          
          <main className=" overflow-y-auto  col-span-5  shadow-lg rounded-lg p-6">
            <div className="min-h-screen">
                <h1> {detail.title}</h1>
               {detail.content.map((section, key) => (
                    <section id={section.id} className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{section.section_title}</h2>
                <p>
                  {section.description}
                </p>
                </section>

                ))}
            </div>
          </main>
        </div>
      </>
  )
}

export default SingleTuto