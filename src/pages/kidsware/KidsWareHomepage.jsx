import React, { Suspense, useEffect, useState, lazy } from 'react'
import KidsWearHero from '../../comoponent/specific/main/KidsWearHero'
// Import Slick CSS
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { getProductByCategory } from '../../service/product/product.service';
import CardSkelton from '../../comoponent/skelton/CardSkeltion';
import HomeBlog from '../../comoponent/specific/homepage/HomeBlogs';
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
      const response = await getProductByCategory("");
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
      {/* <ProductSection product={products[0]} /> */}

      {/* <section className='px-20  my-10'>
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

      </section> */}

      <ProductSectionmain title="Top Selling Product" products={products} isLoading={isLoading} />
      
      <LimitedTimeOffer />
      <section className="py-16 hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Shop the Look</h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10  px-0 sm:px-5'>
            {
              isLoading ?
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
      </section>
      <section className="py-16 bg-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Eco-friendly Products</h2>
          <p className="mb-4">Browse our range of sustainable and environmentally friendly products</p>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10  px-0 sm:px-5'>
            {
              isLoading ?
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
      </section>
      <div className='px-0 md:px-40 flex justify-center items-center  my-4'>
        <WhyUntoldd />


      </div>
      <HomeBlog />
    </div>
  )
}
const ProductSectionmain = ({ title, products, isLoading }) => {

  return (
    <div className='p-5 my-10 '>
      <p className='text-3xl font-bold  px-10 text-center'>{title}</p>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10  px-0 sm:px-5'>
        {
          isLoading ?
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
  )

}

const LimitedTimeOffer = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const countdownDate = new Date("Dec 25, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 2 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 text-white my-3 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Limited Time Offer!</h2>
        <p className="text-xl">Hurry up, this offer ends in:</p>
        <div className="mt-4 text-4xl font-bold">{timeLeft}</div>
        <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300">Shop Now</button>
      </div>
    </section>
  );
};

