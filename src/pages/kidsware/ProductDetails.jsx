import React, { useEffect, useState } from 'react';
import BreadCrum from '../../comoponent/shared/BreadCrum';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getProductDescriptionService } from '../../service/product/product.service';

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectQty, setSelectQty] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0); // Start with the first image
    const [selectedColor, setSelectedColor] = useState('');
    const [activeTab, setActiveTab] = useState('description');
    const [product, setProduct] = useState({});
    const [searchParams] = useSearchParams();
    const paramValue = searchParams.get('id');
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Red', 'Green', 'Blue', 'Pink'];
    const additionalInfo = "This product is cruelty-free, made with natural ingredients.";
    const videoUrl = "https://www.example.com/video"; // Placeholder URL
    const navigate = useNavigate();
    const reviews = [
        { id: 1, user: 'Alice', text: 'Great product! Highly recommend.' },
        { id: 2, user: 'Bob', text: 'Good quality, but a bit pricey.' },
        { id: 3, user: 'Charlie', text: 'Loved it! Will buy again.' },
    ];

    const handleAddToCart = () => {
        console.log(`Added ${selectQty} x ${selectedSize} ${selectedColor} to the cart`);
    };

    async function getProductDetails() {
        try {
            const response = await getProductDescriptionService(paramValue);
            if (response.data && response.data.statusCode === 200) {
                setProduct(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, [paramValue]);

    return (
        <div>
            <BreadCrum heading={"Product Details"} text={"Home.Product.ProductDetails"} />
            <section className='px-2 md:px-20'>
                <div className='shadow-md my-5'>
                    <div className='flex justify-between gap-2 flex-col md:flex-row'>
                        <div className='flex w-[45%]'>
                            <div className='flex flex-col gap-2 justify-between'>
                                {product?.images?.map((img, index) => (
                                    <img
                                        key={img._id}
                                        src={img.url}
                                        alt=""
                                        className='h-40 gap-2 shadow-md rounded-lg p-2 cursor-pointer'
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))}
                            </div>
                            <div className='h-full w-full'>
                                {product.images && (
                                    <img
                                        src={product.images[selectedImage]?.url}
                                        alt=""
                                        className='h-full shadow-md rounded-lg'
                                    />
                                )}
                            </div>
                        </div>
                        <div className='w-[50%] pt-10 relative'>
                            <FaRegHeart className='bg-transparent text-3xl font-bold cursor-pointer absolute right-5 top-2' />
                            <p className='text-2xl font-semibold tracking-wider'>{product?.name}</p>
                            <p className='mt-2 text-xl text-gray-700'>{product?.description?.substring(0, 120)}...</p>
                            <div className='mt-4'>
                                <p className='text-lg'>Select Color:</p>
                                <div className='flex gap-4'>
                                    {colors.map(color => (
                                        <button
                                            key={color}
                                            className={`w-12 h-12 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
                                            style={{ backgroundColor: color.toLowerCase() }}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {selectedColor === color && (
                                                <span className='text-white text-xs font-bold'>✓</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p className='text-lg'>Select Size:</p>
                                <div className='flex gap-4'>
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            className={`border-2 p-3 rounded-lg transition-transform transform duration-300 
                                                ${selectedSize === size ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300'}`}
                                            onClick={() => setSelectedSize(size)}
                                            style={{ boxShadow: selectedSize === size ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none' }}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p className='text-lg'>Quantity:</p>
                                <input
                                    type='number'
                                    value={selectQty}
                                    onChange={(e) => setSelectQty(e.target.value)}
                                    min="1"
                                    className='border p-2 rounded w-20'
                                />
                            </div>
                            <div className='mt-6 flex gap-4'>
                                <button
                                    onClick={handleAddToCart}
                                    className='bg-black shadow-sm text-white px-4 py-2 rounded'
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className='bg-black shadow-sm text-white px-4 py-2 rounded'
                                    onClick={() => navigate(`/app/checkout?products=${product?._id}`)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Tabs Section */}
            <div className='my-10 bg-[#F6F5FF] py-2 px-10'>
                <div className='flex space-x-4'>
                    <button onClick={() => setActiveTab('description')} className={`p-2 text-xl font-semibold ${activeTab === 'description' ? 'border-b-2 border-blue-500' : ''}`}>Description</button>
                    <button onClick={() => setActiveTab('additionalInfo')} className={`p-2 text-xl font-semibold ${activeTab === 'additionalInfo' ? 'border-b-2 border-blue-500' : ''}`}>Additional Info</button>
                    <button onClick={() => setActiveTab('reviews')} className={`p-2 text-xl font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-blue-500' : ''}`}>Reviews</button>
                    <button onClick={() => setActiveTab('video')} className={`p-2 text-xl font-semibold ${activeTab === 'video' ? 'border-b-2 border-blue-500' : ''}`}>Video</button>
                </div>
                <div className='mt-4'>
                    {activeTab === 'description' && <p>{product?.description}</p>}
                    {activeTab === 'additionalInfo' && <p>{additionalInfo}</p>}
                    {activeTab === 'reviews' && (
                        <div>
                            {reviews.map(review => (
                                <div key={review.id} className='border-b py-2'>
                                    <p className='font-bold'>{review.user}</p>
                                    <p>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'video' && (
                        <div>
                            <h3 className='font-bold'>Product Video</h3>
                            <iframe
                                width="100%"
                                height="315"
                                src={videoUrl}
                                title="Product Video"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;