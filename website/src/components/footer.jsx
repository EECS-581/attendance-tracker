// Code Requirement 35.2 - Web - other features - Footer at the bottom, linking other pages on the site
// This code creates the Footer component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// Updated: 11/13/2023, Fix issue with nested routing, switched to using <LINK> component instead of <a> tags
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// imports the link component from next for routing
import Link from 'next/link';
// This section creates the footer component 
const Footer = () => {
  return (
    // creates a footer DOM element 
    <footer className="bg-gray-100 text-gray-800 py-8">
      {/* creates a container to hold the two footer columns */}
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* creates a container to hold first column  */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          {/* creates a header for the links  */}
          <h2 className="text-xl font-bold">USEFUL LINKS</h2>
          {/* creates a list of links for footer  */}
          <ul className="mt-4 space-y-2">
            <li>
              {/* Use Link component for navigation */}
              <Link href="/">
                <span className="hover:text-gray-300">Home</span>
              </Link>
            </li>
            <li>
              {/* Use Link component for navigation */}
              <Link href="/about">
                <span className="hover:text-gray-300">About</span>
              </Link>
            </li>
            <li>
              {/* Use Link component for navigation */}
              <Link href="/instructor_dashboard">
                <span className="hover:text-gray-300">Instructors</span>
              </Link>
            </li>
            <li>
              {/* Use Link component for navigation */}
              <Link href="/business_dashboard">
                <span className="hover:text-gray-300">Businesses</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* creates second column container  */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          <h2 className="text-xl font-bold">CONTACT US</h2>
          <ul className="mt-4 space-y-2">
            <li>
              {/* Use Link component for navigation */}
              <Link href="/">
                <span className="hover:text-gray-300">AttendThis.com</span>
              </Link>
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
// export footer component so it can be used elsewhere in application
export default Footer;