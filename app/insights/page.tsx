"use client";

import { motion } from "framer-motion";
import Heading from "@/components/Heading";

// Page heading text
const title = "Insights and News";

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Insights() {
  return (
    <section className="bg-white">
      <div className="mx-auto px-4 md:px-16 pt-20 flex flex-col items-center justify-center pb-4">
        {/* Page Title */}
        <div className="flex justify-center mt-12 md:mt-20">
          <Heading text={title} mdmaxW="md:max-w-2xl max-w-sm" />
        </div>

        {/* Animated Insight Cards Grid */}
        <div className="md:mt-24 w-full max-w-4xl flex flex-row justify-center gap-30 flex-wrap mt-12 md:-mt-0">
          {/* First Insight Card */}
          <motion.a
            href="https://www.linkedin.com/posts/yassinebenyacoub_%F0%9D%97%A0%F0%9D%97%AE%F0%9D%97%B7%F0%9D%97%BC%F0%9D%97%BF-%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81%F0%9D%97%BC%F0%9D%97%BB%F0%9D%97%B2-%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B2-activity-7313595226940407808-ff_p/"
            className="relative flex flex-col rounded-lg bg-white text-gray-700 cursor-pointer max-w-sm w-full"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={cardVariants}
          >
            {/* Card Image */}
            <div
              className="relative mx-4 h-50 overflow-hidden rounded-xl text-white bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.licdn.com/dms/image/v2/D4E22AQG6drIQxLAP3Q/feedshare-shrink_800/B4EZX8cGKvGYAg-/0/1743696981062?e=1754524800&v=beta&t=XihiUqFBz2zjcWoqkFIdEwklG8lYAZJqP7B2WRoT7N4')",
              }}
            ></div>

            {/* Card Content */}
            <div className="p-6 mt-2">
              <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                🚄 Major Milestone: The First Intercity Rail concession in
                France Awarded! 🚄
              </h5>
              <p className="font-sans text-base font-light leading-snug mt-4">
                We are delighted to share that the operator for France&apos;s
                first-ever Intercity rail concession has been selected, with the
                winning bid officially awarded and announced last month. This
                marks a historic step in the privatisation and modernisation of
                France&apos;s rail network, and we are incredibly proud to have
                played a key role in this transformative journey.
              </p>
            </div>
          </motion.a>

          {/* Second Insight Card */}
          <motion.a
            href="https://www.linkedin.com/posts/yassinebenyacoub_infrastructurefinance-urbandevelopment-sustainability-activity-7316471568811900928-Pozn/"
            className="relative flex flex-col rounded-lg bg-white text-gray-700 cursor-pointer max-w-sm w-full"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            variants={cardVariants}
          >
            {/* Card Image */}
            <div
              className="relative mx-4 h-50 overflow-hidden rounded-xl text-white bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.licdn.com/dms/image/v2/D5612AQHgaAgWFCVJow/article-cover_image-shrink_423_752/B56ZYlS6BVHEAo-/0/1744382485094?e=1756944000&v=beta&t=lAgExUR1Xb44ok0L9rdk16mI8Plal3NKPkOR0qPMjcs')",
              }}
            ></div>

            {/* Card Content */}
            <div className="p-6 mt-2">
              <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                🌍 Can small cities rethink how they finance sustainable
                infrastructure?
              </h5>
              <p className="font-sans text-base font-light leading-snug mt-4">
                Exploring the case of Osh, Kyrgyzstan, supported by AtkinsRéalis
                and EBRD, I discuss how cities beyond major urban centres can
                move past traditional grants and loans to unlock innovative
                financing mechanisms like municipal bonds, PPPs, and carbon
                credits.
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
