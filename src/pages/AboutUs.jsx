import React from 'react'
import MainHeader from '../comoponent/layout/Base/MainHeader'
import { aboutUsContent } from '../constants/webcontent'

const AboutUs = () => {
    return (
        <>
            <MainHeader />
            <div>
                <h2 className='text-center tex-4xl font-extrabold my-2'>ABOUT US </h2>
                <div className='m-2 md:m-5 '>

                    {
                        aboutUsContent.map((abt) => (
                            <div key={abt.id} className='w-full h-full my-3 bg-white shadow-2xl md:shadow-lg  shadow-neutral-700 rounded-2xl p-3'>
                                <h4 className='text-center my-2 text-2xl font-bold'>{abt.heading}</h4>
                                <p className='my-2 text-xs md:text-xl text-neutral-700'>{abt.content}</p>
                                <p className='my-2 text-xs md:text-xl text-neutral-700'>{abt.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AboutUs