import React from "react";
import { motion } from "framer-motion";
import HtmlIcon from "../assets/icons/HtmlIcon";
import CssIcon from "../assets/icons/CssIcon";
import JsIcon from "../assets/icons/JsIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import SassIcon from "../assets/icons/SassIcon";
import BootstrapIcon from "../assets/icons/BootstrapIcon";
import TailwindCssIcon from "../assets/icons/TailwindCssIcon";
import ReduxIcon from "../assets/icons/ReduxIcon";
import LaravelIcon from "../assets/icons/LaravelIcon";
import PhpIcon from "../assets/icons/PhpIcon";
import VSCodeIcon from "../assets/icons/VSCodeIcon";
import GitIcon from "../assets/icons/GitIcon";
import FigmaIcon from "../assets/icons/FigmaIcon";
import PhotoshopIcon from "../assets/icons/PhotoshopIcon";
import IllustratorIcon from "../assets/icons/IllustratorIcon";

function Home() {
  return (
    <>
      <section className="text-white container mx-auto w-11/12 px-6">
        <article className="h-screen pr-20">
          <div className="flex justify-between h-screen space-x-9">
            <div className="relative w-full flex justify-center items-center intro-pics">
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                className="absolute w-72 h-auto ml-6 rounded-sm cursor-grab rotate-2 shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/childme.webp"
                alt="Child me"
              />
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.5}
                className="absolute w-96 h-auto mb-20 mr-11 rounded-sm cursor-grab -rotate-6 shadow-md"
                src="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2018me.webp"
                alt="Child me"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex justify-center flex-col h-screen space-y-6">
              <h1>
                <span className="text-10xl">HI, </span>
                <span className="text-8xl">IT'S ME</span>
                <br />
                <span className="text-10xl font-bold text-gradient">
                  {" "}
                  NATURA
                </span>
              </h1>
              <span>
                Front-end Developer | Graphic Designer | Aspiring Software
                Engineer
              </span>
            </div>
          </div>
        </article>
      </section>
      <section className="text-white introduce" id="intro">
        <article className="h-screen pr-14 flex container mx-auto w-11/12 px-6">
          <div className="h-screen basis-1/2 pt-40 pb-52">
            <h2 className="sticky top-40 text-gradient -rotate-12 mx-auto">
              <span className="text-8xl">
                WHO AM I<span className="text-10xl">?</span>
              </span>
              <br />
              <span className="tracking-widest">
                My life is not really exciting actually.
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-center space-y-3 basis-1/2">
            <h3 className="text-xl font-bold">
              Introduce me - "Natura Adnyana" 20yo
            </h3>
            <p>
              So you can call me <i>Natura</i> or <i>Natsura</i> or {"  "}
              <i>Natkun</i> (people call me like that). It's sounds like
              Japanese name right? Well I'm actually half Japanese/Indonesian,
              live in the beautiful island called Bali. <br />
              I'm a web developer and also a student of the INSTIKI Indonesia
              University. I love technology (literally to broke something) since
              I'm on 13 years old, started from when I trying to disassemble my
              new phone, fixing my cheap electronic gadgets, cracking softwares,
              and now I'm trying to make a website. My goal is to be a Software
              Engineer. It's still a long journey, so let's see what will happen
              to me next🦾.
            </p>
          </div>
        </article>
      </section>
      <section className="text-white introduce">
        <article className="h-screen pr-10 flex container mx-auto w-11/12 px-6">
          <div className="flex flex-col justify-center space-y-3 basis-1/2 p-10">
            <h3 className="text-xl font-bold">"Everything is about Art"</h3>
            <p>
              I can't say that I'm an artistic person, but I love art so much! I
              love to do painting when I was a kid. I also had an interest with
              popup book arts that made by Robert Sabuda, he was a legend.
            </p>
            <p>
              I like sport also, especially <s>soccer</s> football, my favourite
              football team is Manchester United even now they play sh*t.
            </p>
            <p>
              About music taste, Avicii was a legend. So basically I love a
              music with fingerstyle guitar in it. You know Peach Pit? I love to
              listen to his song for now.
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
          <div className="h-screen basis-1/2 pt-40 pb-32">
            <h2 className="sticky top-40 text-gradient rotate-12 mx-auto">
              <span className="text-8xl">WHAT I INTEREST TO?</span>
              <br />
              <span className="tracking-widest">
                Life is f**king inconsistent, right?
              </span>
            </h2>
          </div>
        </article>
      </section>
      <section className="text-white introduce">
        <article className="pr-16 container mx-auto w-11/12 px-6 py-32">
          <div className="pt-2 pb-10">
            <h2 className="text-center text-gradient mx-auto">
              <span className="text-8xl">SKILLS & TOOLS</span>
              <br />
              <span className="tracking-widest">
                Mastering tools without creativity is nothing.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-6">
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <HtmlIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <CssIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <JsIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <PhpIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <SassIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <BootstrapIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <TailwindCssIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <ReactIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <ReduxIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <LaravelIcon className="w-full" />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <VSCodeIcon />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <GitIcon />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <FigmaIcon />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <PhotoshopIcon />
            </div>
            <div className="p-10 rounded-md backdrop-brightness-200 shadow-inner relative overflow-hidden">
              <IllustratorIcon />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Home;
