// Code Requirement 25.1 - Instructor Dashboard UI - View classes and generate QR code buttons
// This code creates the Instructor Dashboard Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import Footer component
import Footer from "@/components/footer";

// create the Instructor Dashboard page
export default function Instructor_dashboard() {
  return (
    // create a main html tag to hold the page
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* creates an instance of the Navbar component */}
      <Navbar />
      {/* creates a container to hold the button */}
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {/* creates the view classes button/link */}
          <a href="/view_classes">View Classes</a>
        </div>
        {/* creatse a container to hold the button */}
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {/* creates a the qr code generator button */}
          <a href="/">QR Code Generator</a>
        </div>
        {/* creates an instance of the Footer component */}
      <Footer /> 
    </main>   
  );
};

