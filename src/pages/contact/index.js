import React from "react";
import { motion } from "framer-motion";
import MailIcon from "../../assets/icons/MailIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import OutlineBtn from "../../shared/OutlineBtn";
import AirplaneIcon from "../../assets/icons/AirplaneIcon";

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
        <section className="text-white container mx-auto md:w-11/12 px-6 mb-20 md:mb-0">
          <article className="flex flex-col md:flex-row overflow-hidden">
            <div className="grow flex flex-col justify-center items-center py-20 md:h-screen">
              <div className="text-center">
                <h2 className="text-6xl">
                  <span>FOLLOW ME</span>
                </h2>
                <div className="tracking-widest">
                  I am always open to new opportunities.
                </div>
              </div>
              <div className="flex justify-center items-center mt-6 space-x-5">
                <a
                  href="mailto:natura538@gmail.com?subject=Ayo%20Kolaborasi&body=Halo, Saya%20ingin%20berkolaborasi%20dengan%20anda%21"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    className="group p-3 transition-colors bg-white rounded-full flex justify-center items-center hover:bg-black"
                  >
                    <MailIcon className="fill-black w-8 h-8 group-hover:fill-white" />
                  </motion.div>
                </a>
                <a
                  href="https://github.com/NaturaAdnyana"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    className="group p-3 transition-colors bg-white rounded-full flex justify-center items-center hover:bg-black"
                  >
                    <GithubIcon className="fill-black w-8 h-8 group-hover:fill-white" />
                  </motion.div>
                </a>
                <a
                  href="https://www.instagram.com/natura.adn/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    className="group p-3 transition-colors bg-white rounded-full flex justify-center items-center hover:bg-black"
                  >
                    <InstagramIcon className="fill-black w-8 h-8 group-hover:fill-white" />
                  </motion.div>
                </a>
                <a
                  href="https://www.linkedin.com/in/natura-adnyana/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    className="group p-3 transition-colors bg-white rounded-full flex justify-center items-center hover:bg-black"
                  >
                    <LinkedInIcon className="fill-black w-8 h-8 group-hover:fill-white" />
                  </motion.div>
                </a>
              </div>
            </div>
            <div className="hidden grow-0 lg:flex flex-row space-y-1">
              <div className="p-2 h-2/3 rotate-3 -skew-y-3 bg-white self-start"></div>
              <div className="p-2 h-2/3 rotate-3 -skew-y-3 bg-white self-end"></div>
            </div>
            <div className="grow flex flex-col justify-center items-center py-20 md:h-screen">
              <h2 className="text-6xl">
                <span>CONTACT ME</span>
              </h2>
              <div className="tracking-widest">Drop your thoughts here.</div>
              <form
                action="/"
                className="flex flex-col w-full mt-6 lg:px-20 space-y-5"
              >
                <input
                  className="p-2 rounded-lg text-black"
                  type="text"
                  placeholder="Your name here..."
                />
                <textarea
                  className="p-2 rounded-lg text-black"
                  type="text"
                  placeholder="Your thoughts here..."
                />
                <button type="submit">
                  <OutlineBtn hint="Send">
                    <AirplaneIcon className="w-6 h-6 inline ml-2 -translate-y-1 rotate-45 transition-all group-hover:rotate-90  group-hover:translate-y-0 group-hover:translate-x-1" />
                  </OutlineBtn>
                </button>
              </form>
            </div>
          </article>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
