// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

import React from 'react';
// import the victory chart libraries Line chart
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const LineChart = ({ title, data, xKey, yKey, xAxisLabel, yAxisLabel, theme, chartHeight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>{title}</h2>
      <VictoryChart
        theme={theme || VictoryTheme.material}
        height={chartHeight || 300}
      >
        <VictoryLine
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { stroke: "#4299E1" },
            parent: { border: "1px solid #ccc" }
          }}
        />
        <VictoryAxis
          label={xAxisLabel}
          style={{
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: "gray" },
            ticks: { stroke: "gray", size: 5 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
        />
        <VictoryAxis
          label={yAxisLabel}
          style={{
            axisLabel: { fontSize: 12, padding: 30 },
            ticks: { stroke: "gray", size: 5 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
          dependentAxis
        />
      </VictoryChart>
    </div>
  );
};

// exports LineChart component 
export default LineChart;
