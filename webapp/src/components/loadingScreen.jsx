import React, { useEffect } from 'react';
import '../styles.css';

const LoadingScreen = () => {
    useEffect(() => {
        document.body.classList.add('loadingBackground');

        return () => {
            document.body.classList.remove('loadingBackground');
        }
    }, []); 
    
  return (
    <div id="loading-container">
      <img src="./src/assets/DroneBottom.svg" alt="Loading" className="droneLoad" />
    </div>
    
  );
}

export default LoadingScreen;
