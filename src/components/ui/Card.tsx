import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  data: {
    name: string;
    image: string;
    category: string;
    date: Date;
    ontologies: string[];
    slug: string;
  };
  withPrefix?: boolean;
};

export default function Card({ data, withPrefix = false }: CardProps) {
  const { name, image, category, date, ontologies, slug } = data;

  const link = withPrefix ? `/sparql-queries/${slug}` : slug;

  return (
<div className="rounded-xl overflow-hidden shadow-md shadow-stone-950 ring-1 ring-white/10 flex flex-col hover:shadow-lg hover:shadow-orange-900/50 transition-shadow bg-neutral-800 ">
    <div className="relative">
        <Link to={link}>
          <img className="w-full h-42 object-cover" src={image} alt={name} />
          <div className="hover:bg-transparent transition duration-300 absolute inset-0 bg-gray-900 opacity-25"></div>
        </Link>
        <div className="font-bold shadow-xl text-s absolute top-0 right-0  bg-orange-700 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-orange-600 transition duration-500 ease-in-out rounded-xl">
          {category}
        </div>
      </div>

      <div className="px-6 py-4 mb-auto">
        <p className="text-gray-500 text-sm mb-2">{new Date(date).toLocaleDateString()}</p>
        <h3 className="font-medium text-lg inline-block hover:text-orange-600 transition duration-500 ease-in-out">
          {name}
        </h3>
      </div>

      <div className="px-6 pb-6">
        {ontologies.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-stone-500 rounded-full px-3 py-1 text-sm font-semibold text-neutral-900 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
