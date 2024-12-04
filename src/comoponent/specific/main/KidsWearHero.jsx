import React from 'react';
import { SimplicBanner } from '../../../assets';

const KidsWearHero = () => {
    return (
        <div 
            className='overflow-hidden h-screen mt-14 bg-[#FFFDF2]  flex items-center bg-cover bg-center'
            style={{
                backgroundImage: `url(${SimplicBanner})`,
                backgroundSize: '100% 100%', // Ensures the background image covers the entire container
                backgroundPosition: 'left', // Keeps the background centered
                backgroundRepeat: 'no-repeat' // Prevents the background from repeating
            }}
        >
            <div className='mx-4 md:ml-36 mt-20 hidden'>
                <h2 className='text-2xl md:text-3xl font-bold tracking-widest leading-tight'>
                    Best Outfit for
                    <br /> Your Loved One
                </h2>
             
                <button className='bg-orange-700 text-white px-4 md:px-6 my-4 py-2 rounded-md text-lg md:text-xl font-bold hover:bg-orange-600 transition'>
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default KidsWearHero;
