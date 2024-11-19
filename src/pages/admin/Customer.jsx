import React, { useEffect, useState } from 'react'
import { getAllUserListsService } from '../../service/admin/admin.service';
import ListSkeltion from '../../comoponent/skelton/ListSkeltion';
const initialCustomers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', createdAt: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', createdAt: '2023-03-22' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', createdAt: '2023-02-10' },
    // Add more customers as needed
];
const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState('name');
    const [pagination, setPagination] = useState({});
    const [sortOrder, setSortOrder] = useState('asc');
    const [isLoading, setIsLoading] = useState(false);
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
    async function getAllUserLists() {
        try {
            setIsLoading(true)
            const resp = await getAllUserListsService(currentPage, limit);

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
        getAllUserLists();
    }, [])

    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6 my-20">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">Customer List</h1>

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
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-black">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Created At</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.contact.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.contact.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.createdAt}</td>
                                    <td> <button
                                                // onClick={() => updateActivetoggle(product._id, product.isActive)} // Implement toggleActive function
                                                className={`w-16 h-8 rounded-full flex items-center justify-${customer.is_user_login ? 'end' : 'start'} px-1 transition-colors ${customer.is_user_login ? 'bg-green-500' : 'bg-red-500'}`}
                                            >
                                                <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
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

export default Customer