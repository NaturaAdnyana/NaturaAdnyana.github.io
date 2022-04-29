import React from "react";
import Logo from "../assets/icons/Logo";

function LoadingPage(props) {
  return (
    <div className="absolute bg-black w-screen h-screen flex justify-center items-center">
      <Logo className="w-40 h-40" />
    </div>
  );
}

export default LoadingPage;
