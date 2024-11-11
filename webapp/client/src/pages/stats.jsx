import "../styles.css";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState } from "react";
import generateEmbeddedGoogleMapsLink from "../../../server/middleware/googleAPI";
import useFetchDroneData from "../hooks/useDroneData";

const Stats = () => {
  const [droneID, setDroneID] = useState("");

  const { droneData, expeditionData} = useFetchDroneData(droneID);

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
          <section id="statsLeft">
            <section id="headerStats">
              <h1>
                <u>Drone ID:</u>
              </h1>
              <input
                type="text"
                placeholder="Enter droneID"
                value={droneID}
                onChange={(e) => setDroneID(e.target.value)}
              />
            </section>
            <section className="generalStatsInfo">
              <div>
                <h1>
                  <u>Drone type:</u>
                </h1>
                <p>{droneData.droneStats?.droneType || "N/A"}</p>
              </div>
              <div>
                <h1>
                  <u>Flight hours:</u>
                </h1>
                <p>{droneData.droneStats?.flightHours || "N/A"}</p>
              </div>
            </section>

            <section className="expeditionInfoBlock">
              <h1>
                <u>Expedition data:</u>
              </h1>
              <div className="expeditionScrollContainer">
                {expeditionData.length > 0 ? (
                  expeditionData.map((expedition) => (
                    <div key={expedition._id} className="expeditionCard">
                      <table>
                        <tbody>
                          <tr>
                            <td>Start time:</td>
                            <td>{expedition.startTime || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>End time:</td>
                            <td>{expedition.endTime || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Latitude:</td>
                            <td>{expedition.location?.latitude || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Longitude:</td>
                            <td>{expedition.location?.longitude || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Average gas concentration:</td>
                            <td>{expedition.gasStats?.avgValue || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Highest concentration:</td>
                            <td>
                              {expedition.gasStats?.highestValue || "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td>Lowest concentration:</td>
                            <td>{expedition.gasStats?.lowestValue || "N/A"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))
                ) : (
                  <p>No expedition data available.</p>
                )}
              </div>
            </section>

            <section className="piChart">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "Series A", color: "#FFB3B3" },
                      { id: 1, value: 20, label: "Series B", color: "#FF6666" },
                      { id: 2, value: 15, label: "Series C", color: "#CC0000" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </section>
          </section>
          <section id="statsRight">
            <section className="liveDataContainer">
              <h1>
                <u>Live data:</u>
              </h1>
              <div>
                {/* You can replace this with actual live data as needed */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                suscipit asperiores obcaecati non ad quam, eum reprehenderit
                expedita laboriosam illo eligendi eius voluptates eveniet quia
                magni iusto consequatur repudiandae quas!
              </div>
              <div>286.7</div>
            </section>
            <section className="googleMapsContainer">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Stats;
