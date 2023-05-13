import React, { useEffect, useState } from 'react';
import './UserProfilePage.css'
import avatar from '../middleSection/avatar.jpg'
const UserProfilePage = () => {
  // const [profileData, setProfileData] = useState(null);
  const profileData={
    id: 1,
    first_name: "Jolie",
    last_name: "Ferne",
    email: "jferne0@wesbite.com",
    gender: "Female",
    country: "Sweden"
    }
  // useEffect(() => {
  //   fetchProfileData();
  // }, []);
  // const fetchProfileData = async () => {
  //   try {
  //     const response = await fetch('https://tweets.free.beeceptor.com/profile'); 
  //     const data = await response.json();
  //     setProfileData(data);
  //   } catch (error) {
  //     console.log('Error fetching profile data:', error);
  //   }
  // };

  return (
    // <div className="profile-page">
    //   {profileData ? (
    //     <div className="profile-header">
    //       <div className="profile-picture">
    //         <img src={avatar} alt="Profile" />
    //       </div>
    //       <div className="profile-info">
    //         <h1>{`${profileData.first_name} ${profileData.last_name}`}</h1>
    //         <p>Email: {profileData.email}</p>
    //         <p>Gender: {profileData.gender}</p>
    //         <p>Country: {profileData.country}</p>
    //       </div>
    //     </div>
    //   ) : (
    //     <p>Loading profile data...</p>
    //   )}
    // </div>
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
