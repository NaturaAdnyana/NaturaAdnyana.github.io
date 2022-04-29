import React from "react";

function InterestSection() {
  return (
    <>
      <section className="text-white bg-shadow">
        <article className="md:h-screen md:pr-10 flex flex-col md:flex-row container mx-auto md:w-11/12 px-6 py-20 md:py-0">
          <div className="flex flex-col justify-center space-y-3 md:basis-1/2 md:p-10 order-2 md:order-1">
            <h3 className="text-xl font-bold">"Everything is about Art"</h3>
            <p>
              I can't say that I'm an artistic person, but I love art so much! I
              love to do painting when I was a kid. I also had an interest with
              popup book arts that made by Robert Sabuda, he is a legend.
            </p>
            <p>
              I like sport also, especially <s>soccer</s> football, I think how
              we score a goal is an art too cause we can't score the same way
              everytime. If you want to know, my favourite football team is
              Manchester United, even now they play sh*t.
            </p>
            <p>
              About music taste, Avicii is a legend. The lyrics that he made
              makes me stronger. Also basically I love the music with
              fingerstyle guitar in it. You know Peach Pit? I love to listen to
              his songs for now.
            </p>
            <p>
              And Video Games? Of course I love it. Skyrim, Minecraft, and GTA
              has a special place in my heart. But for me "The Little
              Nightmares" and "The Last of Us" has the best visual & art.
            </p>
            <p>
              Last but not least, I do coding, the reason is because{" "}
              <s>I hate my life</s> it is a promising job & fun to do. Coding
              teach me to stay patient, grateful, never give up, and stay feel
              stupid. Because technology never stop growing.
            </p>
          </div>
          <div className="md:h-screen md:basis-1/2 md:pt-40 md:pb-32 order-1 md:order-2">
            <h2 className="md:sticky md:top-40 text-gradient md:rotate-12 mx-auto text-center md:text-left py-10 md:py-0">
              <span className="text-6xl md:text-8xl">WHAT I INTEREST TO?</span>
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
