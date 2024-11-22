import React, { useState } from 'react';

const BeautyContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 p-8 md:p-16 mt-12 sm:mt-0">
      <h1 className="text-5xl font-bold text-black mb-8 text-center">Contact Us</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
        We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        {/* Contact Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-3xl font-semibold text-sky-500 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-2">📞 Phone: +91 9471011463</p>
          <p className="text-lg text-gray-700 mb-2">📧 Email: admin@untoldd.in</p>
          <p className="text-lg text-gray-700 mb-4">🏢 Address: Bania Tola Near Jai Mata Di Agency, M.G Road, Katihar, Bihar 
          Pin code 854105</p>
          <h3 className="text-xl font-semibold text-yellow-500 mb-2">Business Hours</h3>
          <p className="text-lg text-gray-700">Mon - Fri: 9 AM - 5 PM</p>
          <p className="text-lg text-gray-700">Sat: 10 AM - 4 PM</p>
          <p className="text-lg text-gray-700">Sun: Closed</p>
        </div>

        {/* Map Location */}
        <div className="w-full md:w-2/3 h-64 md:h-96 mb-8 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509063!2d144.9537353153152!3d-37.8162799797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f9c0f67%3A0x5045675218cee80!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1610926322497!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeautyContactUs;
