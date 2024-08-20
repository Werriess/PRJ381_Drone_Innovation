import React, { useState } from 'react';
import '../styles.css';

const NavMenu = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <nav className={isNavVisible ? 'show' : ''}>
        <div>
          <img src="/images/Futures.png" alt="Futures" />
          <a href="">STATS</a>
        </div>
        <div>
          <img src="/images/Drone.png" alt="Drone" />
          <a href="./specs.html">SPECS</a>
        </div>
        <div>
          <img src="/images/Services.png" alt="Services" />
          <a href="">SETTINGS</a>
        </div>
      </nav>
      <img
        src="/images/Double Left.png"
        id="arrowNav"
        onClick={toggleNav}
        alt="Toggle Navigation"
      />
    </div>
  );
};

export default NavMenu;
