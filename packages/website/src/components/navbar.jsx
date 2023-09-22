import React, { useState } from "react";
import NavItem from "./navitem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Instructor Dashboard", href: "/instructor_dashboard" },
  { text: "Business Dashboard", href: "/business_dashboard" },
  { text: "Login", href: "/login" },
  { text: "Create Account", href: "/create_account"}
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="flex w-full">
      <nav className={`nav`}>
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}
        >
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;