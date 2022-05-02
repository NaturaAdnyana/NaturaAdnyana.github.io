import React from "react";
import { Link } from "react-router-dom";

function HomeCTASection(props) {
  return (
    <>
      <section className="text-white bg-shadow" id="intro">
        <article className="md:h-screen md:pr-14 container mx-auto md:w-11/12 px-6 pb-28 mb-28 md:py-0">
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
              <di className="p-4 border-2 transition-all hover:bg-white hover:text-black rounded">
                Contact me @Natura
              </di>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}

export default HomeCTASection;
