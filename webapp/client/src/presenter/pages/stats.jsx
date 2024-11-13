import Header from "../layout/Header";
import StatsNavMenu from "../layout/statsNavMenu";
import StatsBlock from "../features/stats/general/statsBlock";

const Stats = () => {
  return (
    <div id="stats">
      <Header />
      <section id="statsContent">
        <StatsNavMenu />
        <div id="statsContentRight">
          <StatsBlock/>
        </div>
      </section>
    </div>
  );
};

export default Stats;