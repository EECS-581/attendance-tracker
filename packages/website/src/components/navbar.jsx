// Code Requirement 35.1 - Web-Other features - Navigation bar at the top, linking to other pages on the site, main navigation 
// This code creates the navbar component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This section brings in the necessary imports
// import React and useState to track the active navbar item
import React, { useState } from "react";

// This section creates an array, that hold the menu item obejcts
// The objects in the list contain the text, and path of each item
// This represents each link in the navbar
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Instructor Dashboard", href: "/instructor_dashboard" },
  { text: "Business Dashboard", href: "/business_dashboard" },
  { text: "Login", href: "/login" },
  { text: "Create Account", href: "/create_account"}
];

// creates the navbar component which is exported from this file
const Navbar = () => {
  // creates the states needed to track which nav item is active
  const [isActive, setIsActive] = useState(false);
  // creates the toggle to add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  // sets the active state to false
  const removeActive = () => {
    setIsActive(false);
  };

  // creates the exportable html for the navbar component
  return (
    <header>
      {/* creates a nav tag in html */}
      <nav>
        {/* creates a list elemnent for nav elements that will keep track of the active tab with a click event */}
        <ul className={`${isActive ? "active" : ''} nav_list`}>
        {/* create a list item for each element in the menu list */}
        {MENU_LIST.map((menu) => (
            // click event checks for the active navitem
            <li onClick={removeActive} key={menu.text}>
              {/* creates a link for each menu item with the link and text */}
              <a className="nav_link" href={menu.href}>{menu.text}</a>
            </li>
        ))}
        </ul>
      </nav>
    </header>
  );
};

// export the navbar component so it can be used in other files
export default Navbar;