import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 1,
    },
  },
  exit: {},
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
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  visibleDark: {
    fill: "rgba(0, 0, 0, 1)",
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  exit: {
    fill: "rgba(255, 255, 255, 0)",
  },
};

function Logo({ isReadMode, className }) {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 263.85 221.49"
        variants={svgVariants}
        initial="hidden"
        animate={isReadMode ? "visibleDark" : "visible"}
        className={className}
      >
        <motion.path
          className="cls-1 stroke-2 stroke-white"
          d="m106.99 15.87 3.62 2.77 13.53-3.45L113.37 0 37.75 14.63 63 20.52l43.99-4.65zM70.15 46.19l8.33-10.82-.26-6-11.88-5.49-4.56 4.53.64 6.75-16.05 17.48 23.78-6.45zM48.33 117.19l5.89-41.06 1.12-7.79-15.43-16.81 1.08 12.34-3.59 45.32 1.66 9.75 9.27-1.75zM80.94 73.78l-9.08-3-2.34 3-13 1.33 1.53 3.07a19.79 19.79 0 0 0 4.27 4.08c2.21 1.38 17-.38 17-.38ZM53.67 96.45l1.53 3.07a19.79 19.79 0 0 0 4.27 4.08c2.21 1.38 17-.37 17-.37l1.63-8.11L69 92.1l-2.34 3Z"
          variants={pathVariants}
        />
        <motion.path
          className="cls-1 stroke-2 stroke-white"
          d="m98.47 139.52 14.9-81.01-15.48-15.66-4.18 1.31-42.46 10.93 13.96 3.29 27.61-1.27-11.88 79.62 14.03 6.14 3.5-3.35z"
          variants={pathVariants}
        />
        <motion.path
          className="cls-1 stroke-2 stroke-white"
          d="m80.94 178.41-10.78-8.2 10.76-11.74-4.03-13.82-16.8 1.06-.58 2.82 9.16 4.89-7.98 9.58-12.61-9.59v-.01l26.1-22.65 3.88-.63 1.7-8.01-5.26-5.38-62.07 11.62 14.56 9.55 24.03-5.73L0 179.46l7.8.51 21-9.84 11.13-9.67 13.43 11.09-18.81 14.24-14.13 4.02 24.13 1.72 16.29-11.14 1.39-1.52 47.6 39.31 21.55 3.31 39.98-10.62-58.55-15.19-31.87-17.27zM165.66 37.83l-12.67 1.83-33.35 10.18 16.93 8.03 12.58-1.57 22.21-9.14 12.09.86-8.74 44.08 13.45 2.67 17.05-46.53-15.58-13.87-2.11.3 5.61-14.15-14.17 5.91-11.8-14.25-25.97-1.89 15.09 17.7 9.38 9.84z"
          variants={pathVariants}
        />
        <motion.path
          className="cls-1 stroke-2 stroke-white"
          d="m140 100.65 16.07-6.91 14.25.29 2.13-6.76-8-6.55-21.22 5.59L143 77l14.6-6.27 13 .26 1.93-6.15-7.31-6-24.62 6.54-14.12-7.22 1.94 13.43-15 99.86 9.09 16.4s5.3-.88 7.07-1.78 19.26-32 19.26-32l.63-11.86-5.71 7.05-12.9 5 7.47-46.65ZM164.92 115.36c1.94-.43 21.12 4.48 21.12 4.48l14.81-3.26 4.34-8.94-12.72-9.48c-2 .29-9 .43-9 .43l-4.6 8.69s-15.87 8.5-13.95 8.08Z"
          variants={pathVariants}
        />
        <motion.path
          className="cls-1 stroke-2 stroke-white"
          d="m219.81 168.09-32.42-22.08-31.08-33.96-9.46-4.41-4.16 1.62 11.81 15.15 24.49 55.98 33.43 18.79 51.43-24.31-44.04-6.78z"
          variants={pathVariants}
        />
      </motion.svg>
    </>
  );
}

export default Logo;
