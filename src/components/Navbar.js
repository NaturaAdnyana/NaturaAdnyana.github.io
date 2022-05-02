import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";
import Logo from "../assets/icons/Logo";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, //giliran turun temurun per child
    },
  },
};

const navMenuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
    <motion.nav
      className="md:flex hidden py-6 fixed top-0 right-0 h-screen text-sm items-center px-10 flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Link className="hover:opacity-50 transition-opacity" to="/">
        <Logo className="w-10 h-10" />
        <span className="sr-only">Natura Logo</span>
      </Link>
      <ul
        className="absolute top-64 pl-8 flex rotate-90 space-x-7 text-white"
        variants={navMenuVariants}
      >
        <motion.li variants={navMenuVariants}>
          <Link className="hover:opacity-50 transition-opacity" to="/">
            Home
          </Link>
        </motion.li>
        <motion.li variants={navMenuVariants}>
          <Link className="hover:opacity-50 transition-opacity" to="/works">
            Works
          </Link>
        </motion.li>
        <motion.li variants={navMenuVariants}>
          <Link className="hover:opacity-50 transition-opacity" to="/blogs">
            Blogs
          </Link>
        </motion.li>
        <motion.li variants={navMenuVariants}>
          <Link
            className="hover:opacity-50 transition-opacity"
            to="/certifications"
          >
            Certifications
          </Link>
        </motion.li>
        <motion.li variants={navMenuVariants}>
          <Link className="hover:opacity-50 transition-opacity" to="/contact">
            Contact
          </Link>
        </motion.li>
      </ul>
      {!isBottom && (
        <motion.a
          href="#intro"
          className="absolute bottom-10 opacity-70 animate-bounce"
          variants={navMenuVariants}
        >
          <div className="rotate-90 text-white">
            <span className="text-xs">SCROLL </span>
            <ArrowRight />
          </div>
        </motion.a>
      )}
    </motion.nav>
  );
}

export default Navbar;
