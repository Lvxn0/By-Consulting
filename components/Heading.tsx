"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type HeadingProps = {
  text: string;
  maxW?: string;
  mdmaxW?: string;
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Heading({
  text,
  maxW = "max-w-3xs",
  mdmaxW = "md:max-w-md",
}: HeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  let globalCharIndex = 0;

  return (
    <motion.h2
      ref={ref}
      className={`text-4xl md:text-7xl font-bold flex flex-wrap leading-tight text-charcoal border-b border-charcoal ${maxW} ${mdmaxW}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      aria-label={text}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="flex mr-3">
          {word.split("").map((char) => {
            const delay = globalCharIndex * 0.06;
            const charSpan = (
              <motion.span
                key={`${wordIndex}-${globalCharIndex}`}
                className="inline-block"
                variants={charVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay,
                }}
              >
                {char}
              </motion.span>
            );
            globalCharIndex++;
            return charSpan;
          })}
        </span>
      ))}
    </motion.h2>
  );
}
