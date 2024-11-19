import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { getInfluncerProfileDetailsService } from '../../service/influncer/influncer.service';

// Sample influencer data with additional details
const influencerData = {
  name: 'Jane Doe',
  bio: "Hi, I'm Jane Doe, an influencer passionate about beauty, fashion, and fitness. I love collaborating with brands that align with my values and passion for a sustainable lifestyle.",
  followers: 12000,
  engagementRate: 75,
  profileImage: 'https://via.placeholder.com/150',
  address: '123 Main St, City, Country',
  dob: '1990-05-15',
  instagramLink: 'https://instagram.com/janedoe',
  facebookLink: 'https://facebook.com/janedoe',
  socialMediaStats: [
    { platform: 'Instagram', followers: 8000, engagementRate: 85 },
    { platform: 'Twitter', followers: 3000, engagementRate: 65 },
    { platform: 'Facebook', followers: 1000, engagementRate: 60 },
  ],
};

const ProfileCard = ({ influencer, onChange }) => (
  <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
    <div className="flex items-center space-x-6">
      <img
        className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500"
        src={influencer.profileImage}
        alt="Profile"
      />
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{influencer.name}</h2>
        <p className="text-gray-600 mt-2">{influencer.bio}</p>
        <p className="text-gray-600 mt-2">Address: {influencer.address}</p>
        <p className="text-gray-600 mt-2">Date of Birth: {influencer.dob}</p>
        <p className="text-gray-600 mt-2">Instagram: <a href={influencer.instagramLink} className="text-indigo-600">{influencer.instagramLink}</a></p>
        <p className="text-gray-600 mt-2">Facebook: <a href={influencer.facebookLink} className="text-indigo-600">{influencer.facebookLink}</a></p>
        <button
          onClick={onChange}
          className="mt-4 px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Edit Profile
        </button>
      </div>
    </div>
  </div>
);

const EditProfileForm = ({ influencer, onSave, onCancel }) => {
  const [bio, setBio] = useState(influencer.bio);
  const [name, setName] = useState(influencer.name);
  const [image, setImage] = useState(influencer.profileImage);
  const [address, setAddress] = useState(influencer.address);
  const [dob, setDob] = useState(influencer.dob);
  const [instagramLink, setInstagramLink] = useState(influencer.instagramLink);
  const [facebookLink, setFacebookLink] = useState(influencer.facebookLink);

  const handleSave = () => {
    onSave({
      name,
      bio,
      profileImage: image,
      address,
      dob,
      instagramLink,
      facebookLink
    });
  };

  return (
    <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Profile</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-6">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500"
            src={image}
            alt="Profile"
          />
          <input
            type="file"
            className="bg-indigo-50 p-2 rounded-lg"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600">Bio</label>
          <textarea
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600">Address</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600">Date of Birth</label>
          <input
            type="date"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600">Instagram Link</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600">Facebook Link</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
          />
        </div>
        <div className="mt-4 space-x-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
          >
            Save Changes
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const SocialMediaStats = ({ socialMediaStats }) => (
  <div className="bg-white shadow-xl p-6 rounded-lg" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Media Stats</h3>
    <ul className="space-y-4">
      {socialMediaStats.map((stat, index) => (
        <li key={index} className="flex justify-between text-gray-600">
          <span>{stat.platform}</span>
          <span>{stat.followers} Followers</span>
          <span>{stat.engagementRate}% Engagement</span>
        </li>
      ))}
    </ul>
  </div>
);

const InfluncerProfile = () => {
  const [influencer, setInfluencer] = useState(influencerData);
  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleSave = (updatedData) => {
    setInfluencer({ ...influencer, ...updatedData });
    setIsEditing(false);
  };
 

  const getProfileDetails = async () => {
      try {
          const response = await getInfluncerProfileDetailsService();
          
              setProfileDetails(response.data.data);
          
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      getProfileDetails();
  }, []);

  if (loading) {
      return <div>Loading...</div>;  // Show loading state while data is being fetched
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-6 text-gray-800">My Profile</h1>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {!isEditing ? (
          <ProfileCard influencer={profileDetails} onChange={handleEdit} />
        ) : (
          <EditProfileForm influencer={influencer} onSave={handleSave} onCancel={handleCancel} />
        )}

        <SocialMediaStats socialMediaStats={influencer.socialMediaStats} />
      </div>
    </div>
  );
};

export default InfluncerProfile;
