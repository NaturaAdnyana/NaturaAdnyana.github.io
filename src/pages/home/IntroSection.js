import React from "react";
import { motion } from "framer-motion";

function calculateAge(birthMonth, birthDay, birthYear) {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth();
  const todayDay = todayDate.getDate();

  let isBirthday = false;
  let age = todayYear - birthYear;

  if (todayMonth < birthMonth - 1) {
    age--;
  }
  if (birthMonth - 1 === todayMonth && todayDay < birthDay) {
    age--;
  }

  if (todayDay === birthDay && todayMonth === birthMonth - 1) {
    isBirthday = true;
  }

  return [age, isBirthday];
}

function IntroSection() {
  const [age, isBirthday] = calculateAge(8, 9, 2001);

  return (
    <>
      <section className="md:h-screen text-white bg-shadow pt-10 pb-5 md:pb-14">
        <motion.article
          className="md:h-full md:pr-14 flex flex-col md:flex-row container mx-auto md:w-11/12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <div className="md:h-full md:basis-1/2 md:pt-32 pb-6 md:pb-40">
            <h2 className="md:sticky md:top-40 md:-rotate-12 mx-auto text-center md:text-left text-gradient">
              <span className="text-6xl lg:text-8xl">
                WHO AM I<span className="text-7xl lg:text-10xl">?</span>
              </span>
              <br />
              <span className="tracking-widest bg-white bg-clip-text ">
                My life is not really exciting actually.
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-center space-y-3 md:basis-1/2">
            {isBirthday ? (
              <h4 className="text-xl font-bold animate-bounce">
                Natura Adnyana - IT'S MY BIRTHDAY TODAY🎉
              </h4>
            ) : (
              <h3 className="text-xl font-bold">
                <div className="bg-blue-500 rounded-full relative inline-flex mr-3 opacity-50">
                  <span className="animate-ping bg-indigo-900 p-2 rounded-full inline-flex"></span>
                </div>
                Introduce me - "Natura Adnyana"
              </h3>
            )}
            <p className="mt-4">
              So you can call me <i>Natura</i> or <i>Natsura</i> or {"  "}
              <i>Natkun</i> (people calls me like that). It's sounds like
              Japanese name right? Well I'm actually half Japanese/Indonesian,
              born in Nara, Japan on 9 August 2001 (now i'm {age} years old),
              and now live in the beautiful island called Bali.
            </p>
            <p>
              I'm a web developer and also a student of the INSTIKI Indonesia
              University. I love technology since I'm on 13 years old, started
              from when I trying to disassemble my new phone, fixing my cheap
              electronic gadgets, cracking softwares, and now I'm tried to make
              a website. My goal is to be a Software Engineer. It's still a long
              journey, so let's see what will happen to me next🦾.
            </p>
          </div>
        </motion.article>
      </section>
    </>
  );
}

export default IntroSection;
