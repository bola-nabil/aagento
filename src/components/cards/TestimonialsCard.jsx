import React from "react";
import BackgroundImg from "../../assets/home/background-img.webp";
import { useAOS } from "../../hooks/useAOS";

const TestimonialsCard = ({ content, name, jobTitle, profileImg, animation }) => {
  useAOS();
  return (
    <div className="relative max-w-lg rounded-xl shadow-lg" data-aos={animation}>

      <img
        src={BackgroundImg}
        alt="card cover"
        className="w-full h-80 object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">

        <p className="text-2xl leading-relaxed">
          {content}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-sm opacity-80">{jobTitle}</p>
          </div>

          <img
            src={profileImg}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
