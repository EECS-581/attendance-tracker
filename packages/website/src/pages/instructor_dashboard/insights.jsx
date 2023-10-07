// Code Requirement 26.1 - Insights Dashboard - Instructor UI - Insights charts/widget
// This code creates the Insights Page for the instructor dashboard part of the website
// Programmers name: Libby Miller
// Date: 10/05/2023
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

// creates the insights page
export default function Insights() {
  return (
    //creates a main html tag to hold the page 
    <main className="flex min-h-screen flex-col justify-between p-24">
      {/* creates an instance of the Navbar component */}
      <Navbar />
      {/* creates two headers for the page title and subtitle */}
      <h1>Instructor Dashboard</h1>
      <h2>Insights</h2>
      <div>
        {/* Creates a title for the insights widget  */}
        <h2>Attendance Per Class</h2>
        {/* Creates an instance of the BarChart component */}
        <BarChart />  
      </div>      
      <h3>Student Attendance Over Time</h3>
      <div>
        <LineChart />
      </div>
      <h3>Progress Bar</h3>
      <div>
        <ProgressChart />
      </div>
      {/* creates an instance of the Footer component */}
      <Footer />
    </main>
  );
};