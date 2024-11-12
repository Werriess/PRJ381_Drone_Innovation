import React from "react";

const ExpeditionData = ({ expeditionData }) => (
  <section className="expeditionInfoBlock">
    <h1><u>Expedition data:</u></h1>
    <div className="expeditionScrollContainer">
      {expeditionData.length > 0 ? (
        expeditionData.map((expedition) => (
          <div key={expedition._id} className="expeditionCard">
            <table>
              <tbody>
                <tr><td>Start time:</td><td>{expedition.startTime || "N/A"}</td></tr>
                <tr><td>End time:</td><td>{expedition.endTime || "N/A"}</td></tr>
                <tr><td>Latitude:</td><td>{expedition.location?.latitude || "N/A"}</td></tr>
                <tr><td>Longitude:</td><td>{expedition.location?.longitude || "N/A"}</td></tr>
                <tr><td>Average gas concentration:</td><td>{expedition.gasStats?.avgValue || "N/A"}</td></tr>
                <tr><td>Highest concentration:</td><td>{expedition.gasStats?.highestValue || "N/A"}</td></tr>
                <tr><td>Lowest concentration:</td><td>{expedition.gasStats?.lowestValue || "N/A"}</td></tr>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No expedition data available.</p>
      )}
    </div>
  </section>
);

export default ExpeditionData;
