import React from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import work1 from "./../../assets/images/work1.jpg";

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
    backgroundColor: "rgba(0, 0, 0, 1)",
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
    transition: {
      ease: "easeInOut",
    },
  },
};

const Works = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - Natura Personal Web</title>
      </Helmet>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <section className="text-white pt-10 pb-28">
            <article className="bg-shadow">
              <div className="container px-5 md:px-10">
                <h1>
                  <span className="text-3xl md:text-5xl">WORKS.</span>
                </h1>
                <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="group relative rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/">
                      <div className="absolute top-10 left-10 z-10">
                        <div className="space-x-3 opacity-50">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>JS</span>
                        </div>
                        <h3 className="font-oswald text-5xl">Bali Waffle</h3>
                      </div>
                      <img
                        className="transition-transform group-hover:scale-110"
                        src={work1}
                        alt=""
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </article>
          </section>
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Works;
