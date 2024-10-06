import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { FaDollarSign, FaShoppingCart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const AdminDashboard = () => {
  const { isToggle } = useContext(SidebarContext);

  // Sample data for charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 20, 50, 70, 60],
        borderColor: '#4B9CD3',
        backgroundColor: 'rgba(75, 156, 212, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#4B9CD3',
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [55, 25, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className={`transition-transform w-full sm:w-[80%] duration-300 mt-10 ease-in-out p-6 ${isToggle ? 'sm:translate-x-56' : 'sm:translate-x-0'}`} style={{ background: '#f0f4f8' }}>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" variants={fadeIn} initial="hidden" animate="visible">
        {/* Top Reports */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 border border-gray-200">
          <FaDollarSign className="text-4xl text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
            <p className="text-gray-600 text-lg">$12,345</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 border border-gray-200">
          <FaShoppingCart className="text-4xl text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Orders</h2>
            <p className="text-gray-600 text-lg">1234</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 border border-gray-200">
          <FaUser className="text-4xl text-purple-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Users</h2>
            <p className="text-gray-600 text-lg">5678</p>
          </div>
        </div>
      </motion.div>

      {/* Charts */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn} initial="hidden" animate="visible">
        <div className="bg-white shadow-lg rounded-lg p-6 h-[300px] border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Sales Overview</h3>
          <div className="h-full">
            <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-[300px] border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Orders Distribution</h3>
          <div className="h-full">
            <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-[300px] col-span-2 md:col-span-1 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Traffic Sources</h3>
          <div className="h-full">
            <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
