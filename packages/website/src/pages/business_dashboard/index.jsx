// Code Requirement 23.1 - Business Dashboard UI - View organization and manage coupons buttons
// This code creates the Business Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import necessary components
// import Navbar
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";
import SolidColorButton from "@/components/SolidColorButton";

// create the page Business Dashboard
export default function Business_dashboard() {
  return (
    // create main html to hold the page
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>
      {/* create a container to hold the dropdown for the organizations */}
      <div className="container mx-auto mt-6 px-4">
        <div className="mb-4 max-w-sm">
          {/* creates a label for the dropdown */}
          <label htmlFor="orgs" className="text-lg font-semibold">View Organizations: </label>
          {/* creates the dropdown items, this will eventually be pulled in  */}
          <select className="block mt-2 border border-gray-300 rounded p-2 w-full" name="orgs" id="orgs">
            <option value="ku">University of Kansas</option>
            <option value="lps">Lawrence Public Schools</option>
            <option value="others">Others</option>
          </select>
        </div>
      <SolidColorButton title="Manage Coupons" link="/business_dashboard/manage_coupons" />
      </div>
      {/* This section creates a container to hold the footer */}
      <div className="py-4 text-center text-sm text-gray-600">
        {/* This creates an instance of the footer component */}
        <Footer />
      </div> 
    </main>
  );
}
