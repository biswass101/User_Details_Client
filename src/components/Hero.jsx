import React, { useContext, useState } from "react";
import UserProfile from "./UserProfile";
import { UserContext } from "../hooks/ContextApi";
const Hero = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <main className="w-full h-[88.68vh] bg-slate-800 text-white flex justify-center items-center">
      <div className="user-details max-w-4xl">
        <p className="text-4xl">User Not Logged in</p>
      </div>
    </main>
  );
};

export default Hero;
