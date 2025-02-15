import { Button, Fab, TextField } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/ContextApi";
import { toast } from "react-toastify";

const Signup = () => {
  const { isLClicked, setIsLClicked } = useContext(UserContext);
  const { isSClicked, setIsSClicked } = useContext(UserContext);
  const { isOutClicked, setIsOutSClicked } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    setIsLClicked(false);
    setIsSClicked(true);
    setIsOutSClicked(true)
    const token = JSON.parse(localStorage.getItem('userToken'))
    if(token) {
      navigate('/profile')
      toast("Logout First")
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (!data.success) {
          
          toast(data.message)
          toast(data.error)
          
          navigate("/signup");
        } else {
          toast(data.message)
          navigate("/login");
        }
      } else {
        toast(data.message)
        // console.log(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="signup-container relative h-[90vh] flex lex-col justify-center items-center">
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
      <div className="inputs flex flex-col justify-center items-center gap-5">
        <div className="fl-name flex gap-2">
          <TextField
            sx={{
              width: "200px",
            }}
            required
            id="outlined-required"
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <TextField
            sx={{
              width: "200px",
            }}
            required
            id="outlined-required1"
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <TextField
          sx={{
            width: "410px",
          }}
          required
          id="outlined-required2"
          label="User Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          sx={{
            width: "410px",
          }}
          required
          id="outlined-required3"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          sx={{
            width: "410px",
          }}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button sx={{ width: 100 }} variant="contained" onClick={handleSubmit}>
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Signup;
