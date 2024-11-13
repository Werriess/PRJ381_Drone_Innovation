import { Link } from "react-router-dom";

const StatsNavMenu = () => {
  return (
    <div id="statsMenuBlock">
      <div class="statsMenuContent">
        <h4>Stats</h4>
        <Link className="statsLink"><p>General</p></Link>
        <Link className="statsLink"><p>Live data</p></Link>
        <Link className="statsLink"><p>Expedition</p></Link>
        <Link className="statsLink"><p>Drone</p></Link>
      </div>
      <div class="statsMenuContent">
        <Link className="statsLink"><h4>Specs</h4></Link>
      </div>
      <div class="statsMenuContent">
        <Link className="statsLink"><h4>Settings</h4></Link>
      </div>
    </div>
  );
};

export default StatsNavMenu;
