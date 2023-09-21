import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navitem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Login/Create Account", href: "/login" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="flex w-full">
      <nav className={`nav`}>
        <Link href={"/"}>
            {/* <h1 className="logo">LOGO!</h1> */}
        </Link>
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