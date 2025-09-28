import { useEffect, useState } from "react";
import "../scss/User.scss";

const User = ({ name }) => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Api Call
    const gitCall = async () => {
      try {
        const fetchCall = await fetch(
          "https://api.github.com/users/SRathoreVS"
        );
        const response = await fetchCall.json();
        setData(response);
      } catch (err) {
        setError("Failed to fetch user data.");
        console.log("failed to fetch :", err);
      }
    };
    gitCall();
  }, []);

  return (
    <div className="user-card">
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      <h1>{count} functional</h1>
      {error && <div className="error-message">{error}</div>}
      <ul>
        {data && (
          <>
            <li>ID: {data.id}</li>
            <li>URL: {data.html_url}</li>
            <li>Followers: {data.followers}</li>
            <li>Public Repos: {data.public_repos}</li>
          </>
        )}
      </ul>
      <h2>Name : {name}</h2>
      <h3>Location : Mumbai</h3>
      <h4>Contact : priyasatyam@1806</h4>
    </div>
  );
};

export default User;
