import { Button, TextField } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <div className="signup-container h-[90vh] flex lex-col justify-center items-center">
      <form action="">
        <div className="inputs flex flex-col justify-center items-center gap-5">
          <div className="fl-name flex gap-2">
            <TextField
              sx={{
                width: "200px",
              }}
              required
              id="outlined-required"
              label="First Name"
              defaultValue=""
            />
            <TextField
              sx={{
                width: "200px",
              }}
              required
              id="outlined-required"
              label="Last Name"
              defaultValue=""
            />
          </div>
          <TextField
              sx={{
                width: "410px",
              }}
              required
              id="outlined-required"
              label="User Name"
              defaultValue=""
            />
          <TextField
              sx={{
                width: "410px",
              }}
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
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
          />
          <Button sx={{ width: 100 }} variant="contained">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
