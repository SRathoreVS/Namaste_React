import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/utility";
import "../scss/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState("Login");

  useEffect(() => {
    console.log("useEffect Called");
  }, [auth]);

  const handleLogIn = () => {
    if (auth === "Login") setAuth("Logout");
    else setAuth("Login");
  };

  return (
    <div className="header-container">
      <img className="logo-img" src={LOGO_URL} alt="logo-image" />
      <ul>
        <li className="lists">
          <Link to="/">Home</Link>
        </li>
        <li className="lists">
          <Link to="/about">About</Link>
        </li>
        <li className="lists">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="lists">
          <Link>Add-on</Link>
        </li>
        <li className="lists">
          <Link onClick={handleLogIn}>{auth}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
