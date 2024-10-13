import "../styles.css";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";

const Stats = () => {
  return (
    <div id="stats">
      <Header />
      <section id="statsContent">
        <NavMenu />
        <section id="generalStatsContainer">
          <div id="liveData">
            Live data: 
          </div>
          <div id="generalStats">
            <div className="generalStatsBlock">
              500
              <p>Flight hours</p>
            </div>
            <div className="generalStatsBlock">
              500
              <p>Total Expeditions</p>
            </div>
            <div className="generalStatsBlock">
              500
              <p>Total gasses detected</p>
            </div>
          </div>
          <section id="statsOptions">
            <div className="statsButtons">Log manually</div>
            <div className="statsButtons">Expedition</div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Stats;
