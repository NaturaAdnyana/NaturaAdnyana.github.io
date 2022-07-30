import React from "react";
import { motion } from "framer-motion";
import Bulb from "../../assets/icons/Bulb.jsx";
import BulbSolid from "../../assets/icons/BulbSolid.jsx";

const introVariants = {
  hidden: {
    skewX: "-20deg",
    x: "150%",
  },
  visible: {
    skewX: 0,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    skewX: "-20deg",
    x: "-150%",
    transition: {
      duration: 0.5,
    },
  },
};

const switchVariants = {
  initial: {
    height: "100%",
  },
  animate: {
    height: "0%",
    transition: {
      delay: 1.5,
      duration: 0.4,
    },
  },
};

const ReadModeIntro = () => {
  return (
    <>
      <motion.div
        variants={introVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 w-full h-full z-50 bg-white  flex flex-col justify-center items-center gap-2"
      >
        <div className="w-14 h-14 relative">
          <motion.div
            variants={switchVariants}
            initial="initial"
            animate="animate"
            className="overflow-hidden absolute"
          >
            <BulbSolid className="w-14 h-auto bg-white" />
          </motion.div>
          <Bulb className="w-14 h-auto" />
        </div>
        <div className="text-lg flex">
          <span className="font-oswald">READ MODE :</span>
          <div className="ml-1 relative font-oswald">
            <motion.div
              className="absolute bg-white overflow-hidden font-oswald"
              variants={switchVariants}
              initial="initial"
              animate="animate"
            >
              OFF
            </motion.div>
            <span className="font-oswald"> ON</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ReadModeIntro;
