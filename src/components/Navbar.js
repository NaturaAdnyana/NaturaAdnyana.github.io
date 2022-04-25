import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";
import Logo from "../assets/icons/Logo";

function Navbar() {
  const [isBottom, setIsBottom] = useState(false);
  window.onscroll = function (e) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };
  return (
    <nav className=" py-6 fixed top-0 right-0 h-screen flex items-center px-10 flex-col">
      <Link to="/">
        <Logo className="w-10 h-10" />
        <span class="sr-only">Natura Logo</span>
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
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {!isBottom && (
        <a
          href="#intro"
          className="absolute bottom-10 opacity-70 animate-bounce"
        >
          <div className="rotate-90 text-white">
            <span className="text-xs">SCROLL </span>
            <ArrowRight />
          </div>
        </a>
      )}
    </nav>
  );
}

export default Navbar;
