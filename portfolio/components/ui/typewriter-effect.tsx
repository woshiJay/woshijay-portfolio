"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-justify",
        className
      )}
    >
      {renderWords()}
    </div>
  );
};

export function TypewriterEffectJanky() {
  const words = [
    { text: "Data" },
    { text: "Scientist" },
    { text: "&" },
    { text: "Software" },
    { text: "Engineer" },
  ];

  return (
    <div className="flex flex-col items-start justify-start">
      <h1 className="text-neutral-600 dark:text-neutral-200 sm:text-base md:text-xl lg:text-2xl mb-5">
        Hi, I am Jay
      </h1>
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 sm:sm md:text-lg lg:text-xl mt-10">
        Made in Malaysia ®
      </p>
    </div>
  );
}