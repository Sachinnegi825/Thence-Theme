import React from "react";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <div className="header_right">
        <p onClick={() => Navigate("/register")}>Get Projects</p>
        <p>Onboard Talent</p>
      </div>
    </header>
  );
};

export default Header;
