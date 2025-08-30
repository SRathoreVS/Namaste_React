import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./nav/AboutUs";
import Contact from "./nav/Contact";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      {/* If my path is /  */}
      {/* If my path is /about  */}
      {/* If my path is /contact  */}
      <Outlet />
    </div>
  );
};

export default App;
