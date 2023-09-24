// Code Requirement 35.2 - Web - other features - Footer at the bottom, linking other pages on the site
// This code creates the Footer component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This section creatae the footer component 
const Footer = () => {
  return (
    // creates an html footer tag
    <footer className="flex w-full">
      {/* creates a container to hold the links within the footer */}
      <div className="flex-initial w-1/2">
        <p>USEFUL LINKS</p>
        <a href="/" className="block">Home</a>
        <a href="about" className="block">About</a>
      </div>
      {/* creates a container to hold the contact or other info */}
      <div className="flex-initial w-1/2">
        <p>CONTACT US</p>
        <p>Contact info will go here eventually</p>
      </div>
    </footer>
  );
};
// export the footer component so it can be used elsewhere on the site
export default Footer;