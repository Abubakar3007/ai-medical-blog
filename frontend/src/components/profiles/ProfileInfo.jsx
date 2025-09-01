import React, { useEffect, useState } from 'react';
import ProfileInfoTemplate from './ProfileInfoTemplate';
import axios from 'axios';

const ProfileInfo = ({ info }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    // Load userId from localStorage once on mount
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            console.error("❌ userId not found in localStorage");
        }
    }, []);

    // Fetch user info when userId is available
    useEffect(() => {
        if (!userId) return;

        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/profile/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('❌ Failed to fetch user:', error.response?.data || error.message);
            }
        };

        fetchUser();
    }, [userId]);

    // If user is not yet loaded
    if (!user) return <p>Loading user data...</p>;

    // Generate username
    const generateUsername = (name, email) => {
        const base = name.trim().toLowerCase().replace(/\s+/g, '.');
        const emailPrefix = email.split('@')[0].toLowerCase();
        return `${base}_${emailPrefix.slice(0, 3)}`;
    };

    const username = generateUsername(user.name, user.email);

    return (
        <div className="info">
            <h2 className="text-[18px] font-medium border-b border-[#e9e9e9] pb-2 mb-10">{info}</h2>
            {info.toUpperCase().includes('BASIC') ? (
                <div>
                    <ProfileInfoTemplate
                        label="Full Name"
                        value={user.name}
                        onValueChange={(updatedVal) =>
                            setUser((prev) => ({ ...prev, name: updatedVal }))
                        }
                    />
                    <ProfileInfoTemplate
                        label="Username"
                        value={username}
                    />
                    <ProfileInfoTemplate
                        label="Email"
                        value={user.email}
                        onValueChange={(updatedVal) =>
                            setUser((prev) => ({ ...prev, email: updatedVal }))
                        }
                    />
                    <ProfileInfoTemplate
                        label="Bio / About me"
                        value={user.bio || "Tell me about your self"}
                        onValueChange={(updatedVal) =>
                            setUser((prev) => ({ ...prev, bio: updatedVal }))
                        }
                    />
                    <ProfileInfoTemplate label="Profile Picture" value="" />
                </div>
            ) : (
                <div>
                    <ProfileInfoTemplate label="Password" value="••••••••" />
                    <ProfileInfoTemplate label="Registration From" value={new Date(user.createdAt).toDateString()} />
                    <ProfileInfoTemplate label="Role" value={user.role} />
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;
