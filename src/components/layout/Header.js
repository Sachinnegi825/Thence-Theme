import React from "react";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <div className="header_right">
        <p>
          <a href="/register">Get Projects</a>
        </p>
        <p>Onboard Talent</p>
      </div>
    </header>
  );
};

export default Header;
