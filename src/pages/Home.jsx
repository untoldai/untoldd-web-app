import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from 'react-icons/fa'
import Hero from '../comoponent/specific/homepage/Hero'
import { v4 as uuidv4 } from "uuid";
import BusinessCard from '../comoponent/specific/homepage/Feddback/BusinessCard'
import Coursael from '../comoponent/specific/homepage/Coursael'
import { Avatar, BeautyBanner1, Beluga, BelugaChild, BelugaTshirt, Contactus, CreamBox, Icon1, Icon12, Icon2, InstagramIcon, LinkedinIcon, TwitterICon } from '../assets';
import { style } from '../style/style';
import Button from '../comoponent/specific/form/Button';
import InputWithLabel from '../comoponent/specific/form/InputWithLabel';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../comoponent/layout/Base/Footer';
import MainHeader from '../comoponent/layout/Base/MainHeader';

const Home = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <BusinessCard imagen={Avatar} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <BusinessCard imagen={Avatar} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <BusinessCard imagen={Avatar} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <BusinessCard imagen={Avatar} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <BusinessCard imagen={Avatar} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <BusinessCard imagen={Avatar} />
      )
    },
  ];
  const [showMission, setShowMission] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='w-full h-full overflow-hidden bg-white roboto-regular'>
      <MainHeader />
      <section className='my-10 h-full  flex items-center flex-col justify-center  '>

        <h1 className='text-xl md:text-2xl text-center font-bold 
        tracking-wider text-black'>
          Beauty beyond the shoreline
        </h1>
        <p className='font-semibold text-neutral-600 md:text-xl text-center w-5/6 md:w-1/2'>we believe in enhancing every individual's natural beauty with our high-quality, cruelty-free products that are as gentle on the skin as they are on the environment.</p>
        <div className="relative flex flex-col items-center md:flex-row">
          {/* Rotated Icon */}
          <img
            src={Icon12}
            alt=""
            className="absolute h-28 md:h-40 -z-10 -left-10 -top-5 transform rotate-20"
            style={{ zIndex: 99 }}
          />

          {/* Main Banner Image (unchanged class) */}
          <img
            src={BeautyBanner1}
            className="w-5/6 my-10 ml-7 rounded-md md:ml-20 relative"
            style={{ zIndex: 9999 }}
          />

          {/* Rotated Cream Box Image */}
          <img
            src={CreamBox}
            alt=""
            className="absolute h-28 md:h-60 -z-10 -right-10 -bottom-14 transform rotate-10"
            style={{ zIndex: 99, transform: "rotate(43deg)" }}
          />

          {/* SVG Decoration */}
          <svg
            width="80"  // Adjusted width for mobile
            height="120"  // Adjusted height for mobile
            viewBox="0 0 104 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 9999, transform: "rotate(20deg)" }}
            className="absolute right-10 md:right-36 -bottom-10 hidden md:block md:-bottom-28"  // Responsive positioning
          >
            <path
              d="M100.87 4.00006L51.8293 43.2731C36.8618 55.2594 35.4094 77.5073 48.6915 91.3378V91.3378C64.4974 107.796 58.9576 134.98 37.9718 143.941L2.83986 158.942"
              stroke="#E97CB2"
              strokeWidth="10"
            />
          </svg>
        </div>

        <div className='my-12 relative'>

          <div className='flex justify-around w-full gap-20'>
            <button type="button"
              onClick={() => navigate('/beauty')}
              className='bg-white text-black shadow-xl py-1 px-3 shadow-neutral-500 hover:bg-sky-400 rounded ease-in-out' >Learn more</button>
            <button type="button" onClick={() => navigate('beauty')} className="bg-[#F1C27D] shadow-xl py-1 px-3 shadow-neutral-500 hover:ease-in-out hover:text-sky-600 hover:sha">Shop Now</button>
          </div>
          <svg width="100" height="150" viewBox="0 0 168 151" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-20 md:left-14 top-2'>
            <path d="M168 2L161.166 11.3075L156.522 0.735287L168 2ZM77.6725 46.166L78.2313 46.9954L77.6725 46.166ZM52.3096 137.566L52.5451 138.538L52.3096 137.566ZM0.764481 149.028L52.074 136.594L52.5451 138.538L1.23552 150.972L0.764481 149.028ZM77.1138 45.3367L92.6407 34.8763L93.7582 36.5351L78.2313 46.9954L77.1138 45.3367ZM100.442 30.5804L159.358 4.70367L160.162 6.53482L101.246 32.4116L100.442 30.5804ZM92.6407 34.8763C95.1077 33.2143 97.7186 31.7766 100.442 30.5804L101.246 32.4116C98.6322 33.5598 96.1261 34.9398 93.7582 36.5351L92.6407 34.8763ZM69.1469 90.263C58.6185 75.7295 62.23 55.3637 77.1138 45.3367L78.2313 46.9954C64.2857 56.3904 60.9018 75.4724 70.7666 89.0897L69.1469 90.263ZM52.074 136.594C72.6207 131.615 81.5497 107.384 69.1469 90.263L70.7666 89.0897C84.0038 107.363 74.474 133.224 52.5451 138.538L52.074 136.594Z" fill="black" />
          </svg>

          <p className='text-black text-xl font-semibold roboto-regular-italic md:-ml-16 mt-24' style={{ fontFamily: "cursive" }}>10% off on <br /> first buy</p>
        </div>

      </section>

      <section className='my-10 h-full  flex items-center flex-col justify-center'>
        <h4 className='text-xl md:text-2xl text-center font-bold
        tracking-widest text-black'>
          Sparkle,Giggle,Repeat! <br />
          Let's dress up the fun!

        </h4>
        <p className='roboto-light text-neutral-900 my-5 md:text-xl 
        text-center w-5/6 md:w-1/2'>Inspired by the playful and gentle nature of beluga whales, we aim to create clothing that mirrors the innocence and wonder of your little ones. Baby Beluga is all about
          celebrating your child’s early years with clothing that’s as unique and special as they are.</p>
        <div className="relative flex flex-col items-center md:flex-row">
          {/* Rotated Icon */}
          <img
            src={BelugaChild}
            alt=""
            className="absolute h-28 md:h-40 -z-10 right-0 md:right-7 -top-5 transform rotate-20"
            style={{ zIndex: 99 }}
          />

          {/* Main Banner Image (unchanged class) */}
          <img
            src={Beluga}
            className="w-5/6 my-10 ml-7 rounded-md md:ml-20 relative"
            style={{ zIndex: 9999 }}
          />

          {/* Rotated Cream Box Image */}
          <img
            src={BelugaTshirt}
            alt=""
            className="absolute h-28 md:h-60 -z-10 left-10 -bottom-10 md:-bottom-36 transform rotate-10"
            style={{ zIndex: 99999, transform: "rotate(0)" }}
          />

        </div>
        <div className='my-12 relative'>

          <div className='flex justify-around w-full gap-20'>
            <button type="button"
              onClick={() => navigate('/kids-wear')}
              className='bg-white text-black shadow-xl py-1 px-3 shadow-neutral-500 hover:bg-sky-400 rounded ease-in-out' >Learn more</button>
            <button type="button" onClick={() => navigate('/kids-wear')} className="bg-sky-500 rounded-sm shadow-xl py-1 px-3 shadow-neutral-500 hover:ease-in-out hover:text-white hover:sha">Shop Now</button>
          </div>
          <svg width="100" height="150" viewBox="0 0 168 151" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-20 md:left-14 top-2'>
            <path d="M168 2L161.166 11.3075L156.522 0.735287L168 2ZM77.6725 46.166L78.2313 46.9954L77.6725 46.166ZM52.3096 137.566L52.5451 138.538L52.3096 137.566ZM0.764481 149.028L52.074 136.594L52.5451 138.538L1.23552 150.972L0.764481 149.028ZM77.1138 45.3367L92.6407 34.8763L93.7582 36.5351L78.2313 46.9954L77.1138 45.3367ZM100.442 30.5804L159.358 4.70367L160.162 6.53482L101.246 32.4116L100.442 30.5804ZM92.6407 34.8763C95.1077 33.2143 97.7186 31.7766 100.442 30.5804L101.246 32.4116C98.6322 33.5598 96.1261 34.9398 93.7582 36.5351L92.6407 34.8763ZM69.1469 90.263C58.6185 75.7295 62.23 55.3637 77.1138 45.3367L78.2313 46.9954C64.2857 56.3904 60.9018 75.4724 70.7666 89.0897L69.1469 90.263ZM52.074 136.594C72.6207 131.615 81.5497 107.384 69.1469 90.263L70.7666 89.0897C84.0038 107.363 74.474 133.224 52.5451 138.538L52.074 136.594Z" fill="black" />
          </svg>

          <p className='text-black text-xl font-semibold roboto-regular-italic md:-ml-16 mt-24' style={{ fontFamily: "cursive" }}>Free Delivery</p>
        </div>

      </section>
      {/* <section className='md:my-5 my-0 flex justify-center flex-col items-center w-full '>
        <h1 className='text-2xl md:text-7xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-800 to-black'>
          OUR TOP MARKET  SETTER.
        </h1>
        <div className='w-full md:w-1/2 my-4'>


          <Coursael
            cards={cards}
            height="450px"
            width="100%"
            margin="0 "
            offset={100}
            showArrows={true}
          />
          <div className='my-2 flex gap-2 justify-center'>
            <img src={Icon1} alt="" className='rounded-full' />
            <img src={Icon2} alt="" className='rounded-full' />
            <img src={Icon1} alt="" className='rounded-full' />
            <div className='h-10 w-10 bg-green-700 rounded-full text-white px-2 py-2  font-semibold'>
              10+
            </div>
          </div>
        </div>



      </section> */}


      {/* <div className='flex flex-col sm:flex-row justify-between px-3'>


        <section className='flex md:my-3 flex-col w-full justify-center items-center h-full py-2 px-3'>
          <h1 className='text-4xl md:text-5xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-black'>
            UNTOLD MISSION
          </h1>
          <p className={`${style.paragraph} text-left w-full md:w-4/5 mt-4 text-neutral-600 text-xl font-semibold px-2 tracking-widest leading-9`}>
            At Untoldd, our mission is to empower creators by transforming their unique visions into thriving, sustainable brands.
            We believe that every creator has an untold story, a brand waiting to be born. Our goal is to make brand creation accessible, seamless, and impactful by providing end-to-end support—from manufacturing and packaging to marketing and distribution.  story, a brand waiting to be born. Our goal is to make brand creation accessible, seamless, and impactful by providing end-to-end support—from manufacturing and packaging to marketing and distribution. We are committed to
          </p>
          <div className='flex flex-col justify-center items-center w-full'>

            <p className={showMission ? 'no-underline text-neutral-700 text-xl font-semibold px-2' : ` text-center w-full  text-neutral-500 underline text-xl font-semibold px-2`}>redefining the traditional model of brand building by partnering with influencers,</p>
            <p className={showMission ? "inline  md:w-4/5 text-left w-full  text-neutral-700   text-xl font-semibold px-2 " : "hidden"}>giving them the tools and resources they need to succeed. We aim to democratize entrepreneurship, allowing creators to turn their passions into profitable businesses, and bring innovative, high-quality products to consumers worldwide.

              Untoldd is more than just a business; it’s a platform for creators to share their stories, build legacies, and inspire others. Our mission is to make these untold stories a reality, one brand at a time.</p>
            {
              showMission ? <Button text={'Read less'} className={'w-40 '} handlClick={() => setShowMission(false)} /> : <Button text={'Read more'} className={'w-40 '} handlClick={() => setShowMission(true)} />
            }
          </div>
        </section>
        <section className='flex md:my-3 flex-col w-full justify-center items-center h-full py-2 px-3'>
          <h1 className='text-4xl md:text-5xl text-center font-bold tracking-wider bg-clip-text text-transparent bg-black'>
            OUR VISSION
          </h1>
          <p className={`${style.paragraph} text-left w-full md:w-4/5 mt-4 text-neutral-600 text-xl font-semibold px-2 tracking-widest leading-9`}>
            At Untoldd, our mission is to empower influencers and creators to become successful entrepreneurs by building authentic and impactful
            brands. We believe in transforming creative visions into thriving businesses, offering end-to-end support from product development to sales.
            By providing a seamless platform and leveraging our expertise in branding, manufacturing, and logistics, we enable creators to focus on what they do
            best—creating, while we handle the rest. Our ultimate goal is to democratize brand creation, allowing influencers of all sizes to launch products that resonate deeply
            with their audiences and drive meaningful connections.
          </p>

        </section>
      </div> */}
      <section className='flex md:my-10 my-10 flex-col w-full justify-center items-center h-full py-2  px-3'>
        <p className='text-xl md:text-2xl text-center font-semibold tracking-wider bg-clip-text text-transparent bg-black'>
          About Untoldd
        </p>

        <div className='flex flex-col justify-center items-center  w-[95%] my-10 md:w-1/2 bg-[#D9D9D9] p-3 md:p-9 rounded-sm'>

          <p className={'no-underline text-neutral-700 text-xs md:text-xl  text-center trcking-wider '}>
            Untoldd was born out of a passion for entrepreneurship and a desire to change the way brands are created.
            As a team of digital marketing enthusiasts and e-commerce experts, we noticed a growing trend: influencers wanted
            to do more than just promote products—they wanted to create their own. </p>

          <p className={'no-underline text-neutral-700 text-xs md:text-xl  text-center trcking-wider mt-10'}>
            Untoldd is more than just a business; it's
            a movement to empower creators and bring untold stories to life. By partnering with influencers to create unique,
            high-quality products, we're not just launching brands—we're helping to write the next chapter in the story of influence
            r commerce.</p>
        </div>
      </section>

      <section className='flex md:my-10 my-10 flex-col w-full justify-center items-center h-full py-2  px-3'>
        <p className='text-xl md:text-2xl text-center font-semibold tracking-wider bg-clip-text text-transparent bg-black'>
          Explore our Vision and mission
        </p>

        <div className='flex flex-col justify-center items-center  w-[90%] my-10 '>
          <div className='flex flex-col md:flex-row gap-2 justify-around'>
            <div className='w-full md:w-2/4 flex flex-col justify-center items-center'>
              <p className={'no-underline text-neutral-700 text-xs md:text-xl  text-center trcking-wider '}>
                Untoldd was born out of a passion for entrepreneurship and a desire to change the way brands are created.
                As a team of digital marketing enthusiasts and e-commerce experts, we noticed a growing trend: influencers wanted
                to do more than just promote products—they wanted to create their own. </p>
              <Button className={'w-40  flex items-center gap-2 justify-center rounded-lg my-3'}  >
                Read more <FaArrowRight />
              </Button>
            </div >
            <div className='rounded-md bg-black text-white text-2xl flex justify-center items-center h-[150px]  md:w-2/6 px-4 md:px-10'>
              UNTOLDD MISSION
            </div>
          </div>

          <div className='flex flex-col md:flex-row-reverse gap-2 justify-around'>
            <div className='w-full md:w-2/4 flex flex-col justify-center items-center'>
              <p className={'no-underline text-neutral-700 text-xs md:text-xl  text-center trcking-wider '}>
                At Untoldd, our mission is to empower influencers and creators to become successful entrepreneurs
                by building authentic and impactful brands. We believe in transforming creative visions
                into thriving businesses, offering end-to-end support from product development to sales. </p>
              <Button className={'w-40  flex items-center gap-2 justify-center rounded-lg my-3'}  >
                Read more <FaArrowLeft />
              </Button>
            </div >
            <div className='rounded-md bg-black text-white text-2xl flex justify-center items-center h-[150px]  md:w-2/6 px-4 md:px-10'>
              UNTOLDD VISSION
            </div>
          </div>
        </div>
      </section>
      <section className='flex md:my-20 my-10 flex-col w-full  h-full py-2  px-3'>
        <p className='text-xl md:text-2xl text-center font-semibold tracking-wider bg-clip-text text-transparent bg-black'>
          Fill the form to contact us
        </p>

        <div className='flex flex-col md:flex-row justify-around my-3'>
          <div className='my-2 md:w-1/3 w-full bg-[#D9D9D9] p-3 rounded-xl'>
            <InputWithLabel type='email' placeholder={'@example.com'} inputClassName={'bg-black text-black  rounded-2xl my-4 py-3 text-xl shadow-lg  '} />
            <InputWithLabel type='number' placeholder={'+9199339383'} inputClassName={'bg-black text-black  rounded-2xl my-4 py-3 text-xl shadow-lg  '} />
            <InputWithLabel type='text' placeholder={'Message'} inputClassName={'bg-black text-black  rounded-2xl my-4 py-3 text-xl shadow-lg  '} />
            <InputWithLabel type='button' value={'Submit'} inputClassName={'!bg-black text-white  rounded-2xl my-4 py-3 text-xl shadow-lg  '} />
          </div>
          <img src={Contactus} alt="" />
        </div>

      </section>
      <section className='flex md:my-20 my-10 flex-col w-full justify-center items-center h-full py-2  px-3'>
        <h1 className='text-4xl md:text-5xl text-center font-bold md:tracking-[20px] leading-10 bg-clip-text text-transparent bg-[#121211]'>
          FOLLOW US
        </h1>

        <div className='w-full md:w-1/4 my-5 flex justify-center items-center gap-3'>
          <Link to={'#'}>
            <img src={TwitterICon} alt="" className='w-4/5 h-10' />

          </Link>
          <Link to={'#'}>

            <img src={InstagramIcon} alt="" className='w-4/5 h-10' />

          </Link>
          <Link to={'#'}>

            <img src={LinkedinIcon} alt="" className='w-4/5 h-10' />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home