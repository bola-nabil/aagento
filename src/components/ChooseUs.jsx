import React, { lazy, Suspense } from "react";
import Protection_1 from "../assets/protection/protection-1.avif";
import Protection_2 from "../assets/protection/protection-2.avif";
import { useData } from "../hooks/useData";
import { faCheck, faGear, faShield, faChartPie, faLink, faHeadset } from "@fortawesome/free-solid-svg-icons";

const ChooseUsCard = lazy(() => import("./cards/ChooseUsCard"));
const ProtectionCard = lazy(() => import("./cards/ProtectionCard"));

const iconMap = {
    faCheck,
    faGear,
    faShield,
    faChartPie,
    faLink,
    faHeadset,
};

const ChooseUs = () => {
    const { content } = useData();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 pb-[180px]">
                {content?.chooseUs?.map((card) => (
                    <ChooseUsCard
                        key={card.id}
                        icon={iconMap[card.icon]}
                        title={card.title}
                        description={card.description}
                        animation="fade-up"
                    />
                ))}
            </div>

            <ProtectionCard
                protectionImg={Protection_1}
                sectionTitle="PROTECTION"
                title="Advanced Protection for Data"
                description="Empower your business with cutting-edge AI technology that transforms raw data into actionable insights."
            />

            <ProtectionCard
                protectionImg={Protection_2}
                sectionTitle="PROGRESS"
                title="Data Security at Every Step"
                description="Safeguard your data with Aavo’s advanced security measures, ensuring peace of mind every step of the way."
                design="flex-row-reverse"
            />
        </Suspense>
    );
};

export default ChooseUs;
