import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideBanner = ({className,slideImages}) => {
  return (
    <Slide  autoplay={true} duration={2000} >
      {slideImages.map((slideImage, index) => (
        <div key={index} className={` h-[100px]  sm:h-[200px] -z-50
        flex justify-center   items-center ${className}`}>
          <img
            src={slideImage.imgSrc}
            
            className="h-full w-full -z-50"
            
          />
        </div>
      ))}
    </Slide>
  );
};

export default SlideBanner;