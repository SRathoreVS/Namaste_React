import React from "react";
import { LOGO_URL } from "../utils/utility";
import "../scss/Header.scss";

const Header = () => {
  const handleLogIn = () => {};

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
          <button onClick={handleLogIn}>Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
