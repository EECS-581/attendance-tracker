// Code Requirement 37.1 - About Page UI - View organization and manage coupons buttons
// This code creates the About Page for the website
// Programmers name: Libby Miller
// Date: 09/26/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import necessary components
// import Navbar 
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";

// create the about page
export default function About() {
  return (
    // create a main page container
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* create an instance of the navbar */}
      <Navbar />
      {/* creates a header for the page */}
      <h1>About Us</h1>
      {/* creates a subheader for the page */}
      <h2>Attend This</h2>
      <div>
        {/* creates a container to hold a heading and an image or graphic */}
        <h3>Streamlining Student Engagement in Education</h3>
        <div>IMAGE OR GRAPHIC HERE?</div>
      </div>
      {/* creates a container to hold the text explaining the product */}
      <div>
        <p>Attend This is an attendence reward tracker that enables students to collect tokens and rewards for class attendence, to incentivize greater participation and engagement in schools and universities.</p>
        <p>Attend This provides instructors with powerful insights to help manage attendence expectations and encourage participation.</p>
        <p>Attend This gives businesses the opportunity to engage with local educational institutiions by incentivizing attendence with a reward system.</p>
      </div>
      {/* create an instance of the footer  */}
      <Footer /> 
    </main>   
  );
};