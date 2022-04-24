import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="lamp-light px-24 pt-32 pb-10">
        &copy; 2022 Made by{" "}
        <Link className="underline" to="/contact">
          Natura Adnyana
        </Link>
      </div>
    </>
  );
}

export default Footer;
