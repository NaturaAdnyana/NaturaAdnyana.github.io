import React from "react";
import { motion } from "framer-motion";
import MessageIcon from "../../assets/icons/MessageIcon";

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
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
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
          <article className="h-screen flex overflow-hidden">
            <div className="grow flex flex-col justify-center items-center text-6xl">
              <h2>
                <span>FOLLOW ME</span>
              </h2>
              <div className="flex justify-center items-center mt-4 space-x-5">
                <div className="p-4 bg-white rounded-full flex justify-center items-center">
                  <MessageIcon className="fill-black w-8 h-8" />
                </div>
                <div className="p-7 bg-white rounded-full"></div>
                <div className="p-7 bg-white rounded-full"></div>
                <div className="p-7 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="grow-0 p-2 rotate-12 -skew-y-12 bg-white flex justify-center items-center text-6xl"></div>
            <div className="grow flex justify-center items-center text-6xl">
              <h2>
                <span>CONTACT ME</span>
              </h2>
            </div>
          </article>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
