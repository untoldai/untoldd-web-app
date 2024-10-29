import React, { useState } from 'react';

// Sample data
const initialOrders = [
  { id: 1, customer: 'John Doe', date: '2024-08-10', total: 120.00, status: 'Shipped' },
  { id: 2, customer: 'Jane Smith', date: '2024-08-12', total: 80.50, status: 'Pending' },
  { id: 3, customer: 'Alice Johnson', date: '2024-08-15', total: 150.75, status: 'Delivered' },
  { id: 4, customer: 'Bob Brown', date: '2024-08-18', total: 95.20, status: 'Cancelled' },
  // Add more orders as needed
];

const UserOrderLists = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [sortKey, setSortKey] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const sortOrders = (key) => {
    const sortedOrders = [...orders].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setOrders(sortedOrders);
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='ml-36  mt-10'>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Order List</h1>
        
        {/* Sorting Options */}
        <div className="mb-4">
          <button
            onClick={() => sortOrders('date')}
            className={`py-2 px-4 rounded-lg shadow mr-2 ${sortKey === 'date' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Sort by Date {sortKey === 'date' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
          </button>
          <button
            onClick={() => sortOrders('total')}
            className={`py-2 px-4 rounded-lg shadow mr-2 ${sortKey === 'total' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Sort by Total {sortKey === 'total' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
          </button>
          <button
            onClick={() => sortOrders('status')}
            className={`py-2 px-4 rounded-lg shadow ${sortKey === 'status' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Sort by Status {sortKey === 'status' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
          </button>
        </div>

        {/* Orders Table */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow disabled:opacity-50"
            >
              Previous
            </button>
            <span className="mx-4 text-gray-700">Page {currentPage}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastOrder >= orders.length}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserOrderLists;
