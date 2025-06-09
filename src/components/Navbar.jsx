import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg 
    border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-orange-600">SPARQL Fest</span>
                </Link>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center items-center">
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Contact us
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-stone-900 w-full p-12
                flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4'>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex">
                        <a href="/" className='py-2 px-3 rounded-md bg-gradient-to-r
                        from-orange-500 to-orange-800 '>
                            Contact us
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav> 
  )
}

export default Navbar