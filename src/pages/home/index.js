import React from "react";
import { motion } from "framer-motion";
import IntroSection from "./IntroSection";
import InterestSection from "./InterestSection";
import SkillsToolsSection from "./SkillsToolsSection";

// User laptop/desktop for better experience

function Home() {
  return (
    <>
      <section className="text-white container mx-auto w-11/12 px-6">
        <article className="h-screen pr-20">
          <div className="flex justify-between h-screen space-x-9">
            <div className="relative w-full flex justify-center items-center bg-circle-shadow">
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                className="absolute w-72 h-auto ml-6 rounded-sm cursor-grab rotate-2 shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/childme.webp"
                alt="Child me"
              />
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                className="absolute w-96 h-auto mb-20 mr-11 rounded-sm cursor-grab -rotate-6 shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2018me.webp"
                alt="Child me"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex justify-center flex-col h-screen space-y-6">
              <h1>
                <span className="text-10xl">HI, </span>
                <span className="text-8xl">IT'S ME</span>
                <br />
                <span className="text-10xl font-bold text-gradient">
                  {" "}
                  NATURA
                </span>
              </h1>
              <span>
                Front-end Developer | Graphic Designer | Aspiring Software
                Engineer
              </span>
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
