import React from "react";
import { useData } from "../hooks/useData";
import featureImg4 from "../assets/features/features-4.avif";
import Github from "../assets/integration/github.avif";
import Chatgpt from "../assets/integration/chatgpt.webp";
import Aiagento from "../assets/integration/aiagento.png";
import Dropbox from "../assets/integration/dropbox.webp";
import Hangouts from "../assets/integration/hangouts.webp"
import Zendesk from  "../assets/integration/zendesk.avif";
import Discord from "../assets/integration/discord.png";
import Zapier from "../assets/integration/zapier.svg";
import Slack from "../assets/integration/slack.avif";
import FeatureCard from "./cards/FeatureCard";
import { useAOS } from "../hooks/useAOS";


const Features = () => {
    useAOS();
    const {content} = useData();
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 py-12">
            {content?.features.map((card) => (
                <FeatureCard 
                    key={card.id}
                    Img={`/src/assets/features/${card.img}`} 
                    title={card.title} 
                    description={card.description}
                    animation="fade-up"
                />
            ))}
        </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2 pb-[150px]">

            <div className="flex flex-col justify-center h-full" data-aos="fade-up">

                <div className="relative w-64 h-64 mx-auto my-6">
                    <img 
                        src={Aiagento}
                        alt="center"
                        className="w-20 h-20 bg-white p-3 rounded-xl absolute left-1/2 top-1/2 
                        -translate-x-1/2 -translate-y-1/2 z-10"
                    />

                    {[
                        Github, Chatgpt, Discord, Dropbox, Slack, Hangouts, Zendesk, Zapier,
                    ].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="features content"
                            className="w-14 h-14 bg-white p-3 rounded-xl absolute left-1/2 top-1/2 
                            -translate-x-1/2 -translate-y-1/2 animate-orbit"
                            style={{ animationDelay: `${index * 0.5}s` }}
                        />
                    ))}
                </div>

                <h1 className="text-white text-lg lg:text-2xl font-bold py-4">Seamless Integrations</h1>
                <p className="text-gray-100">
                    Aiagento integrates with popular business tools like CRM, ERP, and cloud storage solutions.
                </p>
            </div>

            <div className="flex flex-col justify-center h-full" data-aos="fade-up">

                <img src={featureImg4} alt="ui" className="w-[350px] pb-4" />

                <h1 className="text-white text-lg lg:text-2xl font-bold py-2">
                    User-friendly Interface
                </h1>

                <p className="text-gray-100">
                    Aiagento intuitive interface makes advanced AI accessible.
                </p>
            </div>

        </div>
        </>
    );
}
 
export default Features;
