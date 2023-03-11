import React, { useRef, useEffect, useState } from "react";
import { AppBar, Box } from "@mui/material";
import SignInForm from "../../components/Shared/SignInForm";
//IMAGES
import LOGOW from "../../assets/logo/LogoW.png";
import LOGIN_ILLUSTRATION from "../../assets/illustrations/Illustration.png";
import RegisterForm from "../../components/Shared/RegisterForm/RegisterForm";
//MUI
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <div className="custom-login-page">
      <AppBar style={{ zIndex: "100", position: "relative" }} position="static">
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
        // style={{ minHeight: "100vh" }}
      >
        {" "}
        <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 ">
          <h1 className="text-center mb-5 mt-5">
            Join The Digital Education <br /> Revolution
          </h1>
          <div className="d-flex justify-content-center gap-5 mt-5">
            <SignInForm />
            <RegisterForm />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap w-50 my-4">
            <Divider sx={{ width: "100%" }}>OR</Divider>
          </div>
          <div className="d-flex justify-content-center gap-2">
            <FacebookIcon
              sx={{ fontSize: 25, color: "#4267B2", cursor: "pointer" }}
            />
            <GoogleIcon
              sx={{ fontSize: 25, color: "#DB4437", cursor: "pointer" }}
            />
            <TwitterIcon
              sx={{ fontSize: 25, color: "#1DA1F2", cursor: "pointer" }}
            />
            <LinkedInIcon
              sx={{ fontSize: 25, color: "#1DA1F2", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="custom-login-img-wrapper d-flex align-items-center ">
          <img src={LOGIN_ILLUSTRATION} alt="" />
        </div>
      </div>
    </div>
  );
}
