import "../styles.css";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Stats = () => {
  const [droneData, setDroneData] = useState({});
  const [droneID, setDroneID] = useState("");
  const [expeditionData, setExpeditionData] = useState([]);

  const getAccessToken = () => {
    return Cookies.get("accessToken");
  };

  useEffect(() => {
    const fetchDroneData = async () => {
      if (droneID) {
        try {
          const response = await fetch(`/api/stats/drones/${droneID}`, {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          });

          if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(
              `Failed to fetch data: ${response.status} ${errorDetails}`
            );
          }

          const data = await response.json();
          console.log(data);
          setDroneData(data);

          if (data.expeditionData && data.expeditionData.length > 0) {
            setExpeditionData(data.expeditionData);
          }
        } catch (error) {
          console.error("Error fetching drone data:", error);
        }
      }
    };

    fetchDroneData();
  }, [droneID]);

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                suscipit asperiores obcaecati non ad quam, eum reprehenderit
                expedita laboriosam illo eligendi eius voluptates eveniet quia
                magni iusto consequatur repudiandae quas! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Omnis aperiam dolorum aut,
                sint quidem facere quas neque similique. Enim veniam repellendus
                nemo officiis eius itaque dicta ratione nobis reiciendis
                obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Placeat suscipit asperiores obcaecati non ad quam, eum
                reprehenderit expedita laboriosam illo eligendi eius voluptates
                eveniet quia magni iusto consequatur repudiandae quas! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam
                dolorum aut, sint quidem facere quas neque similique. Enim
                veniam repellendus nemo officiis eius itaque dicta ratione nobis
                reiciendis obcaecati!
              </div>
              <div>286.7</div>
            </section>
            <section className="googleMapsContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920450.6469856643!2d26.086604978125003!3d-25.687521799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe0ef086c024a7%3A0x591f1db201ba8b74!2sBathopele%20platinum%20Mine!5e0!3m2!1sen!2sza!4v1729602420324!5m2!1sen!2sza"
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
