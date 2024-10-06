import React from 'react'
import { appColor, style } from '../style/style'
import ExploreHeader from '../comoponent/layout/Base/ExploreHeader'
import { BlackPerfume, Cloth1, Cloth2, Perfume, UntolddBanner } from '../assets'
import Button from '../comoponent/specific/form/Button'
import SlideBanner from '../comoponent/specific/Sliderbanner'

const ExploreProducts = () => {
  const banner1=[
    {
      id:0,
      imgSrc:UntolddBanner,
      slug:"/"
    },
    {
      id:2,
      imgSrc:UntolddBanner,
      slug:"/"
    },
    {
      id:3,
      imgSrc:UntolddBanner,
      slug:"/"
    },
  ]
  return (
    <section className={`h-full w-full ${appColor.baseBgColor}`}>
      <ExploreHeader />
      {/* banner */}
      
      <div className=' pt-28  h-full overflow-hidden mx-[8%]'>
      <SlideBanner  slideImages={banner1} className={"w-ful"} />
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-10 items-center my-20'>
        {
          [Perfume, BlackPerfume, Cloth1, Cloth2].map((item, index) => (
            <img src={item} key={index} className='hover:scale-105 duration-300 cursor-pointer' />
          ))
        }
      </div>
      <div className='my-10'>
        <div className='w-full h-full flex items-center justify-center gap-5 md:justify-around  my-10'>
          <Button type='button' text={'KIDS'} className={' text-2xl py-2 font-semibold !px-4  w-[150px] '} backagroundColor='bg-black' />
          
          <Button type='button' text={'PERFUME'} className={' text-2xl  py-2 font-semibold !px-4 w-[150px]'} backagroundColor='bg-black' style={{ fontFamily: "cursive" }} />
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-10 items-center my-20'>
          {
            [Cloth1, BlackPerfume, Cloth2, Perfume,].map((item, index) => (
              <img src={item} key={index} className='hover:scale-105 duration-300 cursor-pointer' />
            ))
          }
        </div>
      </div>
      <div className='flex flex-col md:flex-row  gap-10 justify-center items-center my-10'>
        <img src={Cloth1} className='h-full w-[42%]' />
        <div className='grid grid-col-1 md:grid-cols-2 gap-10 my-20'>
          {
            [Cloth1, BlackPerfume, Cloth2, Perfume,].map((item, index) => (
              <img src={item} key={index} className='hover:scale-105 duration-300 cursor-pointer' />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ExploreProducts