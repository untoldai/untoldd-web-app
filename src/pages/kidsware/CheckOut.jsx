import React, { useEffect, useState } from 'react';
import { BelugaTshirt, UntloddLogo } from '../../assets';
import { FaRupeeSign, FaUser, FaPhone, FaEnvelope, FaMapMarkedAlt, FaShoppingCart, FaMoneyBillWave, FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addNewAddressService, confirmOrderService, createOrderService, getAddressListsService, getUserProfileService, intiatePaymentService, verifyPaymentPaymentService } from '../../service/user/user.service';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import OrderLoader from '../../comoponent/Loader/OrderLoader';
import CenterPopDialog from '../../comoponent/Dialog/CenterPopDialog';
const CheckOutPage = () => {
    const [addresses, setAddresses] = useState([]);
    const [user, setUser] = useState(null)
    const [selectedAddressId, setselectedAddressId] = useState('')
    const [searchParams] = useSearchParams();
    const paramValue = searchParams.get('id');
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [orderId, setOrderId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isVisble, setIsVisible] = useState(false);
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

    // payment data
    async function InsitateBooking() {
        try {
            setIsLoading(true)
            if (selectedAddressId === "") {
                setIsLoading(false)
                return errorToast('please selected delivery address')
            }
            const payload = {
                totalAmount: getTotalPrice() - 20 % 100 + 40,
                products: products,
                address_id: selectedAddressId
            };
            //console.log(products)
            const response = await createOrderService(payload);
            //console.log(response)
            if (response.data !== null && response.data.statusCode === 201) {
                setOrderId(response.data.data._id)
                localStorage.setItem('oid', response.data.data._id)
                await handleCreateOrder(response.data.data._id, response.data.data.totalAmount)
            }
        } catch (error) {
            setIsLoading(false)
            //console.log(error);
            return;
        }
    }
    const VerifyPaymentHandler = async ({ data }) => {
        try {
            const response = await verifyPaymentPaymentService(data);

            if (response.data !== null && response.data.statusCode === 200) {
                await ConfirmBooking();
                return;
            }
        } catch (error) {
            setIsLoading(false)
            return;
        }
    };
    const handleCreateOrder = async (orderId, totalAmount) => {
        try {
            const payload = {
                orderId: orderId,
                amount: totalAmount
            }
            const paymentOrder = await intiatePaymentService(payload);



            const options = {
                key: "rzp_test_xKVw1JqVJzxhCB",
                amount: paymentOrder?.data.data.order.amount,
                currency: "INR",
                name: "Untoldd.in",
                description: "You are paying us to book your order ",
                image: UntloddLogo,
                order_id: paymentOrder?.data.data.order?.id,
                handler: function (response, error) {
                    const data = {
                        orderCreationId: paymentOrder?.data.data.order?.id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,


                    };
                    VerifyPaymentHandler({ data: data });
                    // alert("This step of Payment Succeeded");
                },
                prefill: {
                    //Here we are prefilling random contact
                    contact: user?.contact.phone,
                    //name and email id, so while checkout
                    name: user?.personal_details.first_name,
                    email: user?.contact.email,
                },

                theme: {
                    color: "#2300a3",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    };

    const ConfirmBooking = async () => {
        try {
            const payload = {

                "status": "CONFIRMED"
            };

            const response = await confirmOrderService(payload, localStorage.getItem('oid'));

            if (response.data !== null && response.data.statusCode === 200) {
                setIsLoading(false)
                //  console.log("aks");
                // successMessage("Hotel Book conform");
                localStorage.removeItem("cart");
                localStorage.removeItem('oid');
                successToast("Thanks for booking order");
                navigate("/app/order/conform")
                return;
            }

        } catch (error) {
            setIsLoading(false)
            return;
        }
    };
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setProducts(storedCart);
        getProfileDetails()
        fetchAddresses();
    }, []);
    return (
        <div>
            <AddAdresHere isVisble={isVisble} onclose={() => setIsVisible(false)} handlefetch={fetchAddresses} />
            {
                isLoading ?
                    <div className='min-h-[80vh] flex items-center justify-center'>

                        <OrderLoader />
                    </div>

                    :

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-20 md:px-28 px-0'>
                        {/* Personal Information Card */}
                        <div className='shadow-2xl rounded-lg border p-2 bg-white max-w-xl overflow-y-scroll' >
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

                                            <div className="mt-2">
                                                <button
                                                    onClick={(e) => setselectedAddressId(address?._id)}
                                                    className={`mr-2 p-2 ${selectedAddressId === address._id ? "bg-blue-500" : "bg-gray-800"} text-white rounded  transition duration-200`}
                                                >
                                                    Select
                                                </button>

                                            </div>
                                        </div>
                                    ))
                                        : ""
                                    }
                                </div>
                            </div>

                            <button onClick={() => setIsVisible(true)} type="button" className='bg-violet-700 text-white font-bold rounded-lg shadow-md mt-3 px-4 py-2 hover:bg-violet-600'>
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
                                <button type="button" onClick={InsitateBooking} className='bg-violet-800 text-white rounded text-lg font-semibold w-full mt-4 py-2'>Make Payment</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

const AddAdresHere = ({ isVisble, onclose, handlefetch }) => {
    const [formData, setFormData] = useState({
        streetAddress: '',
        apartmentNumber: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'USA',
        phone: '',
        addressType: 'Home',
        isDefault: false,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {





            const response = await addNewAddressService(formData);

            if (response.data.statusCode === 201) {

                setFormData({
                    streetAddress: '',
                    apartmentNumber: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: 'USA',
                    phone: '',
                    addressType: 'Home',
                    isDefault: false,
                });
                onclose()
                handlefetch();
                successToast(response.data.message);
                return;
            }


            errorToast(response.error.message);

            return

        } catch (error) {

            console.error("Error saving address:", error);
        }
    };
    return (<>
        <CenterPopDialog visible={isVisble} onClose={onclose} className={'!h-2/3 md:!w-1/2 overflow-y-scroll'}>
            <div>
                <h2 className=''>Add New Address</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="streetAddress"
                        placeholder="Street Address"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="apartmentNumber"
                        placeholder="Apartment/Suite (optional)"
                        value={formData.apartmentNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        maxLength={6}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    >

                        <option value="INDIA" selected disabled>INDIA</option>

                    </select>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <select
                        name="addressType"
                        value={formData.addressType}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-200"
                    >
                        Submit

                    </button>
                </form>
            </div>
        </CenterPopDialog>
    </>)
}
export default CheckOutPage;
