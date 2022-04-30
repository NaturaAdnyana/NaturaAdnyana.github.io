import React, { Suspense } from "react";

import ImgLazyLoading from "../../components/ImgLazyLoading";
import FavRibbon from "../../shared/FavRibbon";

const HtmlIcon = React.lazy(() => import("../../assets/icons/HtmlIcon"));
const CssIcon = React.lazy(() => import("../../assets/icons/CssIcon"));
const JsIcon = React.lazy(() => import("../../assets/icons/JsIcon"));
const ReactIcon = React.lazy(() => import("../../assets/icons/ReactIcon"));
const SassIcon = React.lazy(() => import("../../assets/icons/SassIcon"));
const BootstrapIcon = React.lazy(() =>
  import("../../assets/icons/BootstrapIcon")
);
const TailwindCssIcon = React.lazy(() =>
  import("../../assets/icons/TailwindCssIcon")
);
const ReduxIcon = React.lazy(() => import("../../assets/icons/ReduxIcon"));
const LaravelIcon = React.lazy(() => import("../../assets/icons/LaravelIcon"));
const PhpIcon = React.lazy(() => import("../../assets/icons/PhpIcon"));
const VSCodeIcon = React.lazy(() => import("../../assets/icons/VSCodeIcon"));
const GitIcon = React.lazy(() => import("../../assets/icons/GitIcon"));
const FigmaIcon = React.lazy(() => import("../../assets/icons/FigmaIcon"));
const PhotoshopIcon = React.lazy(() =>
  import("../../assets/icons/PhotoshopIcon")
);
const IllustratorIcon = React.lazy(() =>
  import("../../assets/icons/IllustratorIcon")
);

function SkillsToolsSection() {
  return (
    <>
      {/* Success is when you finally can say you bored with your things */}
      <section className="text-white bg-shadow">
        <article className="md:pr-16 container mx-auto md:w-11/12 px-6 py-32">
          <div className="pt-2 pb-10">
            <h2 className="text-center mx-auto">
              <span className="text-5xl md:text-8xl text-gradient">
                SKILLS & TOOLS
              </span>
              <br />
              <span className="tracking-widest">
                Mastering tools without creativity is nothing.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <FavRibbon />
              <Suspense fallback={<ImgLazyLoading />}>
                <HtmlIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                HTML5
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <FavRibbon />
              <Suspense fallback={<ImgLazyLoading />}>
                <CssIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                CSS3
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <FavRibbon />
              <Suspense fallback={<ImgLazyLoading />}>
                <JsIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Javascript
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <PhpIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                PHP
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <SassIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Sass
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <BootstrapIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Bootstrap
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <FavRibbon />
              <Suspense fallback={<ImgLazyLoading />}>
                <TailwindCssIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Tailwind
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <FavRibbon />
              <Suspense fallback={<ImgLazyLoading />}>
                <ReactIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                ReactJS
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <ReduxIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Redux
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <LaravelIcon className="w-full" />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Laravel
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <FavRibbon />
              <Suspense fallback={<ImgLazyLoading />}>
                <VSCodeIcon />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                VSCode
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <GitIcon />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Git
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <FigmaIcon />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Figma
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <PhotoshopIcon />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Photoshop
              </div>
            </div>
            <div className="group p-5 md:p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <IllustratorIcon />
              </Suspense>
              <div className="absolute bottom-1 md:bottom-2 text-xs md:text-base left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                Illustrator
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default SkillsToolsSection;
