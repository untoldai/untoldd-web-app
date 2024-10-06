import React from 'react';
import { motion } from 'framer-motion';
import BeautyHero from '../../comoponent/specific/homepage/BeautyHero';
import { Product23 } from '../../assets';


const boxVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const BeautyHomepage = () => {
  return (
    <motion.div
      className='bg-gray-50 overflow-hidden'
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <BeautyHero />

      {/* Featured Categories Section */}
      <div className='py-10 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-pink-600 mb-8'>Featured Categories</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md text-center'>
              <h3 className='text-xl font-semibold text-pink-600'>Skincare</h3>
              <img src={Product23} alt='Skincare' className='h-32 w-full object-cover rounded-md mb-4' />
            </div>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md text-center'>
              <h3 className='text-xl font-semibold text-pink-600'>Makeup</h3>
              <img src={Product23} alt='Makeup' className='h-32 w-full object-cover rounded-md mb-4' />
            </div>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md text-center'>
              <h3 className='text-xl font-semibold text-pink-600'>Fragrance</h3>
              <img src={Product23} alt='Fragrance' className='h-32 w-full object-cover rounded-md mb-4' />
            </div>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md text-center'>
              <h3 className='text-xl font-semibold text-pink-600'>Hair Care</h3>
              <img src={Product23} alt='Hair Care' className='h-32 w-full object-cover rounded-md mb-4' />
            </div>
          </div>
        </div>
      </div>

      {/* Promotions Section */}
      <div className='py-10 bg-pink-200' style={{backgroundImage:"url('https://images.pexels.com/photos/6830808/pexels-photo-6830808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Limited Time Offer!</h2>
          <p className='text-lg text-white mb-6'>Get 20% off on your first purchase. Use code: FIRST20</p>
          <motion.button
            className='bg-white text-pink-600 py-2 px-6 rounded shadow-md hover:bg-pink-300 transition duration-300'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>

    

      {/* Categories Section */}
      <div className='py-10 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-pink-600 mb-8'>Browse Our Categories</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white p-5 rounded-lg shadow-md text-center'>
            <img src={Product23} alt='Fragrance' className='h-32 w-full object-cover rounded-md mb-4' />
              <h3 className='text-xl font-semibold text-pink-600'>Organic Products</h3>
              <p className='text-gray-700 mb-4'>Discover our range of eco-friendly beauty products.</p>
              <motion.button
                className='bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500 transition duration-300'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Shop Now
              </motion.button>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md text-center'>
            <img src={Product23} alt='Fragrance' className='h-32 w-full object-cover rounded-md mb-4' />
              <h3 className='text-xl font-semibold text-pink-600'>Vegan Products</h3>
              <p className='text-gray-700 mb-4'>Cruelty-free and vegan-friendly beauty solutions.</p>
              <motion.button
                className='bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500 transition duration-300'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Shop Now
              </motion.button>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md text-center'>
            <img src={Product23} alt='Fragrance' className='h-32 w-full object-cover rounded-md mb-4' />
              <h3 className='text-xl font-semibold text-pink-600'>Luxury Items</h3>
              <p className='text-gray-700 mb-4'>Indulge in our high-end beauty products.</p>
              <motion.button
                className='bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500 transition duration-300'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
  {/* Testimonials Section */}
  <div className='py-10 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-pink-600 mb-8'>What Our Customers Say</h2>
          <div className='flex flex-col md:flex-row md:justify-around'>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/3'>
              <p className='text-gray-700'>"Absolutely love the skincare range! My skin feels amazing."</p>
              <p className='text-right text-pink-600 font-semibold'>- Sarah T.</p>
            </div>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/3'>
              <p className='text-gray-700'>"The makeup products are top-notch! Highly recommend!"</p>
              <p className='text-right text-pink-600 font-semibold'>- Emma L.</p>
            </div>
            <div className='bg-gray-100 p-5 rounded-lg shadow-md md:w-1/3'>
              <p className='text-gray-700'>"Fast shipping and great customer service. Will buy again!"</p>
              <p className='text-right text-pink-600 font-semibold'>- James K.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Business Card Section */}
      <div className='py-10 bg-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-pink-600 mb-4'>Our Commitment</h2>
          <p className='text-lg mb-6'>At [Your Brand], we believe in providing high-quality beauty products that empower and inspire. Our mission is to enhance your natural beauty while being kind to our planet.</p>
          <p className='text-lg mb-4'>📞 Contact us: <a href="tel:+1234567890" className='text-pink-600'>+1 (234) 567-890</a></p>
          <p className='text-lg mb-4'>✉️ Email: <a href="mailto:info@yourbrand.com" className='text-pink-600'>info@yourbrand.com</a></p>
          <p className='text-lg'>🌐 Website: <a href="https://yourbrand.com" className='text-pink-600'>www.yourbrand.com</a></p>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className='py-10 bg-gray-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-pink-600 mb-4'>Subscribe to Our Newsletter</h2>
          <p className='text-lg mb-6'>Stay updated with the latest products and exclusive offers.</p>
          <input type='email' placeholder='Enter your email' className='p-2 border border-gray-300 rounded-md' />
          <motion.button
            className='bg-pink-600 text-white py-2 px-6 rounded shadow-md hover:bg-pink-500 transition duration-300 ml-2'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default BeautyHomepage;
