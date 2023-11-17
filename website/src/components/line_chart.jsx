// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// Updated: 11/09/2023 - to add zoom capabilities, range capabilities
// This pages sets up the UI, there are no pre or post conditions to this page
// Inputs to this page are the user inputting date ranges, and zooming on the chart

import React, { useState } from 'react';
// import the victory chart libraries Line chart
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryZoomContainer, VictoryBrushContainer } from 'victory';

const LineChart = ({ title, data, xKey, yKey, xAxisLabel, yAxisLabel, theme, chartHeight }) => {

  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleZoom = (domain) => {
    setSelectedDomain(domain);
  };

  const handleRangeSelect = (range) => {
    const currentDate = new Date();
    console.log('Current Date:', currentDate);
  
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - parseInt(range, 10));
    console.log('Start Date:', startDate);
  
    setSelectedDomain({
      x: [startDate, currentDate],
    });
    console.log('Selected Domain:', selectedDomain);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>{title}</h2>

      {/* Dropdown for date range selection */}
      <div className="mb-0 mt-4">
        <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
          Select Date Range:
        </label>
        <select
          id="dateRange"
          name="dateRange"
          className="mt-1 p-2 border rounded-md"
          onChange={(e) => handleRangeSelect(e.target.value)}
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>

      <VictoryChart
        theme={theme || VictoryTheme.material}
        height={chartHeight || 300}
        containerComponent={
          <VictoryZoomContainer
            zoomDomain={selectedDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryLine
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { stroke: "powderblue" },
            parent: { border: "1px solid #ccc" }
          }}
        />
        <VictoryAxis
          label={xAxisLabel}
          tickFormat={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
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
      {/* <VictoryChart
        theme={theme || VictoryTheme.material}
        height={90} // Adjust height for the brush chart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        domain={{ x: selectedDomain && selectedDomain.x }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={selectedDomain}
            onBrushDomainChange={handleZoom}
          />
        }
      >
        <VictoryAxis
          tickValues={[]} // Remove tick values for the brush chart
        />
        <VictoryLine
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { stroke: "#4299E1" },
            parent: { border: "1px solid #ccc" }
          }}
        />
      </VictoryChart> */}
    </div>
  );
};

// exports LineChart component 
export default LineChart;

