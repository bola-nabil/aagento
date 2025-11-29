import React from "react";
import { useData } from "../hooks/useData";
import PricingCard from "./cards/PricingCard";

const PricingContent = () => {
  const { content } = useData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-[120px]">
      {content?.pricing.map((card) => (
        <PricingCard
          key={card.id}
          plan={card.plan}
          price={card.price}
          animation="fade-up"
        />
      ))}
    </div>
  );
};

export default PricingContent;
