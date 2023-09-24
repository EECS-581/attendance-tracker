// Code Requirement 35.1 - Web-Other features - Navigation bar at the top, linking to other pages on the site, main navigation 
// This code creates the navitem component which will be used within the navbar component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// imports the Link component from next.js library
import Link from "next/link";

// creates the navitem component, which will take in arugments to track the text, path, and active status
const NavItem = ({ text, href, active }) => {
  return (
    // creates an instance of the Link component from next.js 
    // this component uses the parameters passed to the NavItem component upon instantiation
    <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
        {text}
    </Link>
  );
};
// export the NavItem component so it can be used elsewhere on the site
export default NavItem;