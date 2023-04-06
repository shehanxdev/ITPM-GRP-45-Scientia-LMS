import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
//REACT IMPORTS
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputField } from "../InputField/InputField";

function SignInForm() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    alert("hhh");
    // Perform login logic here
    // ...

    // Navigate to dashboard on successful login
    navigate("/dashboard");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="p-2 px-4" onClick={handleOpen}>
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <Paper
            className="row flex-column text-center custom-signin-form"
            sx={{
              width: "100%",
              maxWidth: "400px",
              padding: "20px",
              borderRadius: "5px",
              height: "fit-content",
              margin: "0 auto",
              "@media (min-width: 600px)": {
                padding: "50px",
              },
            }}
          >
            <h5 className="mb-5">Sign in with your email here</h5>
            <InputField
              type="email"
              label="E-mail"
              helperText="Required*"
              variant="outlined"
            />
            <InputField
              type="password"
              label="Password"
              helperText="Required*"
              variant="outlined"
            />
            <Button
              sx={{
                backgroundColor: "#0066CC",
                borderRadius: "10px",
                padding: "10px",
                marginTop: "13px",
              }}
              variant="contained"
              onClick={() => {
                handleLogin();
              }}
            >
              Sign In
            </Button>
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SignInForm;
