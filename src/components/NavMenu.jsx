import React, { useState } from 'react';
import '../styles.css';

const NavMenu = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isArrowOpen, setArrow] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleButton = () => {
    setArrow(!isArrowOpen);
  }

  return (
    <div id='navMenu'>
      <nav className={isNavVisible ? 'show' : 'notShow'}>
        <div>
          <img src="../src/assets/Futures.svg" alt="Futures" />
          <a href="./stats">STATS</a>
        </div>
        <div>
          <img src="../src/assets/Drone.svg" alt="Drone" />
          <a href="./specs">SPECS</a>
        </div>
        <div>
          <img src="../src/assets/Services.svg" alt="Services" />
          <a href="./settings">SETTINGS</a>
        </div>
      </nav>
      <div id = 'arrowButton' onClick={() => {toggleNav(); toggleButton();}} className={isArrowOpen ? 'show' : 'notShow'} >
      </div>
    </div>
  );
};

export default NavMenu;
