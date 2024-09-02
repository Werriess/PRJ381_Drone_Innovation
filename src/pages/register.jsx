import React, { useState } from "react";
import "../styles.css";

function Register() {
  return (
    <div id="register">
      <div id="pilotHat">
        <img src="src/assets/AirPilotHat.svg" alt="Air Pilot Hat" />
      </div>
      <div id="registerContainer">
        <form action="/register/submit" method="post" id="leftSide">
          <input
            type="text"
            name="first_name"
            id="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name"
            id="lastName"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="email_address"
            id="email"
            placeholder="Email address"
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
          />
          <div id="registerButton">
            <button type="submit">Register</button>
          </div>
        </form>
        <div id="rightSide">
          <img src="src/assets/Vector.svg" alt="Drone svg" />
        </div>
      </div>
    </div>
  );
}

export default Register;
