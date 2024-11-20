import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Line } from 'react-chartjs-2';  // Import the Line chart from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { getAllInfluncerProductService } from '../../service/influncer/influncer.service';
import { InfluncerProductCard } from './MyProduct';
import { FaInbox } from 'react-icons/fa';

// Registering the required ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample influencer data
const influencerData = {
  totalSales: 5000,
  followers: 12000,
  engagementRate: 75,
  products: [
    { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, sales: 150, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, sales: 200, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', category: 'Category C', price: 9.99, sales: 300, image: 'https://via.placeholder.com/150' },
  ],
  socialMediaStats: [
    { platform: 'Instagram', followers: 8000, engagementRate: 85 },
    { platform: 'Twitter', followers: 3000, engagementRate: 65 },
    { platform: 'Facebook', followers: 1000, engagementRate: 60 },
  ],
  recentComments: [
    { user: 'Jane Doe', comment: 'Great product! I loved it!', date: '2024-11-10' },
    { user: 'John Smith', comment: 'Awesome quality, will buy again!', date: '2024-11-09' },
    { user: 'Emily Clark', comment: 'Very satisfied with the purchase.', date: '2024-11-08' },
  ],
  salesData: [120, 250, 180, 300, 450, 500, 600],  // Sales data for the chart
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],  // Labels for the chart (months)
  bio: "Hi, I'm Jane Doe, an influencer passionate about beauty, fashion, and fitness. I love collaborating with brands that align with my values and passion for a sustainable lifestyle. Let's work together to make a positive impact on the world!",
  engagementInsights: {
    likes: 3500,
    comments: 150,
    shares: 200,
  },
  activityTimeline: [
    { date: '2024-11-10', activity: 'Shared a new product review on Instagram' },
    { date: '2024-11-09', activity: 'Collaborated with XYZ Brand for a sponsored post' },
    { date: '2024-11-08', activity: 'Posted a behind-the-scenes video of a photoshoot' },
  ],
  brandCollaborations: [
    { brand: 'XYZ Cosmetics', product: 'Organic Skincare Kit', date: '2024-11-05' },
    { brand: 'ABC Apparel', product: 'Activewear Collection', date: '2024-10-20' },
  ],
  revenueBreakdown: {
    productSales: 3500,
    sponsoredPosts: 1200,
    affiliateLinks: 300,
  },
  followerDemographics: {
    age: '18-34',
    gender: '70% Female, 30% Male',
    location: 'US, UK, Canada',
  },
  upcomingProjects: [
    { project: 'Winter Collection Launch', date: '2024-12-01' },
    { project: 'Fitness Challenge with XYZ Brand', date: '2024-12-15' },
  ],
  fanMessages: [
    { user: 'Chris', message: 'You’re an inspiration! Keep it up!' },
    { user: 'Alicia', message: 'Love your fitness posts, very motivating!' },
    { user: 'Tom', message: 'I tried your skincare routine, and it works wonders!' },
  ],
};

// SalesChart Component
const SalesChart = () => {
  const data = {
    labels: influencerData.labels,
    datasets: [
      {
        label: 'Sales over Time',
        data: influencerData.salesData,
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#4CAF50',
      },
    ],
  };

  return (
    <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance Over Time</h3>
      <Line data={data} />
    </div>
  );
};

// ProductCard Component
const ProductCard = ({ product }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white p-4 hover:bg-indigo-100 transition ease-in-out duration-300" data-aos="fade-up">
    <img className="w-full h-48 object-cover rounded-lg" src={product.image} alt={product.name} />
    <div className="py-4">
      <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="mt-2 text-lg text-gray-800">${product.price}</div>
      <div className="mt-1 text-sm text-gray-400">Sales: {product.sales}</div>
    </div>
  </div>
);

const StatsCard = ({ title, value, icon, bgColor }) => (
  <div className={`bg-${bgColor} shadow-xl p-4 rounded-lg flex items-center space-x-4`} data-aos="fade-up">
    <div className="text-2xl text-white">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </div>
);

