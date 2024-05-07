import React, { useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import Img from "../assets/images/tick.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <header className="register_header">
        <img src={Logo} alt="logo" />
      </header>

      <div className="success_container">
        <img src={Img} alt="img" />
        <div className="message_box">
          <h4>Success Submitted</h4>
          <h4>Congratulations</h4>
        </div>

        <p>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>

      <p className="redirect_message">
        Redirecting you to Homepage in{" "}
        <b style={{ color: "black" }}>5 Seconds</b>{" "}
      </p>
    </>
  );
};

export default Success;
