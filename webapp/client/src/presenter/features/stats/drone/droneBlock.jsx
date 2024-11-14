import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";


const DroneBlock = () => {
  const [droneType, setDroneType] = useState("");
  const [flightHours, setFlightHours] = useState("");
  const [droneNum, setDroneNum] = useState(0);
  const [droneId, setDroneId] = useState("");
  const [drones, setDrones] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllDrones = async () => {
    try {
      const token = Cookies.get("accessToken");
      if (!token) {
        setError("No Authentication token found.");
        return;
      }
      
      const response = await fetch("/api/stats/allDrones", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setDrones(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred when fetching drone data.");
      console.error("Error fetching drone data:", error);
    }
  };

  const fetchLatestID = async () => {
    try {
      const token = Cookies.get("accessToken");
      if (!token) {
        alert("No Authentication token found.");
        return;
      }
      const response = await fetch("/api/stats/latestNum", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        let newNum = parseInt(data.latest);
        setDroneNum((newNum + 1).toString());
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("An error occurred when fetching your drone number: " + err.message);
    }
  };

  useEffect(() => {
    fetchLatestID();
    fetchAllDrones();
  }, []);

  const handleDroneSelected = (e) => {
    const droneIdSelected = e.target.value;
    const selectedDrone = drones.find(drone => drone.droneID._id === droneIdSelected);
    if(selectedDrone){
        setDroneNum(selectedDrone.droneID.droneNum);
        setDroneType(selectedDrone.droneID.droneType);
        setFlightHours(selectedDrone.droneID.flightHours);
        setDroneId(droneIdSelected);
    }
  };
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchLatestID();
    let newDroneNum = parseInt(droneNum) +1;
    const addData = { newDroneNum, droneType, flightHours };
    try {
      const token = Cookies.get("accessToken");
      if (!token) {
        alert("No Authentication token found.");
        return;
      }

      const response = await fetch("/api/stats/addDrone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addData),
      });

      if (response.ok) {
        alert("Drone added successfully");
        setDroneType("");
        setFlightHours("");
        fetchLatestID();
        fetchAllDrones();
      } else {
        alert(response.statusText);
      }
    } catch (err) {
      alert("An error occurred when adding a drone: " + err.message);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!droneId) {
      alert("Please select a drone to update.");
      return;
    }
  
    try {
      if (droneType !== "" && flightHours !== "") {
        const token = Cookies.get("accessToken");
        const updateData = { droneNum, droneType, flightHours };
  
        const response = await fetch(`/api/stats/updateDrone/${droneId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        });
  
        if (response.ok) {
          alert("Drone updated successfully");
          setDroneType("");
          setFlightHours("");
          fetchAllDrones();
        } else {
          alert(response.statusText);
        }
      }
    } catch (err) {
      alert("Something went wrong when updating your drone: " + err.message);
    }
  };
  
  const handleDelete = async (event) => {
    event.preventDefault();
    if (!droneId) {
      alert("Please select a drone to delete.");
      return;
    }
  
    try {
      const token = Cookies.get("accessToken");
      const deleteData = { droneNum };
  
      const response = await fetch(`/api/stats/deleteDrone/${droneId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(deleteData),
      });
  
      if (response.ok) {
        alert("Drone deleted successfully");
        setDroneType("");
        setFlightHours("");
        fetchAllDrones();
      } else {
        alert(response.statusText);
      }
    } catch (err) {
      alert("Something went wrong when deleting your drone: " + err.message);
    }
  };
  


  return (
    <div id="droneBlock">
      <form onSubmit={handleSubmit} id="droneForm">
        <div>
            <label>Drone Number:</label>
            
            <select id="droneNumSelect" onChange={handleDroneSelected}>
                <option value="">Select a Drone</option>
            {drones.map((drone) => (
                <option key={drone.droneID._id} value={drone.droneID._id} >
                {drone.droneID.droneNum}
                </option>
            ))}
            </select>
            
        </div>
        <div>
        <label>Drone Type:</label>
        <input
          type="text"
          name="droneType"
          id="droneType"
          placeholder="Drone Type"
          value={droneType}
          onChange={(e) => setDroneType(e.target.value)}
          required
        />
        </div>
        <div>
        <label>Flight Hours:</label>
        <input
          type="text"
          name="flightHours"
          id="flightHours"
          placeholder="Flight Hours"
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

      <section>
  <h1>Your Drones</h1>
  {error && <p>{error}</p>}
  {drones.length > 0 ? (
    <div className="grid-container">
  {drones.map((drone) => (
    <div className="grid-item" key={drone._id}>
      <p><strong>Drone Number:</strong> {drone.droneID.droneNum}</p>
      <p><strong>Type:</strong> {drone.droneID.droneType}</p>
      <p><strong>Flight Hours:</strong> {drone.droneID.flightHours}</p>
    </div>
  ))}
</div>
  
  ) : (
    <p>No drones available.</p>
  )}
</section>


    </div>
  );
};

export default DroneBlock;
