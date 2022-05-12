import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AirplaneIcon from "../../assets/icons/AirplaneIcon";
import OutlineBtn from "../../shared/OutlineBtn";

function HomeCTASection(props) {
  return (
    <>
      <section className="md:h-screen text-white bg-shadow pt-24 pb-44 md:pt-10 md:pb-14">
        <motion.article
          className="md:h-full md:pr-14 container mx-auto md:w-11/12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <div className="h-full text-center flex flex-col justify-center items-center">
            <h2 className="space-y-1 md:space-y-3  mb-10 md:mb-20">
              <span className="text-lg lg:text-3xl block">
                コラボレーションしよう！
              </span>
              <span className="block text-4xl lg:text-8xl">
                LET'S MAKE
                <span className="text-gradient"> AWESOME PROJECT </span>TOGETHER
              </span>
              <span className="text-lg lg:text-3xl block">AYO KOLABORASI</span>
            </h2>
            <Link to="/contact">
              <OutlineBtn hint="Contact me @Natura">
                <AirplaneIcon className="w-6 h-6 inline ml-2 -translate-y-1 rotate-45 transition-all group-hover:rotate-90  group-hover:translate-y-0 group-hover:translate-x-1" />
              </OutlineBtn>
            </Link>
          </div>
        </motion.article>
      </section>
    </>
  );
}

export default HomeCTASection;
