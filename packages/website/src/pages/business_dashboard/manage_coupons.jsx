// Code Requirement 23.2 - Manage Coupons Page - Business Dashboard UI - Needs to have coupon list and manage coupon buttons
// This code creates the manage coupons page which is accessible from the Business Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 10/17/2023
// This pages sets up the UI, there are no pre or post conditions at this point, and no inputs to this page at this point
// eventually inputs to this page will be the coupons pulled in from the backend

// import necessary components
// import Navbar
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";
import LightColorfulButton from "@/components/LightColorfulButton";
import SolidColorButton from "@/components/SolidColorButton";

// creates a static list of coupons - this will need to be updated when we are pulling from database
var listItems = ['Coupon 1', 'Coupon 2', 'Coupon 3', 'Coupon 4', 'Coupon 5'];

// create the page Business Dashboard
export default function Manage_Coupons() {
  return (
    // create main html to hold the page
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4">
          {/* creates two headers for the page title and subtitle */}
          <h1 className="text-3xl font-semibold mb-2">Business Dashboard</h1>
          <h2 className="text-2xl font-medium mb-6">Manage Coupons</h2>
          <div className="flex space-x-4 mb-4">
            {/* creates the Add new class button, this will need to be updated once we have CRUD functionality */}
            <SolidColorButton title="Add New Coupon" link="/" />
          </div>
          {/* creates an html list, this will need to be refactored when pulling real data */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listItems.map((listItem, index) => (
            <li key={index} className="bg-white p-4 shadow-md rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{listItem}</span>
                <div className="space-x-2">
                  <LightColorfulButton
                    shadowColor="#D1CDC7"
                    title="Update"
                    link="/"
                  />
                  <LightColorfulButton
                    shadowColor="#D1CDC7"
                    title="Delete"
                    link="/"
                  />
                </div>
              </div>
            </li>
            ))}
          </ul>
        </div>
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div> 
    </main>
  );
}
