import React, { useRef, useEffect, useState } from "react";
import { AppBar, Box } from "@mui/material";
import SignInForm from "../../components/Shared/SignInForm";
//IMAGES
import LOGOW from "../../assets/logo/LogoW.png";
import LOGIN_ILLUSTRATION from "../../assets/illustrations/Illustration.png";

export default function LoginPage() {
  const appBarRef = useRef(null);
  const [appBarHeight, setAppBarHeight] = useState(0);

  useEffect(() => {
    setAppBarHeight(appBarRef.current.clientHeight);
  }, []);
  //This style dectates the height of the div section after AppBar
  const customLoginSectionStyle = {
    height: `calc(100vh - ${appBarHeight}px)`,
  };

  return (
    <div>
      <AppBar position="static" ref={appBarRef}>
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
        className="row custom-login-section-wrapper"
        style={customLoginSectionStyle}
      >
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">
              Join the digital education revolution
            </h1>
            <SignInForm />
          </div>
          <div className="row align-items-center">
            <img src={LOGIN_ILLUSTRATION} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
