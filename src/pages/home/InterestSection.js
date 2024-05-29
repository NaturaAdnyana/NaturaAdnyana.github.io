import React from "react";
import { motion } from "framer-motion";

function InterestSection() {
  return (
    <>
      <section className="md:h-screen text-white bg-shadow-end py-5 md:pt-10 md:pb-14">
        <motion.article
          className="md:h-full md:pr-10 flex flex-col md:flex-row lg:container mx-auto lg:w-11/12 md:px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center space-y-3 md:basis-1/2 px-5 md:px-3 md:pr-7 order-2 md:order-1">
            <h3 className="text-xl font-bold">
              <div className="bg-blue-500 rounded-full relative inline-flex mr-3 opacity-50">
                <span className="animate-ping bg-indigo-900 p-2 rounded-full inline-flex"></span>
              </div>
              "Everything is about Art & Passion"
            </h3>
            <p>
              Yup, our lives are never consistent. Nowadays, we get info from
              everywhere instantly, stuff we never even thought about before. I
              believe that in the current era, specialists will decrease while
              generalists will increase. Especially in the world of technology,
              there's always something new popping up. It started with desktop
              apps, then websites, then mobile apps, WEB 3, AI, and so on. This
              makes it hard for us to become a "master" in one thing because we
              are constantly forced to shift to the latest technology, which
              always claims to be "more optimal" than the previous one. Whether
              we like it or not, we have to be adaptive.
            </p>
            <p>
              Of course, this happened to me. I've really felt that change. When
              I was young, I lived without gadgets, playing with Lego and do
              paintings, so back then my dream was to become an architect. Then
              the internet came along, I started watching YouTube, and I found
              someone named Robert Sabuda, a pop-up book artist, who really
              inspired me to create extraordinary works. Then mobile games came
              along, inspiring me to create games. And now, seeing the
              incredible potential of technology, I decided to enter this
              industry.
            </p>
            <p>
              So, right now, creativity and technology is my key to
              participating in innovation for for people around me, to create
              feelings of comfort, happiness, and satisfaction.
            </p>
          </div>
          <div className="md:h-screen md:basis-1/2 lg:pt-28 lg:pb-24 order-1 md:order-2">
            <h2 className="md:sticky md:top-40 md:rotate-12 mx-auto text-center md:text-left py-10 md:pt-0 md:pb-20 px-5">
              <span className="text-6xl lg:text-8xl">
                WHAT I <span className="text-gradient">INTEREST TO?</span>
              </span>
              <br />
              <span className="tracking-widest">
                Life is inconsistent, right?
              </span>
            </h2>
          </div>
        </motion.article>
      </section>
    </>
  );
}

export default InterestSection;
