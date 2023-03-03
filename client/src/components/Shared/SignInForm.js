import { Button, Paper } from "@mui/material";
import React from "react";
import { InputField } from "./InputField/InputField";
function SignInForm() {
  return (
    <Paper
      className="row flex-column text-center"
      sx={{
        width: "fit-content",
        padding: "50px",
        borderRadius: "5px",
        height: "fit-content",
      }}
    >
      <h2>Sign In</h2>
      <h5 className="mb-5">Sign in With your email here</h5>
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
      >
        Sign In
      </Button>
    </Paper>
  );
}

export default SignInForm;
