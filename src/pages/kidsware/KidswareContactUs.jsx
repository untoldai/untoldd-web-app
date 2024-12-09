import React, { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaUser, FaPaperPlane, FaBuilding, FaLinkedin, 
  FaTwitter, FaFacebook, FaInstagram
} from 'react-icons/fa';

const ProfessionalContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 space-y-6">
          <h2 className="text-4xl font-bold text-sky-600 mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            {/* Contact Details */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-sky-500 w-6 h-6" />
              <div>
                <p className="text-gray-600 font-semibold">Call Us</p>
                <p className="text-lg">+91 9471011463</p>
                <p className="text-lg">+91 7779089442</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-sky-500 w-6 h-6" />
              <div>
                <p className="text-gray-600 font-semibold">Email</p>
                <p className="text-lg">admin@untoldd.in</p>
                <p className="text-lg">support@untoldd.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-sky-500 w-6 h-6" />
              <div>
                <p className="text-gray-600 font-semibold">Address</p>
                <p className="text-lg">Bania Tola Near Jai Mata Di Agency</p>
                <p className="text-lg">M.G Road, Katihar, Bihar 854105</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaClock className="text-sky-500 w-6 h-6" />
              <div>
                <p className="text-gray-600 font-semibold">Business Hours</p>
                <p className="text-lg">Mon - Fri: 9 AM - 5 PM</p>
                <p className="text-lg">Sat: 10 AM - 4 PM</p>
                <p className="text-lg text-red-500">Sun: Closed</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t">
              <p className="text-gray-600 font-semibold mb-3">Connect With Us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition"><FaLinkedin className="w-6 h-6" /></a>
                <a href="#" className="text-sky-500 hover:text-sky-700 transition"><FaTwitter className="w-6 h-6" /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition"><FaFacebook className="w-6 h-6" /></a>
                <a href="#" className="text-pink-600 hover:text-pink-800 transition"><FaInstagram className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-sky-600 mb-6">Send Us a Message</h2>
          
          {formSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="+91 XXXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-sky-600 text-white font-semibold py-3 rounded-lg hover:bg-sky-700 transition duration-300"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-white shadow-2xl rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-sky-600 mb-4">Support</h3>
            <p className="text-gray-700 mb-2">Technical Support: +91 7779089442</p>
            <p className="text-gray-700 mb-2">Email Support: support@untoldd.in</p>
            <p className="text-gray-700">Support Hours: 9 AM - 6 PM IST</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-600 mb-4">Sales Inquiries</h3>
            <p className="text-gray-700 mb-2">Sales Team: +91 9471011463</p>
            <p className="text-gray-700 mb-2">Email: sales@untoldd.in</p>
            <p className="text-gray-700">Available: Mon-Sat, 10 AM - 7 PM</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-600 mb-4">Quick Links</h3>
            <ul className="text-gray-700">
              <li className="mb-2"><a href="#" className="hover:text-sky-600">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-sky-600">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-sky-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509063!2d144.9537353153152!3d-37.8162799797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f9c0f67%3A0x5045675218cee80!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1610926322497!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Business Location"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalContactUs;