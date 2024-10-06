import React from 'react';
import { appColor } from '../../../style/style'; // Assuming this is being used elsewhere

const KidsWearHero = () => {
    return (
        <div 
            className='overflow-hidden h-full bg-[#FFFDF2] min-h-screen flex items-center bg-cover bg-center'
            style={{
                backgroundImage: "url('https://duyn491kcolsw.cloudfront.net/files/2v/2v2/2v244s.jpg?ph=cd1d157765')",
            }}
        >
            <div className='mx-4 md:ml-36 mt-20'>
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
