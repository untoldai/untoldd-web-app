import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ShadowCard from '../../comoponent/shared/card/ShadowCard';
import AddressList from '../../comoponent/specific/form/AddressLists';
import { getUserProfileService } from '../../service/user/user.service';


const UserProfile = () => {

    const [profileDetails,setProfileDetails]=useState(null);
    const getProfileDetails=async()=>{
        try {
            const response=await getUserProfileService();
            setProfileDetails(response.data.data)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getProfileDetails();
    },[])
    return (
        <>
            <div className="w-full flex-col sm:flex-row sm:w-[83%] ml-0 sm:ml-[15%] bg-gray-100 flex items-center justify-around">
                <ShadowCard className="bg-white shadow-md rounded-lg  p-2">
                    <div className="flex items-center space-x-4 mb-6">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">{profileDetails && profileDetails?.personal_details.first_name +profileDetails&& profileDetails?.personal_details.last_name}</h1>
                            <p className="text-gray-600">Admin</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <p className="text-gray-900">{profileDetails && profileDetails?.contact.email}</p>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Phone Number</label>
                                    <p className="text-gray-900">{profileDetails && profileDetails?.contact.phone}</p>
                                </div>
                                {/* <div>
                                    <label className="block text-gray-700">Address</label>
                                    <p className="text-gray-900">1234 Elm Street, Springfield, IL, 62704</p>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Username</label>
                                    <p className="text-gray-900">{profileDetails && profileDetails?.user_id.toUpperCase()}</p>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Password</label>
                                    <p className="text-gray-900">************</p>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Two-Factor Authentication</label>
                                    <p className="text-gray-900">Enabled</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Save Changes
                        </button>
                    </div>
                </ShadowCard>
                <ShadowCard className={"mt-20"}>
                    <AddressList />
                </ShadowCard>
            </div>

        </>
    )
}

export default UserProfile