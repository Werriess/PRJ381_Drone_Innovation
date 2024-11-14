import React, { useState, useEffect } from "react";
import { addDrone, deleteDrone, fetchLatestID, updateDrone } from "../../../../../domain/api/routes/components/drone";


const DroneForm = ({ drones, onDroneAdded, onDroneUpdated, onDroneDeleted }) => {
  const [droneType, setDroneType] = useState("");
  const [flightHours, setFlightHours] = useState("");
  const [droneNum, setDroneNum] = useState("");
  const [droneId, setDroneId] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLatestID().then(setDroneNum).catch(setError);
  }, []);

  const handleDroneSelected = (e) => {
    const droneIdSelected = e.target.value;
    const selectedDrone = drones.find(drone => drone.droneID._id === droneIdSelected);
    if (selectedDrone) {
      setDroneNum(selectedDrone.droneID.droneNum);
      setDroneType(selectedDrone.droneID.droneType);
      setFlightHours(selectedDrone.droneID.flightHours);
      setDroneId(droneIdSelected);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDrone({ droneNum, droneType, flightHours });
      setDroneType("");
      setFlightHours("");
      onDroneAdded();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!droneId) throw new Error("Select a drone to update.");
      await updateDrone(droneId, { droneNum, droneType, flightHours });
      setDroneType("");
      setFlightHours("");
      onDroneUpdated();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (!droneId) throw new Error("Select a drone to delete.");
      await deleteDrone(droneId, droneNum);
      setDroneType("");
      setFlightHours("");
      onDroneDeleted();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form id="droneForm" onSubmit={handleAdd}>
      {error && <p>{error}</p>}
      <div>
        <label>Drone Number:</label>
        <select id="droneNumSelect" onChange={handleDroneSelected}>
          <option value="">Select a Drone</option>
          {drones.map(drone => (
            <option key={drone.droneID._id} value={drone.droneID._id}>
              {drone.droneID.droneNum}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Drone Type:</label>
        <input
          type="text"
          value={droneType}
          onChange={(e) => setDroneType(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Flight Hours:</label>
        <input
          type="text"
          value={flightHours}
          onChange={(e) => setFlightHours(e.target.value)}
        />
      </div>
      <div id="buttonsDrone">
        <button type="submit">Add Drone</button>
        <button type="button" onClick={handleUpdate}>Update Drone</button>
        <button type="button" onClick={handleDelete}>Delete Drone</button>
      </div>
    </form>
  );
};

export default DroneForm;
