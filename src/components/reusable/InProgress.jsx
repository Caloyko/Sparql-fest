import React from 'react'
import { Link } from 'react-router-dom'


const InProgress = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl mb-6 ">This section is still in Progress ...</h1>
        <Link to="/" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                 Back to home
        </Link>
    </div>

  )
}

export default InProgress