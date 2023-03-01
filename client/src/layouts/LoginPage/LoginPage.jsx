import React from "react";
import { AppBar, Box } from "@mui/material";
//IMAGES AND ICONS
import LOGOW from "../../assets/logo/LogoW.png";
import SignInForm from "../../components/Shared/SignInForm";
export default function LoginPage() {
  return (
    <div className="h-100">
      <AppBar position="static">
        <img
          style={{ widows: "100px", height: "100px", margin: "auto" }}
          src={LOGOW}
          alt=""
        />
      </AppBar>
      <SignInForm />
    </div>
  );
}
