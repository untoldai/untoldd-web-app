import React, { useState } from 'react';
import { UntloddLogo } from '../../../assets';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import {motion } from "framer-motion"
const BaseHeader = ({ isScrolled, navItems }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserHovered, setIsUserHovered] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={` py-2 z-50  px-3 h-16 fixed top-0 left-0 w-full transition-all duration-300  ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
          <div className='flex justify-between items-center relative'>
            
          
            <img src={UntloddLogo} className='h-14 w-1/5' alt="Logo" />

            {/* Mobile Toggle Button on the Right */}
            

            {/* Navigation and Cart/User Section */}
            <div className={`hidden md:flex flex-col sm:flex-row justify-between items-center w-full md:w-2/5 `}>
                <nav className="md:flex md:justify-around">
                    <ul className='flex flex-col md:flex-row w-full gap-x-10 md:gap-x-4'>
                        {navItems.map((navItem, index) => (
                            <li key={index}>
                                <Link to={navItem.slug} className={`text-black font-semibold hover:text-pink-400 transition-all`}>
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
              
               
            </div>

            {/* Cart and User Section */}
            <div className='flex items-center gap-4'>
                <Link to="/kids-wear/cart" className={`text-xl font-bold hover:text-pink-400 transition-all text-black`}>
                    <FaShoppingCart />
                </Link>
                <div 
                    className={`relative text-xl font-bold text-black`} 
                    onMouseEnter={() => setIsUserHovered(true)} 
                    onMouseLeave={() => setIsUserHovered(false)}
                >
                    <FaUserCircle />
                    {isUserHovered && (
                        <motion.div 
                        
                        animate={{ opacity: 1, y: 0 }}     // Animate to this state
                        exit={{ opacity: 0, y: -20 }}       // Exit state
                        transition={{ duration: 0.3 }} 
                        className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-10">
                            <Link to="/login" className="block text-black hover:text-pink-400 mb-1">Login</Link>
                            <Link to="/signup" className="block text-black hover:text-pink-400">Sign Up</Link>
                        </motion.div>
                    )}
                </div>
                <button className="md:hidden text-black ml-auto" onClick={toggleNav}>
                {isNavOpen ? <FaTimes/> : '☰'}
            </button>
            </div>
            {isNavOpen && (
                <motion.nav
                    className="absolute bg-white shadow-2xl right-0 top-16 h-[200px] p-2"
                    style={{ zIndex: 999 }}
                    initial={{ opacity: 0, y: -20 }}  // Initial state
                    animate={{ opacity: 1, y: 0 }}     // Animate to this state
                    exit={{ opacity: 0, y: -20 }}       // Exit state
                    transition={{ duration: 0.3 }}       // Animation duration
                >
                    <ul className='flex flex-col w-full gap-2'>
                        {navItems.map((navItem, index) => (
                            <li key={index}>
                                <Link to={navItem.slug} className={`text-black font-semibold hover:text-pink-400 transition-all`}>
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </div>
        </div>
    );
}

export default BaseHeader;
