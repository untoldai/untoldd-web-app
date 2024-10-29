import React from 'react'
import { UntloddLogo } from '../../../assets'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div className='flex justify-between items-center py-1 md:px-4 shadow-sm'>
            <div>
                <img src={UntloddLogo} className='h-6 md:h-16 md:ml-0 ml-2' />
                <p className='font-semibold text-[7px] md:text-xs text-neutral-700 text-center'>Building untold brand  with Creators</p>
            </div>
            <div className='flex justify-around'>
                <div className='flex justify-around items-center gap-3'>
                    <Link to={'/app'} className='text-xs md:text-xl cursor-pointer hover:bg-slate-100 p-1  rounded-md'>
                        Explore Us
                    </Link>
                    <div className='h-5 bg-black w-0.5' />
                    <Link to={'#'} className='text-xs md:text-xl cursor-pointer hover:bg-slate-100 p-1  rounded-md'>
                        Partner with Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainHeader