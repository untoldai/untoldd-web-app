import React from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const CenterPopDialog = ({ visible, children, className, onClose }) => {
  // Motion animation for the popup
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: "0",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      exit="exit"
      variants={dropIn}
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md"
    >
      <div
        className={`relative w-full min-w-lg h-auto bg-white rounded-lg shadow-2xl p-6 ${className}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <FaTimes size={20} />
        </button>

        {/* Popup content */}
        {children}
      </div>
    </motion.div>
  );
}

export default CenterPopDialog;
