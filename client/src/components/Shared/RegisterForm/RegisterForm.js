import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { InputField } from "../InputField/InputField";

function RegisterForm() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button aria-label="Register" className="p-2 px-4 " onClick={handleOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <Paper
            className="row flex-column text-center custom-register-form"
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
            <h5 className="mb-5">Create an account</h5>
            <InputField
              type="text"
              label="Full Name"
              helperText="Required*"
              variant="outlined"
            />
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
            <InputField
              type="password"
              label="Confirm Password"
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
            >
              Register
            </Button>
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RegisterForm;
