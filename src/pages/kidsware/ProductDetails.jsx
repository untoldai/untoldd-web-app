import React, { useEffect, useState } from 'react';
import BreadCrum from '../../comoponent/shared/BreadCrum';
import { FaHeart, FaRegHeart, FaShoppingCart, FaShare, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getProductDescriptionService } from '../../service/product/product.service';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import parse from 'html-react-parser';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectQty, setSelectQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState({});
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('id');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
  const navigate = useNavigate();
  
  const reviews =[]

  const additionalInfo = {
    material: "100% Premium Cotton",
    weight: "0.5kg",
    dimensions: "30 × 30 × 3 cm",
    careInstructions: "Machine wash cold, tumble dry low",
    countryOfOrigin: "United States"
  };

  async function getProductDetails() {
    try {
      const response = await getProductDescriptionService(paramValue);
      if (response.data && response.data.statusCode === 200) {
        setProduct(response.data.data);
      }
    } catch (error) {
      console.error(error);
      errorToast("Failed to load product details");
    }
  }

  const handleAddToCart = () => {
    if (selectedSize === "") {
      return errorToast("Please select a size");
    }
    if (selectedColor === "") {
      return errorToast("Please select a color");
    }

    const payload = {
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: selectQty,
      image: product?.images[0].url,
      size: selectedSize,
      color: selectedColor
    };

    localStorage.setItem('cart', JSON.stringify([payload]));
    successToast("Added to your cart successfully!");
    navigate('/app/checkout');
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    successToast(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/app/checkout?direct=true');
  };

  const renderRatingStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
      );
    }
    return stars;
  };

  useEffect(() => {
    getProductDetails();
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [paramValue]);

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="bg-gray-50 min-h-screen">
      <BreadCrum heading={"Product Details"} text={"Home / Products / Product Details"} />
      
      {/* Main Product Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Gallery Section - Left Side */}
            <div className="w-full lg:w-3/5 p-4 lg:p-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Thumbnails - Left Side */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-visible order-2 md:order-1 space-x-2 md:space-x-0 md:space-y-3">
                  {product?.images?.map((img, index) => (
                    <div 
                      key={img._id}
                      className={`min-w-20 h-20 cursor-pointer border-2 rounded-lg transition-all duration-300 ${selectedImage === index ? 'border-blue-500 shadow-md' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={img.url}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image - Right Side */}
                <div className="flex-grow order-1 md:order-2">
                  {product.images && (
                    <div className="rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center h-80 md:h-96 lg:h-[500px]">
                      <img
                        src={product.images[selectedImage]?.url}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain transition-opacity duration-300"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Details Section - Right Side */}
            <div className="w-full lg:w-2/5 p-6 lg:p-8 border-l border-gray-100">
              {/* Product Status and Category */}
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">In Stock</span>
                <span className="text-gray-500">{product.category}</span>
              </div>

              {/* Product Name and Price */}
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product?.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderRatingStars(averageRating)}
                </div>
                <span className="text-gray-600 text-sm">({reviews.length} Reviews)</span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-blue-600">${product?.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-xl text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Short Description */}
              <div className="mb-6 text-gray-600">
                {product?.shortDescription || "Experience premium quality and comfort with our latest collection."}
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-gray-700 font-medium mb-2">Color: <span className="font-bold">{selectedColor || "Select a color"}</span></p>
                <div className="flex flex-wrap gap-3">
                  {colors.map(color => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-gray-300'}`}
                      style={{ 
                        backgroundColor: color.toLowerCase(),
                        boxShadow: selectedColor === color ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none' 
                      }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-gray-700 font-medium mb-2">Size: <span className="font-bold">{selectedSize || "Select a size"}</span></p>
                <div className="flex flex-wrap gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      className={`w-12 h-12 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-200 
                        ${selectedSize === size 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                          : 'bg-white text-gray-800 border border-gray-300 hover:border-blue-400'}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <p className="text-gray-700 font-medium mb-2">Quantity:</p>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 rounded-l-md bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    onClick={() => selectQty > 1 && setSelectQty(selectQty - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={selectQty}
                    onChange={(e) => setSelectQty(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    className="w-16 h-10 border-t border-b border-gray-300 text-center focus:outline-none"
                  />
                  <button 
                    className="w-10 h-10 rounded-r-md bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    onClick={() => setSelectQty(selectQty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <button
                  className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors shadow-md"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
              
              {/* Wishlist and Share */}
              <div className="flex justify-between items-center mb-8 border-t border-b border-gray-100 py-4">
                <button 
                  className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
                  onClick={handleAddToWishlist}
                >
                  {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <FaShare />
                  <span>Share</span>
                </button>
              </div>
              
              {/* Delivery Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Delivery & Returns</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaTruck className="text-blue-500" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUndo className="text-blue-500" />
                    <span>30-day easy returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaShieldAlt className="text-blue-500" />
                    <span>2-year warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 font-medium transition-colors ${activeTab === 'description' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'}`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('additionalInfo')}
              className={`px-6 py-4 font-medium transition-colors ${activeTab === 'additionalInfo' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'}`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-medium transition-colors ${activeTab === 'reviews' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-500'}`}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                {product?.description && product.description.trim() !== ""
                  ? parse(product.description)
                  : <p className="text-gray-600">This premium product combines style, comfort, and durability for the perfect addition to your wardrobe. Crafted with attention to detail, it features quality materials and expert craftsmanship that ensures long-lasting wear. The versatile design makes it suitable for various occasions, allowing you to create multiple looks with one essential piece.</p>
                }
              </div>
            )}

            {/* Additional Info Tab */}
            {activeTab === 'additionalInfo' && (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <tbody>
                    {Object.entries(additionalInfo).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-100">
                        <td className="py-3 px-4 bg-gray-50 font-medium text-gray-700 capitalize w-1/3">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                        <td className="py-3 px-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                {/* Summary */}
                <div className="mb-8 flex flex-col md:flex-row gap-8 items-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600">{averageRating.toFixed(1)}</div>
                    <div className="flex justify-center my-2">
                      {renderRatingStars(Math.round(averageRating))}
                    </div>
                    <div className="text-gray-500">Based on {reviews.length} reviews</div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map(star => {
                        const count = reviews.filter(r => r.rating === star).length;
                        const percentage = (count / reviews.length) * 100;
                        
                        return (
                          <div key={star} className="flex items-center">
                            <span className="w-12 text-gray-600">{star} star</span>
                            <div className="flex-grow mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-yellow-400" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="w-10 text-gray-600 text-right">{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
                      Write a Review
                    </button>
                  </div>
                </div>
                
                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-bold text-gray-800">{review.user}</h3>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex mb-3">
                        {renderRatingStars(review.rating)}
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Products Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 relative">
                <div className="absolute top-2 right-2">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-red-500 transition-colors">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">Related Product {item}</h3>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">$59.99</span>
                  <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <FaShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;