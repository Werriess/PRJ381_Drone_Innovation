import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    navigate("/info");
  };

  return (
    <div id="loginPage">
      <section id="logoLoginPage">
        <img src="./src/assets/DroneBottom.svg" alt="Drone Tech Logo" />
        <h1>Drone Tech</h1>
      </section>
      <section id="formBlock">
        <form id="form">
          <div className="formRow">
            <label>Username:</label>
            <input type="text" id="username" />
          </div>
          <div className="formRow">
            <label>Password:</label>
            <input type="password" id="password"/>
          </div>
        </form>
        <div className="verifyButton">
          <button type="button" onClick={handleVerifyClick}>
            Verify
          </button>
          <p>
          Don't have an account?
          <span>
            <a href="/register">Register</a>
          </span>
        </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
