import React from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Blogs = () => {
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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <section className="text-white container mx-auto md:w-11/12 px-6 mb-20 md:mb-0">
            <article className="flex flex-col md:flex-row border border-white h-screen"></article>
          </section>
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Blogs;
