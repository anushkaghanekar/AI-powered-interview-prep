import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';

const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    };

    // your backend Render URL (change this to your backend one)
    const backendURL = "https://ai-powered-interview-prep-api.onrender.com";

    // full image URL
    const profileImage = user?.profileImageUrl
        ? user.profileImageUrl.startsWith("http")
            ? user.profileImageUrl
            : `${backendURL}${user.profileImageUrl}`
        : "https://via.placeholder.com/150"; // fallback image

    return (
        user && (
            <div className='flex items-center'>
                <img
                    src={profileImage}
                    alt="Profile"
                    className='w-11 h-11 bg-gray-300 rounded-full mr-3 object-cover'
                />
                <div>
                    <div className='text-[15px] text-black font-bold leading-3'>
                        {user.name || ""}
                    </div>
                    <button
                        className='text-[#670d1a] text-sm font-semibold cursor-pointer hover:underline'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    );
};

export default ProfileInfoCard;


































