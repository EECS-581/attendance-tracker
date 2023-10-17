// Code Requirement 35.2 - Web - other features - Footer at the bottom, linking other pages on the site
// This code creates the Footer component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This section creatae the footer component 
const Footer = () => {
  return (
    // creates an html footer tag
    <footer className="bg-white text-gray-800 py-8">
      {/* creates a container to hold the links within the footer */}
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          <h2 className="text-xl font-bold">USEFUL LINKS</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="about" className="hover:text-gray-300">About</a>
            </li>
          </ul>
        </div>
        {/* creates a container to hold the contact or other info */}
        <div className="w-full sm: w-1/2 md:w-1/4 lg:w-1/6 mb-4">
          <h2 className="text-xl font-bold">CONTACT US</h2>
          <p className="mt-4">Contact info will go here eventually</p>
        </div>
      </div>
    </footer>
  );
};
// export the footer component so it can be used elsewhere on the site
export default Footer;