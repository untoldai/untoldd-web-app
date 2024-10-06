
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


function BusinessCard({ imagen }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        opacity: 1,
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)",
        backgroundImage: "linear-gradient(180deg, #B0B0B0 0%, #000000 100%)"
    });
    return (
        <animated.div
            className={'max-w-md md:h-[400px] flex justify-center gap-4 items-start py-4 px-3 rounded-2xl'}

            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >

            <img src={imagen} alt="" className="w-[40%]" />
            <div className="px-2 py-4">
                <h2 className="text-white ">Name</h2>
                <p className="text-white">
                    Age :
                </p>
                <p className="text-white my-3">Infulencer</p>

            </div>

        </animated.div>
    );
}

export default BusinessCard;
