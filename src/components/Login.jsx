import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Login = () => {
  return (
    <div className="login-container h-[90vh] flex lex-col justify-center items-center">
      <form action="">
        <div className="inputs flex flex-col justify-center items-center gap-5">
          <TextField
            sx={{
              width: "400px",
            }}
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
          />
          <TextField
            sx={{
              width: "400px",
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button sx={{width: 100}} variant="contained">Loign</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
