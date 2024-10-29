import React from 'react'

const BreadCrum = ({ heading, text }) => {
    return (
        <div className='bg-[#F6F5FF] h-[200px] w-full p-14  mt-20 '>
            <h4 className='ml-60 text-3xl font-bold'>{heading}</h4>
            <p className='ml-60 text-sm  my-1'>{text}</p>
        </div>
    )
}

export default BreadCrum