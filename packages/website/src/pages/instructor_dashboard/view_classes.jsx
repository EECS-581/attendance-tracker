// Code Requirement 27.1 - Instructor - View classes UI - Display a list of classes
// Code Requirement 22.2 - View Classes UI - Display buttons for adding, deleting, updating classes
// This code creates the Instructor's View Classes Page for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updtaed: 09/26/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import the necessary components
// import Navbar component
import Navbar from "@/components/navbar";
// import Footer component
import Footer from "@/components/footer";

// creates a static list of classes - this will need to be updated when we are pulling from database
var listItems = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

// creates the View Classes page
export default function View_Classes() {
  return (
    //creates a main html tag to hold the page 
    <main className="flex min-h-screen flex-col justify-between p-24">
      {/* creates an instance of the Navbar component */}
      <Navbar />
      {/* creates two headers for the page title and subtitle */}
      <h1>Instructor Dashboard</h1>
      <h2>View Classes</h2>
      <div>
        {/* creates the Add new class button, this will need to be updated once we have CRUD functionality */}
        <a className="lgBtns" href="">Add New Class</a>
        {/* creates the manage classes button, this will need to be updated once we have CRUD functionality, might be a form? */}
        <a className="lgBtns" href="">Manage Classes</a>
      </div>
      <div>
        {/* creates an html list, this will need to be refactored when pulling real data */}
        <ul className="classList">
          {/* loops through the listItems array */}
          {listItems.map(function(listItem, index) {
            // creates a list item for each item, each item has two buttons associated with it, update and delete
            return <li className="classListItem" key={ index } >{listItem} <a className="smBtns" href="">Update</a><a className="smBtns" href="">Delete</a></li>;
          })}
        </ul>
      </div>
      {/* creates an instance of the Footer component */}
      <Footer /> 
    </main>   
  );
};