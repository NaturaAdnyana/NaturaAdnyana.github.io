import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReadModeIntro from "./ReadModeIntro.js";
import posIndo from "./../../assets/images/2018me.webp";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  visible: {
    backgroundColor: "rgba(230, 230, 230, 1)",
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
  const [isHeadingAtTop, setIsHeadingAtTop] = useState(false);
  const headingElm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 3000);
  }, []);

  window.onscroll = function (e) {
    if (headingElm.current.getBoundingClientRect().y < 0) {
      setIsHeadingAtTop(true);
    } else {
      setIsHeadingAtTop(false);
    }
  };

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
            <article className="flex flex-col items-center md:flex-row h-screen-0.4">
              <div className="w-full h-full flex justify-center items-center flex-col space-y-8 text-center relative">
                <div ref={headingElm}>
                  <div
                    className={
                      isHeadingAtTop
                        ? "w-screen fixed top-0 left-0 p-6 bg-white-transparent backdrop-blur-sm shadow-md z-10"
                        : ""
                    }
                  >
                    <h1
                      className={`transition-transform duration-75 text-3xl ${
                        !isHeadingAtTop && "scale-300"
                      }`}
                    >
                      BLOGS
                    </h1>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-center text-zinc-700">
                    I hate handwriting, so I decided to type.
                  </h2>
                </div>
              </div>
            </article>
            <article className="lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Link to="#" className="group">
                <motion.div
                  // key={}
                  className="overflow-hidden h-60 rounded-md relative transition-transform group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={posIndo}
                    alt={"babi"}
                    className="transition-transform"
                  />
                  <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
                    <h3 className="font-xl font-bold">Lorem Ipsum</h3>
                    <h4 className="text-xs">17/03/2022 - 0 Comments</h4>
                  </div>
                </motion.div>
              </Link>
              <Link to="#" className="group">
                <motion.div
                  // key={}
                  className="overflow-hidden h-60 rounded-md relative transition-transform group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={posIndo}
                    alt={"babi"}
                    className="transition-transform"
                  />
                  <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
                    <h3 className="font-xl font-bold">Lorem Ipsum</h3>
                    <h4 className="text-xs">17/03/2022 - 0 Comments</h4>
                  </div>
                </motion.div>
              </Link>
              <Link to="#" className="group">
                <motion.div
                  // key={}
                  className="overflow-hidden h-60 rounded-md relative transition-transform group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={posIndo}
                    alt={"babi"}
                    className="transition-transform"
                  />
                  <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
                    <h3 className="font-xl font-bold">Lorem Ipsum</h3>
                    <h4 className="text-xs">17/03/2022 - 0 Comments</h4>
                  </div>
                </motion.div>
              </Link>
              <Link to="#" className="group">
                <motion.div
                  // key={}
                  className="overflow-hidden h-60 rounded-md relative transition-transform group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={posIndo}
                    alt={"babi"}
                    className="transition-transform"
                  />
                  <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
                    <h3 className="font-xl font-bold">Lorem Ipsum</h3>
                    <h4 className="text-xs">17/03/2022 - 0 Comments</h4>
                  </div>
                </motion.div>
              </Link>
              <Link to="#" className="group">
                <motion.div
                  // key={}
                  className="overflow-hidden h-60 rounded-md relative transition-transform group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={posIndo}
                    alt={"babi"}
                    className="transition-transform"
                  />
                  <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
                    <h3 className="font-xl font-bold">Lorem Ipsum</h3>
                    <h4 className="text-xs">17/03/2022 - 0 Comments</h4>
                  </div>
                </motion.div>
              </Link>
              <Link to="#" className="group">
                <motion.div
                  // key={}
                  className="overflow-hidden h-60 rounded-md relative transition-transform group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src={posIndo}
                    alt={"babi"}
                    className="transition-transform"
                  />
                  <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
                    <h3 className="font-xl font-bold">Lorem Ipsum</h3>
                    <h4 className="text-xs">17/03/2022 - 0 Comments</h4>
                  </div>
                </motion.div>
              </Link>
            </article>
          </section>
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Blogs;
