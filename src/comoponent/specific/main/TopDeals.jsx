import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import Rating from 'react-rating'; // Ensure this is installed

// Import Slick CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sales Sticker Animation
const SalesSticker = ({ isOpen }) => (
    <div className={`absolute top-0 left-0 transform transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} bg-red-600 text-white px-2 py-1 rounded-br-md`}>
        Sale
    </div>
);

const ProductSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'slick-dots custom-dots', // Custom class for styling dots
    };

    const products = [
        {
            id: 1,
            name: 'Cool T-shirt 1',
            price: 200,
            imageUrl: 'https://toytown-ishi.myshopify.com/cdn/shop/files/2_406586b1-ed7f-47d8-aae6-1db8593cde1d.png?v=1613688290',
        },
        {
            id: 2,
            name: 'Cool T-shirt 2',
            price: 250,
            imageUrl: 'https://toytown-ishi.myshopify.com/cdn/shop/files/3_7b823542-d383-4bf4-9107-2ef7c88b5a85.png?v=1613688290',
        },
        {
            id: 3,
            name: 'Cool T-shirt 3',
            price: 300,
            imageUrl: 'https://toytown-ishi.myshopify.com/cdn/shop/files/3_7b823542-d383-4bf4-9107-2ef7c88b5a85.png?v=1613688290',
        },
    ];

    return (
        <section className='px-4 py-10 flex flex-col lg:flex-row justify-around overflow-hidden'>
            <div className='relative w-full lg:w-2/3 mb-8 lg:mb-0 bg-white shrink-0'>
                {/* Banner for Top Sales */}
                <div className='bg-yellow-400 text-center p-5 rounded-md shadow-lg mb-6'>
                    <h2 className='text-3xl font-bold'>Top Sales</h2>
                    <p className='text-lg text-gray-700'>Don’t miss our best deals!</p>
                </div>

                {/* Carousel */}
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className='flex flex-row  shadow-md'>
                            {/* Image Side */}

                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className=' w-full h-[450px]' // Full height for the image
                            />

                            {/* Details Side */}

                        </div>
                    ))}
                </Slider>

                {/* Additional Content */}
                <div className='mt-6'>
                    <h3 className='text-2xl font-semibold mb-2'>Featured Products</h3>
                    <p className='text-gray-600'>Explore our exclusive range of trendy and stylish kids' wear.</p>
                </div>
            </div>

            <div className='bg-white shadow-xl p-6 rounded-lg w-full lg:w-1/4'>
                <img
                    src='https://uneno.madrasthemes.com/wp-content/uploads/2018/10/iyuviyvUntitled-1-400x439.jpg'
                    style={{ mixBlendMode: 'multiply' }}
                    alt='Cool T-shirt'
                    className='w-full'
                />
                <SalesSticker isOpen={true} />
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
                        <p className='text-2xl text-black'>
                            <FaRupeeSign className='text-black' /> 200
                        </p>
                    </div>
                </div>
                <button className='mt-4 w-full bg-orange-600 text-white py-2 rounded-md font-bold hover:bg-orange-500 transition duration-300'>
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default ProductSection;
