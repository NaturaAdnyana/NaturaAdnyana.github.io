import React from "react";
import { motion } from "framer-motion";
// import { showFormattedDate, countComments } from "../../utils";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      className="overflow-hidden h-60 rounded-sm relative transition-transform group-hover:scale-105 shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <img
        // src={blog.attributes.file1.data.attributes.formats.small.url}
        src={blog.thumb}
        // alt={blog.attributes.title}
        alt={blog.title}
        className="transition-transform"
      />
      <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
        {/* <h3 className="font-xl font-bold">{blog.attributes.title}</h3> */}
        <h3 className="font-xl font-bold">{blog.title}</h3>
        <h4 className="text-xs">
          {/* {showFormattedDate(blog.attributes.createdAt)} -{" "} */}
          {/* {countComments(blog.attributes.comments.data)} Comments */}
          {blog.date}
        </h4>
      </div>
    </motion.div>
  );
};

export default BlogCard;
