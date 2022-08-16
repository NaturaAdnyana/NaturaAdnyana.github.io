import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { showFormattedDate, countComments, setLocalStorage } from "../../utils";
import Calendar from "../../assets/icons/Calendar";
import ChatBubble from "../../assets/icons/ChatBubble";
import AirplaneIcon from "../../assets/icons/AirplaneIcon";
import OutlineBtn from "../../shared/OutlineBtn";
import SuccessIcon from "../../assets/icons/SuccessIcon";
import FailedIcon from "../../assets/icons/FailedIcon";
import ReactMarkdown from "react-markdown";

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
  const [blog, setBlog] = useState("");
  const [blogHelmet, setBlogHelmet] = useState({
    title: "Blog",
  });
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    blog: "",
  });
  const [submitBtnStatus, setSubmitBtnStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });
  let { id } = useParams();
  const API_ENDPOINT = process.env.REACT_APP_PERSONAL_API_ENDPOINT;

  const getBlogData = async () => {
    try {
      axios
        .get(`${API_ENDPOINT}/api/blogs?filters[slug][$eq]=${id}&populate=*`)
        .then((response) => {
          setBlog(response.data);
          setBlogHelmet({
            title: response.data.data[0].attributes.title,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  function handleCommentSubmit(e) {
    e.preventDefault();
    setSubmitBtnStatus({ loading: true, success: false, error: false });
    const formatData = {
      data: {
        name: formData.name,
        comment: formData.comment,
        blog: formData.blog,
      },
    };
    axios
      .post(`${API_ENDPOINT}/api/comments`, formatData)
      .then((response) => {
        if (response.status === 200) {
          setSubmitBtnStatus({ loading: false, success: true, error: false });
          getBlogData();
          setLocalStorage(formData.name);
        } else {
          setSubmitBtnStatus({ loading: false, success: false, error: true });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setTimeout(() => handleReset(), 3000));
  }

  const handleReset = () => {
    setFormData({
      name: "",
      comment: "",
      blog: "",
    });
    setSubmitBtnStatus({ loading: false, success: false, error: false });
  };

  useEffect(() => {
    getBlogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>{blogHelmet.title} - Natura Adnyana</title>
      </Helmet>
      <motion.div
        className="overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={contentVariants}>
          <section className="text-black container md:w-11/12 lg:pl-24 mb-20 min-h-screen">
            <article className="flex flex-col lg:flex-row items-center md:flex-row md:pt-24 pb-5">
              {!blog ? (
                <div>Loading</div>
              ) : (
                blog.data.map((blog, index) => (
                  <div key={index}>
                    <img
                      className="w-full max-h-64 object-cover object-center"
                      src={blog.attributes.file1.data.attributes.url}
                      alt={blog.attributes.title}
                    />
                    <div className="pt-5 flex flex-col-reverse md:flex-row md:gap-8">
                      <div className="md:basis-1/4 p-8">
                        <div className="flex gap-2">
                          <Calendar className="w-4 h-4" />
                          {showFormattedDate(blog.attributes.updatedAt)}
                        </div>
                        <div className="flex gap-2">
                          <ChatBubble className="w-4 h-4" />
                          {countComments(blog.attributes.comments.data)}{" "}
                          Comments
                        </div>
                      </div>
                      <div className="md:basis-3/4 p-8 space-y-2">
                        <h1 className="text-3xl">{blog.attributes.title}</h1>
                        <ReactMarkdown className="text-justify">
                          {blog.attributes.articles}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <div className="md:float-right md:w-3/4 p-8 space-y-4">
                      <h2>Comments</h2>
                      <form
                        className="flex flex-col space-y-4 pb-5"
                        onSubmit={handleCommentSubmit}
                      >
                        <input
                          type="text"
                          className="p-2 rounded-md"
                          placeholder="your name..."
                          required
                          name="name"
                          value={formData.name || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <textarea
                          className="h-20 p-2 rounded-md"
                          placeholder="your comment..."
                          required
                          value={formData.comment || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              comment: e.target.value,
                              blog: [blog.id],
                            })
                          }
                        ></textarea>
                        <button type="submit">
                          <OutlineBtn readMode={true} hint="Send">
                            {!submitBtnStatus.loading &&
                              !submitBtnStatus.success &&
                              !submitBtnStatus.error && (
                                <AirplaneIcon className="w-6 h-6 inline ml-2 -translate-y-1 rotate-45 transition-all group-hover:rotate-90  group-hover:translate-y-0 group-hover:translate-x-1" />
                              )}
                            {submitBtnStatus.loading && (
                              <div className="ml-2 bg-blue-800 rounded-full relative inline-flex mr-3 opacity-50">
                                <span className="animate-ping bg-indigo-900 p-3 rounded-full inline-flex"></span>
                              </div>
                            )}
                            {submitBtnStatus.success && (
                              <SuccessIcon className="w-6 h-6 inline ml-2 stroke-green-500" />
                            )}
                            {submitBtnStatus.error && (
                              <FailedIcon className="w-6 h-6 inline ml-2 stroke-orange-500" />
                            )}
                          </OutlineBtn>
                        </button>
                      </form>
                      {blog.attributes.comments.data.map((comment, index) => (
                        <div
                          className="chat-bubble bg-white p-5 rounded-lg"
                          key={index}
                        >
                          <h3 className="font-bold">
                            {comment.attributes.name}
                            <span className="font-normal text-gray-500 text-xs">
                              {" "}
                              -{" "}
                              {showFormattedDate(comment.attributes.updatedAt)}
                            </span>
                          </h3>
                          <p>{comment.attributes.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </article>
          </section>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Blog;
