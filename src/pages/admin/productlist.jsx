import React, { useContext, useState } from 'react'
import { SidebarContext } from '../../context/SidebarContext'

import { FaSearch, FaSort, FaFilter } from 'react-icons/fa';
const Productlist = () => {
    const { isToggle } = useContext(SidebarContext);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Product A',
            type: 'Electronics',
            price: 100,
            description: 'A high-quality electronic product',
            category: 'Electronics',
            stock: 50,
            brand: 'Brand X',
            sku: 'SKU001',
            images: [],
            tags: 'tech, gadget',
            variants: [{ color: 'Black', size: 'M', additionalPrice: 20 }],
            warranty: '2 years',
            isFeatured: true,
            isActive: true,
        },
        {
            id: 2,
            name: 'Product B',
            type: 'Fashion',
            price: 200,
            description: 'A stylish fashion item',
            category: 'Fashion',
            stock: 30,
            brand: 'Brand Y',
            sku: 'SKU002',
            images: [],
            tags: 'clothing, trendy',
            variants: [{ color: 'Red', size: 'L', additionalPrice: 15 }],
            warranty: '1 year',
            isFeatured: false,
            isActive: true,
        },
        // Add more products as needed
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name');
    const [filterCategory, setFilterCategory] = useState('');

    // Filter and sort the products
    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterCategory ? product.category === filterCategory : true)
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

    return (
        <div className={`transition-transform duration-300 w-full  overflow-hidden mt-10 ease-in-out p-6 ${isToggle ? 'translate-x-56 md:w-[80%]' : 'translate-x-0 w-full'}`} style={{ background: '#ffffff' }}>
        
                <div className="w-full h-full bg-white">
                    {/* Statistics Section */}
                    <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Statistics</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold">Total Products</h3>
                                <p className="text-2xl font-bold">{products.length}</p>
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
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>
                    </div>

                    {/* Product Listing */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-500">Type: {product.type}</p>
                                <p className="text-gray-500">Category: {product.category}</p>
                                <p className="text-gray-500">Price: ${product.price}</p>
                                <p className="text-gray-500">Stock: {product.stock}</p>
                                <p className="text-gray-500">Brand: {product.brand}</p>
                                <p className="text-gray-500">SKU: {product.sku}</p>
                                <p className="text-gray-500">Description: {product.description}</p>
                                <p className="text-gray-500">Warranty: {product.warranty}</p>
                                <p className="text-gray-500">Tags: {product.tags}</p>
                                <p className="text-gray-500">Featured: {product.isFeatured ? 'Yes' : 'No'}</p>
                                <p className="text-gray-500">Active: {product.isActive ? 'Yes' : 'No'}</p>
                                {/* Add more product details or images if needed */}
                            </div>
                        ))}
                    </div>
                </div>

            
        </div>
    )
}

export default Productlist