import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const containerVariants = {
  hidden: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  visible: {
    backgroundColor: "rgba(230, 230, 230, 1)",
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    transition: {
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
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Blog = () => {
  let { id } = useParams();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blogs - Natura Adnyana</title>
        <meta
          name="description"
          content="It's me Natura - I'm also made blogs lol"
        ></meta>
      </Helmet>
      <motion.div
        className="overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <section className="text-black container mx-auto md:w-11/12 px-6 mb-20 min-h-screen">
            <article className="flex flex-col items-center md:flex-row pt-28 pb-5">
              Hello {id}
            </article>
          </section>
        </motion.div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Blog;
