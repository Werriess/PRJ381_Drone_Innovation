import "../styles.css";
import { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registerUser, setRegisterUser] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/register/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          emailAddress,
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setRegisterUser("Registered succesfully!");
        setError("");

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        
      } else {
        setError(data.message);
        setRegisterUser("");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div id="register">
      <div id="pilotHat">
        <img src="src/assets/AirPilotHat.svg" alt="Air Pilot Hat" />
      </div>
      <div id="registerContainer">
        <form onSubmit={handleSubmit} id="leftSide">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            name="emailAddress"
            id="email"
            placeholder="Email address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            required
          />
          <div className="registerFeedback">{registerUser}</div>
          <div className="registerFeedback">{error}</div>
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
