import React from "react";
import { motion } from "framer-motion";

function OutlineBtn({ hint, children, className, ...props }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className={`group p-4 border-2 transition-all hover:bg-white hover:text-black rounded overflow-hidden cursor-pointer bg-black-transparent flex justify-center items-center ${className}`}
      >
        <span>{hint}</span>
        {children}
      </motion.div>
    </>
  );
}

export default OutlineBtn;
