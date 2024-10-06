import React from 'react'

const Button = ({ className, text="", handlClick, backagroundColor = "bg-neutral-800", textColor = "text-white", type = "button",children, ...props }) => {
    return (
        <button className={`${className} px-3 shadow-lg rounded-md ${backagroundColor} ${textColor}`} type={type} onClick={handlClick}>{text===""?children:text}</button>
    )
}

export default Button