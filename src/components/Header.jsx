import React, { useState } from "react";
import { LOGO_URL } from "../utils/utility";
import "../scss/Header.scss";

const Header = () => {
  const [auth, setAuth] = useState("Login");

  const handleLogIn = () => {
    if (auth === "Login") setAuth("Logout");
    else setAuth("Login");
  };

  return (
    <div className="header-container">
      <img className="logo-img" src={LOGO_URL} alt="logo-image" />
      <ul>
        <li className="lists">
          <button>Home</button>
        </li>
        <li className="lists">
          <button>About</button>
        </li>
        <li className="lists">
          <button>Contact</button>
        </li>
        <li className="lists">
          <button>Add-on</button>
        </li>
        <li className="lists">
          <button onClick={handleLogIn}>{auth}</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
