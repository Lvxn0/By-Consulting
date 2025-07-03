"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "@/components/Heading";

// Static content used across sections
const title = "About us";

const paragraph1 = `At BY Consulting, we empower cities facing mounting financial and environmental pressures to accelerate their transition toward low-emission urban mobility—without compromise. We specialise in delivering robust technical feasibility studies, business case analysis, and transaction advisory services in the evolving world of electric mobility, with a strong focus on in-motion charging (IMC) trolleybuses.`;

const paragraph2 = `By leveraging existing light infrastructure and aligning projects with the priorities of development banks and infrastructure investors, we help cities act on the climate urgency while facilitating the financing and funding of their transit ambitions—turning bold visions into viable, scalable realities.`;

const vision = `To become the world’s most trusted advisory firm for sustainable urban mobility—enabling cities to leapfrog into a cleaner, smarter future using transformative electric transit technologies and inclusive financing solutions.`;

const coreValues = [
  {
    title: "Sustainability-Driven",
    description:
      "We champion climate action through practical, scalable mobility solutions tailored to urban realities.",
  },
  {
    title: "Integrity & Independence",
    description:
      "Our advice is always objective, technically grounded, and rooted in the best interests of the public and the planet.",
  },
  {
    title: "Innovation with Impact",
    description:
      "We identify and deploy cutting-edge technologies that offer tangible social, economic, and environmental benefits.",
  },
  {
    title: "Equity & Accessibility",
    description:
      "We believe sustainable transit should be inclusive—serving all urban citizens regardless of geography or income.",
  },
  {
    title: "Partnership & Empowerment",
    description:
      "We build capacity within city teams, fostering collaboration across public, private, and financial sectors.",
  },
];

const expertise = `With over two decades of hands-on experience in electric mobility—spanning EVs, charging networks, e-taxis, e-buses, and in particular, in-motion charging trolleybuses—BY Consulting brings unparalleled depth to both strategy and implementation. Our team combines deep technical fluency with sharp commercial acumen, offering cities a full-spectrum advisory service: from feasibility studies and procurement design to investor-grade due diligence and financing support.`;

const citiesGainItems = [
  "De-risked Decisions: We guide cities with rigorously validated technical and financial insights.",
  "Financing Confidence: Our expertise helps align projects with the expectations of multilateral lenders and infrastructure investors.",
  "Long-Term Resilience: We future-proof investments by ensuring scalability, environmental compliance, and operational sustainability.",
  "Strategic Advantage: Cities become early adopters of next-generation transit systems, setting benchmarks for others to follow.",
];

const trackRecordText = `A distinguished portfolio of global transit projects backed by senior experts in infrastructure finance, electric mobility engineering, and urban planning. Detailed profiles and references available upon request.`;

export default function About() {
  return (
    <section className="relative w-full bg-white">
      {/* Top hero image with overlay */}
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="/AboutHero.jpg"
          alt="Yellow Bus"
          fill
          className="object-cover md:object-[0%_60%]"
          priority
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
        <Heading text={title} />
        <motion.div
          className="text-base md:text-lg text-gray-600 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </motion.div>
      </div>

      {/* Vision Statement Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
        <Heading text="Our Vision" />
        <motion.div
          className="text-base md:text-lg text-gray-600 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>{vision}</p>
        </motion.div>
      </div>

      {/* Core Values Grid Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10 py-20 px-4 md:px-16">
        <Heading text="Core Values" mdmaxW="md:max-w-lg" />
        <motion.div
          className="grid md:grid-cols-2 gap-x-20 gap-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* Left column: core values at indexes 0, 2, 4 */}
          <div className="flex flex-col gap-12">
            {[0, 2, 4].map((i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-charcoal">
                  {coreValues[i].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  {coreValues[i].description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column: core values at indexes 1, 3 */}
          <div className="flex flex-col gap-12 md:mt-16">
            {[1, 3].map((i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-charcoal">
                  {coreValues[i].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  {coreValues[i].description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
        <Heading text="Our Expertise" maxW="max-w-2xs" mdmaxW="md:max-w-xl" />
        <motion.div
          className="text-base md:text-lg text-gray-600 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>{expertise}</p>
        </motion.div>
      </div>

      {/* What Cities Gain Section (bullet list) */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10 py-20 px-4 md:px-16">
        <Heading text="What Cities Gain with Us" mdmaxW="md:max-w-lg" />
        <motion.ul className="list-disc list-inside text-gray-600 text-base md:text-lg space-y-6">
          {citiesGainItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Track Record Section */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16">
        <Heading
          text="Track Record & Team Leadership"
          maxW="max-w-xs"
          mdmaxW="md:max-w-2xl"
        />
        <motion.div
          className="text-base md:text-lg text-gray-600 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>{trackRecordText}</p>
        </motion.div>
      </div>
    </section>
  );
}
