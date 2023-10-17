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
// import Footerer90diu component
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
            {/* Creates a title for the insights widget  */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Attendance Per Class</h3>
            {/* Creates an instance of the BarChart component */}
            <BarChart />  
          </div>      
          <h4 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-900">Student Attendance Over Time</h4>
          <div>
            <LineChart />
          </div>
          <h5 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-900">Student Attendance Overall</h5>
          <div>
            <ProgressChart />
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