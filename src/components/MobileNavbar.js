import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/icons/HomeIcon";
import CertifIcon from "../assets/icons/CertifIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import BlogsIcon from "../assets/icons/BlogsIcon";
import WorkIcon from "../assets/icons/WorkIcon";

function MobileNavbar(props) {
  return (
    <nav className="z-40 md:hidden fixed bottom-0 flex justify-around items-center w-screen py-5 px-8 bg-b-bar round-b-bar bg-black space-x-3">
      <Link
        to="/certifications"
        className="p-4 rounded-3xl bg-b-bar hover:bg-zinc-900"
      >
        <CertifIcon className="w-5 h-5 fill-white" />
      </Link>
      <Link
        to="/contact"
        className="p-4 rounded-3xl bg-b-bar hover:bg-zinc-900"
      >
        <ContactIcon className="w-5 h-5 fill-white" />
      </Link>
      <Link to="/" className="p-5 rounded-3xl bg-b-bar hover:bg-zinc-900">
        <HomeIcon className="w-5 h-5 fill-white" />
      </Link>
      <Link to="/blogs" className="p-4 rounded-3xl bg-b-bar hover:bg-zinc-900">
        <BlogsIcon className="w-5 h-5 fill-white" />
      </Link>
      <Link to="/works" className="p-4 rounded-3xl bg-b-bar hover:bg-zinc-900">
        <WorkIcon className="w-5 h-5 fill-white" />
      </Link>
    </nav>
  );
}

export default MobileNavbar;
