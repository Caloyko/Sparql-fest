import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TableList = ({ data }) => {
    return (
        <div className="w-full p-10">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-100 ">View all</h5>
                <a href="#" className="text-sm font-medium text-orange-600 hover:underline">
                    Later filter
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {data.map((data, index) => (
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
