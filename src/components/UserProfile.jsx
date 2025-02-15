import React, { useContext, useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../hooks/ContextApi";
import { toast } from "react-toastify";

const UserProfile = ({ props }) => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const { isLClicked, setIsLClicked } = useContext(UserContext);
  const { isSClicked, setIsSClicked } = useContext(UserContext);
  const {isOutClicked, setIsOutSClicked} = useContext(UserContext);
  useEffect(() => {
    setIsLClicked(true);
    setIsSClicked(true);
    setIsOutSClicked(false);
    const token = JSON.parse(localStorage.getItem("userToken"));
    axios
      .get("http://localhost:5000/user/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setUserInfo(res.data?.userDetails))
      .catch((err) => {
        toast("Signup First")
        navigate("/signup")
      });
  }, []);
  return (
    <main className="w-full h-[88.68vh] bg-slate-800 text-white flex justify-center items-center">
      <div className="user-details max-w-4xl">
        <div className="profile-container flex flex-col gap-5">
          <p className="text-4xl">Use Profile</p>
          <div className="details text-2xl flex flex-col gap-2">
            <p className="fname">First Name: {userInfo?.first_name}</p>
            <p className="lname">Last Name: {userInfo?.last_name}</p>
            <p className="usrname">User Name: {userInfo?.username}</p>
            <p className="email">Email: {userInfo?.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
