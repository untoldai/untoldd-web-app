import React from 'react'
import { footerItem } from '../../../constants/navItems'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex  gap-20 items-start py-4 flex-col md:flex-row bg-slate-200'>
            {
                footerItem.map((mainLink) => (
                    <div key={mainLink.id} className='px-20 '>
                        <p className='text-xl font-bold my-2'>{mainLink.title}</p>
                        <div className='flex flex-col justify-start text-left gap-2'>
                            {
                                mainLink.links.map((links) => (
                                    <Link to={links.slug} key={links.id} className='font-bold text-black cursor-pointer '>
                                        {links.name}
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Footer