import React, { useState } from 'react';
import '../styles.css';

const NavMenu = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div id='navMenu'>
      <nav className={isNavVisible ? 'show' : 'notShow'}>
        <div>
          <img src="../src/assets/Futures.svg" alt="Futures" />
          <a href="">STATS</a>
        </div>
        <div>
          <img src="../src/assets/Drone.svg" alt="Drone" />
          <a href="./specs.html">SPECS</a>
        </div>
        <div>
          <img src="../src/assets/Services.svg" alt="Services" />
          <a href="">SETTINGS</a>
        </div>
      </nav>
      <img
        src=""
        id="arrowNav"
        onClick={toggleNav}
        alt="Toggle Navigation"
      />
    </div>
  );
};

export default NavMenu;
