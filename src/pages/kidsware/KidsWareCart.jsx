import React, { useState } from "react";

export const productsWithData = [
  {
    id: 1,
    name: 'Winter Cloth',
    url: "https://img.freepik.com/free-photo/adorable-little-girl-lifting-her-hat_23-2148329753.jpg?w=360",
    price: 479,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Winter Cloth',
    url: "https://img.freepik.com/free-photo/portrait-adorable-little-girl-with-winter-hat_23-2148329826.jpg?w=360",
    price: 2499,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Winter Cloth',
    url: "https://img.freepik.com/free-photo/blonde-little-girl-wearing-pink-pullover_23-2148329833.jpg?w=360",
    price: 490,
    quantity: 1,
  },
  // More products...
];

const recommendedProducts = [
  {
    id: 4,
    name: 'Cozy Scarf',
    url: "https://img.freepik.com/free-photo/little-girl-wearing-scarf_23-2148329748.jpg?w=360",
    price: 299,
  },
  {
    id: 5,
    name: 'Warm Mittens',
    url: "https://img.freepik.com/free-photo/girl-wearing-mittens_23-2148329750.jpg?w=360",
    price: 399,
  },
  {
    id: 6,
    name: 'Winter Boots',
    url: "https://img.freepik.com/free-photo/girl-wearing-winter-boots_23-2148329755.jpg?w=360",
    price: 1200,
  },
];

const KidsWearCart = () => {
  const [cart, setCart] = useState(productsWithData);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-12">
      {cart.length === 0 ? (
        <div className="text-center">No products in cart</div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((product) => (
              <div key={product.id} className="bg-white w-full flex flex-col items-center shadow-md p-4 rounded">
                <img src={product.url} alt={product.name} className="h-40 w-40 object-cover mb-4" />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
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
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <p>Total Items: {cart.reduce((total, product) => total + product.quantity, 0)}</p>
            <p>Total Price: ${getTotalPrice()}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Recommended Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="bg-white w-full flex flex-col items-center shadow-md p-4 rounded">
              <img src={product.url} alt={product.name} className="h-40 w-40 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsWearCart;
