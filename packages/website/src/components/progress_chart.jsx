// Code Requirement 26.1 - Insights Dashboard - Instructor UI - “Insights charts/widget
// This code sets up the basic visual charts for the insights page
// This will need to be updated when we have real data to pull from, right now it uses static data
// Programmers name: Libby Miller
// Date: 10/05/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the victory chart libraries bar chartCFV  
import { VictoryPie, VictoryAnimation, VictoryTheme, VictoryLabel } from 'victory';

const ProgressChart = () => {
  return (
    // Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex justify-center items-center">
      <div className="relative">
        <VictoryPie
          colorScale={["cyan", "gray"]}
          width={400} 
          height={400}
          data={[
            { x: "attending", y: 65 },
            { x: "not", y: 35 }
          ]}
          innerRadius={60}
          labelComponent={
            // create a label for the chart with these specifications
            <VictoryLabel 
              textAnchor="middle" 
              verticalAnchor="middle" 
              style={{
                fontSize: 16,
                fill: "gray",
                fontWeight: "bold"
              }}
            />}   
        />
        {/* creates an animation for the progress chart  */}
        <VictoryAnimation duration={1000} data={{ y: 65 }}>
          {(style) => (
            // create a text elemetn for the %
            <p className="text-gray-900 text-2xl font-semibold absolute inset-0 flex items-center justify-center">
              {`${Math.round(style.y)}%`}
            </p>
          )}
        </VictoryAnimation>
      </div>
    </div>
  </div>
  )
}
// exports ProgressChart component 
export default ProgressChart;
