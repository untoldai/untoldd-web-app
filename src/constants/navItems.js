import { FaTachometerAlt, FaPlus, FaBox, FaUser, FaCog, FaEdit, FaUsers, FaStore, FaStar, FaChartLine, FaClipboardList, FaTag, FaComments, FaCalendarAlt } from 'react-icons/fa';

export const navItems = [
  {
    id: 0,
    slug: '/admin/dashboard',
    title: 'Dashboard',
    icon: FaTachometerAlt
  },
  {
    id: 1,
    slug: '/admin/add-product',
    title: 'New Product',
    icon: FaPlus
  },
  {
    id: 2,
    slug: '/admin/products',
    title: 'Products',
    icon: FaBox
  },
  {
    id: 3,
    slug: '/admin/profile',
    title: 'Profile',
    icon: FaUser
  },
  {
    id: 4,
    slug: '/admin/setting',
    title: 'Setting',
    icon: FaCog
  },

  // Additional items for different customer types
  {
    id: 6,
    slug: '/admin/users',
    title: 'Users',
    icon: FaUsers,
    roles: ['admin']
  },
  {
    id: 7,
    slug: '/admin/vendors',
    title: 'Vendors',
    icon: FaStore,
    roles: ['admin']
  },
  {
    id: 8,
    slug: '/admin/influencers',
    title: 'Influencers',
    icon: FaStar,
    roles: ['admin']
  },
  {
    id: 9,
    slug: '/admin/reports',
    title: 'Reports',
    icon: FaChartLine,
    roles: ['admin', 'vendor', 'influencer']
  },
  {
    id: 10,
    slug: '/admin/orders',
    title: 'Orders',
    icon: FaClipboardList,
    roles: ['vendor']
  },
  {
    id: 11,
    slug: '/admin/promotions',
    title: 'Promotions',
    icon: FaTag,
    roles: ['admin', 'vendor']
  },
  {
    id: 12,
    slug: '/admin/reviews',
    title: 'Reviews',
    icon: FaComments,
    roles: ['admin', 'vendor']
  },
  {
    id: 14,
    slug: '/admin/blog',
    title: 'Blog',
    icon: FaEdit,
    roles: ['admin', 'vendor', 'influencer']
  },
  {
    id: 13,
    slug: '/admin/calendar',
    title: 'Calendar',
    icon: FaCalendarAlt,
    roles: ['admin', 'vendor', 'influencer']
  },

];
export const usernavItems = [

  {
    id: 3,
    slug: '/user/profile',
    title: 'Profile',
    icon: FaUser
  },
  // {
  //   id: 4,
  //   slug: '/admin/setting',
  //   title: 'Setting',
  //   icon: FaCog
  // },
  {
    id: 10,
    slug: '/user/my-orders',
    title: 'Orders',
    icon: FaClipboardList,
    roles: ['vendor']
  },

  {
    id: 12,
    slug: '/user/reviews',
    title: 'Reviews',
    icon: FaComments,
    roles: ['admin', 'vendor']
  },


];

export const footerItem = [
  {
    id: 0,
    title: "FAQ",
    links: [
      {
        id: 0,
        name: "PRIVACY POLICY",
        slug: "#",
      },
      {
        id: 1,
        name: "DISCLAMER",
        slug: "#",
      },
      {
        id: 2,
        name: "TERMS AND SERVICE",
        slug: "#",
      },
      {
        id: 3,
        name: "About Us",
        slug: "/about-us"
      }
    ]
  },
  {
    id: 0,
    title: "CONTACT",
    links: [
      {
        id: 0,
        name: "EMAIL",
        slug: "#",
      },
      {
        id: 1,
        name: "PHONENO",
        slug: "#",
      },

    ]
  },
  {
    id: 0,
    title: "FAQ",
    links: [
      {
        id: 0,
        name: "INSTAGRAM",
        slug: "#",
      },
      {
        id: 1,
        name: "FACEBOOK",
        slug: "#",
      },
      {
        id: 2,
        name: "TWITTER",
        slug: "#",
      },
      {
        id: 3,
        name: "LINKEDIN",
        slug: "#",
      },
    ]
  }
]

export const kidsWearNavItems = [
  {
    id: 0,
    title: "Home",
    slug: "/app"
  },
  {
    id: 1,
    title: "Products",
    slug: "/app/all-products"
  },
  {
    id: 2,
    title: "Blogs",
    slug: "/app/blgs"
  },
  {
    id: 3,
    title: "About Us",
    slug: "/app/about-us"
  },
  {
    id: 4,
    title: "Contact us",
    slug: "/app/contact-us"
  }
]
export const InfluncerNavItems = [
  {
    id: 0,
    title: "Home",
    slug: "/influncer"
  },
  {
    id: 1,
    title: "Products",
    slug: "/influncer/all-products"
  },
  {
    id: 2,
    title: "Blogs",
    slug: "/influncer/blogs"
  },
  {
    id: 3,
    title: "About Us",
    slug: "/influncer/about-us"
  },
  {
    id: 4,
    title: "Contact us",
    slug: "/influncer/contact-us"
  }
]
export const beautyNavItems = [
  {
    id: 0,
    title: "All products",
    slug: "/beauty/all-products"
  },
  {
    id: 1,
    title: "Perfume",
    slug: "/beauty/perfume"
  },
  // {
  //   id:2,
  //   title:"Cosmetic",
  //   slug:"/kids-wear/girls-clothing"
  // },
  {
    id: 3,
    title: "About Us",
    slug: "/beauty/about-us"
  },
  {
    id: 4,
    title: "Contact us",
    slug: "/beauty/contact-us"
  }
]