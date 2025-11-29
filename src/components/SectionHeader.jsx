import React from "react";

const SectionHeader = ({ section, title, description }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center text-center py-10">
      <div
        className="rounded-full px-5 py-1 
        bg-gradient-to-r from-[#7c2d12] via-[#8b2c0f] to-[#2a1208] 
        text-orange-500 font-semibold shadow-md mb-4"
      >
        {section}
      </div>

      <h1 className="text-3xl lg:text-5xl pb-8">{title}</h1>

      <p className="text-[18px] opacity-70">{description}</p>
    </div>
  );
};

export default SectionHeader;
