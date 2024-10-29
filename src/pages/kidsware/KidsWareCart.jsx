import React, { useState, useEffect } from "react";
import { FaBullseye, FaRupeeSign, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const KidsWearCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  // Load cart from local storage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const getTotalDiscount = () => {
    return cart.reduce((total, product) => total + (product.price * 0.1 * product.quantity), 0);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  const deliveryCharge = 50; // Example delivery charge
  const gst = (getTotalPrice() - getTotalDiscount()) * 0.18; // 18% GST

  const recommendedProducts = [
    {
      id: 9,
      name: 'Fleece Pants',
      url: "https://img.freepik.com/free-photo/girl-wearing-fleece-pants_23-2148329758.jpg?w=360",
      price: 499,
      description: "Soft fleece pants for comfort and warmth.",
      sizes: ["S", "M", "L"],
      care: "Machine wash cold."
    },
    {
      id: 10,
      name: 'Stylish Boots',
      url: "https://img.freepik.com/free-photo/girl-wearing-stylish-boots_23-2148329759.jpg?w=360",
      price: 799,
      description: "Trendy boots for every winter occasion.",
      sizes: ["S", "M", "L"],
      care: "Wipe clean with a damp cloth."
    },
    {
      id: 11,
      name: 'Cute Sweater',
      url: "https://img.freepik.com/free-photo/girl-in-cute-sweater_23-2148329760.jpg?w=360",
      price: 599,
      description: "Adorable sweater with fun patterns.",
      sizes: ["S", "M", "L"],
      care: "Do not bleach."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        {cart.length === 0 ? (
          <div className="text-center">No products in cart</div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
            <ul className="space-y-4">
              {cart.map((product) => (
                <li key={product.id} className="flex bg-white p-4 rounded shadow-md">
                  <img src={product.image} alt={product.name} className="h-24 w-24 object-cover mr-4 rounded" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600 flex items-center">MRP: <FaRupeeSign />{product.price}</p>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                    <p className="text-gray-500 text-sm">Care: {product.care}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="ml-4 px-4 py-2 bg-red-500 text-white rounded transition duration-200 hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="ml-4 px-4 py-2 bg-neutral-700 text-white rounded transition duration-200 hover:bg-red-600"
                    >
                      Buy Now
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 h-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Order Summary</h2>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <p className="text-gray-700">Total Items:</p>
            <p className="font-bold text-gray-800">{cart.reduce((total, product) => total + product.quantity, 0)}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mt-2">
            <p className="text-gray-700">Subtotal:</p>
            <p className="font-bold text-gray-800 flex items-center"><FaRupeeSign />{getTotalPrice()}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mt-2">
            <p className="text-gray-700">Discount:</p>
            <p className="font-bold text-red-500 flex items-center">- <FaRupeeSign />{getTotalDiscount().toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mt-2">
            <p className="text-gray-700">Delivery Charge:</p>
            <p className="font-bold text-gray-800">{0}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mt-2">
            <p className="text-gray-700">GST:</p>
            <p className="font-bold text-gray-800">{0}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">Total Price:</p>
            <p className="text-lg font-bold text-blue-600">{(getTotalPrice() - getTotalDiscount()).toFixed(2)}</p>
          </div>
          <button
            onClick={() => navigate("/app/checkout")}
            className="mt-6 w-full px-6 py-3 bg-neutral-700 text-white rounded-lg transition duration-300 transform hover:bg-blue-600 hover:scale-105">
            Checkout
          </button>
        </div>
      )}

      {/* Recommended Products Section */}
      <div className="mt-12 col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedProducts.map((product) => (
            <li key={product.id} className="flex bg-white p-4 rounded shadow-md">
              <img src={product.url} alt={product.name} className="h-28 w-28 object-cover mr-4 rounded" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <p className="text-gray-600 text-sm">Sizes: {product.sizes.join(", ")}</p>
                <p className="text-gray-500 text-sm">Color: {product.care}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded transition duration-200 hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KidsWearCart;
