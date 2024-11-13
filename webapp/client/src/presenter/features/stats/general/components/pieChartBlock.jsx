import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartSection = ({ expedition }) => {
  if (!expedition || !expedition.gasStats) {
    return;
  }

  const { gasStats } = expedition;
  const pieData = [
    { id: 0, value: gasStats?.avgValue || 0, label: "Average", color: "#FFB3B3" },
    { id: 1, value: gasStats?.highestValue || 0, label: "Highest", color: "#FF6666" },
    { id: 2, value: gasStats?.lowestValue || 0, label: "Lowest", color: "#CC0000" },
  ];

  return (
    <section className="piChart">
      <PieChart
        series={[{ data: pieData }]}
        width={400}
        height={150}
      />
    </section>
  );
};

export default PieChartSection;
