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
import UserLayout from './comoponent/authenticate/UserAuthLayout.jsx';
const UserProfile = lazy(() => import('./pages/user/Profile.jsx'));
import UserOrderLists from './pages/user/OrderLists.jsx';
import ProductDetails from './pages/kidsware/ProductDetails.jsx';
import CheckoutPage from './pages/kidsware/CheckOut.jsx';
import UserAuthLayout from './comoponent/authenticate/UserAuthLayout.jsx';
import OrderConfrom from './pages/kidsware/OrderConfrom.jsx';
import MyOrder from './pages/kidsware/MyOrder.jsx';
import OrderDetails from './pages/kidsware/OrderDetails.jsx';
import InfluncerLogin from './pages/auth/InfluencerLogin.jsx';
import InfluncerRegisteration from './pages/auth/InfluncerRegisteration.jsx';
import InfluncerLayout from './comoponent/layout/InfluncerLayout.jsx';
import InfluencerHome from './pages/influnencer/InfluncerHome.jsx';
import InfluncerProfile from './pages/influnencer/InfluncerProfile.jsx';
import InfluncerAuthLayout from './comoponent/authenticate/InfluncerAuthLayout.jsx';
import MyProduct from './pages/influnencer/MyProduct.jsx';
const Blog = lazy(() => import('./pages/admin/Blog.jsx'));
const BlogListPage=lazy(()=>import('./pages/kidsware/WebsiteBlog.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <KidsWearLayout />,
    children: [
      {
        path: "/",
        element: <KidsWareHomepage />,
      }
    ]
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
    path: "/influncer/login",
    element: <InfluncerLogin />
  },
  {
    path: "/influncer/signup",
    element: <InfluncerRegisteration />
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
    path: "/influncer",
    element: <InfluncerLayout />,
    children: [
      {
        path: "/influncer",
        element: (
          <InfluncerAuthLayout>
            <InfluencerHome />
          </InfluncerAuthLayout>
        )
      },
      {
        path: "/influncer/profile",
        element: (
          <InfluncerAuthLayout>
            <InfluncerProfile />
          </InfluncerAuthLayout>
        )
      },
      {
        path: "/influncer/all-products",
        element: (
          <InfluncerAuthLayout>
            <MyProduct />
          </InfluncerAuthLayout>
        )
      },
    ]
  },
  {
    path: "/app",
    element: <KidsWearLayout />,
    children: [
      {
        path: '/app',
        element: <KidsWareHomepage />
      },
      {
        path: "/app/about-us",
        element: <BeautyAboutUs />
      },
      {
        path: "/app/contact-us",
        element: <BeautyContactUs />
      },
      {
        path: "/app/all-products",
        element: <KidsWearAllProducts />
      },
      {
        path: "/app/checkout",
        element:
          <UserAuthLayout slug='/app/checkout'>
            <CheckoutPage />
          </UserAuthLayout>
      },
      {
        path: "/app/user-profile",
        element: <UserAuthLayout slug='/app/user-profile'>
          <UserProfile />
        </UserAuthLayout>
      },
      {
        path: "/app/order/conform",
        element: <UserAuthLayout slug='/app/order/conform'>
          <OrderConfrom />
        </UserAuthLayout>
      },
      {
        path: "/app/my-orders",
        element: <UserAuthLayout slug='/app/my-orders'>
          <MyOrder />
        </UserAuthLayout>
      },
      {
        path: "/app/my-orders/details",
        element: <UserAuthLayout slug='/app/my-orders/details'>
          <OrderDetails />
        </UserAuthLayout>
      },
      {
        path: "/app/boys-clothing",
        element: <BoyKidsWearAllProducts />
      },
      {
        path: "/app/girls-clothing",
        element: <GirlKidsWearAllProducts />
      },
      {
        path: "/app/product-details",
        element: <ProductDetails />
      },
      {
        path: "/app/cart",
        element: <KidsWearCart />
      },
      {
        path: "/app/blogs",
        element: <BlogListPage />
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
        element: (
          <Suspense fallback={<DefaultSkeltion />}>
            <AdminAuthLayout slug="/admin/users">
              <Customer />
            </AdminAuthLayout>
          </Suspense>)
      },
      {
        path: "/admin/vendors",
        element: <VendorLists />
      },
      {
        path: "/admin/influencers",
        element: (
          <Suspense fallback={<DefaultSkeltion />}>
            <AdminAuthLayout slug="/admin/profile">
              <InfluencersLists />
            </AdminAuthLayout>
          </Suspense>)

      },
      {
        path: '/admin/reports',
        element: <ReportPage />
      },
      {
        path: "/admin/orders",
        element:
          (
            <Suspense fallback={<DefaultSkeltion />}>
              <AdminAuthLayout slug="/admin/orders">
                <OrderLists />
              </AdminAuthLayout>
            </Suspense>)

      },
      {
        path: "/admin/blog",
        element:
          (
            <Suspense fallback={<DefaultSkeltion />}>
              <AdminAuthLayout slug="/admin/blog">
                <Blog />
              </AdminAuthLayout>
            </Suspense>)

      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right" // You can change this to any position
        autoClose={3000} // Auto close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}

      />
    </Provider>
  </StrictMode>,
)