const WhyUntoldd = () => {

  return (
    <div>
      <h2 className='font-bold text-xl sm:text-3xl text-center my-5 '>Why Untoldd?</h2>

      <div className='flex flex-col sm:flex-row justify-around gap-3 px-10 sm:px-20 '>

        <div className='flex flex-col justify-around gap-2  items-center text-center bg-white text-black rounded-md shadow-2xl  w-[95%] sm:w-72 h-60 p-4'>
          <svg width="65" height="43" viewBox="0 0 65 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.917 25.5373V36.1666H53.2749C54.3422 36.1666 55.2075 35.3013 55.2075 34.234C55.2075 33.2956 55.2075 26.4738 55.2075 25.5373L35.5622 22.9603L15.917 25.5373Z" fill="#8B9BA9" />
            <path d="M51.3422 25.022V32.3015H15.917V36.1667H53.2749C54.3422 36.1667 55.2075 35.3014 55.2075 34.2341C55.2075 33.3448 55.2075 26.4096 55.2075 25.5373L51.3422 25.022Z" fill="#6C7A88" />
            <path d="M56.9474 0.0691833H21.7157C20.6484 0.0691833 19.7831 0.934476 19.7831 2.00179V8.02444H6.89457C5.08668 8.02444 3.52024 9.2778 3.12354 11.0416L1.66081 17.5463C1.28511 19.2171 1.09546 20.9245 1.09546 22.637V36.1664H19.7831C19.7831 35.8519 19.7831 31.0719 19.7831 25.5371H56.9475C58.0148 25.5371 58.8801 24.6718 58.8801 23.6045V2.00179C58.88 0.934347 58.0149 0.0691833 56.9474 0.0691833Z" fill="#FF7E40" />
            <path d="M64.034 17.2374H58.8801V13.7694H61.4571C61.9909 13.7694 62.4234 13.3368 62.4234 12.8031C62.4234 12.2695 61.9909 11.8368 61.4571 11.8368H58.8801V8.36883H62.7455C63.2793 8.36883 63.7118 7.93618 63.7118 7.40252C63.7118 6.86887 63.2793 6.43622 62.7455 6.43622H58.8801V2.96809H64.034C64.5678 2.96809 65.0003 2.53545 65.0003 2.00179C65.0003 1.46813 64.5678 1.03549 64.034 1.03549H58.6195C58.2852 0.45841 57.6625 0.0691833 56.9475 0.0691833H55.0149V21.672H19.7831C19.7831 14.8735 19.7831 8.20791 19.7831 8.02431H15.9179V25.5372H13.019C10.2018 25.5372 7.63901 26.641 5.735 28.4361H1.09546V36.1665H19.7831C19.7831 35.9044 19.7831 31.1025 19.7831 25.5372H31.6949H56.9475C57.6625 25.5372 58.2852 25.148 58.6195 24.5709H62.7455C63.2793 24.5709 63.7118 24.1383 63.7118 23.6046C63.7118 23.0709 63.2793 22.6383 62.7455 22.6383H58.8801V19.1702H64.034C64.5678 19.1702 65.0003 18.7375 65.0003 18.2039C65.0003 17.6702 64.5678 17.2374 64.034 17.2374Z" fill="#FF6344" />
            <path d="M0.966303 36.1663H8.03913V32.3011H0.966303C0.432646 32.3011 0 32.7338 0 33.2674V35.2C0 35.7338 0.432646 36.1663 0.966303 36.1663Z" fill="#8B9BA9" />
            <path d="M15.9179 11.8895H6.66405L4.82666 20.0602H15.9179V11.8895Z" fill="#9DC6FB" />
            <path d="M12.2832 16.195H5.69582L4.82666 20.0602H15.9179V11.8895H12.2832V16.195Z" fill="#80B4FB" />
            <path d="M45.8667 42.9305C49.6024 42.9305 52.6308 39.9021 52.6308 36.1663C52.6308 32.4306 49.6024 29.4022 45.8667 29.4022C42.1309 29.4022 39.1025 32.4306 39.1025 36.1663C39.1025 39.9021 42.1309 42.9305 45.8667 42.9305Z" fill="#4D5967" />
            <path d="M47.2499 29.5449C46.4571 31.0097 46.6788 32.8784 47.917 34.1164L43.8173 38.2161C42.5792 36.978 40.7105 36.7561 39.2456 37.5491C39.8857 40.6177 42.6112 42.9304 45.8671 42.9304C49.5969 42.9304 52.6312 39.8961 52.6312 36.1663C52.6311 32.9104 50.3185 30.185 47.2499 29.5449Z" fill="#35404A" />
            <path d="M45.8664 39.0654C47.4675 39.0654 48.7654 37.7675 48.7654 36.1665C48.7654 34.5655 47.4675 33.2676 45.8664 33.2676C44.2654 33.2676 42.9675 34.5655 42.9675 36.1665C42.9675 37.7675 44.2654 39.0654 45.8664 39.0654Z" fill="#FFF9EB" />
            <path d="M13.0188 42.9305C16.7545 42.9305 19.7829 39.9021 19.7829 36.1663C19.7829 32.4306 16.7545 29.4022 13.0188 29.4022C9.28304 29.4022 6.25464 32.4306 6.25464 36.1663C6.25464 39.9021 9.28304 42.9305 13.0188 42.9305Z" fill="#4D5967" />
            <path d="M14.402 29.5449C13.6092 31.0097 13.8309 32.8784 15.069 34.1164L10.9693 38.2161C9.73132 36.978 7.86262 36.7561 6.39771 37.5491C7.03778 40.6177 9.76327 42.9304 13.0192 42.9304C16.749 42.9304 19.7833 39.8961 19.7833 36.1663C19.7833 32.9104 17.4708 30.185 14.402 29.5449Z" fill="#35404A" />
            <path d="M13.0185 39.0654C14.6196 39.0654 15.9175 37.7675 15.9175 36.1665C15.9175 34.5655 14.6196 33.2676 13.0185 33.2676C11.4175 33.2676 10.1196 34.5655 10.1196 36.1665C10.1196 37.7675 11.4175 39.0654 13.0185 39.0654Z" fill="#FFF9EB" />
            <path d="M29.5606 10.8712V11.8375H30.7845C31.3182 11.8375 31.7505 12.2699 31.7505 12.8036C31.7505 13.3374 31.3182 13.7699 30.7845 13.7699H29.5606V15.7023C29.5606 16.2361 29.128 16.6686 28.5945 16.6686C28.0609 16.6686 27.6284 16.2362 27.6284 15.7023V9.90512C27.6284 9.37146 28.0609 8.93907 28.5945 8.93907H31.5574C32.0911 8.93907 32.5235 9.37146 32.5235 9.90512C32.5235 10.4389 32.0911 10.8714 31.5574 10.8714H29.5606V10.8712Z" fill="#FFF9EB" />
            <path d="M38.7694 15.0216C39.1449 15.4004 39.1424 16.0122 38.7636 16.3879C38.575 16.5746 38.3292 16.668 38.0832 16.668C37.8346 16.668 37.586 16.5727 37.3971 16.3821L35.7645 14.7357H35.2491V15.7017C35.2491 16.2355 34.8165 16.668 34.2829 16.668C33.7494 16.668 33.3169 16.2356 33.3169 15.7017V9.90454C33.3169 9.37088 33.7494 8.93849 34.2829 8.93849H36.1672C37.7565 8.93849 39.0495 10.2389 39.0495 11.837C39.0495 12.7799 38.5992 13.6188 37.9036 14.1485L38.7694 15.0216ZM37.117 11.837C37.117 11.3041 36.6908 10.8707 36.1672 10.8707H35.2491V12.8031H36.1672C36.6908 12.8031 37.117 12.3696 37.117 11.837Z" fill="#FFF9EB" />
            <path d="M45.0383 15.7016C45.0383 16.2354 44.606 16.6679 44.0723 16.6679H41.1094C40.5758 16.6679 40.1433 16.2355 40.1433 15.7016V9.90439C40.1433 9.37073 40.5758 8.93834 41.1094 8.93834H44.0723C44.606 8.93834 45.0383 9.37073 45.0383 9.90439C45.0383 10.4382 44.606 10.8707 44.0723 10.8707H42.0755V11.837H43.2994C43.833 11.837 44.2654 12.2694 44.2654 12.8032C44.2654 13.337 43.833 13.7695 43.2994 13.7695H42.0755V14.7356H44.0723C44.606 14.7355 45.0383 15.1679 45.0383 15.7016Z" fill="#FFF9EB" />
            <path d="M51.0339 15.7016C51.0339 16.2354 50.6016 16.6679 50.0679 16.6679H47.105C46.5714 16.6679 46.1389 16.2355 46.1389 15.7016V9.90439C46.1389 9.37073 46.5714 8.93834 47.105 8.93834H50.0679C50.6016 8.93834 51.0339 9.37073 51.0339 9.90439C51.0339 10.4382 50.6016 10.8707 50.0679 10.8707H48.0711V11.837H49.295C49.8286 11.837 50.261 12.2694 50.261 12.8032C50.261 13.337 49.8286 13.7695 49.295 13.7695H48.0711V14.7356H50.0679C50.6016 14.7355 51.0339 15.1679 51.0339 15.7016Z" fill="#FFF9EB" />
          </svg>
          <p className="text-xl font-semibold text-gray-800">Fast Delivery</p>
          <span className="text-gray-500 text-lg">Enjoy fast and reliable delivery with every order. We ensure your products arrive on time, every time.</span>


        </div>
        <div className='flex flex-col justify-around items-center text-center bg-white text-black rounded-md shadow-2xl  w-[95%] sm:w-72 h-60 p-4'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_146_3093)">
              <path d="M64.6517 24.2826C64.4096 24.0226 64.0607 23.8885 63.7055 23.8885H59.8065C58.232 17.373 54.5504 11.4686 49.3506 7.16219C43.7775 2.54706 36.7175 0.00380859 29.4693 0C29.3499 0 29.2294 0.0255176 29.1277 0.0881055C28.8534 0.25708 28.755 0.580811 28.8587 0.857568L32.3393 10.1463C32.4321 10.3943 32.669 10.5584 32.9337 10.5584C41.1644 10.5584 48.3763 16.0847 50.5995 23.8885H47.2517C46.8964 23.8885 46.5476 24.0226 46.3055 24.2826C45.8493 24.7726 45.8515 25.4909 46.2513 25.9707L54.5033 35.873C54.7445 36.1625 55.1019 36.3299 55.4787 36.3299C55.8555 36.3299 56.2127 36.1626 56.454 35.873L64.706 25.9707C65.1057 25.4909 65.1078 24.7726 64.6517 24.2826Z" fill="#507BE9" />
              <path d="M28.8184 29.834C36.5309 29.834 42.7832 23.5817 42.7832 15.8691C42.7832 8.15657 36.5309 1.9043 28.8184 1.9043C21.1058 1.9043 14.8535 8.15657 14.8535 15.8691C14.8535 23.5817 21.1058 29.834 28.8184 29.834Z" fill="#FFEE78" />
              <path d="M42.7832 15.8691C42.7832 8.15661 36.5309 1.9043 28.8184 1.9043V29.834C36.5309 29.834 42.7832 23.5817 42.7832 15.8691Z" fill="#FCD232" />
              <path d="M28.8184 31.7383C20.0681 31.7383 12.9492 24.6194 12.9492 15.8691C12.9492 7.1189 20.0681 0 28.8184 0C37.5686 0 44.6875 7.1189 44.6875 15.8691C44.6875 24.6194 37.5686 31.7383 28.8184 31.7383ZM28.8184 3.80859C22.1682 3.80859 16.7578 9.21896 16.7578 15.8691C16.7578 22.5193 22.1682 27.9297 28.8184 27.9297C35.4685 27.9297 40.8789 22.5193 40.8789 15.8691C40.8789 9.21896 35.4685 3.80859 28.8184 3.80859Z" fill="#FCD232" />
              <path d="M40.8789 15.8691C40.8789 22.5193 35.4685 27.9297 28.8184 27.9297V31.7383C37.5686 31.7383 44.6875 24.6194 44.6875 15.8691C44.6875 7.1189 37.5686 0 28.8184 0V3.80859C35.4685 3.80859 40.8789 9.21896 40.8789 15.8691Z" fill="#F7B90F" />
              <path d="M33.8965 19.043C33.8965 16.2429 31.6184 13.9648 28.8184 13.9648C28.1183 13.9648 27.5488 13.3953 27.5488 12.6953C27.5488 11.9953 28.1183 11.4258 28.8184 11.4258C29.4196 11.4258 29.9427 11.8521 30.062 12.4395C30.2712 13.4701 31.2771 14.136 32.3073 13.9268C33.3379 13.7174 34.0038 12.7122 33.7945 11.6815C33.4491 9.9808 32.2616 8.61732 30.7227 7.99068V7.61719C30.7227 6.56551 29.87 5.71289 28.8184 5.71289C27.7667 5.71289 26.9141 6.56551 26.9141 7.61719V7.98903C25.0551 8.74402 23.7402 10.5685 23.7402 12.6953C23.7402 15.4954 26.0183 17.7734 28.8184 17.7734C29.5184 17.7734 30.0879 18.3429 30.0879 19.043C30.0879 19.743 29.5184 20.3125 28.8184 20.3125C28.2171 20.3125 27.6941 19.8862 27.5747 19.2988C27.3655 18.2682 26.3604 17.6026 25.3294 17.8115C24.2987 18.0209 23.633 19.0261 23.8422 20.0568C24.1876 21.7575 25.3751 23.1211 26.9139 23.7477V24.1211C26.9139 25.1728 27.7666 26.0254 28.8182 26.0254C29.8699 26.0254 30.7225 25.1728 30.7225 24.1211V23.7492C32.5816 22.9943 33.8965 21.1697 33.8965 19.043Z" fill="#FCD232" />
              <path d="M28.8184 13.9648V17.7734C29.5184 17.7734 30.0879 18.3429 30.0879 19.043C30.0879 19.743 29.5184 20.3125 28.8184 20.3125V26.0254C29.87 26.0254 30.7227 25.1728 30.7227 24.1211V23.7492C32.5816 22.9943 33.8965 21.1698 33.8965 19.043C33.8965 16.2429 31.6184 13.9648 28.8184 13.9648Z" fill="#F7B90F" />
              <path d="M30.062 12.4395C30.2712 13.4701 31.2771 14.136 32.3073 13.9268C33.3379 13.7174 34.0038 12.7122 33.7945 11.6815C33.4491 9.9808 32.2616 8.61732 30.7227 7.99068V7.61719C30.7227 6.56551 29.87 5.71289 28.8184 5.71289V11.4258C29.4196 11.4258 29.9427 11.8521 30.062 12.4395Z" fill="#F7B90F" />
              <path d="M64.196 44.5536C62.7885 42.5434 60.0178 42.0549 58.0077 43.4624L44.3864 53.0002C43.8528 53.3738 43.2173 53.5741 42.566 53.5741H32.5V62.4608H43.3664C45.3205 62.4608 47.2271 61.8597 48.8277 60.7388L63.1047 50.7419C65.115 49.3344 65.6037 46.5638 64.196 44.5536Z" fill="#FABE8C" />
              <path d="M44.3864 53.0004C43.8528 53.3741 43.2173 53.5744 42.566 53.5744L32.5 52.7939V57.383H42.7832C47.3333 57.383 51.0352 53.6812 51.0352 49.131C51.0352 48.8745 51.0217 48.6211 50.9987 48.3705L44.3864 53.0004Z" fill="#E6A578" />
              <path d="M64.196 44.5537C62.7885 42.5435 60.0178 42.055 58.0077 43.4625L46.5518 51.4841C46.9789 50.8014 47.2266 49.9953 47.2266 49.1309C47.2266 46.6769 45.2372 44.6875 42.7832 44.6875H31.9922L30.7501 43.7559C28.2764 41.9006 25.2112 40.8789 22.119 40.8789C19.5123 40.8789 16.9532 41.5877 14.7181 42.9288C14.7181 42.9288 12.6004 44.1995 11.3345 44.9589C10.7609 45.3031 10.4102 45.9229 10.4102 46.5918V60.5566C10.4102 61.6083 11.2628 62.4609 12.3145 62.4609H43.3664C45.3205 62.4609 47.2271 61.8598 48.8277 60.7389L63.1047 50.742C65.115 49.3345 65.6037 46.5639 64.196 44.5537Z" fill="#FFD2AA" />
              <path d="M32.5 62.4608H43.3664C45.3205 62.4608 47.2271 61.8597 48.8277 60.7388L63.1047 50.7419C65.1149 49.3344 65.6034 46.5638 64.1959 44.5536C62.7883 42.5434 60.0177 42.0549 58.0075 43.4624L46.5517 51.484C46.9789 50.8013 47.2266 49.9952 47.2266 49.1308C47.2266 46.6768 45.2372 44.6874 42.7832 44.6874H32.5V62.4608Z" fill="#FABE8C" />
              <path d="M50.9987 48.3705L46.5518 51.4842C46.5243 51.5283 46.4967 51.5725 46.4676 51.6154C45.6692 52.7973 44.3169 53.5744 42.7832 53.5744H29.4531C28.4014 53.5744 27.5488 54.427 27.5488 55.4787C27.5488 56.5304 28.4014 57.383 29.4531 57.383H42.7832C47.3333 57.383 51.0352 53.6812 51.0352 49.131C51.0352 48.8745 51.0217 48.6211 50.9987 48.3705Z" fill="#FABE8C" />
              <path d="M12.3145 65H1.9043C0.852617 65 0 64.1474 0 63.0957V41.5137C0 40.462 0.852617 39.6094 1.9043 39.6094H12.3145C13.3661 39.6094 14.2188 40.462 14.2188 41.5137V63.0957C14.2188 64.1474 13.3661 65 12.3145 65Z" fill="#6496F7" />
              <path d="M50.9987 48.3705L46.5518 51.4842C46.5243 51.5283 46.4967 51.5725 46.4676 51.6154C45.6692 52.7973 44.3169 53.5744 42.7832 53.5744H32.5V57.383H42.7832C47.3333 57.383 51.0352 53.6812 51.0352 49.131C51.0352 48.8745 51.0217 48.6211 50.9987 48.3705Z" fill="#E6A578" />
            </g>
            <defs>
              <clipPath id="clip0_146_3093">
                <rect width="65" height="65" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-xl font-semibold text-gray-800">Unique</p>
          <span className="text-gray-500 text-lg">Discover our one-of-a-kind products, crafted to stand out and meet your needs with unparalleled quality and design.</span>


        </div>
        <div className='flex flex-col justify-around items-center text-center bg-white text-black rounded-md shadow-2xl  w-[95%] sm:w-72 h-60 p-4'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_146_3060)">
              <path d="M15.9447 36.5387L8.104 58.7719L15.9925 58.6951L25.7211 36.5387H15.9447Z" fill="#80AAFF" />
              <path d="M25.7206 36.5387L19.5984 59.9339L25.7643 65.0003L32.4996 45.2937V36.5387H25.7206Z" fill="#80AAFF" />
              <path d="M23.592 36.5387L15.9929 58.6951L18.0672 58.675L19.5993 59.9339L27.6233 36.5387H23.592Z" fill="#EAF1FF" />
              <path d="M49.056 36.5387L56.8967 58.7719L49.0082 58.6951L39.2795 36.5387H49.056Z" fill="#6680FF" />
              <path d="M39.2795 36.5387L45.4017 59.9339L39.2358 65.0003L32.5005 45.2937V36.5387H39.2795Z" fill="#6680FF" />
              <path d="M41.4085 36.5387L49.0076 58.6951L46.9333 58.675L45.4012 59.9339L37.3772 36.5387H41.4085Z" fill="#B3CCFF" />
              <path d="M32.4992 1.90625L31.1433 23.0483L32.4992 43.3854C43.9534 43.3854 53.2388 34.1 53.2388 22.6459C53.2388 11.1917 43.9534 1.90625 32.4992 1.90625Z" fill="#EAF1FF" />
              <path d="M11.7598 22.6459C11.7598 34.1 21.0452 43.3854 32.4994 43.3854V1.90625C21.0452 1.90625 11.7598 11.1917 11.7598 22.6459Z" fill="#F9F9F9" />
              <path d="M55.1454 22.6462C55.1454 10.159 44.9863 0 32.4992 0L31.1433 1.35585L32.4992 3.8132C42.8837 3.8132 51.3322 12.2616 51.3322 22.6462C51.3322 33.0307 42.8837 41.4791 32.4992 41.4791L31.1433 43.3857L32.4992 45.2923C44.9863 45.2923 55.1454 35.1333 55.1454 22.6462Z" fill="#FDAE02" />
              <path d="M32.4996 41.4791C22.1151 41.4791 13.6667 33.0307 13.6667 22.6462C13.6667 12.2616 22.1151 3.8132 32.4996 3.8132V0C20.0125 0 9.85352 10.159 9.85352 22.6462C9.85352 35.1333 20.0125 45.2923 32.4996 45.2923V41.4791Z" fill="#FDCB02" />
              <path d="M43.8973 15.0947L37.9609 17.0357L32.5 12.4162L31.1443 21.6925L32.5 31.2679H43.8973V15.0947Z" fill="#FD9002" />
              <path d="M32.5002 12.4162L27.0394 17.0357L21.103 15.0947V31.2679H32.5002V12.4162Z" fill="#FDAE02" />
            </g>
            <defs>
              <clipPath id="clip0_146_3060">
                <rect width="65" height="65" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-xl font-semibold text-gray-800">24/7 Support</p>
          <span className="text-gray-500 text-lg">Our dedicated support team is available around the clock to assist you with any questions or concerns, anytime, anywhere.</span>

        </div>

      </div>
    </div>
  )
}


export default KidsWareHomepage