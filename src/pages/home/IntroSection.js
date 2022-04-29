import React from "react";

function IntroSection() {
  return (
    <>
      <section className="text-white bg-shadow" id="intro">
        <article className="md:h-screen md:pr-14 flex flex-col md:flex-row container mx-auto md:w-11/12 px-6 py-20 md:py-0">
          <div className="md:h-screen md:basis-1/2 md:pt-40 pb-6 md:pb-52">
            <h2 className="md:sticky md:top-40 text-gradient md:-rotate-12 mx-auto text-center md:text-left">
              <span className="text-6xl md:text-8xl">
                WHO AM I<span className="md:text-10xl">?</span>
              </span>
              <br />
              <span className="tracking-widest">
                My life is not really exciting actually.
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-center md:space-y-3 md:basis-1/2">
            <h3 className="text-xl font-bold">
              Introduce me - "Natura Adnyana"
            </h3>
            <p className="mt-4">
              So you can call me <i>Natura</i> or <i>Natsura</i> or {"  "}
              <i>Natkun</i> (people calls me like that). It's sounds like
              Japanese name right? Well I'm actually half Japanese/Indonesian,
              live in the beautiful island called Bali. <br />
              I'm a web developer and also a student of the INSTIKI Indonesia
              University. I love technology (literally to broke something) since
              I'm on 13 years old, started from when I trying to disassemble my
              new phone, fixing my cheap electronic gadgets, cracking softwares,
              and now I'm tried to make a website. My goal is to be a Software
              Engineer. It's still a long journey, so let's see what will happen
              to me next🦾.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default IntroSection;
