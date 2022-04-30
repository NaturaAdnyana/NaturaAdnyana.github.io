import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import HomeIcon from "../assets/icons/HomeIcon";
import CertifIcon from "../assets/icons/CertifIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import BlogsIcon from "../assets/icons/BlogsIcon";
import WorkIcon from "../assets/icons/WorkIcon";

function MobileNavbar(props) {
  return (
    <motion.nav
      className="z-40 md:hidden fixed -bottom-[6.5rem] w-screen bg-b-bar round-b-bar bg-black pt-2 pb-[5.3rem] px-8"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.1}
    >
      <div className="w-10 h-1 bg-zinc-700 mx-auto mb-3 rounded-full"></div>
      <div className="flex justify-around items-center space-x-3">
        <div className="flex flex-col justify-center items-center space-y-6">
          <NavLink
            to="/certifications"
            className={({ isActive }) => {
              return isActive
                ? "bg-zinc-900 p-5 rounded-3xl bg-b-bar transition-colors"
                : "p-4 rounded-3xl bg-b-bar transition-colors";
            }}
          >
            <CertifIcon className="w-5 h-5 fill-white" />
            <span class="sr-only">Certifications Button</span>
          </NavLink>
          <div className="text-white text-2xs basis-1/5">Certifs</div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive
                ? "bg-zinc-900 p-5 rounded-3xl bg-b-bar transition-colors"
                : "p-4 rounded-3xl bg-b-bar transition-colors";
            }}
          >
            <ContactIcon className="w-5 h-5 fill-white" />
            <span class="sr-only">Contact Button</span>
          </NavLink>
          <div className="text-white text-2xs basis-1/5">Contact</div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <NavLink
            exact
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "bg-zinc-900 p-5 rounded-3xl bg-b-bar transition-colors"
                : "p-4 rounded-3xl bg-b-bar transition-colors";
            }}
          >
            <HomeIcon className="w-5 h-5 fill-white" />
            <span class="sr-only">Home Button</span>
          </NavLink>
          <div className="text-white text-2xs basis-1/5">Home</div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <NavLink
            to="/blogs"
            className={({ isActive }) => {
              return isActive
                ? "bg-zinc-900 p-5 rounded-3xl bg-b-bar transition-colors"
                : "p-4 rounded-3xl bg-b-bar transition-colors";
            }}
          >
            <BlogsIcon className="w-5 h-5 fill-white" />
            <span class="sr-only">Blogs Button</span>
          </NavLink>
          <div className="text-white text-2xs basis-1/5">Blogs</div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <NavLink
            to="/works"
            className={({ isActive }) => {
              return isActive
                ? "bg-zinc-900 p-5 rounded-3xl bg-b-bar transition-colors"
                : "p-4 rounded-3xl bg-b-bar transition-colors";
            }}
          >
            <WorkIcon className="w-5 h-5 fill-white" />
            <span class="sr-only">Works Button</span>
          </NavLink>
          <div className="text-white text-2xs basis-1/5">Works</div>
        </div>
      </div>
    </motion.nav>
  );
}

export default MobileNavbar;
