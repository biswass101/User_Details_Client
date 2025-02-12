import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../hooks/ContextApi";
import { toast } from "react-toastify";
const Nav = () => {
  const {isLClicked, setIsLClicked} = useContext(UserContext)
  const {isSClicked, setIsSClicked} = useContext(UserContext)
  const {isOutClicked, setIsOutSClicked} = useContext(UserContext);
  return (
    <nav className="nav-container bg-black text-white p-5">
      <div className="elements max-w-7xl mx-auto flex justify-between">
        <div className="logo-text">
          <p className="text-4xl">Save You!</p>
        </div>
        <div className="login-signup flex gap-4">
          <Link to="/login">
            <Button
              sx={{
                display: isLClicked ? "none" : "flex",
              }}
              onClick={() => {
                setIsLClicked(true)
                setIsSClicked(false)
              }}
              variant="contained"
            >
              Login
            </Button>
          </Link>
          <Link to="/">
            <Button
              sx={{
                display: isOutClicked ? "none" : "flex",
              }}
              onClick={() => {
                toast("Logged out successfully")
                localStorage.removeItem("userToken")
                setIsOutSClicked(true)
              }}
              variant="contained"
            >
              Logout
            </Button>
          </Link>

          <Link to="/signup">
            <Button
              sx={{
                display: isSClicked ? "none" : "flex",
              }}
              onClick={() => {
                setIsSClicked(true) 
                setIsLClicked(false)
              }}
              variant="outlined"
            >
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
