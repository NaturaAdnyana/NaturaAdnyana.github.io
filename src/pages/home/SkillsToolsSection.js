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

function SkillsToolsSection() {
  return (
    <>
      <section className="text-white bg-shadow py-10 md:pt-24 md:pb-14">
        <article className="md:pr-16 container mx-auto md:w-11/12 px-6">
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
            <SkillBox name="HTML5" isFav="true">
              <HtmlIcon className="w-full" />
            </SkillBox>
            <SkillBox name="CSS3" isFav="true">
              <CssIcon className="w-full" />
            </SkillBox>
            <SkillBox name="Javascript" isFav="true">
              <JsIcon className="w-full" />
            </SkillBox>
            <SkillBox name="PHP">
              <PhpIcon className="w-full" />
            </SkillBox>
            <SkillBox name="SASS">
              <SassIcon className="w-full" />
            </SkillBox>
            <SkillBox name="Bootstrap">
              <BootstrapIcon className="w-full" />
            </SkillBox>
            <SkillBox name="Tailwind" isFav="true">
              <TailwindCssIcon className="w-full" />
            </SkillBox>
            <SkillBox name="ReactJS" isFav="true">
              <ReactIcon className="w-full" />
            </SkillBox>
            <SkillBox name="Redux">
              <ReduxIcon className="w-full" />
            </SkillBox>
            <SkillBox name="Laravel">
              <LaravelIcon className="w-full" />
            </SkillBox>
            <SkillBox name="VSCode" isFav="true">
              <VSCodeIcon />
            </SkillBox>
            <SkillBox name="Git" isFav="true">
              <GitIcon />
            </SkillBox>
            <SkillBox name="Figma">
              <FigmaIcon />
            </SkillBox>
            <SkillBox name="Photoshop">
              <PhotoshopIcon />
            </SkillBox>
            <SkillBox name="Illustrator">
              <IllustratorIcon />
            </SkillBox>
          </div>
        </article>
      </section>
    </>
  );
}

export default SkillsToolsSection;
