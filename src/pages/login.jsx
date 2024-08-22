import React from "react";
import "../styles.css";

function LoginPage() {
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
                <button>Verify</button>
            </section>
        </div>
    )       
}

export default LoginPage;