// Code Requirement 35.1 - Web-Other features - Navigation bar at the top, linking to other pages on the site, main navigation 
// This code creates the navbar component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This section brings in the necessary imports
// import React and useState to track the active navbar item
import React, { useState } from "react";
// import the navitem component 
import NavItem from "./navitem";

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
  // creates default state for each  navitem using the react state
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  // creates the exportable html for the navbar component
  return (
    <header className="flex w-full">
      {/* creates a nav tag in html */}
      <nav className={``}>
        {/* creates a container for nav elements that will keep track of the active tab with a click event */}
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}
        >
        </div>
        {/* creates a container for nav elements that will list the menu items */}
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {/* list menu items  */}
          {MENU_LIST.map((menu, idx) => (
            // click event checks for the active navitem
            <div onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
            >
              {/* Creates an instance of the navitem component for each menu item */}
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

// export the navbar component so it can be used in other files
export default Navbar;