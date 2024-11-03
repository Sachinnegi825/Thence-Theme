import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import Cancel from "../assets/images/cancel.svg";
import Error from "../assets/images/error.svg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  function isValidEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  useEffect(() => {
    if (formdata.email !== "" && formdata.name !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formdata.email, formdata.name]);

  const handleData = (e) => {
    e.preventDefault();

    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (formdata.email !== "") {
      setError(!isValidEmail(formdata.email));
      if (isValidEmail(formdata.email)) {
        navigate("/success");
      }
    } else {
      setError(false);
    }
  };

  return (
    <>
      <header className="register_header">
        <img src={Logo} alt="logo" />
        <Link href="/">
          <img src={Cancel} alt="cancel" />
        </Link>
      </header>

      <div className="register_form">
        <h4>Registration Form</h4>
        <h4>
          Start your success <br /> journey here
        </h4>
        <form className="form_container">
          <input
            type="text"
            placeholder="Enter your name"
            value={formdata.name}
            name="name"
            onChange={(e) => handleData(e)}
          />
          <input
            type="text"
            placeholder="Enter your email"
            value={formdata.email}
            name="email"
            onChange={(e) => handleData(e)}
          />

          {error && (
            <p className="error">
              <span>
                <img src={Error} alt="img" />
              </span>
              Enter a valid email address
            </p>
          )}

          <button
            type="submit"
            className="submit_btn"
            disabled={disable}
            onClick={(e) => submitForm(e)}
            style={
              disable
                ? { background: "#c9c9c9" }
                : {
                    background:
                      "linear-gradient(97.55deg, #1c1c1c 2.63%, #454444 105.2%), linear-gradient(0deg, #c9c9c9, #c9c9c9)",
                  }
            }
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
