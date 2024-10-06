import React, { useState } from 'react'
const initialCustomers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', createdAt: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', createdAt: '2023-03-22' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', createdAt: '2023-02-10' },
    // Add more customers as needed
];
const Customer = () => {
    const [customers, setCustomers] = useState(initialCustomers);
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

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

                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(customer.createdAt).toLocaleDateString()}</td>
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