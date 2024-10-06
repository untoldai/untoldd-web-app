import React from 'react';
import { UntloddLogo } from '../../../assets';
import { Link } from 'react-router-dom';
import { kidsWearNavItems } from '../../../constants/navItems';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const KidswareHeader = ({ isScrolled }) => {
    return (
        <div className={`flex justify-between items-center py-2 z-50 overflow-hidden px-3 h-16 fixed top-0 left-0 w-[100vw] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <img src={UntloddLogo} className='h-14 w-1/6' alt="Logo" />
            <div className='flex justify-center gap-x-10 w-3/4'>
                <nav>
                    <ul className='w-full flex justify-around gap-x-10'>
                        {kidsWearNavItems.map((navItem, index) => (
                            <li key={index}>
                                <Link to={navItem.slug} className={`text-black`}>
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex items-center gap-4'>
                    <Link to="/kids-wear/cart" className={`text-xl font-bold text-black`}>
                        <FaShoppingCart />
                    </Link>
                    <div className={`text-xl font-bold text-black`}>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KidswareHeader;
