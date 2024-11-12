import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getOrderDetailsService } from '../../service/user/user.service';
import ListSkelton from '../../comoponent/skelton/ListSkeltion';
import { FaRupeeSign} from "react-icons/fa"
import moment from "moment"
const OrderDetails = () => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('orderId');
  const [orderDetails, setOrderDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch order details from API
  const getOrderDetails = async () => {
    try {
      const response = await getOrderDetailsService(paramValue);
      if (response.data && response.data.statusCode === 200) {
        console.log(response.data.data);
        setOrderDetails(response.data.data);
        return;
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  if (isLoading) return <ListSkelton />;
  const calculateDeliveryExceptionDate = (orderDate) => {
    // Parse the order date using moment (assuming it's in ISO format or any valid format)
    const orderMoment = moment(orderDate);
  
    // Calculate the 7 to 9 days range
    const minDeliveryDate = orderMoment.add(7, 'days').format('D-M-YYYY');
    const maxDeliveryDate = orderMoment.add(2, 'days').format('D-M-YYYY'); // Adding 9 days total (7 + 2)
  
    return `${minDeliveryDate} - ${maxDeliveryDate}`;
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 py-12 my-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        {/* Order Header */}
        <div className="flex justify-between border-b pb-4 mb-8">
          <div>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold text-black">Order ID:</span> {orderDetails && orderDetails?.orderDetails[0]._id}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-black">Placed On:</span> {moment(orderDetails && orderDetails?.orderDetails[0].createdAt).format('D-MM-Y')}
            </p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              View Details
            </a>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col sm:flex-row items-center mb-12">
          <div className="flex-1 mr-8">
            <h5 className="text-3xl font-extrabold text-black leading-tight">{orderDetails && orderDetails?.orderDetails[0].productsDetails[0].name}</h5>
            <p className="text-sm text-gray-600 mt-2">Qty: <span className="font-semibold">{orderDetails && orderDetails?.orderDetails[0].products.quantity}</span></p>
            <h4 className="mt-4 mb-4 text-2xl font-bold text-teal-600 flex items-center gap-3">
          <FaRupeeSign />    {orderDetails && orderDetails?.orderDetails[0].products.price} <span className="text-sm text-gray-600"></span>
            </h4>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Tracking Status:</span> <span className="font-semibold text-teal-600">11:30pm, Today</span>
              
            </p>
            <button className="mt-6 px-5 py-2 text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-md transition-all transform hover:scale-105">
            {orderDetails && orderDetails?.orderDetails[0].status}
            </button>
          </div>
          <img
            className="w-52 h-52 object-cover rounded-xl shadow-lg border-4 border-teal-200"
            src={orderDetails && orderDetails?.orderDetails[0].productsDetails[0].images[0].url}
            alt="product"
          />
        </div>

        {/* Order Progress */}
        <div className="mb-8">
          <ul className="flex justify-between space-x-4 text-sm text-gray-600">
            <li className="relative text-center flex-1">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-400 text-white px-4 py-1 rounded-full text-xs">
                1
              </span>
              <div className="mt-6 font-semibold text-gray-700">PLACED</div>
              <div className="h-0.5 bg-gray-400 absolute top-7 left-1/2 transform -translate-x-1/2 w-full"></div>
            </li>
            <li className="relative text-center flex-1">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-xs">
                2
              </span>
              <div className="mt-6 font-semibold text-teal-600">SHIPPED</div>
              <div className="h-0.5 bg-gray-400 absolute top-7 left-1/2 transform -translate-x-1/2 w-full"></div>
            </li>
            <li className="relative text-center flex-1">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-400 text-white px-4 py-1 rounded-full text-xs">
                3
              </span>
              <div className="mt-6 font-semibold text-gray-400">DELIVERED</div>
            </li>
          </ul>
        </div>

        {/* Payment Details */}
        <div className="bg-teal-50 p-6 rounded-lg mb-8 shadow-md">
          <h5 className="text-2xl font-semibold text-teal-700 mb-4">Payment Details</h5>
          <div className="flex items-center mb-3">
            <FaRupeeSign />
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Payment Method:</span>{orderDetails && orderDetails?.payment.paymentMethod}
            </p>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Amount Paid:</span> ₹ {orderDetails && orderDetails?.payment.amount}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Payment Status:</span> <span className={`${orderDetails && orderDetails?.payment.status=="COMPLETED"?"text-green-600":"text-red-600 "} font-semibold`}>{orderDetails && orderDetails?.payment.status}</span>
          </p>
        </div>

        {/* Delivery Address */}
        <div className="bg-yellow-50 p-6 rounded-lg mb-8 shadow-md">
          <h5 className="text-2xl font-semibold text-yellow-700 mb-4">Delivery Address</h5>
          <div className="flex items-center mb-3">
            <img src="https://img.icons8.com/ios/50/000000/home.png" alt="home" className="w-8 h-8 mr-4" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Name:</span> {orderDetails &&orderDetails?. orderDetails[0]?.userDetails[0].name}
            </p>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Address:</span> {orderDetails && orderDetails?.orderDetails[0]?.orderAddress[0].streetAddress}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Contact:</span> {orderDetails && orderDetails?.orderDetails[0]?.userDetails[0].contact.phone}
          </p>
        </div>

        {/* Estimated Delivery Time */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-md">
          <h5 className="text-2xl font-semibold text-gray-700 mb-4">Estimated Delivery Time</h5>
          <div className="flex items-center mb-3">
            <img src="https://img.icons8.com/ios/50/000000/clock.png" alt="clock" className="w-8 h-8 mr-4" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Estimated Delivery:</span> {calculateDeliveryExceptionDate(orderDetails && orderDetails?.orderDetails[0].createdAt)}
            </p>
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="bg-teal-50 p-6 rounded-lg mb-8 shadow-md">
          <h5 className="text-2xl font-semibold text-teal-700 mb-4">Customer Feedback</h5>
          <div className="flex items-center mb-3">
            <img src="https://img.icons8.com/ios/50/000000/star.png" alt="star" className="w-8 h-8 mr-4" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Rating:</span> 4.5/5
            </p>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Review:</span> "Great product! The quality is fantastic, and the delivery was on time."
          </p>
        </div>

        {/* Order Actions */}
        {/* <div className="mb-8 border-t pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            <div className="hover:text-teal-500 cursor-pointer font-semibold transition-colors">
              <h5>Track</h5>
            </div>
            <div className="hover:text-red-500 cursor-pointer font-semibold transition-colors">
              <h5>Cancel</h5>
            </div>
            <div className="hover:text-teal-500 cursor-pointer font-semibold transition-colors">
              <h5>Pre-pay</h5>
            </div>
            <div>
              <img
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                src="https://img.icons8.com/ios/50/000000/menu-2.png"
                width="30"
                height="30"
                alt="menu"
              />
            </div>
          </div>
        </div> */}

        {/* Customer Support */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            For any issues with this order, please contact <span className="font-semibold text-blue-500">Customer Support</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
