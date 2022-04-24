import React from "react";

import HtmlIcon from "../../assets/icons/HtmlIcon";
import CssIcon from "../../assets/icons/CssIcon";
import JsIcon from "../../assets/icons/JsIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import SassIcon from "../../assets/icons/SassIcon";
import BootstrapIcon from "../../assets/icons/BootstrapIcon";
import TailwindCssIcon from "../../assets/icons/TailwindCssIcon";
import ReduxIcon from "../../assets/icons/ReduxIcon";
import LaravelIcon from "../../assets/icons/LaravelIcon";
import PhpIcon from "../../assets/icons/PhpIcon";
import VSCodeIcon from "../../assets/icons/VSCodeIcon";
import GitIcon from "../../assets/icons/GitIcon";
import FigmaIcon from "../../assets/icons/FigmaIcon";
import PhotoshopIcon from "../../assets/icons/PhotoshopIcon";
import IllustratorIcon from "../../assets/icons/IllustratorIcon";

function SkillsToolsSection() {
  return (
    <>
      <section className="text-white bg-shadow">
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

export default SkillsToolsSection;
