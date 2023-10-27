// Code Requirement 35.1 - Web-Other features - Navigation bar at the top, linking to other pages on the site, main navigation
// This code creates the navbar component for the website
// Programmers name: Libby Miller
// Date: 09/24/2023
// Updated: 10/17/2023, Requirement 36.7 - CSS styling version 1 - added tailwind css classes for styling
// This pages sets up the UI, there are no pre or post conditions, and no inputs to this page

// This section brings in the necessary imports
// import React and useState to track the active navbar item
import React, { useState } from "react";
import Image from "next/image";
// This section creates an array, that hold the menu item obejcts
// The objects in the list contain the text, and path of each item
// This represents each link in the navbar
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Instructor Dashboard", href: "/instructor_dashboard" },
  { text: "Business Dashboard", href: "/business_dashboard" },
  { text: "About Us", href: "/about" },
  { text: "Login", href: "/login" },
  //{ text: "Create Account", href: "/create_account"}
];

// creates the navbar component which is exported from this file
const Navbar = () => {
  // creates the states needed to track which nav item is active
  const [active, setIsActive] = useState("Home");
  // creates the toggle to add the mobile navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // creates the exportable html for the navbar component
  return (
    <header>
      {/* creates a nav container element  */}
      <nav className="bg-white flex">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* this will be replaced with the logo image in sprint 4 */}

            <a href="/">
              <Image
                src="/assets/medium_logo.png"
                alt="Classroom"
                width={200}
                height={200}
              />
            </a>

            <div className="sm:hidden">
              {/* this button will only appear on smaller screens for mobile nav  */}
              <button
                // this button will open and close the mobile nav menu
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                {/* this holds the hamburger icon image  */}
                <svg
                  className="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* sets the styling for the hamburger menu icon  */}
                  <path
                    fillRule="evenodd"
                    d="M18 4a1 1 0 00-1-1H7a1 1 0 000 2h10a1 1 0 001-1zM5 12a1 1 0 011-1h11a1 1 0 110 2H6a1 1 0 01-1-1zm12 7a1 1 0 100-2H6a1 1 0 100 2h11z"
                  />
                </svg>
              </button>
            </div>
            {/* creates a list for the menu items  */}
            <ul className="hidden sm:flex space-x-6">
              {MENU_LIST.map((menu) => (
                // create an item element for each list item
                <li
                  key={menu.text}
                  className={`font-medium text-lg hover:font-bold ${
                    // set the active menu item to different look
                    active === menu.text
                      ? "text-gray-500 font-semibold"
                      : "text-black"
                  }`}
                >
                  {/* create a link for each list item  */}
                  <a href={menu.href}>{menu.text}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* if the mobile menu is open  */}
          {mobileMenuOpen && (
            <div className="sm:hidden block py-2">
              {/* create a list of menu items  */}
              <ul className="space-y-2">
                {MENU_LIST.map((menu) => (
                  <li
                    key={menu.text}
                    className={`font-medium text-lg ${
                      active === menu.text
                        ? "text-gray-500 font-semibold"
                        : "text-black"
                    }`}
                  >
                    {/* create a link for each item  */}
                    <a href={menu.href}>{menu.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
// export component to use elsewhere in site
export default Navbar;
