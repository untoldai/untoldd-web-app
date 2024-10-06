import React from 'react'
import { ExploreImage, PartnerButton, SphereObject, UntloddLogo } from '../../../assets'
import { FaAlignJustify } from 'react-icons/fa'
import { style } from '../../../style/style'
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className='md:h-screen h-full w-full flex  flex-col   py-5 '>

            <div className='w-full relative '>
                <div className='absolute right-10 top-5'>
                    <div className='relative'>
                        <img src={SphereObject} alt='Untoldd ' className='w-16 md:w-24 cursor-pointer hover:scale-105 duration-200 ease-in-out ' />
                        <FaAlignJustify className='absolute top-5 text-xl md:top-7 right-5 md:right-7 md:text-3xl text-white font-bold cursor-pointer' />
                    </div>

                </div>

            </div>

            <div className='flex justify-center mt-[20%] md:mt-0 items-center flex-col w-full mb-20  h-full relative  '>
                <div className='relative'>
                    <img src={UntloddLogo} alt='Unltoldd.in logo ' />
                    <p className={`${style.paragraph} text-center`}>Building untold brands with Creators</p>
                    {/* <img src={SphereObject} alt='Untoldd ' className='w-16 md:w-24   absolute  top-[100%] right-2' /> */}
                </div>
                <img src={SphereObject} alt='Untoldd ' className='w-16 md:w-24   absolute -top-20  md:top-20 left-0 md:left-20' />
                <div className='flex md:justify-around w-full gap-10 md:gap-0 justify-center items-center  md:px-0 flex-col md:flex-row mt-36 relative' >
                    <Link to={"/kids-wear"} className='hover:scale-105 duration-300 ease-in-out z-50'>
                        <img src={ExploreImage} className='w-[80%] mx-10' />

                    </Link>
                    <Link to={"/beauty"} className='hover:scale-105 duration-300 ease-in-out z-50'>
                        <img src={PartnerButton} className='w-[80%] mx-10' />
                    </Link>
                    <img src={SphereObject} alt='Untoldd ' className='w-16 md:w-40   absolute  top-[84%] left-[40%] z-0 ' />
                </div>
            </div>
        </div>

    )
}

export default Hero