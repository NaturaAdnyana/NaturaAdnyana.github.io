import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    fill: "rgba(255, 255, 255, 0)",
    pathLength: 0,
  },
  visible: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Logo(props) {
  return (
    <div {...props}>
      <motion.svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 1080 1080"
        style={{
          enableBackground: "new 0 0 1080 1080",
        }}
        xmlSpace="preserve"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        {...props}
      >
        <motion.path
          className="st0"
          d="M154.5 147.1 464 87.2l44.1 62.2-55.3 14.1-14.9-11.3-180 19zM252.9 203.5l2.6 27.6-65.7 71.6 97.3-26.4 34.1-44.3-1-24.6-48.7-22.4zM163.4 298.1l63.1 68.8-4.6 31.9-24.1 168.1-37.9 7.2-6.8-40 14.7-185.4zM237.8 407.2s8.4 11 17.5 16.7c9.1 5.6 69.4-1.5 69.4-1.5l6.7-33.2-37.2-12.4-9.6 12.4-53 5.4 6.2 12.6zM226 494.6s8.4 11 17.5 16.7c9.1 5.6 69.4-1.5 69.4-1.5l6.7-33.2-37.2-12.4-9.6 12.4-53 5.4 6.2 12.6z"
          variants={pathVariants}
        />
        <motion.path
          className="st0"
          d="m209.8 312.7 57.1 13.5 113-5.2-48.6 325.9 57.4 25.1 14.4-13.7L464 326.7l-63.3-64.1-17.1 5.4z"
          variants={pathVariants}
        />
        <motion.path
          className="st0"
          d="m50.9 612.6 59.6 39 98.4-23.4L0 821.8l31.9 2 86-40.2 185.7-161.2 15.9-2.6 7-32.8-21.6-22zM243.6 695.2l37.5 20-60.5 72.6-79.2 59.9-57.8 16.5 98.7 7 66.7-45.6 82.2-89.7-16.5-56.6-68.7 4.3z"
          variants={pathVariants}
        />
        <motion.path
          className="st0"
          d="m196.8 715.1 134.5 102.4 130.5 70.7 239.6 62.2-163.6 43.4-88.3-13.5-308.1-254.5 41.9-29.8zM577.9 129.3l61.8 72.5 41.3 43.3 85.6-13.4 23.9-60.5-58 24.2-48.3-58.3z"
          variants={pathVariants}
        />
        <motion.path
          className="st0"
          d="m489.7 291.2 136.5-41.6 150-21.7 63.8 56.8-69.8 190.4-55.1-10.9 35.8-180.5-49.5-3.5-90.9 37.4-51.5 6.5z"
          variants={pathVariants}
        />
        <motion.path
          className="st0"
          d="m517.7 325.3 66.3 33.9 2.2 86.2-20.2 82.4-30.6 191 52.8-20.6 23.4-28.9-2.6 48.6s-71.6 127.4-78.9 131c-7.2 3.7-28.9 7.3-28.9 7.3L464 789l61.6-408.7-7.9-55z"
          variants={pathVariants}
        />
        <motion.path
          className="st0"
          d="m559 359.2 116.9-30.9 29.9 24.4-7.9 25.2-53-1.1-67 28.8zM544.4 451.5 673 417.6l32.8 26.8-8.7 27.7-58.3-1.2-73.6 31.7zM584.1 534.4l17-6.6 38.7 18 127.2 139 132.7 90.5L1080 803l-210.5 99.5-136.8-76.9-100.3-229.2z"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
}

export default Logo;
