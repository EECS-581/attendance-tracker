// Code Requirement 25.1 - Instructor Dashboard UI - View classes and generate QR code buttons
// Update - Code Requirement 25.2 - Instructor Dashboard UI - Insights Widget/Button
// This code creates the Instructor Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 10/05/2023 - to add insights widget
// This pages sets up the UI, there are no pre or post condition to this page
// inputs to this page will be the data points pulled from the instuctors classes

// import the victory chart libraries bar chart
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import button component 
import LightColorfulButton from '@/components/LightColorfulButton';
// import Footer component
import Footer from "@/components/footer";

// this adds some dummy test data to use in the charts until we have the backend setup to pull data from
const classData = [
  {name: "EECS 101", attendance: 100, date: "10/05"},
  {name: "EECS 268", attendance: 50, date: "10/01"},
  {name: "EECS 348", attendance: 25, date: "10/02"},
  {name: "EECS 448", attendance: 75, date: "10/04"},
  {name: "EECS 581", attendance: 80, date: "10/03"}
]

// create the Instructor Dashboard page
export default function Instructor_dashboard() {
  return (
    // create a main html tag to hold the page
    <main className="flex min-h-screen flex-col justify-between p-24">
      {/* creates an instance of the Navbar component */}
      <Navbar />
      {/* creates a container to hold the button */}
      <div>
          {/* creates the view classes button/link */}
        <LightColorfulButton
          shadowColor="powderblue"
          title="View Classes"
          link="/view_classes"
        />
      </div>
        {/* creatse a container to hold the button */}
        <div>
          {/* creates a the qr code generator button */}
          <LightColorfulButton
          shadowColor="powderblue"
          title="QR Code Generator"
          link="/"
          />
        </div>

        <div>
          {/* Creates a title for the insights widget  */}
          <h2>Attendance Per Class</h2>
          {/* Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding  */}
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
          >
            {/* Creates the x-axis with a label and styling to make it look nicer */}
            <VictoryAxis
              label="Class"
              style={{
                axisLabel: {fontSize: 20, padding: 30},
                grid: {stroke: ({ tick }) => tick > 0.5 ? "red" : "grey"},
                ticks: {stroke: "grey", size: 5},
                tickLabels: {fontSize: 8, padding: 5}
              }}
            />
            {/* Creates the y-axis with a label and styling  */}
            <VictoryAxis
              label="Attendance"
              style={{
                axisLabel: {fontSize: 20, padding: 30},
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
            />
          </VictoryChart>    
          {/* Creates a link to the full insights page       */}
          <LightColorfulButton
            shadowColor="powderblue"
            title="See All Insights"
            link="/instructor_dashboard/insights"
          />
        </div>
        {/* creates an instance of the Footer component */}
      <Footer /> 
    </main>   
  );
};

