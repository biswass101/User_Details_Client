import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Button, Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/ContextApi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const { isLClicked, setIsLClicked } = useContext(UserContext);
  const { isSClicked, setIsSClicked } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    setIsLClicked(true);
    setIsSClicked(false);
    const token = JSON.parse(localStorage.getItem("userToken"));
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userToken", JSON.stringify(data.token));
        toast("User Logged In Successfuuly");
        navigate("/profile");
      } else {
        toast(data.message)
        // console.log(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative login-container h-[90vh] flex lex-col justify-center items-center">
      <Fab
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
        variant="extended"
        onClick={() => {
          navigate("/");
        }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Home
      </Fab>
      <form action="">
        <div className="inputs flex flex-col justify-center items-center gap-5">
          <TextField
            sx={{
              width: "400px",
            }}
            required
            id="outlined-required"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
          <TextField
            sx={{
              width: "400px",
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          <Button
            sx={{ width: 100 }}
            variant="contained"
            onClick={handleSubmit}
          >
            Loign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
