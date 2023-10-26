// Code Requirement 37.1 - About Page UI - View organization and manage coupons buttons
// This code creates the About Page for the website
// Programmers name: Libby Miller
// Date: 09/26/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// import necessary components
// import Navbar component 
import Navbar from "@/components/navbar";
// import Footer
import Footer from "@/components/footer";

// create the about page
export default function About() {
  return (
    // create a main page container
    <main className="w-full overflow-hidden">
      <div className="py-6">
        <div className="container mx-auto">
      {/* <div className={`sm:px-16 px-6 flex justify-center items-center`}> */}
        {/* <div className={`xl:max-w-[2280px] w-full`}> */}
        {/* This adds the navbar component to the page */}
          <Navbar />
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        {/* creates a header for the page */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">About Us</h1>
        {/* creates a subheader for the page */}
        <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">Attend This</h2>
        <div className="text-center mt-8">
          {/* creates a container to hold a heading and an image or graphic */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Streamlining Student Engagement in Education</h3>
          <img
            src=""
            alt=""
            className="mx-auto mt-4 rounded-lg"
          />
        </div>

        {/* creates a container to hold the text explaining the product */}
        <div className="mt-8">
          <p className="text-gray-700 text-center my-4">Attend This is an attendence reward tracker that enables students to collect tokens and rewards for class attendence, to incentivize greater participation and engagement in schools and universities.</p>
          <p className="text-gray-700 text-center my-4">Attend This provides instructors with powerful insights to help manage attendence expectations and encourage participation.</p>
          <p className="text-gray-700 text-center my-4">Attend This gives businesses the opportunity to engage with local educational institutiions by incentivizing attendence with a reward system.</p>
        </div>
      </div>
      <div className="py-4 text-center text-sm text-gray-600">
        {/* create an instance of the footer  */}
        <Footer /> 
      </div>
    </main>   
  );
};