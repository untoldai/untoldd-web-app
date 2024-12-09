import React from 'react';
import { SimplicBanner } from '../../../assets';

const KidsWearHero = () => {
    return (
        <div className="overflow-hidden h-full md:h-screen mt-14 bg-[#FFFDF2] flex items-center justify-center relative">
        {/* Image added here */}
        <img 
            src={SimplicBanner} 
            alt="Kids Wear Banner"
            className="w-full h-[200px] md:h-full  " 
        />
        
       
    </div>
    );
}

export default KidsWearHero;
