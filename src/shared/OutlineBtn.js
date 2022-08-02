import React from "react";
import { motion } from "framer-motion";

function OutlineBtn({ hint, children, className, readMode, ...props }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className={`group p-4 border-2 transition-all rounded overflow-hidden cursor-pointer ${
          readMode
            ? "bg-zinc-900 text-white"
            : "bg-black-transparent hover:bg-white hover:text-black"
        } flex justify-center items-center ${className}`}
      >
        <span>{hint}</span>
        {children}
      </motion.div>
    </>
  );
}

export default OutlineBtn;
