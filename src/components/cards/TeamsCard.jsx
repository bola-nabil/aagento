import React from "react";
import { useAOS } from "../../hooks/useAOS";

const TeamsCard = ({personImg, name, jobTitle}) => {
    useAOS();
    return(
        <div className="text-white" data-aos="fade-up">
            <img src={personImg} alt={name} className="h-[300px] lg:h-[250px] w-[300px]"/>
            <h1 className="text-2xl pt-4 pb-2 font-bold">{name}</h1>
            <p className="opacity-70">{jobTitle}</p>
        </div>
    );
}

export default TeamsCard;