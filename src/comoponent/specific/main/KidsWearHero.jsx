import React from 'react';
import Slider from 'react-slick';  // Import the Slider component from react-slick
import { Banner2, Banner3, Banner4, SimplicBanner } from '../../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const KidsWearHero = () => {
    const sliderSettings = {
        dots: true, // Show dots (indicators)
        infinite: true, // Enable infinite loop
        speed: 1000, // Transition speed in ms
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Duration for each slide
        arrows: true, // Enable next/prev arrows
    };

    const images = [
        SimplicBanner,
        Banner2,
        Banner3,
        Banner4
    ];

    return (
        
            <Slider {...sliderSettings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img 
                            src={image} 
                            alt={`Kids Wear Banner ${index + 1}`} 
                            className="w-full h-[200px] md:h-full object-cover" 
                        />
                    </div>
                ))}
            </Slider>
        
    );
}

export default KidsWearHero;
