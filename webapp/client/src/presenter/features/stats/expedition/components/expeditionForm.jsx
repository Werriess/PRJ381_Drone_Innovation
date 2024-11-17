import React, { useEffect, useState } from "react";
import { CustomButton } from "../../../../layout/button";
import { fetchUserExpeditions } from "../../../../../domain/api/routes/components/expeditions";

const ExpeditionForm = () => {
  const [expeditions, setExpeditions] = useState([]); // To store all expeditions
  const [selectedExpedition, setSelectedExpedition] = useState(null); // To store the selected expedition

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserExpeditions();
        console.log(data); 
        setExpeditions(data);
        setSelectedExpedition(data[0]); 
      } catch (error) {
        console.error("Error fetching expeditions:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    const expeditionId = event.target.value;
    const expedition = expeditions.find((exp) => exp._id === expeditionId);
    setSelectedExpedition(expedition); 
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedExpedition((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!selectedExpedition) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form action="" id="expiForm">
        <div className="expiFormContent">
          <select
            name="Expedition"
            id="expeditionSelect"
            onChange={handleSelectChange}
            value={selectedExpedition._id} 
          >
            {expeditions.map((expedition) => (
              <option key={expedition._id} value={expedition._id}>
                {expedition._id}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter droneID"
            name="droneID"
            value={selectedExpedition.droneID || ""}
            onChange={handleInputChange}
          />
          <input
            type="date"
            placeholder="Enter start time"
            name="startTime"
            value={
              selectedExpedition.startTime
                ? selectedExpedition.startTime.split("T")[0]
                : ""
            }
            onChange={handleInputChange}
          />
          <input
            type="date"
            placeholder="Enter end time"
            name="endTime"
            value={
              selectedExpedition.endTime
                ? selectedExpedition.endTime.split("T")[0]
                : ""
            }
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter latitude"
            name="location.latitude"
            value={selectedExpedition.location?.latitude || ""}
            onChange={(e) =>
              setSelectedExpedition((prev) => ({
                ...prev,
                location: { ...prev.location, latitude: e.target.value },
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter longitude"
            name="location.longitude"
            value={selectedExpedition.location?.longitude || ""}
            onChange={(e) =>
              setSelectedExpedition((prev) => ({
                ...prev,
                location: { ...prev.location, longitude: e.target.value },
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter carbon monoxide level"
            name="gasStats.carbonMonoxide"
            value={selectedExpedition.gasStats?.carbonMonoxide || ""}
            onChange={(e) =>
              setSelectedExpedition((prev) => ({
                ...prev,
                gasStats: { ...prev.gasStats, carbonMonoxide: e.target.value },
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter methane"
            name="gasStats.methane"
            value={selectedExpedition.gasStats?.methane || ""}
            onChange={(e) =>
              setSelectedExpedition((prev) => ({
                ...prev,
                gasStats: { ...prev.gasStats, methane: e.target.value },
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter butane"
            name="gasStats.butane"
            value={selectedExpedition.gasStats?.butane || ""}
            onChange={(e) =>
              setSelectedExpedition((prev) => ({
                ...prev,
                gasStats: { ...prev.gasStats, butane: e.target.value },
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter liquefied petroleum gas"
            name="gasStats.liquefiedPetroleumGas"
            value={selectedExpedition.gasStats?.liquefiedPetroleumGas || ""}
            onChange={(e) =>
              setSelectedExpedition((prev) => ({
                ...prev,
                gasStats: {
                  ...prev.gasStats,
                  liquefiedPetroleumGas: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="expiFormContent">
          <textarea
            name="feedback"
            rows="25"
            cols="50"
            placeholder="Give us some feedback?"
          ></textarea>
          <div id="expiButtons">
            <CustomButton>Add</CustomButton>
            <CustomButton>Update</CustomButton>
            <CustomButton>Delete</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpeditionForm;
