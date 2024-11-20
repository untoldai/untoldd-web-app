import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { footerItem } from '../../../constants/navItems';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-6 md:px-10">
      {/* Footer Navigation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerItem.map((mainLink) => (
          <div key={mainLink.id} className="">
            <p className="text-2xl font-semibold text-indigo-400 uppercase tracking-wide">{mainLink.title}</p>
            <div className="grid grid-cols-1 gap-3 my-2">
              {mainLink.links.map((link) => (
                <Link
                  to={link.slug}
                  key={link.id}
                  className="text-md font-medium  text-white hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Untoldd.in. All Rights Reserved.</p>
        <p className="mt-2">Designed with ❤️ by Your Untoldd Team</p>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-8">
          <a href="https://facebook.com" className="text-white hover:text-indigo-400 transform hover:scale-110 transition duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-indigo-400 transform hover:scale-110 transition duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-indigo-400 transform hover:scale-110 transition duration-300">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
