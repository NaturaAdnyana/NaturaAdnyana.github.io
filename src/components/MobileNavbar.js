import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HomeIcon from "../assets/icons/HomeIcon";
import CertifIcon from "../assets/icons/CertifIcon";
import ContactIcon from "../assets/icons/ContactIcon";
import BlogsIcon from "../assets/icons/BlogsIcon";
import WorkIcon from "../assets/icons/WorkIcon";

function MobileNavbar(props) {
  return (
    <motion.nav
      className="z-40 md:hidden fixed -bottom-20 w-screen bg-b-bar round-b-bar bg-black pt-2 pb-3 px-8"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.1}
    >
      <div className="w-10 h-1 bg-zinc-700 mx-auto mb-3 rounded-full"></div>
      <div className="flex justify-around items-center space-x-3">
        <Link
          to="/certifications"
          className="p-4 rounded-3xl bg-b-bar transition-colors hover:bg-zinc-900"
        >
          <CertifIcon className="w-5 h-5 fill-white" />
        </Link>
        <Link
          to="/contact"
          className="p-4 rounded-3xl bg-b-bar transition-colors hover:bg-zinc-900"
        >
          <ContactIcon className="w-5 h-5 fill-white" />
        </Link>
        <Link
          to="/"
          className="p-5 rounded-3xl bg-b-bar transition-colors hover:bg-zinc-900"
        >
          <HomeIcon className="w-5 h-5 fill-white" />
        </Link>
        <Link
          to="/blogs"
          className="p-4 rounded-3xl bg-b-bar transition-colors hover:bg-zinc-900"
        >
          <BlogsIcon className="w-5 h-5 fill-white" />
        </Link>
        <Link
          to="/works"
          className="p-4 rounded-3xl bg-b-bar transition-colors hover:bg-zinc-900"
        >
          <WorkIcon className="w-5 h-5 fill-white" />
        </Link>
      </div>
      <div className="flex justify-around items-center pt-4 pb-14 text-white text-2xs text-center space-x-10">
        <div className="basis-1/5">Certifs</div>
        <div className="basis-1/5">Contact</div>
        <div className="basis-1/5">Home</div>
        <div className="basis-1/5">Blogs</div>
        <div className="basis-1/5">Works</div>
      </div>
    </motion.nav>
  );
}

export default MobileNavbar;
