import React, { useState } from "react";
import "../scss/User.scss";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(-1);

  return (
    <div className="user-card">
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      <h1>{count} functional</h1>
      <h2>
        <button onClick={() => setCount2(count2 + 2)}>Count2 :</button> {count2}
      </h2>
      <h2>Name : {name}</h2>
      <h3>Location : Mumbai</h3>
      <h4>Contact : priyasatyam@1806</h4>
    </div>
  );
};

export default User;
