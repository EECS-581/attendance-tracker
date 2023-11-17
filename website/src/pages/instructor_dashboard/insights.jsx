// Code Requirement 26.1 - Insights Dashboard - Instructor UI - Insights charts/widget
// This code creates the Insights Page for the instructor dashboard part of the website
// Programmers name: Libby Miller
// Date: 10/05/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import BarChart component
import BarChart from '@/components/bar_chart';
// import LineChart component
import LineChart from '@/components/line_chart';
// import ProgressChart component
import ProgressChart from "@/components/progress_chart";
// import Footerer90diu component
import Footer from "@/components/footer";

// this adds some dummy test data to use in the charts until we have the backend setup to pull data from
const classData = [
  {name: "EECS 101", attendance: 100, date: "2023-10-05"},
  {name: "EECS 268", attendance: 50, date: "2023-10-01"},
  {name: "EECS 348", attendance: 25, date: "2023-10-03"},
  {name: "EECS 448", attendance: 75, date: "2023-10-04"},
  {name: "EECS 581", attendance: 80, date: "2023-10-23"},
  {name: "EECS 101", attendance: 100, date: "2023-10-17"},
  {name: "EECS 268", attendance: 50, date: "2023-11-01"},
  {name: "EECS 348", attendance: 25, date: "2023-11-03"},
  {name: "EECS 448", attendance: 75, date: "2023-11-12"},
  {name: "EECS 581", attendance: 80, date: "2023-11-11"}
]

const formattedData = classData.map(point => ({
  date: new Date(point.date),
  attendance: point.attendance,
}));

const progressData = [
  { x: "attending", y: 75 },
  { x: "not", y: 25 }
]

// creates the insights page
export default function Insights() {
  return (
    //creates a main html tag to hold the page 
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
        <div className="max-w-4xl mx-auto p-6">
          {/* creates two headers for the page title and subtitle */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">Instructor Dashboard</h1>
          <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">Insights</h2>
          <div className="mt-6">
            {/* Creates an instance of the BarChart component */}
            <BarChart 
              title="Attendance Per Class"
              data={classData}
              xKey="name"
              yKey="attendance"
              xAxisLabel="Class"
              yAxisLabel="Attendance"
              chartHeight={300}
              // chartWidth={}
            />  
          </div>   
          <div>
            {/* creates an instance of the line chart  */}
            <LineChart 
              title="Attendance Trends"
              data={formattedData}
              xKey="date"
              yKey="attendance"
              xAxisLabel="Date"
              yAxisLabel="Attendance"
              chartHeight={250}
            />
          </div>
          <div>
            {/* creates an instance of the progress chart  */}
            <ProgressChart
              title="Student attendance overall"
              data={progressData}
              chartHeight={300}
              chartWidth={300}
              labelStyle={{ 
                fontSize: 18,
                fill: "black",
                fontWeight: "bold"
              }}
              animationData={{y: 75 }}
              colors={["powderblue", "pink"]}
            />
          </div>
        </div>
      </div>
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div> 
    </main>
  );
};