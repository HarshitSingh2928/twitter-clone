import React from 'react';
import './UserProfilePage.css'
import avatar from '../middleSection/avatar.jpg'
const UserProfilePage = () => {
  const profileData = {
    id: 1,
    first_name: 'Jolie',
    last_name: 'Ferne',
    email: 'jferne0@website.com',
    gender: 'Female',
    country: 'Sweden',
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={avatar} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{`${profileData.first_name} ${profileData.last_name}`}</h1>
          <p>Email: {profileData.email}</p>
          <p>Gender: {profileData.gender}</p>
          <p>Country: {profileData.country}</p>
        </div>
      </div>
      
    </div>
  );
};

export default UserProfilePage;
