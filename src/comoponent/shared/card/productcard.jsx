import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaEye, FaRupeeSign, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CardSkelton from '../../skelton/CardSkeltion';

const Productcard = ({ product, isLoading }) => {
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState(false); // Track if the product is added
    const [mainImage, setMainImage] = useState(product?.images[0]?.url);

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
                    <div
                    className="group cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    key={product._id}
                    onClick={() => navigate(`/app/product-details?id=${product?._id}`)}
                >
                    {/* Image Section */}
                    <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <img
                            src={mainImage}
                            alt={product?.name}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            style={{ mixBlendMode: 'multiply' }}
                            onClick={() => navigate(`/app/product-details?id=${product?._id}`)}
                        />
                    </div>
        
                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                        {product?.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.url}
                                alt={`Thumb ${idx}`}
                                className={`w-12 h-12 rounded-lg border ${
                                    mainImage === img.url
                                        ? 'border-orange-500 scale-105'
                                        : 'border-gray-300'
                                } object-cover cursor-pointer transition-all duration-200 hover:scale-110`}
                                onClick={() => setMainImage(img.url)}
                            />
                        ))}
                    </div>
        
                    {/* Text Content */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-800 truncate">
                            {product?.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                            {product?.description || 'No description available'}
                        </p>
        
                        <div className="flex justify-between items-center">
                            <Rating
                                readonly
                                initialRating={5}
                                fullSymbol={<FaStar className="text-orange-400 text-sm" />}
                                emptySymbol={<FaStar className="text-gray-300 text-sm" />}
                            />
                            <span className="text-lg font-bold text-gray-900 flex items-center gap-1">
                                <FaRupeeSign className="text-base" />
                                {product?.price}
                            </span>
                        </div>
                    </div>
        
                    {/* Action Button */}
                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={() => navigate(`/app/product-details?id=${product?._id}`)}
                            className="text-gray-700 hover:text-orange-500 transition text-xl"
                            title="View Product"
                        >
                            <FaEye />
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default Productcard;
