"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";

const title1 = "About Us Preview";
const title2 = "Services Preview";
const title3 = "Insights Preview";

export default function Index() {
  return (
    <div className="">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 object-[25%_25%] md:object-center object-cover w-full h-full z-0"
          autoPlay
          muted
          loop
          playsInline
          src="https://byconsulting.co/wp-content/uploads/2025/04/11468365-uhd_3840_2160_30fps.mp4"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Foreground Content */}
        <motion.div
          className="relative z-20 flex flex-col md:items-start items-center justify-center text-center text-white h-full px-4 md:ml-44"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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

          <motion.a
            href="/services"
            className="absolute mt-100 inline-block text-lg font-bold group overflow-hidden py-2"
          >
            <span className="relative z-10 text-white">Explore Services</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-center scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
          </motion.a>
        </motion.div>
        <div id="headerEnd" className="relative bottom-18 h-0 w-0" />
      </section>
      <div className="bg-white h-100">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
          <Heading text={title1} mdmaxW="md:max-w-3xl" />
          <motion.div
            className="text-base md:text-lg text-gray-600 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla
              fugiat dicta autem soluta alias hic minima praesentium maiores
              officiis!
            </p>
            <motion.a
              href="/services"
              className="relative inline-block text-lg font-bold group py-2"
            >
              <span className="relative z-10 text-charcoal">about</span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky origin-center scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div className="bg-white h-100">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
          <Heading text={title2} mdmaxW="md:max-w-3xl" />
          <motion.div
            className="text-base md:text-lg text-gray-600 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla
              fugiat dicta autem soluta alias hic minima praesentium maiores
              officiis!
            </p>
            <motion.a
              href="/services"
              className="relative inline-block text-lg font-bold group py-2"
            >
              <span className="relative z-10 text-charcoal">services</span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky origin-center scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          </motion.div>
        </div>
      </div>{" "}
      <div className="bg-white h-100">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
          <Heading text={title3} mdmaxW="md:max-w-3xl" />
          <motion.div
            className="text-base md:text-lg text-gray-600 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla
              fugiat dicta autem soluta alias hic minima praesentium maiores
              officiis!
            </p>
            <motion.a
              href="/services"
              className="relative inline-block text-lg font-bold group py-2"
            >
              <span className="relative z-10 text-charcoal">insights</span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky origin-center scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
