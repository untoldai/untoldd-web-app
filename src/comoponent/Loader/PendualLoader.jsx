import React from 'react'
import "./style.css"
const PendualLoader = () => {
    return (
        <div className='flex justify-center items-center  w-full h-screen fixed top-0  backdrop-blur-sm'>


            <div class="newtons-cradle ">
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}

export default PendualLoader