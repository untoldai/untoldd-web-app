import React, { useState, Suspense, useEffect } from "react";
import { FaEye, FaFilter, FaInbox, FaRupeeSign, FaShoppingCart, FaStar, FaTimes } from "react-icons/fa";
import Rating from "react-rating";
import { getProductByCategory } from "../../service/product/product.service";
import CardSkelton from "../../comoponent/skelton/CardSkeltion";
import Productcard from "../../comoponent/shared/card/productcard";


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
    const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const getProductS = async () => {
        try {
            setIsLoading(true);
            const response = await getProductByCategory("");
            if (response.data && response.data.statusCode === 200) {
                setIsLoading(false);
                setProducts(response.data.data.products);
                return
            }
        } catch (error) {
            setIsLoading(false);
            return error
        }
    }
    useEffect(() => {
        getProductS();
    }, [])
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

                    <div className="hidden">
                        <h3 className="text-lg hidden font-semibold text-gray-800">Price Range</h3>
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
                            isLoading ?
                                <CardSkelton />
                                :

                                products.length>0? products.map((prd, i) => (
                                    <Suspense fallback={<CardSkelton />}>
                                        <Productcard product={prd} isLoading={isLoading} />
                                    </Suspense>
                                ))
                                :
                                <div className="flex justify-center items-center gap-3">
                                    <FaInbox />
                                    <h4>Not Found</h4>
                                </div>
                        }
                    



                </div>
            </div>
        </div>
    );
};

export default KidsWearAllProducts;
``
