import React from "react";
import { motion } from "framer-motion";

function OutlineBtn({ hint, children }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="group p-4 border-2 transition-all hover:bg-white hover:text-black rounded overflow-hidden text-center cursor-pointer bg-black-transparent"
      >
        <span>{hint}</span>
        {children}
      </motion.div>
    </>
  );
}

export default OutlineBtn;