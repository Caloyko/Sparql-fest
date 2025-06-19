import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full py-16 bg-stone-900/50'>
      <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
            <span className="text-xl tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-orange-600">SPARQL Fest</span>
          </Link>
          </div>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", href: "/#about" },
            { name: "SPARQL queries", href: "sparql-queries" },
            { name: "Contact", href: "/#contact" },
            { name: "Prefixes", href: "sparql-prefixes" },
            { name: <span className="inline-flex items-center"><FaGithub className="mr-1 text-lg" />GitHub</span>, href: "https://github.com/Caloyko/Sparql-fest" },

          ].map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="hover:text-orange-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 SPARQL Fest. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
