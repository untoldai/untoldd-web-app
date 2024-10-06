import React from 'react'

const InputWithLabel = ({ label, value, inputClassName, labelClass, name, divClassName, placeholder, handleChange, type = "text", ...props }) => {
    return (
        <div className={`${divClassName} flex flex-col gap-2 `}>
            <label htmlFor="inputForm" className={`${labelClass} text-neutral-900 `}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className={`${inputClassName} shadow-lg bg-white text-black p-2 border outline-none`}
                placeholder={placeholder}

                id='inputForm'
                {...props}
            />
        </div>
    )
}

export default InputWithLabel