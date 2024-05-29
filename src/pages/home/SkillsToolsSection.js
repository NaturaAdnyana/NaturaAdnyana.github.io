import React from "react";
import { motion } from "framer-motion";
import SkillBox from "../../shared/SkillBox";

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

const skills = [
  { name: "HTML5", isFav: false, icon: <HtmlIcon className="w-full" /> },
  { name: "CSS3", isFav: false, icon: <CssIcon className="w-full" /> },
  { name: "Javascript", isFav: true, icon: <JsIcon className="w-full" /> },
  { name: "PHP", isFav: false, icon: <PhpIcon className="w-full" /> },
  { name: "SASS", isFav: false, icon: <SassIcon className="w-full" /> },
  {
    name: "Bootstrap",
    isFav: false,
    icon: <BootstrapIcon className="w-full" />,
  },
  {
    name: "Tailwind",
    isFav: true,
    icon: <TailwindCssIcon className="w-full" />,
  },
  { name: "ReactJS", isFav: true, icon: <ReactIcon className="w-full" /> },
  { name: "Redux", isFav: false, icon: <ReduxIcon className="w-full" /> },
  { name: "Laravel", isFav: false, icon: <LaravelIcon className="w-full" /> },
  { name: "VSCode", isFav: true, icon: <VSCodeIcon /> },
  { name: "Git", isFav: true, icon: <GitIcon /> },
  { name: "Figma", isFav: false, icon: <FigmaIcon /> },
  { name: "Photoshop", isFav: false, icon: <PhotoshopIcon /> },
  { name: "Illustrator", isFav: false, icon: <IllustratorIcon /> },
];

function SkillsToolsSection() {
  return (
    <>
      <section className="text-white bg-shadow py-10 md:pt-24 md:pb-14">
        <article className="md:pr-16 container mx-auto md:w-9/12 px-6">
          <motion.div
            className="pt-2 pb-10 md:pb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mx-auto">
              <span className="text-5xl md:text-8xl text-gradient">
                SKILLS & TOOLS
              </span>
              <br />
              <span className="tracking-widest">
                Mastering tools without creativity is nothing.
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:p-14">
            {skills.map(({ name, isFav, icon }) => {
              return (
                <SkillBox key={name} name={name} isFav={isFav}>
                  {icon}
                </SkillBox>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}

export default SkillsToolsSection;
