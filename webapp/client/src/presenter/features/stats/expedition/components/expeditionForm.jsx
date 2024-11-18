import React, { useEffect, useState } from "react";
import { CustomButton } from "../../../../layout/button";
import {
  addExpedition,
  deleteExpedition,
  fetchUserExpeditions,
  updateExpedition,
} from "../../../../../domain/api/routes/components/expeditions";

const ExpeditionForm = () => {
  const [expeditions, setExpeditions] = useState([]);
  const [selectedExpedition, setSelectedExpedition] = useState({
    droneID: "",
    startTime: "",
    endTime: "",
    location: { latitude: "", longitude: "" },
    gasStats: {
      carbonMonoxide: "",
      methane: "",
      butane: "",
      liquefiedPetroleumGas: "",
    },
    feedback: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserExpeditions();
        setExpeditions(data);
        setSelectedExpedition({
          droneID: "",
          startTime: "",
          endTime: "",
          location: { latitude: "", longitude: "" },
          gasStats: {
            carbonMonoxide: "",
            methane: "",
            butane: "",
            liquefiedPetroleumGas: "",
          },
          feedback: "",
        });
      } catch (error) {
        console.error("Error fetching expeditions:", error.message);
        setErrorMessage("Failed to fetch expeditions.");
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    const expeditionId = event.target.value;
    const expedition = expeditions.find((exp) => exp._id === expeditionId);
    setSelectedExpedition(
      expedition || {
        droneID: "",
        startTime: "",
        endTime: "",
        location: { latitude: "", longitude: "" },
        gasStats: {
          carbonMonoxide: "",
          methane: "",
          butane: "",
          liquefiedPetroleumGas: "",
        },
        feedback: "",
      }
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedExpedition((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGasInputChange = (gasName, value) => {
    setSelectedExpedition((prev) => ({
      ...prev,
      gasStats: {
        ...prev.gasStats,
        [gasName]: value,
      },
    }));
  };

  const handleUpdate = async () => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      await updateExpedition(selectedExpedition._id, selectedExpedition);
      setSuccessMessage("Expedition updated successfully!");
    } catch (error) {
      console.error("Error updating expedition:", error.message);
      setErrorMessage("Failed to update expedition.");
    }
  };

  const handleAdd = async () => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      const newExpedition = {
        droneID: selectedExpedition.droneID,
        startTime: selectedExpedition.startTime,
        endTime: selectedExpedition.endTime,
        location: selectedExpedition.location,
        gasStats: selectedExpedition.gasStats,
      };
      await addExpedition(newExpedition);
      setSuccessMessage("Expedition added successfully!");

      const data = await fetchUserExpeditions();
      setExpeditions(data);

      setSelectedExpedition({
        droneID: "",
        startTime: "",
        endTime: "",
        location: { latitude: "", longitude: "" },
        gasStats: {
          carbonMonoxide: "",
          methane: "",
          butane: "",
          liquefiedPetroleumGas: "",
        },
        feedback: "",
      });
    } catch (error) {
      console.error("Error adding expedition:", error.message);
      setErrorMessage("Failed to add expedition.");
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedExpedition._id) {
        setErrorMessage("No expedition selected.");
        return;
      }

      setErrorMessage("");
      setSuccessMessage("");

      await deleteExpedition(selectedExpedition._id);

      setExpeditions((prev) =>
        prev.filter((expedition) => expedition._id !== selectedExpedition._id)
      );
      setSelectedExpedition({
        droneID: "",
        startTime: "",
        endTime: "",
        location: { latitude: "", longitude: "" },
        gasStats: {
          carbonMonoxide: "",
          methane: "",
          butane: "",
          liquefiedPetroleumGas: "",
        },
        feedback: "",
      });

      setSuccessMessage("Expedition removed successfully!");
    } catch (error) {
      console.error("Error removing expedition:", error.message);
      setErrorMessage("Failed to remove expedition.");
    }
  };

  return (
    <div>
      <form id="expiForm">
        <div className="expiFormContent">
          <select
            name="Expedition"
            id="expeditionSelect"
            onChange={handleSelectChange}
            value={selectedExpedition._id || ""}
          >
            <option value="">Select an expedition</option>
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
            value={selectedExpedition.startTime?.split("T")[0] || ""}
            onChange={handleInputChange}
          />
          <input
            type="date"
            placeholder="Enter end time"
            name="endTime"
            value={selectedExpedition.endTime?.split("T")[0] || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter latitude"
            name="latitude"
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
            name="longitude"
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
            name="carbonMonoxide"
            value={selectedExpedition.gasStats?.carbonMonoxide || ""}
            onChange={(e) =>
              handleGasInputChange("carbonMonoxide", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Enter methane"
            name="methane"
            value={selectedExpedition.gasStats?.methane || ""}
            onChange={(e) => handleGasInputChange("methane", e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter butane"
            name="butane"
            value={selectedExpedition.gasStats?.butane || ""}
            onChange={(e) => handleGasInputChange("butane", e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter liquefied petroleum gas"
            name="liquefiedPetroleumGas"
            value={selectedExpedition.gasStats?.liquefiedPetroleumGas || ""}
            onChange={(e) =>
              handleGasInputChange("liquefiedPetroleumGas", e.target.value)
            }
          />
          <div id="expiButtons">
            <CustomButton onClick={handleAdd}>Add</CustomButton>
            <CustomButton onClick={handleUpdate}>Update</CustomButton>
            <CustomButton onClick={handleDelete}>Delete</CustomButton>
          </div>
        </div>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default ExpeditionForm;
