import React from 'react';

const Video = ({ videoUrl, height, width, controls = true, loop = false, autoPlay = false, inputClass, ...props }) => {
    return (
        <video 
            width={width} 
            height={height} 
            controls={controls} 
            loop={loop} 
            autoPlay={autoPlay} 
            className={inputClass} 
            {...props}
        >
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}

export default Video;
