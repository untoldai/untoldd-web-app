import React, { useEffect, useState } from 'react';
import BreadCrum from '../../comoponent/shared/BreadCrum';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getProductDescriptionService } from '../../service/product/product.service';
import { errorToast } from '../../hooks/toast.hooks';
import parse from 'html-react-parser';
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
      <section className="px-4 md:px-16 lg:px-32 py-12 bg-gray-50">
  <div className="shadow-lg my-8 rounded-xl overflow-hidden bg-white">
    <div className="flex flex-col md:flex-row gap-8">

      {/* Image Gallery Section */}
      <div className="flex flex-col-reverse md:flex-row w-full md:w-2/5">
        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col justify-between gap-4">
          {product?.images?.map((img, index) => (
            <img
              key={img._id}
              src={img.url}
              alt="Product Image"
              className="h-20 md:h-40 object-cover shadow-md rounded-lg p-2 cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>

        {/* Selected Image */}
        <div className="mt-4 md:mt-0 w-full h-full">
          {product.images && (
            <img
              src={product.images[selectedImage]?.url}
              alt="Selected Product"
              className="h-full object-cover shadow-xl rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
          )}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-3/5 pt-8 md:pt-16 relative px-4 md:px-6">
        <FaRegHeart className="absolute top-5 right-5 text-3xl text-gray-500 cursor-pointer transition-colors duration-200 hover:text-red-500" />
        <p className="text-3xl font-semibold text-gray-800">{product?.name}</p>
        <p className="mt-3 text-lg text-gray-600">{product?.description?.trim() ? parse(product.description) : "No description available"}</p>

        {/* Color Selection */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">Select Color:</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {colors.map(color => (
              <button
                key={color}
                className={`w-12 h-12 rounded-full border-2 transition-colors duration-300 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">Select Size:</p>
          <div className="flex gap-6 mt-2">
            {sizes.map(size => (
              <button
                key={size}
                className={`px-6 py-3 rounded-lg border-2 text-lg font-medium transition-transform duration-300 transform hover:scale-105 
                  ${selectedSize === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'}`}
                onClick={() => setSelectedSize(size)}
                style={{ boxShadow: selectedSize === size ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none' }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">Quantity:</p>
          <input
            type="number"
            value={selectQty}
            onChange={(e) => setSelectQty(e.target.value)}
            min="1"
            className="border-2 p-3 rounded-lg w-20 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-6">
          <button
            className="bg-black text-white px-6 py-3 rounded-lg w-full md:w-auto shadow-md hover:bg-blue-600 transition-all duration-300"
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
          {activeTab === 'description' && (
            <p>
              {product?.description && product.description.trim() !== ""
                ? parse(product.description)
                : "No description available"}
            </p>
          )}

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
