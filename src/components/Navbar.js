import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";
import Logo from "../assets/icons/Logo";

function Navbar() {
  return (
    <nav className=" py-6 fixed top-0 right-0 h-screen flex items-center px-10 flex-col">
      <Link to="/">
        <Logo className="w-10 h-10" />
      </Link>
      <ul className="absolute top-64 pl-8 flex rotate-90 space-x-7 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/certifications">Certification</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <a href="#intro" className="absolute bottom-10 opacity-70 animate-bounce">
        <div className="rotate-90 text-white">
          <span className="text-xs">SCROLL </span>
          <ArrowRight />
        </div>
      </a>
    </nav>
  );
}

export default Navbar;
