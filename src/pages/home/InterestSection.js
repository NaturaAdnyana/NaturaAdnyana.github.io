import React from "react";
import { motion } from "framer-motion";

function InterestSection() {
  return (
    <>
      <section className="md:h-screen text-white bg-shadow py-5 md:pt-10 md:pb-14">
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
              I can't say that I'm an artistic person, but I love art so much! I
              love to do the painting when I was a kid. I also had an interest
              in popup book arts that were made by Robert Sabuda, he inspired me
              to always think creatively.
            </p>
            <p>
              I like sports also, especially <s>soccer</s> football. My favorite
              football team is Manchester United, even though now they play
              sh*t. I also have a dream of playing surf one day. I think surfing
              is one of many other sports that play with nature, I mean it's
              amazing if you can predict how the wave moves and how we keep
              standing over the water. So how cool is that?
            </p>
            <p>
              About music taste, Avicii is a legend. His song lyrics make me
              strong every day. And basically, I love the music with fingerstyle
              guitar in it. Do you know Peach Pit? I love to listen to his songs
              for now.
            </p>
            <p>
              And Video Games? Of course, I love it. Skyrim, Minecraft, and GTA
              have a special place in my heart. But also, for me "The Little
              Nightmares" and "The Last of Us" have the best story, visuals, and
              art.
            </p>
            <p>
              Last but not least, I do coding every day, the reason is that{" "}
              <s>I hate my life</s> it is a promising job & fun to do. Coding
              teaches me to always be patient, grateful, and consistent, because
              "technology is never die".
            </p>
          </div>
          <div className="md:h-screen md:basis-1/2 lg:pt-28 lg:pb-24 order-1 md:order-2">
            <h2 className="md:sticky md:top-40 md:rotate-12 mx-auto text-center md:text-left py-10 md:pt-0 md:pb-20 px-5">
              <span className="text-6xl lg:text-8xl">
                WHAT I <span className="text-gradient">INTEREST TO?</span>
              </span>
              <br />
              <span className="tracking-widest">
                Life is f**king inconsistent, right?
              </span>
            </h2>
          </div>
        </motion.article>
      </section>
    </>
  );
}

export default InterestSection;
