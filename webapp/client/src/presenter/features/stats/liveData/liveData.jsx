import { Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSensorData } from "../../../../domain/api/routes/components/expedition";
import LiveDataCard from "./components/liveDataCard";

const LiveData = () => {
  const [sensorData, setSensorData] = useState("Waiting for data...");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSensorData();
        setSensorData(data.analogValue || "No data available");
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    getData();
    const intervalId = setInterval(getData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined" sx={{ p: 20, mr: 5 }}>
        <LiveDataCard
          title="Live Data:"
          description={`Gas Sensor Value: ${sensorData}`}
        />
      </Card>
    </Box>
  );
};

export default LiveData;
