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

    return (
        user && (
            <div className='flex items-center'>
                <img
                    src={
                        user.profileImageUrl
                            ? user.profileImageUrl.startsWith("http")
                                ? user.profileImageUrl
                                : `https://ai-powered-interview-prep-api.onrender.com/${user.profileImageUrl.replace(/^\//, "")}`
                            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt=""
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
    )
}

export default ProfileInfoCard











































