import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PilotLogout from './pilotLogout';

function Header() {

  const [isPilotVisible, setPilotVisible] = useState(false);

  const togglePilot = () => {
    setPilotVisible(!isPilotVisible);
  };

  return (
   
    <header>
      <div id="logo">
        <img src="./src/assets/DroneBottom.svg" alt="Drone Logo" 
        />
        <Link to="/info" id="infoLink">Drone Tech</Link>
      </div>
      <img src="../src/assets/AirPilotHat.svg" alt="Air Pilot Hat" id="pilot" onClick={togglePilot}/>
      <PilotLogout isVisible={isPilotVisible}/>
    </header>
    
    
  );
}

export default Header;
