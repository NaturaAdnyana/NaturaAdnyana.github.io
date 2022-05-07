import React, { Suspense } from "react";
import { motion } from "framer-motion";

import ImgLazyLoading from "../components/ImgLazyLoading";
import FavRibbon from "./FavRibbon";

const SkillBox = ({ name, isFav, children }) => {
  return (
    <motion.div
      className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
      viewport={{ once: true }}
    >
      {isFav && <FavRibbon />}
      <Suspense fallback={<ImgLazyLoading />}>{children}</Suspense>
      <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {name}
      </div>
    </motion.div>
  );
};

export default SkillBox;
