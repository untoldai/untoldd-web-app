import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../../context/SidebarContext'

import { FaSearch, FaSort, FaFilter } from 'react-icons/fa';
import { getAllProductService, updateActiveToggleStatusService, updateFeaturesToggleStatusService } from '../../service/admin/admin.service';
import ListSkeltion from '../../comoponent/skelton/ListSkeltion';
import { successToast } from '../../hooks/toast.hooks';
import { errorResponse } from '../../../../untold-web-backend/src/utils/response.utils';
const Productlist = () => {
    const { isToggle } = useContext(SidebarContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name');
    const [filterCategory, setFilterCategory] = useState('');
    const [pagination, setPagination] = useState({})

    // Filter and sort the products
    const filteredProducts = products && products
        ?.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterCategory ? product.type === filterCategory : true)
        )
        .sort((a, b) => {
            if (sortOption === 'price') {
                return a.price - b.price;
            }
            return a.name.localeCompare(b.name);
        });

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const getAllProductdata = async () => {
        try {
            setLoading(true)
            const resp = await getAllProductService({ page: 1, limit: 20 });

            if (resp.data.statusCode === 200) {
                setLoading(false)
                setProducts(resp.data.data.products);
                setPagination(resp.data.data.pagination)
                return;
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
            return
        }
    }
    async function updateActivetoggle(productid, acitive) {
        try {
            const data = {
                'product_id': productid,
                'status': acitive
            }
            const response = await updateActiveToggleStatusService({ payload: data });

            if (response.data !== null && response.data.statusCode === 200) {
                getAllProductdata();
                successToast(response.data.message);
                return
            }
            return errorResponse(response.error.message)
        } catch (error) {
            return error;
        }

    }
    async function updateFeaturestoggle(productid, acitive) {
        try {
            const data = {
                'product_id': productid,
                'status': acitive
            }
            const response = await updateFeaturesToggleStatusService({ payload: data });

            if (response.data !== null && response.data.statusCode === 200) {
                getAllProductdata();
                successToast(response.data.message);
                return
            }
            return errorResponse(response.error.message)
        } catch (error) {
            return error;
        }

    }
    useEffect(() => {
        getAllProductdata()
    }, [])

    return (
        <div className={`transition-transform duration-300 w-full  overflow-hidden mt-10 ease-in-out p-6 ${isToggle ? 'translate-x-60 md:w-[80%]' : 'translate-x-0 w-full'}`} style={{ background: '#ffffff' }}>

            <div className="w-full h-full bg-white">
                {/* Statistics Section */}
                <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Statistics</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">Total Products</h3>
                            <p className="text-2xl font-bold">{products && products.length}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">Featured Products</h3>
                            <p className="text-2xl font-bold">{products.filter(p => p.isFeatured).length}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">Active Products</h3>
                            <p className="text-2xl font-bold">{products.filter(p => p.isActive).length}</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filters Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <FaSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <FaSort className="text-gray-500 mr-2" />
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="price">Sort by Price</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <FaFilter className="text-gray-500 mr-2" />
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="border border-gray-300 rounded-md p-2"
                        >
                            <option value="">All Categories</option>
                            <option value="Cosmetic">Cosmetic</option>
                            <option value="Kids Wear">Kids Wear</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                </div>
                {
                    loading ?

                        <ListSkeltion />
                        :


                        <div div className="flex flex-col gap-2">
                            {filteredProducts.map((product) => (
                                <div key={product._id} className="p-4 hover:bg-slate-100 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-4 justify-between">
                                    <div className="flex-shrink-0">
                                        <img src={product?.images[0].url} alt={product.name} className="h-24 w-24 object-cover rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                                        <p className="text-gray-600">Type: {product.type}</p>
                                        <p className="text-gray-600">Category: {product.category}</p>
                                        <p className="text-gray-600">Price: <span className="font-bold">${product.price}</span></p>
                                        <p className="text-gray-600">Stock: {product.stock}</p>
                                        <p className="text-gray-600">Brand: {product.brand}</p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-600">SKU: {product.sku}</p>
                                        <p className="text-gray-600">Description: {product.description?.substring(0, 30)}...</p>
                                        <p className="text-gray-600">Tags: {product.tags.join(', ')}</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="flex items-center mb-2">
                                            <span className="mr-2">Featured:</span>
                                            <button
                                                onClick={() => updateFeaturestoggle(product._id, product.isFeatured)} // Implement toggleFeature function
                                                className={`w-16 h-8 rounded-full flex items-center justify-${product.isFeatured ? 'end' : 'start'} px-1 transition-colors ${product.isFeatured ? 'bg-green-500' : 'bg-red-500'}`}
                                            >
                                                <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">Active:</span>
                                            <button
                                                onClick={() => updateActivetoggle(product._id, product.isActive)} // Implement toggleActive function
                                                className={`w-16 h-8 rounded-full flex items-center justify-${product.isActive ? 'end' : 'start'} px-1 transition-colors ${product.isActive ? 'bg-green-500' : 'bg-red-500'}`}
                                            >
                                                <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                }
            </div>


        </div >
    )
}

export default Productlist