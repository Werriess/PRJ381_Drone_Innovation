import { Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSensorData } from "../../../../domain/api/routes/components/expedition";
import LiveDataCard from "./components/liveDataCard";
 
const LiveData = () => {
  let [sensorData, setSensorData] = useState("Waiting for data...");
 
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSensorData();
        setSensorData(data.Analog || "No data available");
      } catch (error) {}
    };
 
    getData();
    const intervalId = setInterval(getData, 500);
    return () => clearInterval(intervalId);
  }, []);
 
  let finalData = "";
  if (sensorData < 3500) {
    finalData = "🟩Levels are normal🟩";
  } else {
    finalData = "🟥GAS DETTECTED!!!🟥";
  }
 
  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined" sx={{ p: 20, mr: 5 }}>
        <LiveDataCard
          title="Live Data:"
          description={`Gas Sensor Value: ${sensorData} ${finalData}`}
        />
      </Card>
    </Box>
  );
};
 
export default LiveData;