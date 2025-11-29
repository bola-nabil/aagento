import React from "react";
import SectionHeader from "./SectionHeader";
import GetStarted from "./Buttons/GetStarted";
import BackgroundCover from "../assets/home/background-img.webp";

const Cta = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${BackgroundCover})`,
        backgroundColor: "#1a120d",
      }}
    >
      <div className="max-w-4xl mx-auto text-white text-center px-4">
        <SectionHeader
          section="CTA"
          title="Ready to Get Started?"
          description="Empower your business with cutting-edge AI technology that transforms raw data into actionable insights"
        />

        <div className="flex items-center justify-center mt-6">
          <GetStarted title="Book a Demo" path="contact" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
