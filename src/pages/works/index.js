import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GithubIcon from "../../assets/icons/GithubIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";
import baliWaffle from "../../assets/images/works/baliWaffle.jpg";
import findYourRestaurant from "../../assets/images/works/findYourRestaurant.jpg";
import playWithArray from "../../assets/images/works/playWithArray.jpg";
import seputarBolaID from "../../assets/images/works/seputarBolaID.jpg";
import todoApp from "../../assets/images/works/todoApp.jpg";
import linkTreeNatura from "../../assets/images/works/linkTreeNatura.jpg";

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

const works = [
  {
    name: "Bali Waffle",
    year: 2020,
    url: "https://bali-waffle.netlify.app/",
    github:
      "https://github.com/NaturaAdnyana/NaturaAdnyana-BaliWaffleHomepage-PracticingBootstrapAndSass",
    techs: ["HTML", "SASS", "Bootstrap", "Webpack"],
    img: baliWaffle,
  },
  {
    name: "Cari Resto",
    year: 2021,
    url: "https://find-my-restaurant.netlify.app/",
    github:
      "https://github.com/NaturaAdnyana/RestaurantFinder-DicodingFrontExpertSubmission",
    techs: [
      "HTML",
      "CSS",
      "JS",
      "Webpack",
      "PWA",
      "Accessibility",
      "Fetch API",
    ],
    img: findYourRestaurant,
  },
  {
    name: "Play With Array",
    year: 2021,
    url: "https://bermain-array-of-objects.netlify.app/",
    github: "https://github.com/NaturaAdnyana/BermainDenganArrayofObjects-JS",
    techs: ["HTML", "CSS", "JS"],
    img: playWithArray,
  },
  {
    name: "Seputar Bola",
    year: 2020,
    url: "https://seputar-bola-id.web.app/",
    github: "https://github.com/NaturaAdnyana/SeputarBola-PusatInformasiBola",
    techs: ["HTML", "CSS", "JS", "Webpack", "PWA", "Fetch API"],
    img: seputarBolaID,
  },
  {
    name: "Todo App",
    year: 2021,
    url: "https://personal-todo-app.vercel.app/",
    github: "https://github.com/NaturaAdnyana/FirstReactApp-TodoApp",
    techs: ["React", "CSS"],
    img: todoApp,
  },
  {
    name: "Natura's Linktree",
    year: 2021,
    url: "https://links.naturaadnyana.com/",
    github: "https://github.com/NaturaAdnyana/Selfmade-Likntree",
    techs: ["HTML", "CSS", "Webpack"],
    img: linkTreeNatura,
  },
];

const techColor = (tech) => {
  if (tech === "HTML") {
    return "border-red-500 text-red-500";
  } else if (tech === "CSS") {
    return "border-blue-500 text-blue-500";
  } else if (tech === "JS") {
    return "border-orange-500 text-orange-500";
  } else if (tech === "SASS") {
    return "border-pink-500 text-pink-500";
  } else if (tech === "Bootstrap") {
    return "border-purple-500 text-purple-500";
  } else if (tech === "React") {
    return "border-cyan-500 text-cyan-500";
  } else if (tech === "Tailwind") {
    return "border-teal-500 text-teal-500";
  } else {
    return "border-gray-300 text-gray-300";
  }
};

const Works = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Works - Natura Adnyana</title>
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
                    <h1 className="text-7xl md:text-9xl text-gradient">
                      WORKS.
                    </h1>
                    <motion.h2
                      style={{
                        scale,
                      }}
                      className="lg:space-y-5 text-center quotes-decoration"
                    >
                      <span className="text-3xl md:text-5xl block font-rubik font-normal opacity-90">
                        Train for climbing mountains,
                      </span>
                      <span className="text-3xl md:text-5xl block font-rubik font-normal opacity-90">
                        by climbing mountains.
                      </span>
                      <span className="text-2xl md:text-3xl block font-rubik font-normal opacity-90">
                        - Mike Posner -
                      </span>
                    </motion.h2>
                    <div className="p-0.5 bg-vertical-pulse h-1/7 rounded-lg"></div>
                  </div>
                </div>
                <div className="lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {works.map(({ name, year, url, github, techs, img }) => {
                    return (
                      <motion.div
                        className="group relative rounded-md overflow-hidden transition-all border"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="absolute p-5 z-10">
                          <div className="mb-5 opacity-50 text-xs flex flex-wrap">
                            {techs.map((tech) => {
                              return (
                                <div
                                  className={`px-2 py-1 mr-2 mt-2 border ${techColor(
                                    tech
                                  )} rounded-lg`}
                                >
                                  {tech}
                                </div>
                              );
                            })}
                          </div>
                          <h3 className="font-oswald text-5xl">{name}</h3>
                          <span className="block opacity-50 text-sm mt-1">
                            - {year}
                          </span>
                        </div>
                        <img
                          className="transition-transform group-hover:scale-110 brightness-95 group-hover:brightness-75"
                          src={img}
                          alt=""
                        />
                        <div className="transition-opacity lg:opacity-0 lg:group-hover:opacity-100 absolute p-1 w-full bottom-10 flex justify-around">
                          <a
                            href={github}
                            className="flex border border-white py-2 px-3 bg-black-transparent hover:bg-black rounded-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon className="w-5 mr-1" />
                            Github
                          </a>
                          <a
                            href={url}
                            className="flex border border-white py-2 px-3 bg-black-transparent hover:bg-black rounded-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GlobeIcon className="w-6 mr-1" />
                            Website
                          </a>
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

export default Works;
