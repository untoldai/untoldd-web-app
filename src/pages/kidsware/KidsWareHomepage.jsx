import React, { Suspense, useEffect, useState, lazy } from 'react'
import KidsWearHero from '../../comoponent/specific/main/KidsWearHero'
// Import Slick CSS
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import ProductSection from '../../comoponent/specific/main/TopDeals'
import { categorySection } from '../../constants/product';

import { BelugaTshirt } from '../../assets';
import { getProductByCategory } from '../../service/product/product.service';
import CardSkelton from '../../comoponent/skelton/CardSkeltion';
const Productcard = lazy(() => import('../../comoponent/shared/card/productcard'));
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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProductS = async () => {
    try {
      setIsLoading(true);
      const response = await getProductByCategory("Kids Wear");
      if (response.data && response.data.statusCode === 200) {
        setIsLoading(false);
        setProducts(response.data.data.products);
      }
    } catch (error) {
      setIsLoading(false);
      return error
    }
  }
  useEffect(() => {
    getProductS();
  }, [])
  return (
    <div className='w-[100vw] overflow-hidden'>
      <KidsWearHero />
      <ProductSection product={products[0]} />

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
        <p className='text-3xl font-bold  px-10 text-center'>Top Selling Products</p>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 '>
          {
            isLoading?
            <CardSkelton />
            :

            products && products.map((prd, i) => (
              <Suspense fallback={<CardSkelton />}>
                <Productcard product={prd} isLoading={isLoading} />
              </Suspense>
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