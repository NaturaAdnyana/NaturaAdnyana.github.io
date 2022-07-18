import React from "react";
import { Link } from "react-router-dom";
import OutlineBtn from "../shared/OutlineBtn";
import HomeIcon from "../assets/icons/HomeIcon";

function NotFound() {
  return (
    <section className="text-white h-screen">
      <article className="flex flex-col space-y-9 justify-center items-center h-full">
        <h1 className="text-center">
          <span className="text-10xl font-bold block glitch">404</span>
          <span className="text-5xl md:text-9xl">NOT FOUND</span>
        </h1>
        <Link to="/">
          <OutlineBtn hint="Go to Home">
            <HomeIcon className="w-6 h-6 ml-2" />
          </OutlineBtn>
        </Link>
      </article>
    </section>
  );
}

export default NotFound;
