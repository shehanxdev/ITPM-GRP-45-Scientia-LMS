import React from "react";
import { AppBar, Box } from "@mui/material";

export default function LoginPage() {
  return (
    <div>
      <Box>
        <AppBar>AppBAr</AppBar>
      </Box>
      <div className="row">
        <div className="col-md-6 custom-login-form-wrapper">Login form</div>
        <div className="col-md-6 custom-login-image-wrapper">Illustration</div>
      </div>
    </div>
  );
}
