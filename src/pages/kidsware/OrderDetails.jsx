import React from 'react';

const OrderDetail = ({ order }) => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl text-center font-bold mb-8">Order Details</h1>
            
            <div className="mb-6 p-6 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Order ID: {order.id}</h2>
                <p>Status: <span className="font-bold">{order.status}</span></p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p>Total Amount: <span className="font-bold">${order.totalAmount.toFixed(2)}</span></p>
                <p>Payment Method: {order.paymentMethod}</p>
                <p>Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
            </div>

            <h2 className="text-3xl mb-4">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {order.products.map(product => (
                    <ProductDetailCard key={product.id} product={product} />
                ))}
            </div>

            <h2 className="text-3xl mt-8 mb-4">Shipping Information</h2>
            <div className="p-6 mb-6 border border-gray-300 rounded-lg">
                <p><strong>Address:</strong> {order.shippingAddress}</p>
                <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                <p><strong>Carrier:</strong> {order.carrier}</p>
            </div>

            <h2 className="text-3xl mt-8 mb-4">Tracking Status</h2>
            <TrackingStatus steps={order.trackingSteps} />

            <h2 className="text-3xl mt-8 mb-4">Customer Support</h2>
            <div className="p-6 mb-6 border border-gray-300 rounded-lg">
                <p>If you have any questions or need assistance, please contact our support team.</p>
                <p><strong>Email:</strong> support@example.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
            </div>

            <div className="flex justify-center gap-6 mb-4">
                <button className="border border-gray-500 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">Reorder</button>
                <button className="border border-gray-500 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">Track Order</button>
                <button className="border border-gray-500 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">Chat Support</button>
            </div>

            <ChatSupportButton />
        </div>
    );
};

const ProductDetailCard = ({ product }) => {
    return (
        <div className="p-4 text-center border border-gray-300 rounded-lg">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p className="font-bold">${product.price.toFixed(2)}</p>
        </div>
    );
};

const TrackingStatus = ({ steps }) => {
    return (
        <div className="relative mb-6">
            <div className="flex justify-between mb-4">
                {steps.map((step, index) => (
                    <div key={index} className="text-center">
                        <div className={`w-8 h-8 rounded-full ${step.completed ? 'bg-green-500' : 'bg-gray-400'} mx-auto flex items-center justify-center text-white font-bold`}>
                            {step.completed ? '✓' : ''}
                        </div>
                        <p className={`text-sm mt-1 ${step.completed ? 'font-bold' : ''}`}>{step.label}</p>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>
        </div>
    );
};

const ChatSupportButton = () => {
    const handleChatClick = () => {
        alert('Chat support functionality to be implemented.');
    };

    return (
        <div className="fixed bottom-6 right-6">
            <button 
                onClick={handleChatClick} 
                className="border border-gray-500 text-gray-700 rounded-full p-4 hover:bg-gray-100">
                Chat Support
            </button>
        </div>
    );
};

// Sample order data
const sampleOrder = {
    id: '12345',
    status: 'Shipped',
    date: '2023-10-30',
    totalAmount: 59.99,
    paymentMethod: 'Credit Card',
    estimatedDelivery: '2023-11-05',
    products: [
        { id: 1, name: 'Product 1', quantity: 1, price: 29.99, imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', quantity: 2, price: 15.00, imageUrl: 'https://via.placeholder.com/150' },
    ],
    shippingAddress: '1234 Elm St, Springfield, IL',
    trackingNumber: 'TRACK123456',
    carrier: 'UPS',
    trackingSteps: [
        { label: 'Order Placed', completed: true },
        { label: 'Shipped', completed: true },
        { label: 'Out for Delivery', completed: false },
        { label: 'Delivered', completed: false },
    ],
};

const OrderDetails = () => {
    return <OrderDetail order={sampleOrder} />;
};

export default OrderDetails;
