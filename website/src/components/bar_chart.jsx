// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

import { React, useState } from 'react';
import ChartModal from "@/components/ChartModal";
// import the victory chart libraries bar chart
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

const BarChart = ({ title, data, xKey, yKey, xAxisLabel, yAxisLabel, theme, chartHeight, chartWidth }) => {

  const [selectedClass, setSelectedClass] = useState(null);
  const [modalData, setModalData] = useState(null);

  const handleBarClick = (event, barData) => {
    setSelectedClass(barData.datum.name); // Assuming each data point has a 'class' property
    setModalData(barData.datum); // Pass the entire data point to the modal
  };

  const handleCloseModal = () => {
    setSelectedClass(null);
    setModalData(null);
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>{title}</h2>
      <VictoryChart
        theme={theme || VictoryTheme.material}
        height={chartHeight || 300}
        width={chartWidth || 500}
        domainPadding={{ x: 20, y: 20 }} // Adjust the padding as needed
      >
        <VictoryAxis
          label={xAxisLabel}
          style={{
            axisLabel: { fontSize: 16, padding: 30 },
            grid: { stroke: "grey" },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
        />
        <VictoryAxis
          label={yAxisLabel}
          style={{
            axisLabel: { fontSize: 16, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
          dependentAxis
        />
        <VictoryBar
          data={data}
          x={xKey}
          y={yKey}
          style={{
            data: { fill: "powderblue" }
          }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: handleBarClick,
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        return { style: { fill: "pink", cursor: "pointer" } };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        return { style: { fill: "powderblue" } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
          labels={({ datum }) => `${datum[yKey]}`}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
      {selectedClass && (
        <ChartModal
          isOpen={selectedClass !== null}
          onClose={handleCloseModal}
          data={modalData}
        />
      )}
    </div>
  );
};

// exports BarChart component 
export default BarChart;
