// Code Requirement 27.1 - Instructor - View classes UI - Display a list of classes
// This code creates the Instructor's View Classes Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import Footer component
import Footer from "@/components/footer";

// creates the View Classes page
export default function View_Classes() {
  return (
    //creates a main html tag to hold the page 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* creates an instance of the Navbar component */}
      <Navbar />
      {/* creates two headers for the page title and subtitle */}
      <h1>Instructor Dashboard</h1>
      <h2>View Classes</h2>
      <div>
        {/* creates an html list, this will need to be refactored when pulling real data */}
        <ul>
          {/* creates list items */}
          <li>Class 1</li>
          <li>Class 2</li>
          <li>Class 3</li>
          <li>Class 4</li>
          <li>Class 5</li>
          <li>Class 6</li>
          <li>Class 7</li>
          <li>Class 8</li>
          <li>Class 9</li>
          <li>Class 10</li>
        </ul>
      </div>
      {/* creates an instance of the Footer component */}
      <Footer /> 
    </main>   
  );
};