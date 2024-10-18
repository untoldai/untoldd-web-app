import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/auth/AdminLogin.jsx';
import AdminLayout from './comoponent/layout/Admin/AdminLayout.jsx';
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.jsx'));
const AddProduct = lazy(() => import('./pages/admin/AddProduct.jsx'));
const Productlist = lazy(() => import('./pages/admin/productlist.jsx'));
const Profile = lazy(() => import('./pages/admin/Profile.jsx'));
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
import store from './redux/store.js';
import DefaultSkeltion from './comoponent/skelton/DefaultSkeltion.jsx';
import AdminAuthLayout from './comoponent/layout/Admin/AdminAuthLayout.jsx';
import AboutUs from './pages/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about-us",
    element: <AboutUs />

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
        path: "/kids-wear/about-us",
        element: <BeautyAboutUs />
      },
      {
        path: "/kids-wear/contact-us",
        element: <BeautyContactUs />
      },
      {
        path: "/kids-wear/all-products",
        element: <KidsWearAllProducts />
      },
      {
        path: "/kids-wear/boys-clothing",
        element: <BoyKidsWearAllProducts />
      },
      {
        path: "/kids-wear/girls-clothing",
        element: <GirlKidsWearAllProducts />
      },
      {
        path: "/kids-wear/cart",
        element: <KidsWearCart />
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
        element: (<Suspense fallback={<DefaultSkeltion />}>
          <AdminAuthLayout slug="/admin/dashboard">
            <AdminDashboard />
          </AdminAuthLayout>
        </Suspense>)
      },
      {
        path: '/admin/add-product',
        element: (<Suspense fallback={<DefaultSkeltion />}>
          <AdminAuthLayout slug="/admin/add-product">
            <AddProduct />
          </AdminAuthLayout>
        </Suspense>)
      },
      {
        path: "/admin/products",
        element:
          (<Suspense fallback={<DefaultSkeltion />}>
            <AdminAuthLayout slug="/admin/products">
              <Productlist />
            </AdminAuthLayout>
          </Suspense>)

      },
      {
        path: "/admin/profile",
        element: (<Suspense fallback={<DefaultSkeltion />}>
          <AdminAuthLayout slug="/admin/profile">
            <Profile />
          </AdminAuthLayout>
        </Suspense>)
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
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right" // You can change this to any position
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </StrictMode>,
)
