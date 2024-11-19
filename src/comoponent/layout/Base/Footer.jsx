import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { footerItem } from '../../../constants/navItems';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
        {footerItem.map((mainLink) => (
          <div key={mainLink.id} className="space-y-4">
            <p className="text-2xl  m-2 font-semibold text-indigo-400">{mainLink.title}</p>
            <div className="space-y-2">
              {mainLink.links.map((link) => (
                <Link
                  to={link.slug}
                  key={link.id}
                  className="text-lg font-medium m-3 text-white hover:text-indigo-400 transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Untoldd.in. All Rights Reserved.</p>
        <p className="mt-2">Designed with ❤️ by Your Untoldd Team</p>

        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-indigo-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-indigo-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-indigo-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer