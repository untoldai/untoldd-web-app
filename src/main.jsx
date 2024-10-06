import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import AdminLogin from './pages/auth/AdminLogin.jsx';
import AdminLayout from './comoponent/layout/Admin/AdminLayout.jsx';
import { AdminDashboard } from './pages/admin/AdminDashboard.jsx';
import AddProduct from './pages/admin/AddProduct.jsx';
import Productlist from './pages/admin/productlist.jsx';
import Profile from './pages/admin/Profile.jsx';
import AdminSetting from './pages/admin/AdminSetting.jsx';
import Customer from './pages/admin/Customer.jsx';
import VendorLists from './pages/admin/VendorLists.jsx';
import InfluencersLists from './pages/admin/InfulcenerLists.jsx';
import ReportPage from './pages/admin/ReportPage.jsx';
import OrderLists from './pages/admin/OrderLists.jsx';
import ExploreProducts from './pages/ExploreProducts.jsx';
import Mission from './pages/Mission.jsx';
import UserLogin from './pages/auth/UserLogin.jsx';
import UserRegister from './pages/auth/UserRegister.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import CreatePassword from './pages/auth/CreatePassword.jsx';
import KidsWareHomepage from './pages/kidsware/KidsWareHomepage.jsx';
import KidsWearLayout from './comoponent/layout/kidsware/KidsWareLayout.jsx';
import BeautyLayout from './comoponent/layout/beauty/BeautyLayout.jsx';
import BeautyHomepage from './pages/beautyproduct/BeautyHomepage.jsx';
import BeautyAboutUs from './pages/kidsware/KidsWareAboutUs.jsx';
import BeautyContactUs from './pages/kidsware/KidswareContactUs.jsx';
import KidsWearAllProducts from './pages/kidsware/KidsWearProducts.jsx';
import BoyKidsWearAllProducts from './pages/kidsware/BoyKidsWearProducts.jsx';
import GirlKidsWearAllProducts from './pages/kidsware/GirlsKidsWearProducts.jsx';
import KidsWearCart from './pages/kidsware/KidsWareCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/explore-products",
    element: <ExploreProducts />
  },
  {
    path: "/our-mission",
    element: <Mission />
  },
  {
    path: "/auth/admin-login",
    element: <AdminLogin />
  },
  {
    path: '/auth/user-login',
    element: <UserLogin />
  },
  {
    path: '/auth/user-register',
    element: <UserRegister />
  },
  {

    path: "/auth/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/auth/create-password",
    element: <CreatePassword />
  },
  // kids ware routing
  {
    path: "/kids-wear",
    element: <KidsWearLayout />,
    children: [
      {
        path: '/kids-wear',
        element: <KidsWareHomepage />
      },
      {
        path:"/kids-wear/about-us",
        element:<BeautyAboutUs />
      },
      {
        path:"/kids-wear/contact-us",
        element:<BeautyContactUs />
      },
      {
        path:"/kids-wear/all-products",
        element:<KidsWearAllProducts/>
      },
      {
        path:"/kids-wear/boys-clothing",
        element:<BoyKidsWearAllProducts />
      },
      {
        path:"/kids-wear/girls-clothing",
        element:<GirlKidsWearAllProducts />
      },
      {
        path:"/kids-wear/cart",
        element:<KidsWearCart />
      }
    ]
  },
  // beauty 
  {
    path: "/beauty",
    element: <BeautyLayout />,
    children: [
      {
        path: "/beauty",
        element: <BeautyHomepage />
      },
     
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />
      }, {
        path: '/admin/add-product',
        element: <AddProduct />
      },
      {
        path: "/admin/products",
        element: <Productlist />
      },
      {
        path: "/admin/profile",
        element: <Profile />
      },
      {
        path: "/admin/setting",
        element: <AdminSetting />
      },
      {
        path: "/admin/users",
        element: <Customer />
      },
      {
        path: "/admin/vendors",
        element: <VendorLists />
      },
      {
        path: "/admin/influencers",
        element: <InfluencersLists />
      },
      {
        path: '/admin/reports',
        element: <ReportPage />
      },
      {
        path: "/admin/orders",
        element: <OrderLists />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
