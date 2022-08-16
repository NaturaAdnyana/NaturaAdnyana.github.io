import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import MailIcon from "../../assets/icons/MailIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import ContactMeForm from "./ContactMeForm";

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
    <>
      <Helmet>
        <title>Contact - Natura Adnyana</title>
        <meta
          name="description"
          content="It's me Natura - Contact or Follow me for any questions or inquiries. Instagram, Github, LinkedIn, Mail, etc. are all available."
        ></meta>
      </Helmet>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <section className="text-white container mx-auto md:w-11/12 px-6 mb-20 md:mb-0">
            <article className="flex flex-col md:flex-row">
              <div className="grow flex flex-col space-y-5 justify-center items-center py-20 md:h-screen">
                <div className="text-center">
                  <h2 className="text-6xl">
                    <span>FOLLOW ME</span>
                  </h2>
                  <div className="tracking-widest mt-1">
                    I am always open to new opportunities.
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-2 md:space-x-5">
                  <a
                    href="mailto:me@naturaadnyana.com?subject=Let's%20Collaborate&body=Hi, Let's%20make%20an%20outstanding%20project%20together%21"
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
                  <a
                    href="https://twitter.com/Natkun_"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1 }}
                      className="group p-3 transition-colors bg-white rounded-full flex justify-center items-center hover:bg-black"
                    >
                      <TwitterIcon className="fill-black w-8 h-8 group-hover:fill-white" />
                    </motion.div>
                  </a>
                </div>
                <span>- or -</span>
                <div className="text-center">
                  <h2 className="text-6xl">
                    <span>MAKE A PLAN</span>
                  </h2>
                  <div className="tracking-widest mt-1">
                    <a
                      href="https://calendly.com/natura-adn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-blue-500 hover:underline"
                    >
                      Click here
                    </a>{" "}
                    to schedule our meeting.
                  </div>
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
                <div className="tracking-widest mt-1">
                  Drop your thoughts here.
                </div>
                <ContactMeForm />
              </div>
            </article>
          </section>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Contact;