const EngagementCard = ({ title, value, color }) => (
  <div className={`bg-${color}-500 p-4 rounded-lg text-white`} data-aos="fade-up">
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const RevenueBreakdown = ({ revenue }) => (
  <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue Breakdown</h3>
    <ul className="space-y-4">
      <li className="flex justify-between"><span>Product Sales</span><span>${revenue.productSales}</span></li>
      <li className="flex justify-between"><span>Sponsored Posts</span><span>${revenue.sponsoredPosts}</span></li>
      <li className="flex justify-between"><span>Affiliate Links</span><span>${revenue.affiliateLinks}</span></li>
    </ul>
  </div>
);

const FollowerDemographics = ({ demographics }) => (
  <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Follower Demographics</h3>
    <ul className="space-y-4">
      <li><strong>Age Range:</strong> {demographics.age}</li>
      <li><strong>Gender:</strong> {demographics.gender}</li>
      <li><strong>Location:</strong> {demographics.location}</li>
    </ul>
  </div>
);

const UpcomingProjects = ({ projects }) => (
  <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Projects</h3>
    <ul className="space-y-4">
      {projects.map((project, index) => (
        <li key={index} className="text-gray-600">
          <span className="font-bold text-gray-800">{project.date}</span>: {project.project}
        </li>
      ))}
    </ul>
  </div>
);

const FanMessages = ({ messages }) => (
  <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Fan Messages</h3>
    <ul className="space-y-4">
      {messages.map((msg, index) => (
        <li key={index} className="text-gray-600">
          <span className="font-bold text-gray-800">{msg.user}</span>: {msg.message}
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = ({ influencer }) => {
  const [products, setProducts] = useState([]);
  async function getMyproducts() {
    try {
      const response = await getAllInfluncerProductService();

      if (response.data !== null && response.data.statusCode === 200) {
        return setProducts(response.data.data)
      }
    } catch (error) {
      return error
    }
  }
  useEffect(() => {
    getMyproducts();
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Bio Section */}
      <div className="col-span-2 bg-indigo-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Influencer Bio</h2>
        <p className="text-gray-600">{influencer.bio}</p>
      </div>

      {/* Stats Section */}
      <div className="col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Influencer Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatsCard title="Total Sales" value={influencer.totalSales} icon="💰" bgColor="green-500" />
          <StatsCard title="Followers" value={influencer.followers} icon="👥" bgColor="blue-500" />
          <StatsCard title="Engagement Rate" value={`${influencer.engagementRate}%`} icon="📊" bgColor="purple-500" />
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Most Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            products.length > 0 ? products.map((prd, ind) => (
              <InfluncerProductCard key={ind} product={prd.ProductDetails[0]} token={prd.assignment_token} />
            ))
              :
              <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto hover:bg-red-50 hover:scale-105 transition-all duration-300">
                <FaInbox className="text-red-500 text-4xl mr-3" />
                <p className="text-gray-700 text-lg font-medium">No Product Found</p>
              </div>

          }
        </div>
      </div>

      {/* Sales Performance Chart */}
      <div className="col-span-2">
        <SalesChart />
      </div>

      {/* Revenue Breakdown */}
      <div className="col-span-2 md:col-span-1 lg:col-span-1">
        <RevenueBreakdown revenue={influencer.revenueBreakdown} />
      </div>

      {/* Follower Demographics */}
      <div className="col-span-2 md:col-span-1 lg:col-span-1">
        <FollowerDemographics demographics={influencer.followerDemographics} />
      </div>

      {/* Upcoming Projects */}
      <div className="col-span-2">
        <UpcomingProjects projects={influencer.upcomingProjects} />
      </div>

      {/* Fan Messages */}
      <div className="col-span-2 md:col-span-1 lg:col-span-1">
        <FanMessages messages={influencer.fanMessages} />
      </div>
    </div>
  );
};

const InfluencerHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animations
      easing: 'ease-in-out',
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-6 text-gray-800">Welcome, Influencer!</h1>
      <Dashboard influencer={influencerData} />
    </div>
  );
};

export default InfluencerHome;
