import React from "react";
import { Link } from "react-router-dom";

const ArrowIcon = () => (
  <svg
    className="w-3 h-3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="currentColor"
  >
    <path d="M278.6 233.4c12.5 12.5..."></path>
  </svg>
);

const GetStarted = ({ title, path }) => {
  return (
    <Link to={`/${path}`} aria-label={`go to ${path}`}>
      <div className="
          group flex items-center gap-2 
          p-2 rounded-lg w-fit shadow 
          bg-white text-black 
          transition-all duration-300
          hover:bg-[rgb(255,74,2)] hover:text-white
      ">
        <div
          className="
            w-6 h-6 rounded-full p-2 flex justify-center items-center 
            transition-all duration-300
            bg-[rgb(255,74,2)] text-white
            group-hover:bg-white group-hover:text-[rgb(255,74,2)]
          "
        >
          <ArrowIcon />
        </div>

        <h1 className="transition-all duration-300">{title}</h1>
      </div>
    </Link>
  );
};

export default GetStarted;
