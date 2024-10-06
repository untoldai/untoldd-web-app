import React from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
const CenterPopDialog = ({ visible, children, className }) => {
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: "100vh",
      opacity: 0
    }
  }
  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      exit="exit"
      variants={dropIn}
      className='bg-neutal-50 shadow-2xl rounded-lg h-full backdrop-blur-2xl border-gray-200 w-full fixed inset-0 m-auto p-2 flex justify-center items-center  '
    >
      
      <div className={`${className} h-1/2 w-1/2 bg-white rounded-lg`}>
        {children}
      </div>
    </motion.div>
  )
}

export default CenterPopDialog