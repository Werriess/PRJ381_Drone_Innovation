import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PilotLogout from './pilotLogout';
import BurgerMenu from './burgerMenu';

function Header() {

  const [isPilotVisible, setPilotVisible] = useState(false);
  const [isBurgerVisible, setBurgerVisible] = useState(false);

  const username = localStorage.getItem("username");

  const togglePilot = () => {
    setPilotVisible(!isPilotVisible);
  };

  const toggleBurger = () => {
    setBurgerVisible(!isBurgerVisible);
  }

  return (
    <header>
      <div id='burger'>
          <img src="src/assets/BurgerMenu.svg" alt="" onClick={toggleBurger}/>
          <BurgerMenu isVisible={isBurgerVisible}/>
      </div>
      <div id="logo">
        <img src="./src/assets/DroneBottom.svg" alt="Drone Logo" 
        />
        <Link to="/info" id="infoLink">Drone Tech</Link>
      </div>
      <img src="../src/assets/AirPilotHat.svg" alt="Air Pilot Hat" id="pilot" onClick={togglePilot}/>
      <PilotLogout isVisible={isPilotVisible} username={username}/>
    </header>
    
    
  );
}

export default Header;
