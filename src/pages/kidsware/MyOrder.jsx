import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import ShadowCard from '../../comoponent/shared/card/ShadowCard';
import { useNavigate } from 'react-router-dom';
import { getOrderListService } from '../../service/user/user.service';
import { FaShoppingCart } from 'react-icons/fa';


const MyOrder = () => {
    const [filter, setFilter] = useState('all');

    // Sample order data
    const [orders, setOrders] = useState([

    ]);

    const filteredOrders = orders.filter(order => {
        if (filter === 'all') return true;
        if (filter === 'high') return order.rating >= 4;
        if (filter === 'low') return order.rating < 4;
        return false;
    });
    async function getOrderLists() {
        try {

            const resp = await getOrderListService();
            
            if (resp.data !== null && resp.data.statusCode === 200) {
                setOrders(resp.data.data.orders)
                return
            }
        } catch (error) {
            console.log(error);
            return
        }
    }
    useEffect(()=>{
        getOrderLists();
    },[])
    return (
        <div className='my-20 px-0 sm:px-40'>
            <h1 className="text-2xl mb-4">My Orders</h1>
            <div className="mb-4">
                <label htmlFor="filter" className="mr-2">Filter by Rating:</label>
                <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="high">4 Stars & Up</option>
                    <option value="low">Below 4 Stars</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {orders.length>0?filteredOrders?.map(order => (
                    <ProductListCard
                        key={order.id}
                        order={order}
                        updateRating={(newRating) => updateOrderRating(order.id, newRating)}
                    />
                ))
            :
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 text-center">
                <FaShoppingCart className="text-4xl text-blue-600 mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">No Orders Found!</h2>
                <p className="text-gray-600 mb-4">Start shopping now to find amazing products!</p>
                <a 
                    href="/app" 
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition duration-200"
                >
                    Shop Now
                </a>
            </div>
        </div>
            }
            </div>
        </div>
    );

    // Function to update the rating of an order
    const updateOrderRating = (id, newRating) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === id ? { ...order, rating: newRating } : order
            )
        );
    };
}

const ProductListCard = ({ order, updateRating }) => {
    const [userRating, setUserRating] = useState(0);
    const navigate = useNavigate();
    const handleRatingChange = (newRating) => {
        setUserRating(newRating);
    };

    const handleSubmit = () => {
        updateRating(userRating);
        setUserRating(0); // Reset user rating after submission
    };

    return (
        <ShadowCard >
        <div
            onClick={() => navigate(`/app/my-orders/details?orderId=${order.id}`)}
            className="flex p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
            <img
                src={order?.productDetails?.images?.url} // Ensure to access the first image in case of an array
                alt="Product"
                className="h-32 w-32 object-cover rounded-md border border-gray-200 mr-4"
            />
            <div className="flex flex-col justify-between">
                <div>
                    <p className="text-lg font-semibold text-gray-800 mb-1">{order.productDetails.name}</p>
                    <p className="text-gray-600 mb-2">{order.productDetails.description.substring(0, 50)}...</p>
                    <p className="text-sm text-gray-500">Delivered on {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center mt-2">
                    <StarRatings
                        rating={userRating}
                        starRatedColor="gold"
                        starDimension="20px"
                        starSpacing="2px"
                        numberOfStars={5}
                        changeRating={handleRatingChange}
                        starHoverColor="gold"
                    />
                    <button
                        onClick={handleSubmit}
                        className="ml-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition-colors duration-200"
                    >
                        Rate
                    </button>
                </div>
            </div>
        </div>

        </ShadowCard>
    );
}

export default MyOrder;
