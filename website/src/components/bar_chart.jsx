import React, { useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
import moment from 'moment'; // For date formatting

import ChartModal from './ChartModal';

const BarChart = ({ title, data, xKey, yKey, xAxisLabel, yAxisLabel, theme, chartHeight, chartWidth }) => {
  // Default time range to the last week
  const [timeRange, setTimeRange] = useState({
    start: moment().subtract(1, 'week').toDate(),
    end: moment().toDate(),
  });

  // Filter data based on the selected time range
  const filteredData = data.filter(datum => {
    const date = moment(datum[xKey], 'YYYY-MM-DD');
    return date.isBetween(timeRange.start, timeRange.end, null, '[]'); // inclusive of start and end
  });

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
      <div className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4'>{title}</div> {/* Moved title out of h2 for more control */}
      <VictoryChart
        theme={theme || VictoryTheme.material}
        height={chartHeight || 300}
        width={chartWidth || 500}
        domainPadding={20} // This adds space between bars and axes
        padding={{ top: 20, bottom: 60, left: 60, right: 20 }} // Adjusted chart padding
      >
        <VictoryAxis
          label={xAxisLabel}
          tickFormat={tick => moment(tick, 'YYYY-MM-DD').format('MMM DD')} // Format dates
          style={{
            axisLabel: { fontSize: 16, padding: 35 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 12, padding: 5 }, // Removed angle to prevent awkward slant
            grid: { stroke: 'none' }, // Removed grid lines
          }}
        />
        <VictoryAxis
          label={yAxisLabel}
          style={{
            axisLabel: { fontSize: 16, padding: 40 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 12, padding: 5 },
            grid: { stroke: 'none' }, // Removed grid lines
          }}
          dependentAxis
        />
        <VictoryBar
          data={filteredData}
          x={xKey}
          y={yKey}
          style={{
            data: { fill: "#4f8a8b", width: "20"} // More visually pleasing color

          }}
          events={[{
            target: "data",
            eventHandlers: {
              onClick: handleBarClick,
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    mutation: () => ({ style: { fill: "pink", cursor: "pointer", width: "20" } }),
                  },
                  {
                    target: "labels",
                    mutation: () => ({ active: true })
                  }
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "data",
                    mutation: () => ({ style: { fill: "#4f8a8b", width: "20" } }),
                  },
                  {
                    target: "labels",
                    mutation: () => ({ active: false })
                  }
                ];
              },
            },
          }]}
          labels={({ datum }) => `${datum[yKey]}`}
          labelComponent={<VictoryTooltip 
                            flyoutStyle={{ stroke: "none", fill: "black" }} 
                            style={{ fill: "white" }}
                            cornerRadius={5}
                            pointerLength={0}
                            flyoutPadding={{ top: 5, bottom: 5, left: 15, right: 15 }}
                          />}
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

export default BarChart;
