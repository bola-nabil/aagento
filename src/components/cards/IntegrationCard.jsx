import React from "react";

const IntegrationCard = ({cardImg, title, description}) => {
    return(
        <div className="text-white">
            <div className="bg-white w-[80px] h-[80px] flex justify-center items-center rounded-lg">
                <img src={cardImg} alt={title} className="w-10 h-10"/>
            </div>
            <h1 className="text-lg lg:text-2xl font-bold py-3">{title}</h1>
            <p className="opacity-70">{description}</p>
        </div>
    );
}

export default IntegrationCard;