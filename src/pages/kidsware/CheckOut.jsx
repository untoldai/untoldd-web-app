import React, { useEffect, useState } from 'react';
import { BelugaTshirt } from '../../assets';
import { FaRupeeSign, FaUser, FaPhone, FaEnvelope, FaMapMarkedAlt, FaShoppingCart, FaMoneyBillWave, FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAddressListsService, getUserProfileService } from '../../service/user/user.service';
const CheckOutPage = () => {
    const [addresses, setAddresses] = useState([]);
    const [user, setUser] = useState(null)
    const [selectedAddressId, setselectedAddressId] = useState('')
    const [searchParams] = useSearchParams();
    const paramValue = searchParams.get('id');
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const getTotalPrice = () => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };
    // Load cart from local storage when component mounts
    const getProfileDetails = async () => {
        try {
            const response = await getUserProfileService();
            setUser(response.data.data)
        } catch (error) {

        }
    }


    const fetchAddresses = async () => {
        try {

            const response = await getAddressListsService();

            if (response.data == null) {

                return;
            }

            setAddresses(response.data.data);

            return;
        } catch (error) {

            console.error("Error fetching addresses:", error);
        }
    };
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setProducts(storedCart);
        getProfileDetails()
        fetchAddresses();
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-20 md:px-28 px-0'>
            {/* Personal Information Card */}
            <div className='shadow-2xl rounded-lg border p-2 bg-white max-w-xl' >
                <h2 className='text-xl font-bold text-neutral-800 flex items-center mb-4'>
                    <FaUser className='mr-2' />
                    Personal Information
                </h2>
                <ul className='text-neutral-700 mb-4'>
                    <li className='flex items-center mb-1'>
                        <FaUser className='inline mr-2 text-violet-600' />
                        <span>Name:{user?.personal_details.first_name + " " + user?.personal_details.last_name}</span>
                    </li>
                    <li className='flex items-center mb-1'>
                        <FaPhone className='inline mr-2 text-violet-600' />
                        <span>Phone: {user?.contact.phone}</span>
                    </li>
                    <li className='flex items-center mb-1'>
                        <FaEnvelope className='inline mr-2 text-violet-600' />
                        <span>Email: {user?.contact.email}</span>
                    </li>
                </ul>

                <div className="container mx-auto p-6">
                    <h2 className="text-2xl font-semibold mb-4">Select Shipping Address</h2>

                    <div className="mt-6">
                        {addresses.length > 0 ? addresses.map((address) => (
                            <div
                                key={address._id}
                                className={`border border-gray-300 rounded p-4 mb-4 bg-gray-50 cursor-pointer ${address._id === selectedAddressId ? 'border-blue-500' : ''}`}
                                onClick={() => onSelectAddress(address._id)}
                            >
                                <h4 className="font-semibold flex items-center">
                                    {address.isDefault && (
                                        <span className="bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 mr-2">
                                            Default
                                        </span>
                                    )}
                                    {address.streetAddress}, {address.city}, {address.state} {address.postalCode}
                                </h4>
                                <p>{address.phone}</p>
                                <p>Type: {address.addressType}</p>
                                <p>Default: {address.isDefault ? 'Yes' : 'No'}</p>
                                <div className="mt-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEdit(address);
                                        }}
                                        className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSetDefault(address._id);
                                        }}
                                        className={`p-2 rounded transition duration-200 ${address.isDefault ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400'}`}
                                        disabled={address.isDefault}
                                    >
                                        Set as Default
                                    </button>
                                </div>
                            </div>
                        ))
                            : ""
                        }
                    </div>
                </div>

                <button onClick={() => navigate('/user/profile')} type="button" className='bg-violet-700 text-white font-bold rounded-lg shadow-md mt-3 px-4 py-2 hover:bg-violet-600'>
                    Add New Address
                </button>
            </div>

            <div className='flex flex-col gap-3 '>


                {/* Products Card */}
                <div className='shadow-lg rounded-lg border  p-6 bg-white max-w-xl'>
                    <h2 className='font-bold text-xl text-neutral-800 flex items-center mb-4'>
                        <FaShoppingCart className='mr-2' />
                        Products
                    </h2>
                    {
                        products && products.map((prd, i) => (
                            <div key={prd.id} className="flex bg-white p-4 rounded shadow-md">
                                <img src={prd.image} alt={prd.name} className="h-24 w-24 object-cover mr-4 rounded" />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold">{prd.name}</h2>
                                    <p className="text-gray-600 flex items-center">MRP: <FaRupeeSign />{prd.price}</p>

                                    <p className="text-gray-500 text-sm">Qty: {prd.quantity}</p>

                                </div>

                            </div>
                        ))
                    }
                </div>


                {/* Payment Details Card */}
                <div className='shadow-lg rounded-md border  p-4 bg-white col-span-1 md:col-span-2 max-w-xl'>
                    <h2 className='font-bold text-neutral-700 flex items-center'><FaMoneyBillWave className='mr-2' /> Payment Details</h2>
                    <div className='mt-2'>
                        <div className='flex justify-between'>
                            <p>Total MRP</p>
                            <p className='flex items-center'><FaRupeeSign /> {getTotalPrice()}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Discount</p>
                            <p className='flex items-center'>20%</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Total Amount</p>
                            <p className='flex items-center'><FaRupeeSign /> {getTotalPrice() - 20 % 100}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping Charges</p>
                            <p className='flex items-center'><FaRupeeSign /> 40</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>GST Charges</p>
                            <p className='flex items-center'><FaRupeeSign /> 0</p>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <p>Final Amount</p>
                            <p className='flex items-center'><FaRupeeSign /> {getTotalPrice() - 20 % 100 + 40}</p>
                        </div>
                    </div>
                    <button type="button" className='bg-violet-800 text-white rounded text-lg font-semibold w-full mt-4 py-2'>Make Payment</button>
                </div>
            </div>
        </div>
    );
}

export default CheckOutPage;
