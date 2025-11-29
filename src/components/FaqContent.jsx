import React, { lazy, useMemo } from "react";
import { useData } from "../hooks/useData";

const FaqCard = lazy(() => import("./cards/FaqCard"));

const FaqContent = () => {
  const { content } = useData();

  const faqItems = useMemo(() => content?.faq || [], [content]);

  return (
    <div className="pb-[180px]">
      {faqItems.map((card) => (
        <FaqCard key={card.id} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default FaqContent;
