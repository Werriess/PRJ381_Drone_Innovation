import React, { useState } from "react";
import "../styles.css";
import Cookies from "js-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const accessToken = data.accessToken;

        Cookies.set("accessToken", accessToken, {
          expires: 1,
          sameSite: "None",
          secure: true,
        });

        setTimeout(() => {
          window.location.href = "/info";
        }, 2000);
      } else {
        setError(data.message);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    localStorage.setItem("username", username);
  };

  const handleRegisterNavigate = () => {
    window.location.href = "/register";
  };

  return (
    <div id="loginPage">
      <section id="logoLoginPage">
        <img src="./src/assets/DroneBottom.svg" alt="Drone Tech Logo" />
        <h1>Drone Tech</h1>
      </section>
      <section id="formBlock">
        <form onSubmit={handleSubmit} id="form">
          <div className="formRow">
            <label>Username:</label>
            <input
              name="username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formRow">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button
            type="submit"
            id="loginButton"
            className={isLoading ? "load" : ""}
          >
            {isLoading ? "Completed" : "Verify"}
          </button>
          <p>
            Don't have an account?
            <span id="registerUser" onClick={handleRegisterNavigate}>
              {" "}
              Register
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
