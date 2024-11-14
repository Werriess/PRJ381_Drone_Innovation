export const handleAnalogData = (req, res) => {
    const analogValue = req.body.Analog; 
  
    if (analogValue !== undefined) {
      console.log("Incoming Data!!!");
      console.log(`Received New Analog Value: ${analogValue}`);
      res.status(200).send("Data received successfully");
    } else {
      console.log("No Analog value found in request");
      res.status(400).send("Bad Request: No Analog value found");
    }
  };
  