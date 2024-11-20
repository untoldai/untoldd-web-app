import React, { useEffect, useState } from 'react';
import { UntloddLogo } from '../../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaHome, FaPhone, FaSearch, FaShoppingBag, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ToolTipButton from '../../tooltip/ToolTipBtn';
import { getUserToken, removeInfluncerToken, removeUserToken } from '../../../utils/tokenStorage';
const InfluncerBaseHeader = ({ isScrolled, navItems }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserHovered, setIsUserHovered] = useState(false);
    const user = useSelector((state) => state.influncer);
    const navigate = useNavigate();
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const getTotalProductCount = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };
    return (
        <div>

            <div className='h-10 w-full bg-black text-white flex justify-around items-center'>
                <div className='flex gap-5'>
                    <p className='flex gap-3 items-center font-bold'><FaEnvelope />admin@untoldd.com </p>
                    <p className='flex gap-3 items-center font-bold'><FaPhone />+91-29003837392 </p>
                </div>
                <div className='hidden md:flex gap-5'>
                    {
                        user && user?.isLoggedIn || getUserToken() ?
                            <div className='flex gap-3 items-center'>
                                <ToolTipButton Icon={FaUser} title={"Profile"} handleClick={() => navigate("/influncer/profile")} />

                                <ToolTipButton Icon={FaSignOutAlt} title={"Logout"} handleClick={() => removeInfluncerToken()} />
                                <ToolTipButton Icon={FaShoppingBag} title={"Orders"} handleClick={() => navigate("/influncer/my-orders")} />
                            </div>

                            :
                            <Link to="/influncer/login" className=" text-white mb-1 flex items-center gap-2"> Login <FaUser /></Link>
                    }


                    {/* <Link to="/app/cart" className="text-white mb-1 flex items-center gap-2">
                        <FaShoppingCart />
                        {getTotalProductCount() > 0 && (
                            <span className="bg-red-600 text-white rounded-full px-2 text-xs ml-1">
                                {getTotalProductCount()}
                            </span>
                        )}
                    </Link> */}
                </div>
            </div>
            <div className={` py-2 z-50  px-3 h-16 fixed top-10 left-0 w-full transition-all duration-300  ${isScrolled ? 'bg-white shadow-lg !top-0' : 'bg-white  '}`}>
                <div className='flex justify-around items-center relative'>


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
                        {/* <Link to="/kids-wear/cart" className={`text-xl font-bold hover:text-pink-400 transition-all text-black`}>
                            <FaShoppingCart />
                        </Link>
                        <div
                            className={`relative text-xl font-bold text-black`}
                            onClick={() => setIsUserHovered(!isUserHovered)}
                        >
                            <FaUserCircle />
                            {isUserHovered && (
                                <motion.div

                                    animate={{ opacity: 1, y: 0 }}     // Animate to this state
                                    exit={{ opacity: 0, y: -20 }}       // Exit state
                                    transition={{ duration: 0.3 }}
                                    className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-10">
                                    <Link to="/auth/user-login" className=" text-black hover:text-pink-400 mb-1 flex items-center gap-2"><FaSignInAlt /> Login</Link>
                                    <Link to="/auth/user-register" className=" text-black hover:text-pink-400 flex items-center gap-2"> <FaSignOutAlt /> Register</Link>
                                </motion.div>
                            )}
                        </div> */}
                        <div className='bg-white flex items-center rounded-md shadow-sm h-8'>
                            <input type="" name="" placeholder='Search Product' value="" className='px-2 w-[150px] md:w-full border-[1px] border-neutral-300 outline-none h-full' />
                            <FaSearch className='bg-[#000] h-8 shadow-sm w-10 text-xs p-1  text-white ' />
                        </div>
                        <button className="md:hidden text-black ml-auto" onClick={toggleNav}>
                            {isNavOpen ? <FaTimes /> : '☰'}
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
            <div className='bg-white h-16 text-black z-50 shadow-2xl block md:hidden fixed bottom-0 w-full p-4 rounded-tl-xl rounded-tr-xl'>
                <div className='flex items-center justify-around'>


                    <Link to="/app" className="flex items-center gap-2 text-black hover:text-gray-300 transition-all duration-200 ease-in-out">
                        <FaHome className="text-xl" />

                    </Link>
                    {user && user?.isLoggedIn || getUserToken() ? (
                        <div className='flex gap-10  justify-between items-center mt-3'>
                            {/* Profile Icon Button */}
                            <Link to="/influncer/profile" className="flex items-center gap-2 text-black hover:text-gray-300 transition-all duration-200 ease-in-out">
                                <FaUser className="text-xl" />

                            </Link>   <button handleClick={() => {
                                removeUserToken()
                                navigate("/aut/user-login")
                            }} className="flex items-center gap-2 text-black hover:text-gray-300 transition-all duration-200 ease-in-out">
                                <FaSignOutAlt className="text-xl" />

                            </button>
                            <Link to="/app/my-orders" className="flex items-center gap-2 text-black hover:text-gray-300 transition-all duration-200 ease-in-out">
                                <FaShoppingBag className="text-xl" />

                            </Link>

                        </div>
                    ) : (
                        <Link to="/influncer/login" className="flex items-center gap-2 text-black hover:text-gray-300 transition-all duration-200 ease-in-out mt-3">
                            <FaUser className="text-xl" />
                            <span className="font-semibold">Login</span>
                        </Link>
                    )}
                </div>
            </div>


        </div>
    );
}

export default InfluncerBaseHeader;
