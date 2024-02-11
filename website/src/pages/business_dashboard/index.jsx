// Code Requirement 23.1 - Business Dashboard UI - View organization and manage coupons buttons
// This code creates the Business Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// Updated: 11/16/2023, Requirement 26.3 - Refactor charts and chart widget to reflect information more valuable to the user
// Updated: 2/09/2024,Requirement: 24.3 “Add Manage Account button to link update account info page” & Requirement: 24.4 “Add notifications to Dashboard”
// This pages sets up the UI, there are no pre or post conditions
// inputs to this page are the users filtering option that they choose

// import necessary components
// import react and usestate to track modal and data states
import { React, useState } from 'react';
// import victory chart and props 
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';
// import Navbar
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";
// import button component 
import SolidColorButton from "@/components/SolidColorButton";
import LightColorfulButton from '@/components/LightColorfulButton';

import { useWeb3Context } from "../../contexts/web3Context";
import { useGraphContext } from "../../contexts/graphContext";

// dummy chart data to be replaced with backend data
const ChartData = [
  { coupon: "10% off", redeemed: 5, organization: "ku" },
  { coupon: "20% off", redeemed: 15, organization: "ku" },
  { coupon: "$2 off", redeemed: 2, organization: "lps" },
  { coupon: "free drink", redeemed: 20, organization: "lps" },
  { coupon: "1/2 off", redeemed: 8, organization: "ku" }
]

const username = "Username"

// create the page Business Dashboard
export default function Business_dashboard() {

  // create state tracking for modal state
  const [modalOpen, setModalOpen] = useState(false);
  // create state tracking for selected bar data
  const [selectedBarData, setSelectedBarData] = useState(null);
  // create state tracking for chart filtering
  const [selectedOrganization, setSelectedOrganization] = useState('all');

  // handle filtering of organizations
  const filteredData = selectedOrganization === 'all'
    ? ChartData
    // filter the chart data based on organization selected
    : ChartData.filter(item => item.organization === selectedOrganization);

  // handle click event for the individual data bars on chart
  const handleBarClick = (event, clickedData) => {
    // get selected data
    setSelectedBarData(clickedData.datum); // Access the datum property to get the entire data point
    // open modal
    setModalOpen(true);
  };
  
  // handle closing of the modal component
  const handleCloseModal = () => {
    // reset selected class value
    setSelectedClass(null);
    // reset mdoal data
    setModalData(null);
  };

  return (
    // create main html to hold the page
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>
          {/* Add a new section for the subheading and link to account preferences */}
      <section className="mb-4 ml-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Welcome, {username}!
       </h2>
       {/* Create a link to account preferences */}
        <LightColorfulButton
          shadowColor="pink"
          title="Manage Account"
          link="/account"
        />
      </section>
      <div className='p-4 mb-8'>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">Business Dashboard</h1>
      </div>

      {/* create a container to hold the dropdown for the organizations */}
      <div className='flex flex-col md:flex-row md:justify-between p-8'>
      {/* <div className="container mx-auto mt-6 px-4"> */}
        <div className='md:w-1/3 bg-white rounded shadow-lg p-4'>
          
        <div className="mb-12">
          {/* creates a label for the dropdown */}
          <label htmlFor="orgs" className="text-lg font-semibold">View Organizations: </label>
          <p className='text-sm text-gray-600 mt-2'>-Click dropdown to filter graph by organization</p>
          {/* creates the dropdown items, this will eventually be pulled in  */}
          <select className="block mt-2 border border-gray-300 rounded p-2 w-full" name="orgs" id="orgs" onChange={(e) => setSelectedOrganization(e.target.value)}>
            <option value="ku">University of Kansas</option>
            <option value="lps">Lawrence Public Schools</option>
            <option value="others">Others</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className='mb-12'>
          <h3 className='text-lg font-semibold'>Active Coupons</h3>
          <p className='text-sm text-gray-600 mt-2'>-Click button to add, edit or delete active coupons</p>
          <SolidColorButton title="Manage Coupons" link="/business_dashboard/manage_coupons" />
        </div>
              <div className='mb-12'>
                <h3 className='text-lg font-semibold'>Notifications</h3>
                <p className='text-sm text-gray-600 mt-2'>- No new notifications at this time.</p>
              </div>

        </div>
        <div className="md:w-2/3 bg-white rounded shadow-lg p-4">
          <div className="mt-6">
            {/* </div> */}
            </div>
          {/* Creates an instance of the Victory Chart, this creates the chart with the specified theme and padding  */}
      {/* Victory Bar Chart */}
      {/* <div className='md:w-2/3 bg-white shadow-md'> */}
      <div className="">
        <VictoryChart 
          theme={VictoryTheme.material} 
          width={300} 
          height={200}
          domainPadding={{ x: 20, y: 20 }} // Adjust the padding as needed
        >
          {/* Title */}
          <VictoryLabel 
            text="Total Coupons Redeemed" 
            x={150} 
            y={14} 
            textAnchor="middle" 
            style={{ fontSize: 10}}
          />
          {/* x axis  */}
          <VictoryAxis
            label="Coupon"
            style={{
              tickLabels: { fontSize: 6, padding: 5 },
              axisLabel: { fontSize: 9, padding: 10 },
            }}
            axisLabelComponent={<VictoryLabel dy={20} />}
          />
          {/* y axis  */}
          <VictoryAxis 
            label="Redeemed"
            dependentAxis
            style={{
              tickLabels: { fontSize: 6, padding: 5 },
              axisLabel: { fontSize: 9, padding: 10 },
            }} 
            axisLabelComponent={<VictoryLabel dy={-20} />} // Adjust dy to move the label to the left
          />
          {/* create bars for chart  */}
          <VictoryBar 
            data={filteredData} 
            x="coupon" 
            y="redeemed" 
            style={{
              data: { fill: "powderblue" }
            }}
            // create event handlers for the bars 
            events={[{
              target: 'data',
              eventHandlers: {
                onClick:handleBarClick, // Pass the event and data to the handler
                // set up hover effect for bars
                onMouseOver: () => {
                  return [{
                    target: 'data',
                    mutation: () => ({ style: { fill: 'pink' } }),
                  }];
                },
                // set up hover effect for bars
                onMouseOut: () => {
                  return [{
                    target: 'data',
                    mutation: () => {},
                  }]
                }
              },
            }]}
          />
        </VictoryChart>
      {/* </div> */}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/4">
            <h2 className="text-2xl mb-4">Details</h2>
            <div className="mb-4">
              {/* container for coupon data  */}
              <p className="text-lg font-bold">Coupon:</p>
              <p className="text-lg">{selectedBarData?.coupon}</p>
            </div>
            {/* container for number data  */}
            <div className="mb-4">
              <p className="text-lg font-bold">Number Redeemed:</p>
              <p className="text-lg">{selectedBarData?.redeemed}</p>
            </div>
            {/* instance of button for modal closing */}
            <div className='text-center'>
              <SolidColorButton
                onClick={() => setModalOpen(false)}
                title="Close"
              />
            </div>
          </div>
        </div>
      )}
    </div> 
    </div>
    {/* </div> */}
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div> 
    </main>
  );
}
