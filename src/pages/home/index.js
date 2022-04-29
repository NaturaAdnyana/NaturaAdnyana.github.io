import React from "react";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import InterestSection from "./InterestSection";
import SkillsToolsSection from "./SkillsToolsSection";

// User laptop/desktop for better experience

function Home() {
  return (
    <>
      <section className="text-white container mx-auto md:w-11/12 px-6">
        <article className="h-screen md:pr-20">
          <div className="flex justify-between h-screen md:space-x-9 flex-col md:flex-row">
            <div className="relative mt-48 md:mt-0 w-full flex justify-center items-center bg-circle-shadow">
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                className="absolute w-48 md:w-72 h-auto md:ml-6 rounded-sm cursor-grab rotate-2 shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/childme.webp"
                alt="Child me"
              />
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                className="absolute w-64 md:w-96 h-auto md:mb-20 md:mr-11 rounded-sm cursor-grab -rotate-6 shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2018me.webp"
                alt="Child me"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex justify-center flex-col h-screen space-y-6 mt-16 md:mt-0">
              <h1 className="text-center">
                <span className="text-6xl md:text-10xl">HI, </span>
                <span className="text-5xl md:text-8xl">IT'S ME</span>
                <br />
                <span className="text-7xl md:text-10xl font-bold text-gradient">
                  {" "}
                  NATURA
                </span>
              </h1>
              <div className="text-center flex flex-col md:flex-row space-x-2">
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
    </>
  );
}

export default Home;
