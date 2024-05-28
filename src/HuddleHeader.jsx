import React from "react";
import logo from "./Huddle_Images/logo.svg";
const HuddleHeader = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <button className="header-button">Try It Free</button>
    </div>
  );
};

export default HuddleHeader;
