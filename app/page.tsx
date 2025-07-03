"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video that fills the screen */}
        <video
          className="absolute inset-0 object-[25%_25%] md:object-center object-cover w-full h-full z-0"
          autoPlay
          muted
          loop
          playsInline
          src="/HeroVid.mp4"
        />

        {/* Semi-transparent dark overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Foreground content container with fade-in and slide-up animation */}
        <motion.div
          className="relative z-20 flex flex-col md:items-start items-center justify-center text-center text-white h-full px-4 md:ml-44"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main heading with typewriter effect cycling through phrases */}
          <h1 className="text-3xl md:text-7xl md:text-left font-bold max-w-4xl mb-6 leading-snug">
            <span className="text-white-500">
              <Typewriter
                words={[
                  "Balancing Cost and Carbon: Reinventing Trolleybus Networks",
                  "Rewiring Urban Transit: Trolleybuses for a Net-Zero Future",
                  "Trolleybuses Recharged: A Cost-Effective Path to Net Zero",
                  "The Third Way: Sustainable Urban Transit with In-Motion Charging",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={25}
                delaySpeed={1500}
              />
            </span>
          </h1>

          {/* Call-to-action link styled with an underline animation on hover */}
          <motion.a
            href="/services"
            className="absolute mt-100 inline-block text-lg font-bold group overflow-hidden py-2"
          >
            <span className="relative z-10 text-white">Explore Services</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-center scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
          </motion.a>
        </motion.div>

        {/* Invisible spacer div for anchoring header change */}
        <div id="headerEnd" className="relative bottom-18 h-0 w-0" />
      </section>
    </div>
  );
}
