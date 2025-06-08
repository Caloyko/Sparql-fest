import React from 'react'
import { Link } from 'react-router-dom'

const QueryCard = (props) => {
    const {id, name, slug, image, level } = props.data;
    return (
        <div className='bg-stone-800 p-5 rounded-xl shadow-sm'>
            <Link to={slug}>
                <img src={image} alt='name' className='w-full h-80 object-cover object-top
                drop-shadow-[0_80px_30px_#0007]'/>
            </Link>
                <h3 className='text-2'> {name}</h3>
                <div className='flex justify-between items-center'>
                    <p>
                        $<span className='text-2xl font-medium'>{level}</span>
                    </p>
                    <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' >
                        More details
                    </button>
                </div>
            
        </div>
    )
}

export default QueryCard