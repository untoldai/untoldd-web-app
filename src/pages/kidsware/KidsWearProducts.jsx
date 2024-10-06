import React, { useState, Suspense, useEffect } from "react";
import { FaEye, FaFilter, FaRupeeSign, FaShoppingCart, FaStar, FaTimes } from "react-icons/fa";
import Rating from "react-rating";


const KidsWearAllProducts = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hotelData, setHotelData] = useState([

    ]);
    const [filters, setFilters] = useState({
        price: 1000,
        rating: "",
        category: "",
        location: "",
    });

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
        document.body.style.overflow = isFilterOpen ? "auto" : "hidden";
    };





    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFilters((prevFilters) => ({
                ...prevFilters,
                amenities: checked
                    ? [...prevFilters.amenities, value]
                    : prevFilters.amenities.filter((amenity) => amenity !== value),
            }));
            toggleFilter();
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value,
            }));
            toggleFilter();
        }
    };

    const filteredHotels = hotelData.filter((hotel) => {
        const meetsPrice = hotel.packages[0].price <= filters.price;
        const meetsRating = filters.rating ? hotel.rating >= filters.rating : true;
        const meetsCategory = filters.category
            ? hotel.event.includes(filters.category)
            : true;
        const meetsLocation = filters.location
            ? hotel.address.includes(filters.location)
            : true;

        return (
            meetsPrice && meetsRating && meetsCategory && meetsLocation
        );
    });

    return (
        <div className="flex flex-col md:flex-row min-h-screen mt-12">
            {/* Sidebar for Filters */}
            <div
                className={`fixed inset-0 bg-white z-30 transition-transform transform pt-20 ${isFilterOpen ? "translate-x-0" : "-translate-x-full"
                    } md:relative md:translate-x-0 md:w-1/4 bg-gray-100 p-4 md:bg-gray-100`}
                style={{ height: '100vh' }}
            >
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
                    <button
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={toggleFilter}
                    >
                        <FaTimes className="text-2xl" />
                    </button>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Sort By</h3>
                        <div className="space-y-2">
                            <label className="block text-gray-800">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="price"
                                    onChange={handleFilterChange}
                                    className="mr-2"
                                />
                                Price
                            </label>
                            <label className="block text-gray-800">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="rating"
                                    onChange={handleFilterChange}
                                    className="mr-2"
                                />
                                Rating
                            </label>
                            <label className="block text-gray-800">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Party"
                                    onChange={handleFilterChange}
                                    className="mr-2"
                                />
                                Size
                            </label>
                            <label className="block text-gray-800">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Wedding"
                                    onChange={handleFilterChange}
                                    className="mr-2"
                                />
                                Color
                            </label>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Price Range</h3>
                        <input
                            type="range"
                            name="price"
                            min="0"
                            max="1000"
                            value={filters.price}
                            onChange={handleFilterChange}
                            className="w-full bg-gray-300"
                        />
                        <div className="flex justify-between text-gray-800">
                            <span>
                                <FaRupeeSign />
                                0
                            </span>
                            <span>
                                <FaRupeeSign />
                                {filters.price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section with Hotel Cards */}
            <div
                className={`flex-1 p-4 md:ml-14 ${isFilterOpen ? "md:ml-1" : "md:ml-14"
                    } transition-all duration-300`}
            >
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <h2 className="text-xl font-semibold text-gray-800">Hotels</h2>
                    <button
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={toggleFilter}
                    >
                        <FaFilter className="text-2xl" />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Render hotel cards here */}



                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div className='bg-white shadow-xl p-6 rounded-lg w-full hover:bg-slate-100 cursor-pointer ' key={i}>
                                <img
                                    src='https://uneno.madrasthemes.com/wp-content/uploads/2018/10/iyuviyvUntitled-1-400x439.jpg'
                                    style={{ mixBlendMode: 'multiply' }}
                                    alt='Cool T-shirt'
                                    className='w-full'
                                />
                                {/* <SalesSticker isOpen={true} /> */}
                                <div className='mt-2'>
                                    <p className='text-xl font-medium'>Cool T-shirt</p>
                                    <p className='text-gray-600 mb-2'>A stylish and comfortable T-shirt for your little one.</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center'>
                                            <Rating
                                                readonly
                                                initialRating={5}
                                                fullSymbol={<FaStar className='text-orange-600' />}
                                            />
                                        </div>
                                        <p className='text-2xl text-black flex items-center'>
                                            <FaRupeeSign className='text-black' /> 200
                                        </p>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-2 '>
                                    <button className='mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md font-bold hover:bg-orange-500 transition duration-300'>
                                        <FaEye className='text-xl' /> View
                                    </button>
                                    <button className='mt-4 flex items-center justify-center gap-2 w-full border-2  text-black py-2 rounded-md font-bold + transition duration-300'>
                                        <FaShoppingCart />  Add to Cart
                                    </button>
                                </div>

                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    );
};

export default KidsWearAllProducts;
``
