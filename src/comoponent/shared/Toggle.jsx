import React from 'react'

const Toggle = ({ isToggle, handleToggle }) => {
    return (
        <button
            type="button"
            onClick={handleToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isToggle ? 'bg-green-500' : 'bg-red-700'
            }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggle ? 'translate-x-6' : ''
                }`}
            ></div>
        </button>
    );
}

export default Toggle