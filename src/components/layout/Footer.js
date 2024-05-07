import React from "react";
import Copyright from "../../assets/images/copyright.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        <span>
          <img src={Copyright} alt="alt" />
        </span>
        Talup 2023. All rights reserved
      </p>
      <div className="footer_links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
