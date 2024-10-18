import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appColor } from '../../style/style'
import { SidebarContext } from '../../context/SidebarContext'
import { motion } from 'framer-motion'
import useIsMobile from '../../utils/useMobile'


const Sidebar = ({ navItems }) => {
    const { toggle, isToggle } = useContext(SidebarContext);
    const isMobile = useIsMobile();

    return (
        <motion.div
            className={`fixed top-[55px] left-0 h-full w-60 bg-white shadow-lg  ${isToggle ? 'translate-x-0 z-50' : '-translate-x-full'} transition-transform duration-300`}
            initial={{ x: -300 }}
            animate={{ x: isToggle ? 0 : -300 }}
            transition={{ duration: 0.3 }}
        >
            <ul className='flex flex-col gap-3 p-4 h-full '>
                {navItems.map((item) => (
                    <li key={item.id} className='flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200'>
                        <Link to={item.slug} className='flex items-center text-gray-700 hover:text-blue-600'>
                            <item.icon className='text-2xl mr-3' />
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Sidebar;
