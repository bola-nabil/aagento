import React from "react";

const FeatureCard = ({ Img, title, description, animation }) => {
    return (
        <div data-aos={animation}>
            <div className="flex justify-center items-center">
                <img src={Img} alt={title} className="mx-auto" />
            </div>
            <div className="pt-4 text-center md:text-left">
                <h1 className="text-white text-lg lg:text-2xl font-bold py-4">{title}</h1>
                <p className="text-gray-100">{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;
