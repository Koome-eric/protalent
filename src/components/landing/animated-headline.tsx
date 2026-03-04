"use client";

import { useEffect, useState } from "react";

const headlines = [
  "High-Paying Remote AI & Tech Roles",
  "Work With Elite Global Tech Companies",
  "Top 1% Engineers Wanted – Fully Remote",
  "Earn Globally. Work Remotely. Build the Future.",
];

export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setAnimate(true);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[3.5rem] sm:min-h-[4.5rem] flex items-center justify-center overflow-hidden">
      <h1
        className={`text-3xl sm:text-5xl md:text-5xl font-bold tracking-tight text-foreground
        transition-all duration-500
        ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {headlines[index]}
      </h1>
    </div>
  );
}