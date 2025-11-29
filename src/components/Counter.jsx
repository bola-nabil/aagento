import React, { useEffect, useState, useRef } from "react";

const Counter = ({ end, sign }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let start = 1;

          const duration = 1500;
          const step = end / (duration / 16);

          const interval = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="text-4xl lg:text-6xl font-bold">
      {count}{sign}
    </span>
  );
};

export default Counter;
