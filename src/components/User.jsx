import React, { useState } from "react";
import "../scss/User.scss";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(-1);
  const [value, setValue] = useState(0);

  return (
    <div className="user-card">
      <button>Count : {count}</button>
      <h1>{value} functional</h1>
      <button>Count2 : {count2}</button>
      <h2>Name : {name}</h2>
      <h3>Location : Mumbai</h3>
      <h4>Contact : priyasatyam@1806</h4>
    </div>
  );
};

export default User;
