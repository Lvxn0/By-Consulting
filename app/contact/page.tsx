"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import Heading from "@/components/Heading";

// Page title and subtitle
const title = "Your Vision, Our Expertise.";
const subtext = "Let's Build Something Great Together!";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Handles form submission via Formspree API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      setLoading(true);

      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error(
          result?.errors?.[0]?.message || "Something went wrong. Try again."
        );
      }
    } catch {
      toast.error("Failed to send message. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">
      {/* Global toast notifications */}
      <Toaster position="top-center" />

      {/* Full-width hero image with dark overlay */}
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="/ContactHero.jpg"
          alt="Yellow Trolleybus"
          fill
          className="object-cover md:object-[0%_65%]"
          priority
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

      {/* Main content area */}
      <div className="max-w-6xl mx-auto px-4 md:px-16 py-20">
        {/* Heading component */}
        <Heading text={title} mdmaxW="md:max-w-lg" />

        {/* Animated subtitle word-by-word and letter-by-letter */}
        <motion.h1
          className="text-md md:text-3xl font-bold text-sky mb-10 max-w-sm md:max-w-xl pt-2 md:pt-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {subtext.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-1 md:mr-3">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{
                    duration: 0.5,
                    delay: (wordIndex * 10 + charIndex) * 0.06,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Two-column layout: left info, right contact form */}
        <div className="flex flex-col md:flex-row items-stretch gap-16 h-auto md:h-[600px] pt-16 md:pt-24">
          {/* Left: Text and social links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 h-full flex flex-col justify-center space-y-6"
          >
            <p className="text-xl text-gray-800 leading-relaxed">
              We don’t just work on projects—we partner in your success.
              <br />
              Tell us what you need, and let’s make it happen.
            </p>

            <h2 className="text-2xl font-bold text-charcoal text-center md:text-left">
              Connect with us
            </h2>

            {/* Social icons */}
            <div className="flex space-x-6 mt-2 text-charcoal justify-center md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky hover:scale-[1.1] transition-all duration-300"
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://linkedin.com/in/yassinebenyacoub/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky hover:scale-[1.1] transition-all duration-300"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form with motion + Formspree handler */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 h-full flex flex-col justify-center space-y-8"
          >
            {/* Name input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-charcoal mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-charcoal focus:border-sky focus:outline-none p-1 text-black transition-all duration-300 ease-in-out transform focus:scale-[1.02] caret-black"
              />
            </div>

            {/* Email input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-charcoal mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-charcoal focus:border-sky focus:outline-none p-1 text-black transition-all duration-300 ease-in-out transform focus:scale-[1.02] caret-black"
              />
            </div>

            {/* Message input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-charcoal mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b-2 border-charcoal focus:border-sky focus:outline-none p-1 text-black transition-all duration-300 ease-in-out transform focus:scale-[1.02] resize-none caret-black"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-charcoal text-white px-6 py-3 rounded-lg hover:bg-sky hover:text-charcoal hover:scale-[1.05] transition-all duration-300 w-fit"
            >
              {loading ? "Sending..." : "Let's Get Started"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
