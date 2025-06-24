import React from 'react'

const SingleTuto = () => {
    const headerImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80';

    return (
      <>
        {/* Header Image */}
        <div
          className="relative w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">Titre du Tutoriel</h1>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-7 gap-4 p-4 min-h-screen">
          <aside className="self-start sticky top-0 col-span-1 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Sommaire</h2>
            <ul>
              <li><a href="#section1" className="block p-2 rounded hover:bg-blue-100 transition">Section 1</a></li>
              <li><a href="#section2" className="block p-2 rounded hover:bg-blue-100 transition">Section 2</a></li>
              <li><a href="#section3" className="block p-2 rounded hover:bg-blue-100 transition">Section 3</a></li>
            </ul>
          </aside>
          
          <main className=" overflow-y-auto  col-span-6  shadow-lg rounded-lg p-6">
            <div className="min-h-screen"> {/* This div ensures enough height for scrolling */}
              <section id="section1" className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Section 1</h2>
                <p>
                  Conten
                </p>
              </section>
              <section id="section2" className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Section 2</h2>
                <p>Co
                </p>
              </section>
              <section id="section3" className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Section 3</h2>
                <p>Con </p>
              </section>
            </div>
          </main>
        </div>
      </>
  )
}

export default SingleTuto