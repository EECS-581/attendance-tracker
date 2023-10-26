// This code creates the manage classes page for the website
// Programmers name: Libby Miller
// Date: 10/17/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import Footer component
import Footer from "@/components/footer";
// import button components
import LightColorfulButton from "@/components/LightColorfulButton";
import SolidColorButton from "@/components/SolidColorButton";

// creates a static list of coupons - this will need to be updated when we are pulling from database
var listItems = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

// create the page manage classes
export default function Manage_Classes() {
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
          <h1 className="text-3xl font-semibold mb-2">Instructor Dashboard</h1>
          <h2 className="text-2xl font-medium mb-6">Manage Classes</h2>
          <div className="flex space-x-4 mb-4">
            {/* creates the Add new class button, this will need to be updated once we have CRUD functionality */}
            <SolidColorButton title="Add New Class" link="/" />
          </div>
          {/* creates an html list, this will need to be refactored when pulling real data */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listItems.map((listItem, index) => (
            // create a item in list for each element 
            <li key={index} className="bg-white p-4 shadow-md rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{listItem}</span>
                <div className="space-x-2">
                  {/* for each item create a button to update class  */}
                  <LightColorfulButton
                    shadowColor="#D1CDC7"
                    title="Update"
                    link="/"
                  />
                  {/* for each item create a button to delete class  */}
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
};