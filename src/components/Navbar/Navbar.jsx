import React, { useState } from "react";
import LogoImg from "../../assets/home/logo.avif";
import Navlinks from "./Navlinks";
import GetStarted from "../Buttons/GetStarted";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-5 lg:px-24 py-4 z-50 bg-transparent">

       <Link to="/">
        <div className="logo flex items-center gap-2">
          <img src={LogoImg} alt="logo" className="w-10 h-10 max-h-full object-contain" />
          <h1 className="text-white text-3xl">aagento</h1>
        </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Navlinks />
          <GetStarted title="Get Started" path="contact" />
        </div>

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="menu of navbar"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </nav>

      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-black/95 text-white flex flex-col
        text-2xl transition-all duration-300 z-50 shadow-lg
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex items-center justify-between w-full px-5 py-4 border-b border-white/20">
          <div className="flex items-center gap-2">
            <img src={LogoImg} alt="logo" className="w-10 h-10" />
            <h1 className="text-white text-2xl">aiagento</h1>
          </div>

          <button className="text-white text-3xl" onClick={() => setOpen(false)} aria-label="open menu">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 mt-6 pb-8">
          <Navlinks isMobile={true} closeMenu={() => setOpen(false)} />
          <GetStarted title="Get Started" path="contact" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
