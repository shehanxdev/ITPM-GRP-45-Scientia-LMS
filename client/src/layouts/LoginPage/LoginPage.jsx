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
      <div
        style={{ height: "100vh" }}
        className="row flex-row justify-content-around align-items-center "
      >
        <SignInForm className="col-md-6" />
      </div>
    </div>
  );
}
