import React from 'react'
import QueryCard from '../components/QueryCard'
import { sparqlQueries } from '../data/queries'

const AllQueries = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {sparqlQueries.map((product,key) => 
          <QueryCard key={key}  data={product}/>)}
      </div>
    </div>
  )
}

export default AllQueries