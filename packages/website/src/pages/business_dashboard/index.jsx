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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* create an instance of Navbar */}
      <Navbar />
      {/* create a container to hold the dropdown for the organizations */}
      <div className="">
        {/* creates a label for the dropdown */}
        <label for="orgs">View Organizations: </label>
        {/* creates the dropdown items, this will eventually be pulled in  */}
        <select className="block mt-4" name="orgs">
          <option value="ku">University of Kansas</option>
          <option value="">Lawrence Public Schools</option>
          <option value="">Others</option>
        </select>
      </div>

      <SolidColorButton title="Manage Coupons" link="/" />
      {/* creates an instance of the footer component */}
      <Footer />
    </main>
  );
}
