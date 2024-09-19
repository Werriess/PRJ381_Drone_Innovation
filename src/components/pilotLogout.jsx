import '../styles.css';

const pilotLogout = ({isVisible, username}) => {
 
  return(
    <div id="pilotSide" className={isVisible ? 'drop' : ''}>
        <div id="imgHolder">
        <img src="../src/assets/AirPilotHat.svg" alt="Air Pilot Hat"/>
        </div>
        <div id="text">
            Pilot:
            <div id="usernameLogout"> {username ? username : "Username"} </div>
        </div>
        <a id="logout" href='/'>Log Out</a>
    </div>
  )
};

export default pilotLogout;