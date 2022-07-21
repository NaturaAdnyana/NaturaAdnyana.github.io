import React from "react";
import { motion } from "framer-motion";

const notificationVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    y: -100,
    transition: {
      duration: 1.5,
    },
  },
};

const InWebNotification = ({ message, className }) => {
  return (
    <motion.div
      variants={notificationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`absolute top-2 inset-x-0 mx-auto max-w-md px-6 ${className}`}
    >
      <div className="p-3 rounded-xl text-gray-900 shadow-md bg-white text-center">
        {message}
      </div>
    </motion.div>
  );
};

export default InWebNotification;
