import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import GetStarted from "../Buttons/GetStarted";
import { useAOS } from "../../hooks/useAOS";

const securityChecklist = [
    "Regulatory Compliance: Meets GDPR",
    "Multi-factor authentication for added security.",
    "24/7 Monitoring: Continuous monitoring",
];

const ProtectionCard = ({ protectionImg, sectionTitle, title, description, design = "" }) => {
    useAOS();

    return (
        <div className={`flex flex-col md:flex-row ${design} items-center gap-10 md:gap-16 py-20`}>
            <div className="max-w-lg">
                <p className="text-[rgb(255,74,2)] text-sm font-semibold pb-2" data-aos="fade-up">
                    {sectionTitle}
                </p>

                <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-wide pb-4 leading-tight" data-aos="fade-up">
                    {title}
                </h1>

                <p className="text-gray-100 leading-relaxed" data-aos="fade-up">
                    {description}
                </p>

                <div className="py-8 space-y-3" data-aos="fade-up">
                    {securityChecklist.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCheck} className="text-[rgb(255,74,2)] text-lg" />
                            <p className="text-gray-100">{item}</p>
                        </div>
                    ))}
                </div>

                <GetStarted title="Get Started" path="contact" />
            </div>

            <img
                src={protectionImg}
                alt={title}
                className="w-full max-w-[500px] sm:w-[300px] rounded-xl"
                data-aos="fade-up"
            />
        </div>
    );
};

export default ProtectionCard;
