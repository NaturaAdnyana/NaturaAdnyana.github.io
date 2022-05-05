import React from "react";
import { Link } from "react-router-dom";
import AirplaneIcon from "../../assets/icons/AirplaneIcon";
import OutlineBtn from "../../shared/OutlineBtn";

function HomeCTASection(props) {
  return (
    <>
      <section className="text-white bg-shadow" id="intro">
        <article className="md:h-screen md:pr-14 container mx-auto md:w-11/12 px-6 pb-28 mb-28 md:mb-0 md:py-0">
          <div className="h-full text-center flex flex-col justify-center items-center">
            <h2 className="space-y-1 md:space-y-3  mb-10 md:mb-20">
              <span className="text-lg lg:text-3xl block">
                コラボレーション　やろうぜ！
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
        </article>
      </section>
    </>
  );
}

export default HomeCTASection;
