import React from "react";
import Logo from "../assets/icons/Logo";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function LoadingPage(props) {
  return (
    <motion.div
      className="absolute bg-black w-screen h-screen flex flex-col space-y-2 justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Logo className="w-32 h-32" />
      <div className="text-white animate-pulse">Loading...</div>
    </motion.div>
  );
}

export default LoadingPage;
