import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const LoginPage = () => {
const [isButtonClicked, setClicked] = useState(false);
const navigate = useNavigate();

const toggleButton = () => {
    setClicked(!isButtonClicked);
    setTimeout(() => {
        navigate('/info');
    }, 2000);
}


    return(
        <div id="loginPage">
              <section id="logoLoginPage">
                <img src="./src/assets/DroneBottom.svg" alt="" />
                <h1>Drone Tech</h1>
            </section>
             <section id="formBlock">
                <form id="form">
                    <div className="formRow">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="formRow">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" />
                    </div>
                </form>
                <button id="loginButton" onClick={toggleButton} className={isButtonClicked ?  'load' : 'notLoad'}>
                    {isButtonClicked ? 'Complete' : 'Verify'}
                </button>
            </section>
        </div>
  );
}

export default LoginPage;
