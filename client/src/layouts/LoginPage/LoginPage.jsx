import React, { useRef, useEffect, useState } from "react";
import { AppBar, Box } from "@mui/material";
import SignInForm from "../../components/Shared/SignInForm";
//IMAGES
import LOGOW from "../../assets/logo/LogoW.png";
import LOGIN_ILLUSTRATION from "../../assets/illustrations/Illustration.png";

export default function LoginPage() {
  return (
    <div className="custom-login-page">
      <AppBar position="static">
        <img
          style={{
            widows: "100px",
            height: "100px",
            margin: "auto",
            marginBottom: "10px",
          }}
          src={LOGOW}
          alt="LOGO"
        />
      </AppBar>
      <div
        className="d-flex custom-login-section-wrapper"
        style={{ minHeight: "100vh" }}
      >
        {" "}
        <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 ">
          <h1 className="text-center mb-5 ">
            Join The Digital Education <br /> Revolution
          </h1>
          <SignInForm />
        </div>
        <div className="custom-login-img-wrapper d-flex align-items-center ">
          <img src={LOGIN_ILLUSTRATION} alt="" />
        </div>
      </div>
    </div>
  );
}
