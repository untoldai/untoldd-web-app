import React, { useEffect, useState } from 'react';
import { getOrderListServiceAdmin, updateOrderStatusServiceAdmin } from '../../service/admin/admin.service';
import { errorToast, successToast } from '../../hooks/toast.hooks';

const OrderLists = () => {
  const [orders, setOrders] = useState([]);
  const [sortKey, setSortKey] = useState('date');
  const [orderStatus, setOrderStatus] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [orderId, setOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
  //const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const getOrderList = async () => {
    try {
      const response = await getOrderListServiceAdmin();
      setOrders(response.data.data.orders)
      return
    } catch (error) {

    }
  }
  async function updateOrderStatus() {
    try {
      setIsLoading(true);
      const response = await updateOrderStatusServiceAdmin({ orderId: orderId, currentStatus: orderStatus });
      
      if (response.data != null && response.data.statusCode === 200) {
        setIsLoading(false);
        successToast(response.data.message);
        setOrderStatus('')
        getOrderList();

        return
      }
      if (response.error !== null && response.error.statusCode === 500) {
        setIsLoading(false);
        errorToast(response.error.message);
        return
      }
    } catch (error) {
      setIsLoading(false);
      errorToast(error);
      return
    }
  }
  useEffect(() => {
    
    getOrderList();
  }, []);
  useEffect(() => {
    if(orderStatus===""){
      return
    }
    updateOrderStatus();
  }, [orderStatus])
  return (
    <div className='ml-[14rem]  mt-10 '>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-[83rem] mx-auto bg-white shadow-md rounded-lg p-8">
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
          <div>

            <div className='overflow-scroll'>


              <table className="min-w-full divide-y divide-gray-200 table-responsive">
                <thead className="bg-black ">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Order_ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">ProductName</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Oty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Variants</th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Amount</th>
                 
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">order_status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Created_at</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Update_Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.length > 0 ? orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order && order?._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order && order?.userDetails[0].name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order && order?.userDetails[0].contact.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order && order?.orderAddress[0]?.streetAddress}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order && order?.productDetails.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order && order?.products?.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order && order?.products?.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <img src={order && order?.productDetails?.images.url} alt="" className='h-10' />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order && order?.totalAmount}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${order && order?.status === "CREATED" || order?.status === "PENDING" ||order?.status === "CANCEL" ? "text-red-400" : "text-green-400"}`}>{order && order?.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order && order?.orderDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <select value={order?.status} onChange={(e) => {
                          setOrderId(order?._id)
                          setOrderStatus(e.target.value)
                        }} className='bg-white shadow-2xl border-none outline-none shadow-slate-800 rounded-sm p-2 '>
                          <option value="#"  disabled>Select Order Status</option>
                          <option value="CREATED">CREATED</option>
                          <option value="PENDING">PENDING</option>
                          <option value="CONFIRMED">CONFIRMED</option>
                          <option value="SHIPPED">SHIPPED</option>
                          <option value="DELIVERED">DELIVERED</option>
                          <option value="CANCEL">CANCEL</option>
                        </select>
                      </td>
                    </tr>
                  )) : ""}
                </tbody>
              </table>
            </div>
          </div>
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
                // disabled={indexOfLastOrder >= orders.length}
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

export default OrderLists;
