// Code Requirement 35.2 - Web - other features - Footer at the bottom, linking other pages on the site
// This code creates the Footer component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This section creates the footer component 
const Footer = () => {
  return (
    // creates an html footer tag 
    <footer className="bg-gray-100 text-gray-800 py-8">
      {/* creates a container to hold the links within the footer */}
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* creates container to hold the links  */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          {/* creates a header for links  */}
          <h2 className="text-xl font-bold">USEFUL LINKS</h2>
          {/* creates a list of links  */}
          <ul className="mt-4 space-y-2">
            {/* create a list item for home navigation  */}
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            {/* create a list item and link for hte about page  */}
            <li>
              <a href="about" className="hover:text-gray-300">About</a>
            </li>
            {/* create a list item and link for the insturtor dashboard  */}
            <li>
              <a href="instructor_dashboard" className="hover:text-gray-300">Instructors</a>
            </li>
            {/* create a list and link for the business dashboard  */}
            <li>
              <a href="business_dashboard" className="hover:text-gray-300">Businesses</a>
            </li>
          </ul>
        </div>
        {/* creates a container to hold the contact or other info */}
        <div className="w-full sm: w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          {/* creates a title for contacts  */}
          <h2 className="text-xl font-bold">CONTACT US</h2>
          {/* creates a list to hold contact info  */}
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300">AttendThis.com</a>
            </li>
            <li>
              <p>101 AttendThis Ave.</p>
            </li>
            <li>
              <p>Lawrence, KS</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
// export the footer component so it can be used elsewhere on the site
export default Footer;