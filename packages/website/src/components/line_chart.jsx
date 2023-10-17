// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the victory chart libraries Line chart
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const classData = [
  {name: "EECS 101", attendance: 100, date: "10/05"},
  {name: "EECS 268", attendance: 50, date: "10/01"},
  {name: "EECS 348", attendance: 25, date: "10/02"},
  {name: "EECS 448", attendance: 75, date: "10/04"},
  {name: "EECS 581", attendance: 80, date: "10/03"}
]

const LineChart = () => {
  return (
    // Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding
    <div className="bg-white p-4 rounded-lg shadow-md">
      <VictoryChart 
        theme={VictoryTheme.material}
        height={300}
      >
        <VictoryLine
          data={classData}
          x="date"
          y="attendance"
          style={{
            data: { stroke: "#4299E1" },
            parent: { border: "1px solid #ccc" }
          }}
        />
        <VictoryAxis
          label="Date"
          style={{
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: "gray" },
            ticks: { stroke: "gray", size: 5 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
        />
        <VictoryAxis
          label="Attendance"
          style={{
            axisLabel: { fontSize: 12, padding: 30 },
            ticks: { stroke: "gray", size: 5 },
            tickLabels: { fontSize: 8, padding: 5 }
          }}
          dependentAxis
        />
      </VictoryChart>
    </div>
  )
}
// exports LineChart component 
export default LineChart;
