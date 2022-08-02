import React, { useEffect, useRef, useState } from "react";

const BlogHeader = (props) => {
  const headingElm = useRef();
  const [isHeadingAtTop, setIsHeadingAtTop] = useState(false);

  useEffect(() => {
    if (!props.justSticky) {
      window.onscroll = function (e) {
        if (headingElm.current.getBoundingClientRect().y < 0) {
          setIsHeadingAtTop(true);
        } else {
          setIsHeadingAtTop(false);
        }
      };
    }
  }, []);

  return (
    <>
      {!props.justSticky ? (
        <div className="w-full h-full flex justify-end items-center flex-col space-y-8 text-center relative">
          <div ref={headingElm}>
            <div
              className={
                isHeadingAtTop
                  ? "w-screen fixed top-0 left-0 p-6 bg-white-transparent backdrop-blur-sm shadow-md z-10"
                  : ""
              }
            >
              <h1
                className={`transition-transform duration-75 text-3xl ${
                  !isHeadingAtTop && "scale-300"
                }`}
              >
                BLOGS
              </h1>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-center text-zinc-700">
              I hate handwriting, so I decided to type.
            </h2>
          </div>
        </div>
      ) : (
        <div className="w-screen fixed top-0 left-0 p-6 bg-white-transparent backdrop-blur-sm shadow-md z-10 text-center">
          <h1 className="transition-transform duration-75 text-3xl">BLOGS</h1>
        </div>
      )}
    </>
  );
};

export default BlogHeader;
