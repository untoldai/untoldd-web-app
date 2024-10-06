import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BeautySlider1, BeautySlider2, BeautySlider3, BeautySlider4, BeautySlider5, Perfume, Product23 } from '../../../assets'; // Ensure you have a product image
import { motion } from 'framer-motion';

const BeautyHero = () => {
    const [slideIn, setSlideIn] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'slick-dots custom-dots',
        beforeChange: () => setSlideIn(false),
        afterChange: () => setSlideIn(true),
    };

    const slideAnimation = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 },
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='relative w-full h-screen flex justify-center items-center bg-pink-200'>
                    {/* Background Image */}
                    <motion.img
                        src={BeautySlider4}
                        alt="Beauty Product"
                        className='absolute inset-0 object-cover w-full h-full opacity-30 cursor-pointer rounded-lg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className='flex flex-col justify-around items-sart md:w-2/5 relative z-10 p-10 m-20'
                        initial={slideIn ? slideAnimation.initial : slideAnimation.exit}
                        animate={slideIn ? slideAnimation.animate : slideAnimation.exit}
                        transition={slideAnimation.transition}
                    >
                        <h2 className='text-3xl font-bold mb-4 text-pink-600'>
                            Discover Your Beauty
                        </h2>
                        <p className='text-lg mb-6 text-gray-700'>
                            Explore our exclusive range of beauty products tailored for you.
                        </p>
                        <motion.button
                            className='bg-pink-500  text-white py-2 px-2 rounded shadow-md hover:bg-pink-600 transition duration-300'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{width:"150px"}}
                        >
                            Shop Now
                        </motion.button>

                        {/* New product section */}
                        <div className='mt-8'>
                            <motion.img
                                src={Product23} // Replace with your product image path
                                alt="Featured Product"
                                className='h-[200px] w-[200px] rounded-lg '
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className='mt-4 text-left'>
                                <h3 className='text-xl font-semibold text-pink-600'>Product Name</h3>
                                <p className='text-lg text-gray-800'>$29.99</p>
                                <span className='bg-green-200 text-green-800 text-sm px-2 py-1 rounded-md'>Sale!</span>
                                <div className='flex items-center mt-2'>
                                    <span className='text-yellow-500 mr-2'>★★★★☆</span>
                                    <span className='text-gray-600'>(120 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='relative w-full h-screen flex justify-center items-center bg-pink-200'>
                    {/* Background Image */}
                    <motion.img
                        src={BeautySlider3}
                        alt="Beauty Product"
                        className='absolute inset-0 object-cover w-full h-full opacity-30 cursor-pointer rounded-lg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className='flex flex-col justify-around items-sart md:w-2/5 relative z-10 p-10 m-20'
                        initial={slideIn ? slideAnimation.initial : slideAnimation.exit}
                        animate={slideIn ? slideAnimation.animate : slideAnimation.exit}
                        transition={slideAnimation.transition}
                    >
                        <h2 className='text-3xl font-bold mb-4 text-pink-600'>
                            Discover Your Beauty
                        </h2>
                        <p className='text-lg mb-6 text-gray-700'>
                            Explore our exclusive range of beauty products tailored for you.
                        </p>
                        <motion.button
                            className='bg-pink-500 text-white py-2 px-6 w-42 rounded shadow-md hover:bg-pink-600 transition duration-300'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{width:"150px"}}
                        >
                            Shop Now
                        </motion.button>

                        {/* New product section */}
                        <div className='mt-8'>
                            <motion.img
                                src={Product23} // Replace with your product image path
                                alt="Featured Product"
                                className='h-[200px] w-[200px] rounded-lg '
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className='mt-4 text-left'>
                                <h3 className='text-xl font-semibold text-pink-600'>Product Name</h3>
                                <p className='text-lg text-gray-800'>$29.99</p>
                                <span className='bg-green-200 text-green-800 text-sm px-2 py-1 rounded-md'>Sale!</span>
                                <div className='flex items-center mt-2'>
                                    <span className='text-yellow-500 mr-2'>★★★★☆</span>
                                    <span className='text-gray-600'>(120 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='relative w-full h-screen flex justify-center items-center bg-pink-200'>
                    {/* Background Image */}
                    <motion.img
                        src={BeautySlider1}
                        alt="Beauty Product"
                        className='absolute inset-0 object-cover w-full h-full opacity-30 cursor-pointer rounded-lg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className='flex flex-col justify-around items-sart md:w-2/5 relative z-10 p-10 m-20'
                        initial={slideIn ? slideAnimation.initial : slideAnimation.exit}
                        animate={slideIn ? slideAnimation.animate : slideAnimation.exit}
                        transition={slideAnimation.transition}
                    >
                        <h2 className='text-3xl font-bold mb-4 text-pink-600'>
                            Discover Your Beauty
                        </h2>
                        <p className='text-lg mb-6 text-gray-700'>
                            Explore our exclusive range of beauty products tailored for you.
                        </p>
                        <motion.button
                            className='bg-pink-500 text-white py-2 px-6 w-42 rounded shadow-md hover:bg-pink-600 transition duration-300'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{width:"150px"}}
                        >
                            Shop Now
                        </motion.button>

                        {/* New product section */}
                        <div className='mt-8'>
                            <motion.img
                                src={Product23} // Replace with your product image path
                                alt="Featured Product"
                                className='h-[200px] w-[200px] rounded-lg '
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className='mt-4 text-left'>
                                <h3 className='text-xl font-semibold text-pink-600'>Product Name</h3>
                                <p className='text-lg text-gray-800'>$29.99</p>
                                <span className='bg-green-200 text-green-800 text-sm px-2 py-1 rounded-md'>Sale!</span>
                                <div className='flex items-center mt-2'>
                                    <span className='text-yellow-500 mr-2'>★★★★☆</span>
                                    <span className='text-gray-600'>(120 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Slider>
        </div>
    );
};

export default BeautyHero;
