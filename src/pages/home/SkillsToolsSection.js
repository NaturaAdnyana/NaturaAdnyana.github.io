import React, { Suspense } from "react";

import ImgLazyLoading from "../../components/ImgLazyLoading";

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
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <Suspense fallback={<ImgLazyLoading />}>
                <HtmlIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <Suspense fallback={<ImgLazyLoading />}>
                <CssIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <Suspense fallback={<ImgLazyLoading />}>
                <JsIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <PhpIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <SassIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <BootstrapIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <Suspense fallback={<ImgLazyLoading />}>
                <TailwindCssIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <Suspense fallback={<ImgLazyLoading />}>
                <ReactIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <ReduxIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <LaravelIcon className="w-full" />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <div className="w-full bg-black tracking-widest -rotate-45 absolute top-3 -left-20 text-center">
                <span className="font-bold">Fav</span>
              </div>
              <Suspense fallback={<ImgLazyLoading />}>
                <VSCodeIcon />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <GitIcon />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <FigmaIcon />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <PhotoshopIcon />
              </Suspense>
            </div>
            <div className="p-10 rounded-md skill-card-bg shadow-inner relative overflow-hidden">
              <Suspense fallback={<ImgLazyLoading />}>
                <IllustratorIcon />
              </Suspense>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default SkillsToolsSection;
