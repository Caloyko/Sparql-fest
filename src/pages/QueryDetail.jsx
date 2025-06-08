import { useParams } from 'react-router-dom'
import { sparqlQueries } from '../data/queries';
import React, { useEffect, useState } from 'react';

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
      <div>
        <h2 className='text-3xl text-center'>Query Detail</h2>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <img src={detail.image} alt="" className='w-full' />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
            <p className="font-bold text-3xl">
              ${detail.level}
            </p>
            <div className="flex gap-5">
              <div className="felx gap-2 justify-center items-center">
                <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">-</button>
                <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">1</span>
                <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">+</button>
              </div>
              <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default QueryDetail