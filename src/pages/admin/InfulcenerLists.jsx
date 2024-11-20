import React, { useState, useEffect, Suspense } from 'react'
import { assignProductService, getAllInfluncerListsService, getAllProductService } from '../../service/admin/admin.service';
import ListSkeltion from '../../comoponent/skelton/ListSkeltion';
import { FaPlus, FaRupeeSign, FaTrash } from "react-icons/fa"
import CenterPopDialog from '../../comoponent/Dialog/CenterPopDialog';
import { errorToast, successToast } from '../../hooks/toast.hooks';
const InfluencersLists = () => {
    const [limit, setLimit] = useState(10);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [customers, setCustomers] = useState([]);
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [pagination, setPagination] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisble] = useState(false);
    const [selectedInfluncer, setSelectedInfluncer] = useState(null);
    const sortCustomers = (key) => {
        const sortedCustomers = [...customers].sort((a, b) => {
            if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
        setCustomers(sortedCustomers);
        setSortKey(key);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const getAllProductdata = async () => {
        try {

            setIsLoading(true)
            if (isVisible == false) {
                setIsLoading(false)
                return;
            }
            const resp = await getAllProductService({ page: 1, limit: 20 });

            if (resp.data.statusCode === 200) {
                setIsLoading(false)
                setProducts(resp.data.data.products);
                setPagination(resp.data.data.pagination)
                return;
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            return
        }
    }
    async function getAllUserLists() {
        try {
            setIsLoading(true)
            const resp = await getAllInfluncerListsService(currentPage, limit);

            if (resp.data.statusCode === 200) {

                setIsLoading(false)
                setCustomers(resp.data.data.data);
                setPagination(resp.data.data.pagination)
                return;
            }
        } catch (error) {
            setIsLoading(false)
            return error;
        }
    }
    useEffect(() => {
        getAllProductdata()
    }, [isVisible])

    useEffect(() => {
        getAllUserLists();
    }, [])
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6 my-20">
                <div className="ml-60 bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">influencers List</h1>

                    <div className="mb-4">
                        <button
                            onClick={() => sortCustomers('name')}
                            className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sort by Name {sortKey === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                        </button>
                        <button
                            onClick={() => sortCustomers('email')}
                            className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                        >
                            Sort by Email {sortKey === 'email' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                        </button>
                    </div>

                    {
                        isLoading && <ListSkeltion />
                    }
                    <Suspense fallback="loading">
                        <AssignProudct visible={isVisible} onclose={() => setIsVisble(false)} products={products} isLoading={isLoading} selectedInfluncer={selectedInfluncer} />
                    </Suspense>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-black">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Created At</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Allow_login</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Delete</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Assign Product</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {customers && customers.map((customer) => (
                                <tr key={customer._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer && customer.contact.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.contact.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.createdAt}</td>
                                    <td className='whitespace-nowrap px-6'> <button
                                        // onClick={() => updateActivetoggle(product._id, product.isActive)} // Implement toggleActive function
                                        className={`w-16 h-8 rounded-full flex items-center justify-${customer.is_user_login ? 'end' : 'start'} px-1 transition-colors ${customer.is_user_login ? 'bg-green-500' : 'bg-red-500'}`}
                                    >
                                        <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                                    </button></td>
                                    <td className='whitespace-nowrap px-6'> <button
                                        // onClick={() => updateActivetoggle(product._id, product.isActive)} // Implement toggleActive function
                                        className='py-2 px-4 bg-red-600 text-white font-bold rounded-md text-xl'
                                    >
                                        <FaTrash />
                                    </button></td>
                                    <td className='whitespace-nowrap  flex justify-center items-center'> <button
                                        onClick={() => {
                                            setSelectedInfluncer(customer)
                                            setIsVisble(true)
                                        }}
                                        // onClick={() => updateActivetoggle(product._id, product.isActive)} // Implement toggleActive function
                                        className='py-2 px-4 bg-black text-white font-bold rounded-md text-xl'
                                    >
                                        Assign
                                    </button></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export const AssignProudct = ({ visible, onclose, products, isLoading, selectedInfluncer }) => {
    const [selectProduct, setSelectedProduct] = useState('');

    async function assignProduct(productId) {
        try {
            const res = await assignProductService(productId, selectedInfluncer._id);
            if (res.data.statusCode === 201) {
                successToast(res.data.message); return
            }
            if(res.error!==null){
                return errorToast(res.error.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CenterPopDialog visible={visible} onClose={onclose} className={'!h-2/3 !w-1/2 overflow-y-scroll'}>
            {isLoading && <ListSkeltion />}
            <div className=' my-10'>
                <div className="p-6 my-5 hover:bg-gray-50 bg-white rounded-lg shadow-2xl shadow-slate-600 flex flex-col md:flex-row gap-6 justify-between items-center">
                    <p>Name: {selectedInfluncer && selectedInfluncer?.name}</p>
                    <p>Email: {selectedInfluncer && selectedInfluncer?.contact.email}</p>
                </div>
                <div div className="flex flex-col gap-2">
                    {products.map((product) => (
                        <div key={product._id} className="p-6 hover:bg-gray-50 bg-white rounded-lg shadow-2xl shadow-slate-600 flex flex-col md:flex-row gap-6 justify-between items-center">
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src={product?.images[0].url}
                                    alt={product.name}
                                    className="h-32 w-32 object-cover rounded-lg border border-gray-200 shadow-sm"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-sm text-gray-500">Type: <span className="text-gray-700">{product.type}</span></p>
                                <p className="text-sm text-gray-500">Category: <span className="text-gray-700">{product.category}</span></p>
                                <p className="text-sm text-gray-500 flex items-center">Price:
                                    <span className="font-bold text-gray-800 flex items-center ml-1">
                                        <FaRupeeSign className="text-gray-700" />
                                        {product.price}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500">Stock: <span className="text-gray-700">{product.stock}</span></p>
                            </div>

                            {/* Assign Button */}
                            <div className="flex flex-col items-center space-y-2">
                                <button
                                    type="button"
                                    onClick={() => assignProduct(product._id)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <FaPlus className="inline mr-2" />
                                    Assign to Influencer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </CenterPopDialog>
    )
}
export default InfluencersLists