// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the victory chart libraries bar chart
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const classData = [
  {name: "EECS 101", attendance: 100, date: "10/05"},
  {name: "EECS 268", attendance: 50, date: "10/01"},
  {name: "EECS 348", attendance: 25, date: "10/02"},
  {name: "EECS 448", attendance: 75, date: "10/04"},
  {name: "EECS 581", attendance: 80, date: "10/03"}
]

const BarChart = () => {
  return (
    // Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding
    <div className="bg-white p-4 rounded-lg shadow-md">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        height={300}
        width={500}
      >
        {/* Creates the x-axis with a label and styling to make it look nicer */}
        <VictoryAxis
          label="Class"
          style={{
            axisLabel: {fontSize: 16, padding: 30},
            grid: {stroke: "grey"},
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 8, padding: 5}
          }}
        />
        {/* Creates the y-axis with a label and styling  */}
        <VictoryAxis
          label="Attendance"
          style={{
            axisLabel: {fontSize: 16, padding: 30},
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 8, padding: 5}
          }}
          // sets this as the dependent axis 
          dependentAxis
        />
        {/* Creates the actual bar chart using the class data  */}
        <VictoryBar
          data={classData}
          // set up the categories that are pulling the data, class name for the x-axis 
          x="name"
          // and attendance number for y-axis
          y="attendance"
          style={{
            data: { fill: "#4299E1" }
          }}
        />
      </VictoryChart>
    </div>
  )
}
// exports BarChart component 
export default BarChart;
