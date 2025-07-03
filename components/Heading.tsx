"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Props type for the Heading component
type HeadingProps = {
  text: string; // The heading text to display
  maxW?: string; // Optional max-width class for smaller screens
  mdmaxW?: string; // Optional max-width class for medium+ screens
};

// Container variants for staggered animation of children (letters)
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.06, // Delay between each child's animation start
    },
  },
};

// Animation variants for each character
const charVariants = {
  hidden: { opacity: 0, x: 50 }, // Initially invisible and shifted right
  visible: { opacity: 1, x: 0 }, // Animate to visible and original position
};

export default function Heading({
  text,
  maxW = "max-w-3xs",
  mdmaxW = "md:max-w-md",
}: HeadingProps) {
  const ref = useRef(null);
  // Detect if the heading is in viewport; animate only once when visible
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Global index to calculate animation delay per character across all words
  let globalCharIndex = 0;

  return (
    <motion.h2
      ref={ref}
      className={`text-4xl md:text-7xl font-bold flex flex-wrap leading-tight text-charcoal border-b border-charcoal ${maxW} ${mdmaxW}`}
      initial="hidden" // Initial state for the container
      animate={inView ? "visible" : "hidden"} // Animate when in view
      variants={containerVariants} // Container animation variants
      aria-label={text} // Accessibility label
    >
      {/* Split text by words */}
      {text.split(" ").map((word, wordIndex) => (
        // Each word is wrapped in a flex span for spacing
        <span key={wordIndex} className="flex mr-3">
          {/* Split word into individual characters */}
          {word.split("").map((char) => {
            // Calculate delay based on global char index for stagger
            const delay = globalCharIndex * 0.06;

            // Create motion span for each character with animation variants
            const charSpan = (
              <motion.span
                key={`${wordIndex}-${globalCharIndex}`}
                className="inline-block"
                variants={charVariants} // Use character animation variants
                transition={{
                  duration: 0.5, // Duration of each char animation
                  ease: "easeOut", // Easing function
                  delay, // Stagger delay based on index
                }}
              >
                {char}
              </motion.span>
            );

            globalCharIndex++; // Increment global char index for next char
            return charSpan;
          })}
        </span>
      ))}
    </motion.h2>
  );
}
