import React from "react";

import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ApexLineChart = ({ words , count }) => {
  return (
    <div className="app">
      <Bar
        data={{
          labels: words,
          datasets: [
            {
              label: "words with highest occurrence",
              data: count,
              fill: true,
              backgroundColor: "rgba(75,192,192)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        }}
      />
    </div>
  );
};

export default ApexLineChart;
