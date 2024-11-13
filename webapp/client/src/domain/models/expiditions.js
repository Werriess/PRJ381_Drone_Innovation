export class Expedition {
    constructor(droneID, startTime, endTime, latitude, longitude, carbonMonoxide, methane, butane, liquefiedPetroleumGas, feedback) {
      this.droneID = droneID;
      this.startTime = startTime;
      this.endTime = endTime;
      this.latitude = latitude;
      this.longitude = longitude;
      this.carbonMonoxide = carbonMonoxide;
      this.methane = methane;
      this.butane = butane;
      this.liquefiedPetroleumGas = liquefiedPetroleumGas;
      this.feedback = feedback;
    }
  
    isValid() {
      return (
        this.droneID && this.startTime && this.endTime && this.latitude && this.longitude
      );
    }
  
    formatData() {
      return {
        droneID: this.droneID.trim(),
        startTime: new Date(this.startTime).toISOString(),
        endTime: new Date(this.endTime).toISOString(),
        latitude: parseFloat(this.latitude),
        longitude: parseFloat(this.longitude),
        carbonMonoxide: parseFloat(this.carbonMonoxide),
        methane: parseFloat(this.methane),
        butane: parseFloat(this.butane),
        liquefiedPetroleumGas: parseFloat(this.liquefiedPetroleumGas),
        feedback: this.feedback.trim(),
      };
    }
  }
  