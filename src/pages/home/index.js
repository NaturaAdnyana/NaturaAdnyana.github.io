import React from "react";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import InterestSection from "./InterestSection";
import SkillsToolsSection from "./SkillsToolsSection";
import HomeCTASection from "./HomeCTASection";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

// User laptop/desktop for better experience

function Home() {
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
          <section className="text-white container mx-auto md:w-11/12 px-6">
            <article className="h-screen md:pr-20">
              <div className="flex justify-between h-screen md:space-x-9 flex-col md:flex-row">
                <div className="relative mt-48 md:mt-0 w-full flex justify-center items-center bg-circle-shadow">
                  <motion.img
                    drag
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing", zIndex: 20 }}
                    className="absolute w-48 lg:w-72 h-auto md:ml-6 rounded-sm cursor-grab rotate-2 shadow-md"
                    src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/childme.webp"
                    alt="Child me"
                  />
                  <motion.img
                    drag
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    dragElastic={0.5}
                    whileTap={{ cursor: "grabbing", zIndex: 20 }}
                    className="absolute w-64 lg:w-96 h-auto md:mb-20 md:mr-11 rounded-sm cursor-grab -rotate-6 shadow-md"
                    src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2018me.webp"
                    alt="Child me"
                    width="100%"
                    height="100%"
                  />
                  {/* <motion.img
                  drag
                  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  dragElastic={0.5}
                  whileTap={{ cursor: "grabbing", zIndex: 20 }}
                  className="absolute w-44 lg:w-80 h-auto md:mb-14 md:mr-14 rounded-sm cursor-grab rotate-3 shadow-md"
                  src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2022me.webp"
                  alt="Child me"
                  width="100%"
                  height="100%"
                /> */}
                </div>
                <div className="flex justify-center flex-col h-screen space-y-6 mt-16 md:mt-0 z-10">
                  <h1 className="text-center text-shadow">
                    <span className="text-6xl lg:text-10xl">HI, </span>
                    <span className="text-5xl lg:text-8xl">IT'S ME</span>
                    <br />
                    <span className="text-7xl lg:text-10xl font-bold text-gradient">
                      {" "}
                      NATURA
                    </span>
                  </h1>
                  <div className="text-center flex flex-col lg:flex-row space-x-2">
                    <span>Front-end Developer</span>
                    <span> | Graphic Designer | </span>
                    <span>Aspiring Software Engineer</span>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <IntroSection />
          <InterestSection />
          <SkillsToolsSection />
          <HomeCTASection />
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
}

export default Home;
