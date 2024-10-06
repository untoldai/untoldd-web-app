import React from 'react'
import KidsWearHero from '../../comoponent/specific/main/KidsWearHero'
// Import Slick CSS
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import ProductSection from '../../comoponent/specific/main/TopDeals'
import { categorySection } from '../../constants/product';
import Rating from 'react-rating';
import { FaEye, FaRupeeSign, FaShoppingCart, FaStar } from 'react-icons/fa';
import { BelugaTshirt } from '../../assets';
const KidsWareHomepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots custom-dots', // Custom class for styling dots
    responsive: [
        {
            breakpoint: 768, // Adjust based on your mobile breakpoint
            settings: {
                slidesToShow: 1,  // Show only 1 slide on mobile
                slidesToScroll: 1,
            }
        }
    ]
};

  return (
    <div className='w-[100vw] overflow-hidden'>
      <KidsWearHero />
      <ProductSection />

      <section className='px-20  my-10'>
        <div>
          <h3 className=' text-5xl text-center my-5 font-bold text-orange-700 '>Shop By Category</h3>
        </div>

        <div>

          <Slider {...settings}>
            {
              categorySection.map((cat, index) => (
                <div key={index} className='text-left w-42 bg-transparent '>
                  <div className='bg-slate-100 rounded-full w-40 h-40 p-2 peer'>
                    <img src={cat.imgUrl} alt="" className='h-full w-full  cursor-pointer ' style={{ mixBlendMode: "multiply" }} />
                  </div>

                  <p className='text-2xl font-bold ml-10 peer-hover:animate-bounce'>{cat.title}</p>
                </div>
              ))
            }
          </Slider>
        </div>

      </section>

      <div className='p-5 my-10 '>
        <p className='text-3xl font-bold  px-10'>Top Selling Products</p>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 '>
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div className='bg-white shadow-xl p-6 rounded-lg w-full hover:bg-slate-100 cursor-pointer ' key={i}>
                <img
                  src={BelugaTshirt}
                  style={{ mixBlendMode: 'multiply' }}
                  alt='Cool T-shirt'
                  className='w-full'
                />
                {/* <SalesSticker isOpen={true} /> */}
                <div className='mt-2'>
                  <p className='text-xl font-medium'>Cool T-shirt</p>
                  <p className='text-gray-600 mb-2'>A stylish and comfortable T-shirt for your little one.</p>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <Rating
                        readonly
                        initialRating={5}
                        fullSymbol={<FaStar className='text-orange-600' />}
                      />
                    </div>
                    <p className='text-2xl text-black flex items-center'>
                      <FaRupeeSign className='text-black' /> 200
                    </p>
                  </div>
                </div>
                <div className='flex justify-between gap-2 '>
                  <button className='mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md font-bold hover:bg-orange-500 transition duration-300'>
                    <FaEye className='text-xl' /> View
                  </button>
                  <button className='mt-4 flex items-center justify-center gap-2 w-full border-2  text-black py-2 rounded-md font-bold + transition duration-300'>
                    <FaShoppingCart />  Add to Cart
                  </button>
                </div>

              </div>
            ))
          }
        </div>
      </div>
      <div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default KidsWareHomepage