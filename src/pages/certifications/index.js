import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import posIndo from "../../assets/images/certifications/posIndo.jpg";
import BNSPJuniorProgrammer from "../../assets/images/certifications/BNSPJuniorProgrammer.jpg";
import BDI3DLayout from "../../assets/images/certifications/BDI3DLayout.jpg";
import dicodingWebDasar from "../../assets/images/certifications/dicodingWebDasar.jpg";
import dicodingFrontEnd from "../../assets/images/certifications/dicodingFrontEnd.jpg";
import dicodingPWA from "../../assets/images/certifications/dicodingPWA.jpg";
import dicodingWebExpert from "../../assets/images/certifications/dicodingWebExpert.jpg";
import dicodingPython from "../../assets/images/certifications/dicodingPython.jpg";
import dicodingJS from "../../assets/images/certifications/dicodingJS.jpg";
import internshipRentrips from "../../assets/images/certifications/internshipRentrips.jpg";

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

const certifications = [
  {
    name: "Internship - PT. Pos Indonesia",
    year: "Dec 2018 - Jun 2019",
    img: posIndo,
  },
  {
    name: "Diklat Layout Animasi 3D - BDI",
    year: "Mar 2021 - Apr 2021",
    img: BDI3DLayout,
  },
  {
    name: "Junior Programmer - BNSP",
    year: "Apr 2020",
    img: BNSPJuniorProgrammer,
  },
  {
    name: "Internship Front-End Dev. - Rentrips.ID",
    year: "Sep 2021 - Dec 2021",
    img: internshipRentrips,
  },
  {
    name: "Pemrograman Web Dasar - Dicoding Academy",
    year: "Jun 2020",
    img: dicodingWebDasar,
  },
  {
    name: "Fundamental Front-End Web - Dicoding Academy",
    year: "Jul 2020",
    img: dicodingFrontEnd,
  },
  {
    name: "Progressive Web Apps - Dicoding Academy",
    year: "Nov 2020",
    img: dicodingPWA,
  },
  {
    name: "Front-End Web Expert - Dicoding Academy",
    year: "Jul 2021",
    img: dicodingWebExpert,
  },
  {
    name: "Python - Dicoding Academy",
    year: "Oct 2020",
    img: dicodingPython,
  },
  {
    name: "Javascript - Dicoding Academy",
    year: "May 2021",
    img: dicodingJS,
  },
];

const Certifications = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Certifications - Natura Personal Web</title>
        <meta
          name="description"
          content="It's me Natura - Here's my work/project that I made, come to check it out!"
        ></meta>
      </Helmet>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <section className="text-white pb-36">
            <article>
              <div className="container px-5 md:px-10">
                <div className="h-screen-2">
                  <div className="h-screen sticky top-10 w-full flex justify-center items-center flex-col space-y-10 overflow-x-hidden">
                    <h1 className="text-5xl md:text-8xl text-gradient">
                      CERTIFICATIONS.
                    </h1>
                    <motion.h2
                      style={{
                        scale,
                      }}
                      className="lg:space-y-5 text-center quotes-decoration"
                    >
                      <span className="text-3xl md:text-5xl block font-rubik font-normal opacity-90">
                        Shoot Low,
                      </span>
                      <span className="text-3xl md:text-5xl block font-rubik font-normal opacity-90">
                        Aim High.
                      </span>
                    </motion.h2>
                    <div className="p-0.5 bg-vertical-pulse h-1/7 rounded-lg"></div>
                  </div>
                </div>
                <div className="lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {certifications.map(({ name, year, img }) => {
                    return (
                      <motion.div
                        className="border overflow-hidden h-60 rounded-md relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <img src={img} alt={name} />
                        <div className="absolute bottom-0 w-full p-4 bg-black-transparent">
                          <h3>{name}</h3>
                          <h4 className="text-xs">{year}</h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </article>
          </section>
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Certifications;
