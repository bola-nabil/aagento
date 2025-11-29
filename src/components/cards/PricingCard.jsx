import React from "react";
import GetStarted from "../Buttons/GetStarted";

const PricingCard = ({ plan, price, animation }) => {
  const features = [
    "Access to core AI tools",
    "Up to 3 users",
    "Basic analytics",
    "Standard support",
    "Monthly usage reports",
    "Limited data storage (10GB)",
  ];

  return (
    <div
      className="relative p-8 rounded-xl bg-[#1a120d]/95 border border-[#3a2418] shadow-lg"
      data-aos={animation}
    >
      <div>
        <div className="pb-4">
          <h1 className="text-gray-100 text-[18px]">{plan} Plan</h1>
          <div className="flex items-end gap-1">
            <p className="text-white text-3xl font-bold">{price}/</p>
            <span className="text-gray-100 text-[18px]">month</span>
          </div>
        </div>

        <div className="py-6">
          {features.map((text, i) => (
            <div key={i} className="flex items-start gap-3 pt-2">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-orange-500 fill-current flex-shrink-0 mt-[3px]"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 
                12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 
                0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 
                32.8-12.5 45.3 0z" />
              </svg>

              <p className="text-gray-100">{text}</p>
            </div>
          ))}
        </div>

        <GetStarted title="Buy Now" path="/" />
      </div>
    </div>
  );
};

export default PricingCard;
