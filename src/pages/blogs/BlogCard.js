import React from "react";
import posIndo from "./../../assets/images/2018me.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, key }) => {
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <Link to={`/blogs/${blog.attributes.slug}`} className="group" key={key}>
      <motion.div
        className="overflow-hidden h-60 rounded-sm relative transition-transform group-hover:scale-105 shadow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <img src={posIndo} alt={"babi"} className="transition-transform" />
        <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
          <h3 className="font-xl font-bold">{blog.attributes.title}</h3>
          <h4 className="text-xs">
            {showFormattedDate(blog.attributes.publishedAt)} - 0 Comments
          </h4>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
