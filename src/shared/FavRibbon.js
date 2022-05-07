import React from "react";

function FavRibbon(props) {
  return (
    <div
      className="w-full bg-gold tracking-widest -rotate-45 absolute top-2 md:top-4 -left-16 md:-left-16 text-center"
      {...props}
    >
      <span className="text-transparent lg:text-white font-bold text-2xs md:text-base">
        Fav
      </span>
    </div>
  );
}

export default FavRibbon;
