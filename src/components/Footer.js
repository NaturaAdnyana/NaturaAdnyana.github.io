import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo";

function Footer() {
  return (
    <>
      <div className="hidden md:flex items-center bg-black text-white bg-footer bg-b-bar px-24 py-5">
        <div className="grow text-center">
          &copy; 2022 by{" "}
          <Link className="underline" to="/contact">
            Natura Adnyana.
          </Link>
        </div>
        <div className="grow-0 bg-circle-shadow p-3">
          <Logo className="w-14 h-14" />
        </div>
        <div className="grow text-center">
          Visit how this page is made{" "}
          <a
            className="underline"
            href="https://github.com/NaturaAdnyana/NaturaAdnyana.github.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            here.
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
