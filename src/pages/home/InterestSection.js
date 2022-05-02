import React from "react";

function InterestSection() {
  return (
    <>
      <section className="text-white bg-shadow">
        <article className="md:h-screen md:pr-10 flex flex-col md:flex-row lg:container mx-auto lg:w-11/12 md:px-6 py-20 md:py-0">
          <div className="flex flex-col justify-center space-y-3 md:basis-1/2 px-5 md:px-3 md:pr-7 order-2 md:order-1">
            <h3 className="text-xl font-bold">
              "Everything is about Art & Passion"
            </h3>
            <p>
              I can't say that I'm an artistic person, but I love art so much! I
              love to do painting when I was a kid. I also had an interest with
              popup book arts that made by Robert Sabuda, he inspired me to
              always think creative.
            </p>
            <p>
              I like sport also, especially <s>soccer</s> football. I think how
              we score a goal is an art too because we can't score exacly the
              same way for twice. If you want to know, my favourite football
              team is Manchester United, even though now they play sh*t.
            </p>
            <p>
              About music taste, Avicii is a legend. His song lyrics makes me
              strong everyday. And basically I love the music with fingerstyle
              guitar in it. You know Peach Pit? I love to listen to his songs
              for now.
            </p>
            <p>
              And Video Games? Of course I love it. Skyrim, Minecraft, and GTA
              has a special place in my heart. But also, for me "The Little
              Nightmares" and "The Last of Us" has the best story, visual, and
              art.
            </p>
            <p>
              Last but not least, I do coding everyday, the reason is because{" "}
              <s>I hate my life</s> it is a promising job & fun to do. Coding
              teaches me to always be patient, grateful, and consistent, because
              "technology is never die".
            </p>
          </div>
          <div className="md:h-screen md:basis-1/2 lg:pt-28 lg:pb-24 order-1 md:order-2">
            <h2 className="md:sticky md:top-40 md:rotate-12 mx-auto text-center md:text-left py-10 md:py-0 px-5">
              <span className="text-6xl lg:text-8xl">
                WHAT I <span className="text-gradient">INTEREST TO?</span>
              </span>
              <br />
              <span className="tracking-widest">
                Life is f**king inconsistent, right?
              </span>
            </h2>
          </div>
        </article>
      </section>
    </>
  );
}

export default InterestSection;
