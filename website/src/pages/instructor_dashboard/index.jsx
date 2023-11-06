// Code Requirement 25.1 - Instructor Dashboard UI - View classes and generate QR code buttons
// Update - Code Requirement 25.2 - Instructor Dashboard UI - Insights Widget/Button
// This code creates the Instructor Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 10/05/2023 - to add insights widget
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// This pages sets up the UI, there are no pre or post condition to this page
// inputs to this page will be the data points pulled from the instuctors classes

// import the victory chart libraries bar chart
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import button component 
import LightColorfulButton from '@/components/LightColorfulButton';
import BarChart from '@/components/bar_chart';
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
    <main className="min-h-screen flex flex-col w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar /> 
        </div>
      </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">Instructor Dashboard</h1>          
        <div className="flex justify-center items-center flex-grow">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow-lg p-0">
          <div className='p-4'>
            <h2 className="text-2xl font-bold">QR Code Generator</h2>
            <p className='text-gray-600 mt-2'>Click the link to access QR code generation options!</p>
          </div>
          <div className='flex items-center justify-center p-4'>  
            {/* creates a the qr code generator button */}
            <LightColorfulButton
              shadowColor="powderblue"
              title="Get QR Codes"
              link="/instructor_dashboard/qr_code_generator"
            />
          </div>
        </div>
        <div className="bg-white rounded shadow-lg p-4">
          <div className="mt-6">
          {/* Creates a title for the insights widget  */}
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Attendance Per Class</h2>
          {/* Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding  */}
          <BarChart 
              // title="Attendance Per Class"
              data={classData}
              xKey="name"
              yKey="attendance"
              xAxisLabel="Class"
              yAxisLabel="Attendance"
              chartHeight={300}
              // chartWidth={}
            />   
          <div className='text-center mt-6'>
            {/* Creates a link to the full insights page       */}
            <LightColorfulButton
              shadowColor="powderblue"
              title="See All Insights"
              link="/instructor_dashboard/insights"
            />
          </div>  
        </div>        
      </div>
        <div className="bg-white rounded shadow-lg p-0">
          <h2 className="text-2xl font-bold p-4">Active Classes</h2>
         
          <ul className="">
          {/* loops through the list items  */}
          {classData.map((classItem, index) => (
            // for each item create a list item element 
            <li key={index} className="p-4 border-b">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{classItem.name}</span>
              </div>
            </li>
            ))}
          </ul>
          <div className='mt-6 mb-6 text-center'>
          {/* creates the view classes button/link */}
          <LightColorfulButton
            shadowColor="powderblue"
            title="Manage Classes"
            link="/instructor_dashboard/view_classes"
          />   
          </div>
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

