import React from "react";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import InterestSection from "./InterestSection";
import SkillsToolsSection from "./SkillsToolsSection";
import HomeCTASection from "./HomeCTASection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeaderSection from "./HeaderSection";

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
        <title>Natura Adnyana - Personal Website</title>
        <meta
          name="description"
          content="It's me Natura Adnyana - Aspiring Software Engineer & Front-end Web Developer & Art Lover based in Bali. Check my story, works, certifications, my contacts here."
        ></meta>
      </Helmet>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <HeaderSection />
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
