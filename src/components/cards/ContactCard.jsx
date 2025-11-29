import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ContactCard = ({ icon, title, details, contactLink }) => {
  return (
    <div>
      <Link to={contactLink} className="flex items-center gap-4 py-4">
        <div className="relative w-12 h-12 rounded-lg flex items-center justify-center shadow">
          <div className="absolute inset-0 bg-gradient-to-b from-[#7c2d12] via-[#8b2c0f] to-[#2a1208] rounded-lg"></div>
          <FontAwesomeIcon icon={icon} className="text-orange-500 z-10" />
        </div>

        <div>
          <h1 className="font-bold text-2xl text-gray-100">{title}</h1>
          <p className="opacity-70 text-lg text-gray-300">{details}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;
