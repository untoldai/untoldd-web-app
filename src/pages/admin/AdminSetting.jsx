import React, { useState } from 'react'

const AdminSetting = () => {
    const [settings, setSettings] = useState({
        siteName: 'My E-Commerce Site',
        siteUrl: 'https://www.myecommercesite.com',
        email: 'support@myecommercesite.com',
        currency: 'USD',
        language: 'English',
        paymentGateway: 'Stripe',
        shippingOptions: 'Free Shipping',
        taxRate: '5%',
        orderNotificationEmail: 'orders@myecommercesite.com',
        socialMediaLinks: {
          facebook: '',
          twitter: '',
          instagram: '',
        },
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSettings({
          ...settings,
          [name]: value,
        });
      };
    
      const handleSocialMediaChange = (e) => {
        const { name, value } = e.target;
        setSettings({
          ...settings,
          socialMediaLinks: {
            ...settings.socialMediaLinks,
            [name]: value,
          },
        });
      };
    
      const handleSave = () => {
        // Add logic to save the settings
        console.log('Settings saved:', settings);
      };
    

    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* General Settings */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="siteName" className="block text-gray-700">Site Name</label>
                                    <input
                                        id="siteName"
                                        name="siteName"
                                        type="text"
                                        value={settings.siteName}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="siteUrl" className="block text-gray-700">Site URL</label>
                                    <input
                                        id="siteUrl"
                                        name="siteUrl"
                                        type="url"
                                        value={settings.siteUrl}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700">Support Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={settings.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Localization Settings */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Localization</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="currency" className="block text-gray-700">Currency</label>
                                    <select
                                        id="currency"
                                        name="currency"
                                        value={settings.currency}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                        {/* Add more currencies as needed */}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="language" className="block text-gray-700">Language</label>
                                    <select
                                        id="language"
                                        name="language"
                                        value={settings.language}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="French">French</option>
                                        {/* Add more languages as needed */}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Payment Settings */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="paymentGateway" className="block text-gray-700">Payment Gateway</label>
                                    <select
                                        id="paymentGateway"
                                        name="paymentGateway"
                                        value={settings.paymentGateway}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        <option value="Stripe">Stripe</option>
                                        <option value="PayPal">PayPal</option>
                                        <option value="Square">Square</option>
                                        {/* Add more gateways as needed */}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Settings */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Shipping Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="shippingOptions" className="block text-gray-700">Shipping Options</label>
                                    <select
                                        id="shippingOptions"
                                        name="shippingOptions"
                                        value={settings.shippingOptions}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        <option value="Free Shipping">Free Shipping</option>
                                        <option value="Flat Rate">Flat Rate</option>
                                        <option value="Local Delivery">Local Delivery</option>
                                        {/* Add more shipping options as needed */}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="taxRate" className="block text-gray-700">Tax Rate</label>
                                    <input
                                        id="taxRate"
                                        name="taxRate"
                                        type="text"
                                        value={settings.taxRate}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Notifications Settings */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Notifications Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="orderNotificationEmail" className="block text-gray-700">Order Notification Email</label>
                                    <input
                                        id="orderNotificationEmail"
                                        name="orderNotificationEmail"
                                        type="email"
                                        value={settings.orderNotificationEmail}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Social Media Settings */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="facebook" className="block text-gray-700">Facebook URL</label>
                                    <input
                                        id="facebook"
                                        name="facebook"
                                        type="url"
                                        value={settings.socialMediaLinks.facebook}
                                        onChange={handleSocialMediaChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="twitter" className="block text-gray-700">Twitter URL</label>
                                    <input
                                        id="twitter"
                                        name="twitter"
                                        type="url"
                                        value={settings.socialMediaLinks.twitter}
                                        onChange={handleSocialMediaChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="instagram" className="block text-gray-700">Instagram URL</label>
                                    <input
                                        id="instagram"
                                        name="instagram"
                                        type="url"
                                        value={settings.socialMediaLinks.instagram}
                                        onChange={handleSocialMediaChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleSave}
                            className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Save Settings
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminSetting