import React from "react";
import { motion } from "framer-motion";
import currentMe from "./../../assets/images/2022me.webp";

function HeaderSection(props) {
  return (
    <>
      <section className="text-white container mx-auto md:w-11/12 px-6">
        <article className="h-screen md:pr-20">
          <div className="flex justify-between h-screen flex-col md:flex-row">
            <div className="basis-1/2 relative pt-10 md:pt-0 flex justify-center items-center bg-circle-shadow">
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                whileTap={{
                  cursor: "grabbing",
                  zIndex: 20,
                  transition: {
                    delay: 0,
                  },
                }}
                initial={{ opacity: 0, rotate: -13, scale: 1.1 }}
                animate={{
                  rotate: 2,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute left w-52 lg:w-72 h-auto md:ml-6 rounded-sm cursor-grab shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/childme.webp"
                alt="Child me"
              />
              <motion.img
                initial={{ opacity: 0, rotate: -10, scale: 1.1 }}
                animate={{
                  rotate: -6,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 2.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                whileTap={{
                  cursor: "grabbing",
                  zIndex: 20,
                  transition: {
                    delay: 0,
                  },
                }}
                className="absolute w-64 lg:w-96 h-auto md:mb-20 md:mr-11 rounded-sm cursor-grab shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2018me.webp"
                alt="Child me"
                width="100%"
                height="100%"
              />
              <motion.img
                initial={{ opacity: 0, rotate: 2, scale: 1.1 }}
                animate={{
                  rotate: 6,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                whileTap={{
                  cursor: "grabbing",
                  zIndex: 20,
                  transition: {
                    delay: 0,
                  },
                }}
                className="absolute w-48 lg:w-72 h-auto md:mb-20 md:mr-11 rounded-sm cursor-grab shadow-md"
                src={currentMe}
                alt="Child me"
                width="100%"
                height="100%"
              />
            </div>
            <div className="basis-1/2 flex md:justify-center items-center flex-col h-screen space-y-6 z-10">
              <h1 className="text-left text-shadow">
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
    </>
  );
}

export default HeaderSection;
