import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const API_ENDPOINT = process.env.REACT_APP_PERSONAL_API_ENDPOINT;
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  const countComments = (comments) => {
    return comments.length;
  };

  const thumbnail =
    API_ENDPOINT + blog.attributes.file1.data.attributes.formats.small.url;

  return (
    <motion.div
      className="overflow-hidden h-60 rounded-sm relative transition-transform group-hover:scale-105 shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <img
        src={thumbnail}
        alt={blog.attributes.title}
        className="transition-transform"
      />
      <div className="w-full p-4 bg-white absolute bottom-0 space-y-3  text-center">
        <h3 className="font-xl font-bold">{blog.attributes.title}</h3>
        <h4 className="text-xs">
          {showFormattedDate(blog.attributes.updatedAt)} -{" "}
          {countComments(blog.attributes.comments.data)} Comments
        </h4>
      </div>
    </motion.div>
  );
};

export default BlogCard;
