import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { getInfluncerProfileDetailsService, getInstaDetails } from '../../service/influncer/influncer.service';


// Mock function for fetching Instagram data, replace with actual API call
const fetchInstagramProfile = async (userId) => {
  try {
    
    const response = await getInstaDetails({user_id:userId});
    console.log(response)
    const data = await response.json();
    return {
      username: data.data.username,
      followers: data.data.counts.followed_by,
      posts: data.data.counts.media,
      bio: data.data.bio,
      profileImage: data.data.profile_picture,
      link: `https://instagram.com/${data.data.username}`
    };
  } catch (error) {
    console.error("Error fetching Instagram profile:", error);
    return null;
  }
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
  <div className="mt-6" data-aos="fade-up">
  <div className="flex items-center space-x-4 bg-white shadow-lg rounded-xl p-6">
    <img
      src={socialMediaStats.profile_picture}
      alt="Instagram Profile"
      className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500"
    />
    <div className="flex-grow">
      <h2 className="text-xl font-semibold text-gray-800">
        @{socialMediaStats.username}
      </h2>
      <p className="text-gray-600">{socialMediaStats.bio}</p>
      <div className="mt-2 flex space-x-6">
        <div>
          <span className="font-semibold text-gray-700">Followers</span>
          <p className="text-gray-500">{socialMediaStats.followers}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Following</span>
          <p className="text-gray-500">{socialMediaStats.following}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Posts</span>
          <p className="text-gray-500">{socialMediaStats.posts}</p>
        </div>
      </div>
    </div>
  </div>
</div>
);

const InfluncerProfile = () => {
  const [influencer, setInfluencer] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [instagramUserId, setInstagramUserId] = useState('');
  const [instagramConnected, setInstagramConnected] = useState(false);
  const [socialMediaStats, setSocialMediaStats] = useState({ instagram: null });
  const instagramProfile = {
    username: "john_doe_insta",
    bio: "Lifestyle Blogger | Traveler | Food Lover",
    followers: 12000,
    following: 500,
    posts: 245,
    profile_picture: "https://randomuser.me/api/portraits/men/1.jpg", // Sample image
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      // Fetch profile details
      setLoading(true);
      try {
        const response = await getInfluncerProfileDetailsService();
        setProfileDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching profile details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleSave = (updatedData) => {
    setInfluencer({ ...influencer, ...updatedData });
    setIsEditing(false);
  };

  const handleConnectInstagram = async () => {
    const instagramProfile = await fetchInstagramProfile(instagramUserId);
    if (instagramProfile) {
      setSocialMediaStats({ ...socialMediaStats, instagram: instagramProfile });
      setInstagramConnected(true);
    } else {
      alert('Failed to connect Instagram');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
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

        {!instagramConnected && (
          <div className="mt-4">
            <label className="block text-gray-600">Connect Instagram Account</label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Enter Instagram User ID"
                value={instagramUserId}
                onChange={(e) => setInstagramUserId(e.target.value)}
              />
              <button
                onClick={handleConnectInstagram}
                className="px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
              >
                Connect
              </button>
            </div>
          </div>
        )}

        <SocialMediaStats socialMediaStats={instagramProfile} />
      </div>
    </div>
  );
};




export default InfluncerProfile;
