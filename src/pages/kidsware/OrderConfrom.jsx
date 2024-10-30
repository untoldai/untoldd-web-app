import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OrderConfrom = () => {
    return (
        <div className='min-w-screen flex flex-col justify-center items-center gap-5 my-10'>
            <motion.h1 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                Order Placed Successfully
            </motion.h1>

            <motion.div 
                className='w-60 h-60 rounded-full bg-green-600 text-white flex justify-center items-center'
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", stiffness: 100 }}
            >
                <FaCheck size={60} />
            </motion.div>

            <motion.p 
                className='text-center text-lg'
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                Thank you for your order! A confirmation email has been sent to you.
            </motion.p>

            <motion.button 
                className='mt-5 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'
                initial={{ scale: 1 }} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
            >
                View Orders
            </motion.button>
        </div>
    );
}

export default OrderConfrom;
