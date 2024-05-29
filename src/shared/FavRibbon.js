import React from "react";

function FavRibbon(props) {
  return (
    <div
      className="w-full bg-gold tracking-widest -rotate-45 absolute top-2 md:top-3 -left-16 md:-left-12 text-center"
      {...props}
    >
      <span className="text-transparent lg:text-white font-bold text-2xs md:text-2xs">
        MOST USED
      </span>
    </div>
  );
}

export default FavRibbon;
