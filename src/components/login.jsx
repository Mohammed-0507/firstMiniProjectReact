import React, { useState } from "react";

function Login({ users = [], setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setError("");
      setPage("ProudactCard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="loginSection">
      <h2>Login</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="buttons">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
