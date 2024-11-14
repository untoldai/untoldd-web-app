import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaEye, FaRupeeSign, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CardSkelton from '../../skelton/CardSkeltion';

const Productcard = ({ product, isLoading }) => {
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState(false); // Track if the product is added

    const handleAddToCart = () => {
        // Retrieve existing cart from local storage or initialize an empty array
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProduct = existingCart.find(item => item.productId === product._id);

        if (existingProduct) {
            // If the product exists, do not add it again
            alert(`${product.name} is already in your cart!`);
            return;
        } else {
            // If not, add the new product to the cart
            existingCart.push({
                productId: product._id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product?.images[0].url
            });

            // Save the updated cart back to local storage
            localStorage.setItem('cart', JSON.stringify(existingCart));

            // Set added state to true for visual feedback
            setIsAdded(true);
            alert(`${product.name} has been added to your cart!`);
            return;
        }
    };

    return (
        <>
            {
                isLoading ?
                    <CardSkelton />
                    :
                    <div className='bg-white shadow-xl p-6 rounded-lg w-full hover:bg-slate-100 cursor-pointer' key={product._id}>
                        <img
                            src={product?.images[0].url}
                            style={{ mixBlendMode: 'multiply' }}
                            alt='Cool T-shirt'
                            className='w-full h-[200px]'
                            onClick={() => navigate(`/app/product-details?id=${product?._id}`)}
                        />
                        <div className='mt-2'>
                            <p className='text-xl font-medium'>{product?.name}</p>
                            <p className='text-gray-600 mb-2'>{product?.description?.substring(0, 10)}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <Rating
                                        readonly
                                        initialRating={5}
                                        fullSymbol={<FaStar className='text-orange-600' />}
                                    />
                                </div>
                                <p className='text-2xl text-black flex items-center'>
                                    <FaRupeeSign className='text-black' /> {product?.price}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <button
                                onClick={() => navigate(`/app/product-details?id=${product?._id}`)}
                                className='mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md font-bold hover:bg-orange-500 transition duration-300'
                            >
                                <FaEye className='text-xl' /> View
                            </button>
                            {/* <button
                                onClick={handleAddToCart}
                                className={`mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-md font-bold transition duration-300 ${isAdded ? 'bg-green-500 text-white' : 'border-2 text-black'} ${isAdded ? 'hover:bg-green-600' : 'hover:bg-gray-100'}`}
                                disabled={isAdded} // Disable the button if the product is added
                            >
                                <FaShoppingCart />
                                {isAdded ? ' Added' : ' Add to Cart'}
                            </button> */}
                        </div>
                    </div>
            }
        </>
    );
}

export default Productcard;
