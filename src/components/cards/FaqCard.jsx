import React, { useState, memo } from "react";

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-white/20 rounded-xl p-5 mb-4 
                 hover:border-orange-500 transition-all duration-300"
      data-aos="fade-up"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h1 className="text-white text-[14px] sm:text-[18px] lg:text-lg font-semibold">
          {question}
        </h1>

        <div className="transition-transform duration-300">
          {open ? <MinusIcon /> : <PlusIcon />}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default memo(FaqCard);
