import React from "react";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import InterestSection from "./InterestSection";
import SkillsToolsSection from "./SkillsToolsSection";
import HomeCTASection from "./HomeCTASection";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Natura Adnyana - Personal Website</title>
        <meta
          name="description"
          content="It's me Natura Adnyana - Aspiring Software Engineer & Front-end Web Developer & Art Lover based in Bali. Check my story, works, certifications, my contacts here."
        />
        <meta property="og:title" content="Natura Adnyana - Personal Website" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2022me.webp"
        />
        <meta
          property="og:description"
          content="Front-end Web Developer | Graphic Designer | Aspiring Software Engineer"
        />
        <meta property="og:url" content="https://www.naturaadnyana.com" />
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
    </>
  );
}

export default Home;
