import { useState } from "react";
import generateEmbeddedGoogleMapsLink from "../../../../server/middleware/googleAPI";
import useFetchDroneData from "../hooks/useDroneData";
import ExpeditionData from "../features/stats/expeditionData";
import GoogleMap from "../features/stats/maps";
import LiveData from "../features/stats/liveData";
import NavMenu from "../layout/navMenu";
import Header from "../layout/Header";
import DroneInfo from "../features/stats/droneInfo";
import PieChartSection from "../features/stats/pieChartBlock";

const Stats = () => {
  const [droneID, setDroneID] = useState("");
  const { droneData, expeditionData } = useFetchDroneData(droneID);

  const mapUrl =
    expeditionData.length > 0 && expeditionData[0].location
      ? generateEmbeddedGoogleMapsLink(
          expeditionData[0].location.latitude,
          expeditionData[0].location.longitude
        )
      : "";

  return (
    <div id="stats">
      <Header />
      <section id="statsBlockAll"></section>
      <section id="statsContent">
        <NavMenu />
        <section id="generalStatsContainer">
          <div id="statsLeft">
            <DroneInfo
              droneID={droneID}
              setDroneID={setDroneID}
              droneData={droneData}
            />
            <ExpeditionData expeditionData={expeditionData} />
            <PieChartSection />
          </div>
          <div id="statsRight">
            <LiveData />
            <GoogleMap mapUrl={mapUrl} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Stats;