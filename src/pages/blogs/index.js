import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ReadModeIntro from "./ReadModeIntro.js";
// import axios from "axios";
import BlogCard from "./BlogCard.js";
import BlogHeader from "./BlogHeader.js";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.jsx";
import BlogList from "../../assets/data/blogs/blogs-list.json";

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

const Blogs = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [allBlogs, setAllBlogs] = useState("");

  function getAllBlogs() {
    // axios
    //   .get(
    //     `${process.env.REACT_APP_PERSONAL_API_ENDPOINT}/api/blogs?populate=*`
    //   )
    //   .then((response) => response.data)
    //   .then((data) => {
    //     setAllBlogs(data);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     console.log(allBlogs);
    //   });

    setAllBlogs(BlogList);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 3000);
    getAllBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
        <AnimatePresence>{isIntro && <ReadModeIntro />}</AnimatePresence>
        <motion.div variants={contentVariants}>
          <section className="text-black container mx-auto md:w-11/12 px-6 mb-20 min-h-screen">
            <article className="flex flex-col items-center md:flex-row pt-28 pb-5">
              <BlogHeader />
            </article>
            <article className="pt-10 pb-20 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {!allBlogs ? (
                <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center animate-pulse space-y-2">
                  <Logo className="w-10 h-10 animate-spin" isReadMode={true} />
                  <span className="text-sm">Loading...</span>
                </div>
              ) : (
                allBlogs.blogs.map((blog, index) => (
                  <motion.div variants={contentVariants} key="index">
                    <Link
                      // to={`/blogs/${blog.attributes.slug}`}
                      to={`/blogs/${blog.slug}`}
                      className="group"
                    >
                      <BlogCard blog={blog} />
                    </Link>
                  </motion.div>
                ))
              )}
            </article>
          </section>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Blogs;
