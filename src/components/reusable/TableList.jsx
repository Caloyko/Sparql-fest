import React, { useState, useMemo, useEffect } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const TableList = ({ data }) => {
    const [search, setSearch] = useState('');
      const [total, setTotal] = useState(0);
    
    const filteredData = useMemo(() => {
        return data.filter(d => {
          
        const matchesSearch = 
        typeof search === 'string' &&
        (
          (typeof d.name === 'string' && d.name.toLowerCase().includes(search.toLowerCase())) ||
          (typeof d.description === 'string' && d.description.toLowerCase().includes(search.toLowerCase())) ||
          (typeof d.prefix === 'string' && d.prefix.toLowerCase().includes(search.toLowerCase())) ||
          (typeof d.namespace === 'string' && d.namespace.toLowerCase().includes(search.toLowerCase()))
        );
          return matchesSearch
        });
      }, [search]);

    useEffect(() => {
        setTotal(filteredData.length);
    }, [filteredData]);
    return (
        <div className="w-full p-10">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-l font-bold leading-none text-gray-200 ">                                    
                    {total} result{total !== 1 ? 's' : ''}
                </h5>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search ..."
                    className=" border border-neutral-500  placeholder-neutral-400 px-4 pr-10 py-2 rounded-full w-50 focus:w-64 transition-all duration-500 ease-in-out focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500/70 pointer-events-none" />
                </div>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {filteredData.map((data, index) => (
                        <li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <img className="w-20 h-20 rounded-2xl p-1 border border-orange-500" src={data.logo} alt={`${data.name} image`} />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-md font-medium text-gray-100  ">
                                        {data.name}
                                    </p>
                                    <p className="text-sm text-stone-400 ">
                                        {data.description}
                                    </p>
                                    <p className="text-xs text-orange-800 pt-2  ">
                                        {data.namespace}
                                    </p>
                                </div>
                                <div className="relative w-64 h-22">

                                <div className="absolute top-0 right-0 text-sm font-semibold  bg-orange-800 rounded-full px-3 py-1 text-orange-100 mr-2 mb-2">
                                    {data.prefix}
                                </div>

                                <Link
                                    to={data.prefix}
                                    className="absolute bottom-0 right-0 flex items-center gap-1 text-xs text-stone-400 hover:text-orange-500"
                                    >
                                    <span>View details</span>
                                    <FaArrowUpRightFromSquare />
                                </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TableList;
