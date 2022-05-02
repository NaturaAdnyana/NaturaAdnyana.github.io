import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  visible: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    transition: {
      backgroundColor: "rgba(0, 0, 0, 1)",
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
    transition: {
      opacity: 0,
      ease: "easeInOut",
    },
  },
};

function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={contentVariants}>
        <section className="text-white container mx-auto md:w-11/12 px-6">
          <article className="h-screen md:pr-20 border-2">HAI</article>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
