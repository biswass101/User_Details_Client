import React from "react";

const UserProfile = ({props}) => {
  return (
    <div className="profile-container flex flex-col gap-5">
      <p className="text-4xl">Use Profile</p>
      <div className="details text-2xl flex flex-col gap-2">
        <p className="fname">First Name: {}</p>
        <p className="lname">Last Name: {}</p>
        <p className="usrname">User Name: {}</p>
        <p className="email">Email: {}</p>
      </div>
    </div>
  );
};

export default UserProfile;
