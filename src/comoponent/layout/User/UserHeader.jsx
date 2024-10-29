import React, { useContext, useEffect, useState } from 'react'
import { FaAlignJustify, FaBell, FaEnvelope, FaTimes, FaUser, FaUserCircle, FaUserEdit } from 'react-icons/fa'
import { UntloddLogo } from '../../../assets'
import { Link, useNavigate } from 'react-router-dom';
import { CiLogout, CiSettings } from "react-icons/ci";
import { SidebarContext } from '../../../context/SidebarContext';
import { removeAdminToken } from '../../../utils/tokenStorage';
const UserHeader = () => {
    const [time, setTime] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { toggle, isToggle } = useContext(SidebarContext);
    const navigate=useNavigate();
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
    const handleLogout=()=>{
        removeAdminToken();
        navigate('/auth/admin-login')
    }
    return (
        <div className='fixed top-0 z-50 h-14 py-2 px-3 md:px-10 bg-white  shadow-lg w-full flex  items-center  justify-between '>
            <div className='flex items-center '>
                <div className=' mx-2  '>
                    {
                        isToggle ?
                            <FaAlignJustify className='sm:text-2xl duration-300  cursor-pointer ' onClick={() => toggle()} />
                            :

                            <FaTimes className='text-2xl duration-300 cursor-pointer ' onClick={() => toggle()} />
                    }


                </div>
                <img src={UntloddLogo} alt='logo image' className='w-20 sm:w-40' />

            </div>
            <div>
                <div>

                    <p className='hidden sm:block'>{time.toString().substring(0, 25)}</p>

                </div>
            </div>
            <div className='flex items-center gap-5 '>
                <div className='mx-0 md:mx-4 relative'>
                    <p className='absolute top-0 font-bold -right-2 h-2 w-2 rounded-full bg-red-600'></p>
                    <FaEnvelope className='sm:text-xl md:text-3xl text-neutral-700' />
                </div>
                <div className='mx-0 md:mx-4 relative'>
                    <p className='absolute top-0 font-bold right-0 h-2 w-2 rounded-full bg-red-600'></p>
                    <FaBell className='sm:text-xl md:text-3xl text-neutral-700' />
                </div>
                <div className='flex items-center gap-2 relative'>
                    <p>User</p>
                    <FaUserCircle className='text-xl md:text-3xl text-neutral-700 cursor-pointer' onClick={() => setIsModalOpen(!isModalOpen)} />
                    <div className={isModalOpen ? "bg-white shadow-md rounded-lg absolute top-11 right-0 px-10 py-4   " : "hidden"}>
                        <ul>
                            <li>
                                <Link to={'/admin/profile'} className='flex text-sky-900 font-bold cursor-pointer items-center gap-2 text-xl'>
                                    <FaUserEdit />Profile
                                </Link>
                            </li>
                            <li>
                                <Link to={'/admin/setting'} className='flex text-sky-900 font-bold cursor-pointer items-center gap-2 text-xl'>
                                    <CiSettings /> Setting
                                </Link>
                                <button  onClick={handleLogout} className='flex text-sky-900 font-bold cursor-pointer items-center gap-2 text-xl'>
                                    <CiLogout /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader;