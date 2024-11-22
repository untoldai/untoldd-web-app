import React from 'react'

const BreadCrum = ({ heading, text }) => {
    return (
        <div className='bg-[#b8ddf8] h-[200px] w-full p-6 sm:p-10 md:p-14 mt-20'>
            <div className="max-w-screen-xl mx-auto">
                <h4 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left'>{heading}</h4>
                <p className='text-xs sm:text-sm md:text-base my-2 text-center sm:text-left'>{text}</p>
            </div>
        </div>
    )
}

export default BreadCrum
