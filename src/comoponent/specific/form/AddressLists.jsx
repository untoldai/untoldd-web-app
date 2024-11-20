import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addNewAddressService, getAddressListsService, setDefaultAddressService, updateAddressService } from '../../../service/user/user.service';
import { errorToast, successToast } from '../../../hooks/toast.hooks';

const AddressList = ({ userId }) => {
    const [addresses, setAddresses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        streetAddress: '',
        apartmentNumber: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'USA',
        phone: '',
        addressType: 'Home',
        isDefault: false,
    });
    const [editingAddressId, setEditingAddressId] = useState(null);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            setIsLoading(true)
            const response = await getAddressListsService();
            //console.log(response)
            if (response.data == null) {
                setIsLoading(false);
                return;
            }

            setAddresses(response.data.data);
            setIsLoading(false)
            return;
        } catch (error) {
            setIsLoading(false)
            console.error("Error fetching addresses:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            if (editingAddressId) {

                const response = await updateAddressService(formData, editingAddressId);

                if (response.data === null) {

                    setIsLoading(false);
                    errorToast(response.error.message);
                    return;
                }
                if (response.data.statusCode === 200) {
                    setIsLoading(false);
                    setFormData({
                        streetAddress: '',
                        apartmentNumber: '',
                        city: '',
                        state: '',
                        postalCode: '',
                        country: 'USA',
                        phone: '',
                        addressType: 'Home',
                        isDefault: false,
                    });
                    setEditingAddressId(null);
                    fetchAddresses();
                    successToast(response.data.message);
                    return;
                }

            }
            else {
                const response = await addNewAddressService(formData);

                if (response.data.statusCode === 201) {
                    setIsLoading(false);
                    setFormData({
                        streetAddress: '',
                        apartmentNumber: '',
                        city: '',
                        state: '',
                        postalCode: '',
                        country: 'USA',
                        phone: '',
                        addressType: 'Home',
                        isDefault: false,
                    });
                    setEditingAddressId(null);
                    fetchAddresses();
                    successToast(response.data.message);
                    return;
                }

            }
            errorToast(response.error.message);
            setIsLoading(false);
            return

        } catch (error) {

            console.error("Error saving address:", error);
        }
    };

    const handleEdit = (address) => {
        setFormData({
            streetAddress: address.streetAddress,
            apartmentNumber: address.apartmentNumber || '',
            city: address.city,
            state: address.state,
            postalCode: address.postalCode,
            country: address.country,
            phone: address.phone || '',
            addressType: address.addressType,
            isDefault: address.isDefault,
        });
        setEditingAddressId(address._id);
    };

    const handleSetDefault = async (id) => {
        try {
            const response = await setDefaultAddressService(id);
            
            if (response.data.statusCode == 200) {

                successToast(response.data.message)
                fetchAddresses();
                return
            }

        } catch (error) {
            console.error("Error setting default address:", error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Addresses</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="apartmentNumber"
                    placeholder="Apartment/Suite (optional)"
                    value={formData.apartmentNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                >

                    <option value="INDIA" selected disabled>INDIA</option>

                </select>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <select
                    name="addressType"
                    value={formData.addressType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>
                <button
                    type="submit"
                    className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-200"
                >
                    {
                        isLoading ? "Updating.." :

                            editingAddressId ? 'Update Address' : 'Add Address'}
                </button>
            </form>
            <div className="mt-6">
                {addresses.map((address) => (
                    <div
                        key={address._id}
                        className={`border border-gray-300 rounded p-4 mb-4 bg-gray-50 ${address.isDefault ? 'border-blue-500' : ''}`}
                    >
                        <h4 className="font-semibold flex items-center">
                            {address.isDefault && (
                                <span className="bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 mr-2">
                                    Default
                                </span>
                            )}
                            {address.streetAddress}, {address.city}, {address.state} {address.postalCode}
                        </h4>
                        <p>{address.phone}</p>
                        <p>Type: {address.addressType}</p>
                        <p>Default: {address.isDefault ? 'Yes' : 'No'}</p>
                        <div className="mt-2">
                            <button
                                onClick={() => handleEdit(address)}
                                className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-200"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleSetDefault(address._id)}
                                className={`p-2 rounded transition duration-200 ${address.isDefault ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400'}`}
                                disabled={address.isDefault}
                            >
                                Set as Default
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AddressList;
