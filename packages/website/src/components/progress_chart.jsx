// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the victory chart libraries bar chart
import { VictoryPie, VictoryAnimation, VictoryTheme, VictoryLabel } from 'victory';

const ProgressChart = () => {
  return (
    // Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding
    // <svg viewBox="0 0 400 400" width="100%" height="100%">
      <VictoryPie
        // animate={{ duration: 1000 }}
        // categories={{ x: ["participation", "non"] }}
        colorScale={["gold", "cyan"]}
        width={400} 
        height={400}
        data={[
          { x: "participation", y: 65 },
          { x: "non", y: 35 }
        ]}
        innerRadius={100}
        padAngle={2}
        // cornerRadius={25}    
      />
  )
}
// exports ProgressChart component 
export default ProgressChart;
