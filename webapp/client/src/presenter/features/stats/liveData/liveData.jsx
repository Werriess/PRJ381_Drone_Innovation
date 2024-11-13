import { Box, Card } from "@mui/material";
import LiveDataCard from "./components/liveDataCard";

const LiveData = () => {
  return (
      <Box sx={{ minWidth: 275}}>
        <Card variant="outlined" sx={{p: 10, mr: 5}}>
          {
            <LiveDataCard
              title="Live Data:"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum dolores, quidem cum exercitationem assumenda consequuntur non saepe quis natus ad, delectus perspiciatis? Aspernatur, non. Quo perspiciatis reiciendis quasi esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum dolores, quidem cum exercitationem assumenda consequuntur non saepe quis natus ad, delectus perspiciatis? Aspernatur, non. Quo perspiciatis reiciendis quasi esse!"
            />
          }
        </Card>
      </Box>
  );
};

export default LiveData;
