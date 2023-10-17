// Code Requirement 15 - The application shall allow instructors to generate unique QR codes for selected class sessions
// This code creates the QR code generator page and allows the instructor to create a QR code for a class
// Programmers name: Libby Miller
// Date: 10/17/2023

// Pre/post/inputs????

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
import SolidColorButton from "@/components/SolidColorButton";
// import Footer component
import Footer from "@/components/footer";

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
          <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">QR Code Generation</h2>

          {/* create a container to hold the dropdown for the organizations */}
          <div className="container mx-auto mt-6 px-4">
            <div className="mb-4 max-w-sm">
              {/* creates a label for the dropdown */}
              <label htmlFor="orgs" className="text-lg font-semibold">Classes: </label>
                {/* creates the dropdown items, this will eventually be pulled in  */}
                <select className="block mt-2 border border-gray-300 rounded p-2 w-full" name="orgs" id="orgs">
                  <option value="">EECS 101</option>
                  <option value="">EECS 448</option>
                  <option value="">EECS 658</option>
                  <option value="">EECS 581</option>
                </select>
            </div>
            <SolidColorButton title="Generate QR Code" link="/" />
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