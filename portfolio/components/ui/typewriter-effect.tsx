"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { Button } from "./button";
import { Download } from "lucide-react";

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
        "text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-justify mb-2",
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
      <h1 className="text-neutral-600 dark:text-neutral-200 sm:text-base md:text-xl lg:text-2xl font-mono mb-5">
        Hi, I am Jay 👋
      </h1>
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 sm:sm md:text-md lg:text-lg font-mono my-5">
        Made in Malaysia 🇲🇾
      </p>
      <Button 
      variant="outline"
      size="lg"
      className="my-6 text-lg font-bold border-neutral-600 dark:border-neutral-200 text-neutral-600 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      asChild
    >
      <a href="https://drive.google.com/file/d/1mGyNvwwCFHw3J9f7OAE8LtQ1iOtgwBfU/view?usp=sharing" download>
        <Download className="mr-1 h-4 w-4 sm:h-5 sm:w-5" />
        Download Resume
      </a>
    </Button>
    </div>
  );
}