import React, { useState, useEffect } from "react";
import { getInfluncerProfileDetailsService, influncerResetPassword } from "../../service/influncer/influncer.service";
import { errorToast, successToast } from "../../hooks/toast.hooks";
import { removeInfluncerToken } from "../../utils/tokenStorage";
import { useNavigate } from "react-router-dom";



const InfluncerProfile = () => {
  const [profileDetails, setProfileDetails] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(profileDetails);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to handle edit modal visibility
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSave = () => {

    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handlePasswordSubmit = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    // Logic to save the new password goes here.

    const response = await influncerResetPassword({
      old_password: passwords.currentPassword,
      new_password: passwords.confirmPassword
    });

    if (response.data != null && response.data.statusCode === 200) {
      successToast(response.data.data);
      setIsPasswordModalOpen(false);
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
      removeInfluncerToken();
      navigate('/influncer/login');
      navi
      return;
    }

    if (response.error !== null) {
      errorToast(response.error.message)
      return
    }



  };

  const handleChangePasswordModal = () => {
    setIsPasswordModalOpen(!isPasswordModalOpen);
  };

  const handleEditProfileModal = () => {
    setIsEditModalOpen(!isEditModalOpen); // Toggle edit modal visibility
  };

  const handleEditProfileSubmit = () => {
    setNewProfile(newProfile);
    setIsEditModalOpen(false); // Close the modal after saving
  };
  const fetchProfile = async () => {
    // Fetch profile details
    setLoading(true);

    try {
      const response = await getInfluncerProfileDetailsService();

      setProfileDetails(response.data.data);
      setLoading(false)
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {


    fetchProfile();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-5xl p-8 space-y-6">
        {/* Header with Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-full bg-gray-300"></div> {/* Placeholder for Profile Image */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">{profileDetails && profileDetails?.name}</h1>
            <p className="text-lg text-gray-600">@{profileDetails && profileDetails?.user_id}</p>
            <p className="text-sm text-gray-500">Joined on {new Date(profileDetails && profileDetails?.createdAt).toLocaleDateString()}</p>
            <div className={`text-sm px-2 py-1 rounded-full inline-block ${profileDetails && profileDetails?.is_influncer_verifed ? "bg-green-500 text-white" : "bg-yellow-300 text-black"}`}>
              {profileDetails && profileDetails?.is_influncer_verifed ? "Verified Influencer" : "Unverified Influencer"}
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        {/* <div className="flex justify-end">
          <button
            onClick={handleEditProfileModal}
            className="px-6 py-2 bg-blue-600 text-white rounded-md focus:outline-none hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div> */}
        {/* <div className="flex justify-end">
          <button
            onClick={handleEditProfileModal}
            className="px-6 py-2 bg-blue-600 text-white rounded-md focus:outline-none hover:bg-blue-700"
          >
            Social Profile
          </button>
        </div> */}
        {/* Profile Details Section */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Phone:</strong> {profileDetails && profileDetails?.contact?.code} {profileDetails && profileDetails?.contact?.phone}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              <strong>Email:</strong> {profileDetails && profileDetails?.contact?.email}
            </p>
          </div>

          {/* Personal Details */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Name:</strong> {profileDetails && profileDetails?.personal_details?.first_name} {profileDetails && profileDetails?.personal_details?.last_name}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              <strong>Date of Birth:</strong> {new Date(profileDetails && profileDetails?.personal_details?.dob).toLocaleDateString()}
            </p>
          </div>

          {/* Account Status */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Account Status</h3>

            <p className="text-sm text-gray-500 mt-1">
              <strong>Influencer Login Status:</strong> {profileDetails && profileDetails?.is_influncer_login ? "Influencer Logged In" : "Influencer Not Logged In"}
            </p>
          </div>

          {/* Change Password Button */}
          <div className="mt-4">
            <button
              onClick={handleChangePasswordModal}
              className="px-6 py-2 bg-red-600 text-white rounded-md focus:outline-none hover:bg-red-700"
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Modal for Changing Password */}
        {isPasswordModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96">
              <h3 className="text-xl font-semibold text-gray-800">Change Password</h3>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Confirm new password"
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    onClick={handlePasswordSubmit}
                    className="px-6 py-2 bg-green-500 text-white rounded-md"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleChangePasswordModal}
                    className="px-6 py-2 bg-gray-300 text-black rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Editing Profile */}
        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96">
              <h3 className="text-xl font-semibold text-gray-800">Edit Profile</h3>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={newProfile.personal_details.first_name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={newProfile.personal_details.last_name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={newProfile.contact.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newProfile.contact.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    onClick={handleEditProfileSubmit}
                    className="px-6 py-2 bg-green-500 text-white rounded-md"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleEditProfileModal}
                    className="px-6 py-2 bg-gray-300 text-black rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfluncerProfile;
