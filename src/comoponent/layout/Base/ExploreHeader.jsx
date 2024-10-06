import React, { useState } from 'react'
import { UntloddLogo } from '../../../assets';
import { FaAlignJustify, FaSearch, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import Button from '../../specific/form/Button';
import { Link } from "react-router-dom";
const ExploreHeader = () => {
    const [showAuthDialog, setShowAuthDialog] = useState(false);
    return (
        <div className='fixed top-0 w-full  flex justify-between px-4 gap-2 py-2 h-16 items-center '>
            <div className='w-1/4'>
                <img src={UntloddLogo} alt="" className='w-20 md:w-1/2 ' />
            </div>
            <div className=' w-1/4 '>
                <div className='bg-white rounded-full text-neutral-900 flex items-center  md:justify-between md:gap-2 px-1 md:px-3 gap-1 shadow-lg'>
                    <input type="text" placeholder='Search' className='h-10  outline-none border-none
                     text-black px-0 md:px-2 text-[12px] md:text-xl rounded-full placeholder:text-black placeholder:text-center w-[70px] md:w-full' />
                    <FaSearch className='text-neutral-500 text-[12px] md:text-2xl' />
                </div>

            </div>
            <div className='w-1/4 flex justify-around items-center gap-3'>
            {/* <Link to={'/products'}>All products</Link> */}
                <Button text={'Your Order'} textColor='text-black  font-semibold' backagroundColor='bg-transparent' className={'border-2 w-[59px] md:w-1/3 border-black !rounded-full py-1 text-[6px] mt-2 md:text-[12px] !px-0  !md:px-5 '} />

                <FaUser className='text-2xl md:text-4xl md:bg-black text-black md:text-white
                     rounded-full md:p-2 mt-2 cursor-pointer relative'
                    onClick={() => setShowAuthDialog(!showAuthDialog)}
                />
                <div className={showAuthDialog ? "flex flex-col p-2  absolute top-14 right-10 md:right-36 bg-white shadow-md rounded-sm" : "hidden"}>

                    <Link to={"/auth/user-login"} className='flex  gap-2 items-center hover:bg-neutral-200 px-4 py-1 rounded-md duration-200 ease-in-out'>
                        <FaSignInAlt />
                        Login
                    </Link>
                    <Link to={"/auth/user-register"} className='flex  gap-2 items-center hover:bg-neutral-200 px-4 py-1 rounded-md duration-200 ease-in-out'>
                        <FaSignOutAlt />
                        Register
                    </Link>
                </div>

                <FaAlignJustify className='text-3xl font-semibold cursor-pointer mt-2' />
            </div>
        </div>
    )
}

export default ExploreHeader