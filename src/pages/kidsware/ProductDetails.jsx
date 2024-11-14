import React, { useEffect, useState } from 'react';
import BreadCrum from '../../comoponent/shared/BreadCrum';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getProductDescriptionService } from '../../service/product/product.service';
import { errorToast } from '../../hooks/toast.hooks';

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
    const handleAddToCart = () => {
        // Check if size and color are selected
        if (selectedSize === "") {
            return errorToast("Please select size");
        }
        if (selectedColor === "") {
            return errorToast("Please select color");
        }
    
        // Retrieve existing cart from local storage or initialize an empty array
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Check if the product is already in the cart
        const existingProductIndex = existingCart.findIndex(item => item.productId === product._id);
    
        if (existingProductIndex !== -1) {
            // If the product exists, update all relevant details
            existingCart[existingProductIndex] = {
                productId: product._id,
                name: product.name,
                price: product.price,
                quantity: selectQty, // Update to the new selected quantity
                image: product?.images[0].url,
                size: selectedSize,
                color: selectedColor // Update the color if necessary
            };
              // Navigate to checkout
        navigate('/app/checkout');
        return;
        } else {
            // If not, add the new product to the cart
            existingCart.push({
                productId: product._id,
                name: product.name,
                price: product.price,
                quantity: selectQty,
                image: product?.images[0].url,
                size: selectedSize,
                color: selectedColor // Add color to the cart item if necessary
            });
        }
    
        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(existingCart));
    
        // Optionally, provide visual feedback (e.g., toast notification)
        successToast("Product added/updated in cart");
    
        // Navigate to checkout
        navigate('/app/checkout');
    };
    
    useEffect(() => {
        getProductDetails();
    }, [paramValue]);

    return (
        <div>
        <BreadCrum heading={"Product Details"} text={"Home.Product.ProductDetails"} />
        <section className='px-2 md:px-20'>
          <div className='shadow-md my-5'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
              {/* Image Gallery Section */}
              <div className='flex flex-col-reverse md:flex-row w-full md:w-[45%]'>
                <div className='flex flex-row md:flex-col justify-around gap-2'>
                  {product?.images?.map((img, index) => (
                    <img
                      key={img._id}
                      src={img.url}
                      alt="Product Image"
                      className='h-20 md:h-40 gap-2 shadow-md rounded-lg p-2 cursor-pointer'
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
                <div className='mt-4 md:mt-0  h-full w-full'>
                  {product.images && (
                    <img
                      src={product.images[selectedImage]?.url}
                      alt="Selected Product"
                      className='h-full shadow-md rounded-lg w-full  object-cover'
                    />
                  )}
                </div>
              </div>
      
              {/* Product Details Section */}
              <div className='w-full md:w-[50%] pt-4 md:pt-10 relative'>
                <FaRegHeart className='bg-transparent text-3xl font-bold cursor-pointer absolute right-5 top-2' />
                <p className='text-2xl font-semibold tracking-wider'>{product?.name}</p>
                <p className='mt-2 text-lg text-gray-700'>{product?.description?.substring(0, 120)}...</p>
      
                {/* Color Selection */}
                <div className='mt-4'>
                  <p className='text-lg'>Select Color:</p>
                  <div className='flex flex-wrap gap-4'>
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
      
                {/* Size Selection */}
                <div className='mt-4'>
                  <p className='text-lg'>Select Size:</p>
                  <div className='flex flex-wrap gap-4'>
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
      
                {/* Quantity Selector */}
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
      
                {/* Action Buttons */}
                <div className='mt-6 flex gap-4'>
                  {/* <button
                    onClick={}
                    className='bg-black shadow-sm text-white px-4 py-2 rounded'
                  >
                    Add to Cart
                  </button> */}
                  <button
                    className='bg-black shadow-sm text-white px-4 py-2 rounded w-full md:w-auto'
                    onClick={handleAddToCart}
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
            <button
              onClick={() => setActiveTab('description')}
              className={`p-2 text-xl font-semibold ${activeTab === 'description' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Description
            </button>
            {/* <button
              onClick={() => setActiveTab('additionalInfo')}
              className={`p-2 text-xl font-semibold ${activeTab === 'additionalInfo' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Additional Info
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`p-2 text-xl font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`p-2 text-xl font-semibold ${activeTab === 'video' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Video
            </button> */}
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
