import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReadModeIntro from "./ReadModeIntro.js";

const containerVariants = {
  hidden: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  visible: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    transition: {
      ease: "easeInOut",
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Blogs = () => {
  const [isIntro, setIsIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 3000);
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blogs - Natura Adnyana</title>
        <meta
          name="description"
          content="It's me Natura - I'm also made blogs lol"
        ></meta>
      </Helmet>
      <motion.div
        className="overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>{isIntro && <ReadModeIntro />}</AnimatePresence>
        <motion.div variants={contentVariants}>
          <section className="text-black container mx-auto md:w-11/12 px-6 mb-20 md:mb-0">
            <article className="flex flex-col justify-center items-center md:flex-row h-screen">
              <h1>Under Construction</h1>
            </article>
          </section>
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Blogs;
