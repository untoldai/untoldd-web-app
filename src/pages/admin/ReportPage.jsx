import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialData = {
    salesData: [
        { month: 'Jan', sales: 4000 },
        { month: 'Feb', sales: 3000 },
        { month: 'Mar', sales: 5000 },
        { month: 'Apr', sales: 7000 },
        { month: 'May', sales: 6000 },
        { month: 'Jun', sales: 8000 },
    ],
    customerData: [
        { month: 'Jan', customers: 200 },
        { month: 'Feb', customers: 180 },
        { month: 'Mar', customers: 220 },
        { month: 'Apr', customers: 250 },
        { month: 'May', customers: 230 },
        { month: 'Jun', customers: 270 },
    ],
    productData: [
        { product: 'Product A', sales: 1500 },
        { product: 'Product B', sales: 2500 },
        { product: 'Product C', sales: 3500 },
        { product: 'Product D', sales: 2000 },
    ],
};

const ReportPage = () => {
    const [selectedReport, setSelectedReport] = useState('sales');

    return (
        <div className='ml-36  mt-10'>
            <div className=" bg-gray-100 p-6">
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">Reports</h1>

                    {/* Report Selector */}
                    <div className="mb-4">
                        <button
                            onClick={() => setSelectedReport('sales')}
                            className={`py-2 px-4 rounded-lg shadow mr-2 ${selectedReport === 'sales' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Sales Report
                        </button>
                        <button
                            onClick={() => setSelectedReport('customers')}
                            className={`py-2 px-4 rounded-lg shadow mr-2 ${selectedReport === 'customers' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Customer Activity
                        </button>
                        <button
                            onClick={() => setSelectedReport('products')}
                            className={`py-2 px-4 rounded-lg shadow ${selectedReport === 'products' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Product Performance
                        </button>
                    </div>

                    {/* Report Content */}
                    <div>
                        {selectedReport === 'sales' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={initialData.salesData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        )}

                        {selectedReport === 'customers' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Customer Activity</h2>
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={initialData.customerData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="customers" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        )}

                        {selectedReport === 'products' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Product Performance</h2>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {initialData.productData.map((product) => (
                                            <tr key={product.product}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.product}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.sales}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReportPage;
