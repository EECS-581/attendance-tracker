// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

import React from "react";
import { VictoryPie, VictoryLabel, VictoryAnimation } from "victory";
// import the victory chart libraries bar chartCFV  
const ProgressChart = ({ title, data, colors, innerRadius, labelStyle, animationData, chartWidth, chartHeight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{title}</h2>
      <div className="flex justify-center items-center">
        <div className="relative">
          <VictoryPie
            colorScale={colors || ["powderblue", "pink"]}
            width={chartWidth || 400}
            height={chartHeight || 400}
            data={data || [
              { x: "attending", y: 65 },
              { x: "not", y: 35 }
            ]}
            innerRadius={innerRadius || 60}
            labelComponent={
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                style={labelStyle || {
                  fontSize: 16,
                  fill: "gray",
                  fontWeight: "bold"
                }} />
              }
            />
            <VictoryAnimation duration={1000} data={animationData || { y: 65 }}>
              {(style) => (
                <p className="text-gray-900 text-2xl font-semibold absolute inset-0 flex items-center justify-center">
                  {`${Math.round(style.y)}%`}
                </p>
              )}
            </VictoryAnimation>
          </div>
        </div>
      </div>
  );
};

export default ProgressChart;

