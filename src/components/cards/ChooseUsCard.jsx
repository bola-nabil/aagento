import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAOS } from "../../hooks/useAOS";

const ChooseUsCard = ({ icon, title, description, animation }) => {
  useAOS();

  return (
    <div className="p-5" data-aos={animation}>
      
      <div className="relative w-12 h-12 rounded-lg flex justify-center items-center">
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#7c2d12] via-[#8b2c0f] to-[#2a1208] opacity-95 rounded-lg"></div>

        <FontAwesomeIcon icon={icon} className="relative z-10 text-white" />
      </div>

      <h1 className="text-white text-lg lg:text-2xl font-bold pt-4 pb-2">
        {title}
      </h1>

      <p className="text-gray-100">{description}</p>
    </div>
  );
};

export default ChooseUsCard;
