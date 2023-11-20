"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import Bars3Icon from "@/icons/Bars3Icon";
import XmarkIcon from "@/icons/XmarkIcon";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { path: "#about", title: "About" },
  { path: "#experience", title: "Experience & Education" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353f]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 font-serif">
        <Link
          className="text-white text-2xl md:text-5xl font-semibold"
          href={"/"}
        >
          VM
        </Link>
        <div className="mobile-menu block md:hidden">
          {navOpen ? (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XmarkIcon />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.path} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
