import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartSection = () => (
  <section className="piChart">
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Series A", color: "#FFB3B3" },
            { id: 1, value: 20, label: "Series B", color: "#FF6666" },
            { id: 2, value: 15, label: "Series C", color: "#CC0000" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  </section>
);

export default PieChartSection;
