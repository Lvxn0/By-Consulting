"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Heading from "./Heading";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  // Define paths where footer should be shown
  const validPaths = ["/", "/about", "/services", "/insights", "/contact"];
  // Check if current path is not in valid paths
  const isNotFound = !validPaths.includes(pathname);

  // If on a page not in validPaths (e.g. 404), do not render footer
  if (isNotFound) return null;

  // If on /contact page, render a simplified footer with copyright only
  if (pathname === "/contact") {
    return (
      <footer className="relative w-full bg-white text-center">
        <div className="text-sm text-black opacity-60 -mt-1 md:mt-0">
          © {new Date().getFullYear()} BY Consulting. All rights reserved.
        </div>
      </footer>
    );
  }

  // For other valid pages, render the full footer
  return (
    <footer className="relative w-full overflow-hidden -mt-1 md:mt-0">
      {/* Background Image fixed behind content */}
      <div
        className="fixed inset-0 z-[-1] bg-cover transition-[background-position] duration-500 ease-out"
        style={{
          backgroundImage: "url('/Footer.jpg')",
          backgroundPosition: "20% 0%",
        }}
      />

      {/* Main footer content container */}
      <div className="w-full bg-white relative z-10 -mb-1 md:mb-0">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 py-20 px-4 md:px-16 md:pb-6">
          {/* Heading for the contact section */}
          <Heading text="Get in Contact" maxW="max-w-xs" mdmaxW="md:max-w-xl" />

          {/* Animated paragraph with fade-in and slide-up */}
          <motion.div
            className="text-base md:text-2xl text-gray-600 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            <p>
              We don’t just work on projects—we partner in your success. <br />
              Tell us what you need, and let’s make it happen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Parallax window style section with centered Contact Us button */}
      <div className="w-full h-[55vh] flex items-center justify-center relative z-10">
        <motion.button
          onClick={() => router.push("/contact")}
          aria-label="Go to Contact Page"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-black/30 text-white border-2 border-sky px-6 py-3 rounded-lg hover:bg-sky hover:text-charcoal transition-colors duration-300 text-md"
        >
          Contact Us
        </motion.button>

        {/* Gradient overlay mask to soften the background image */}
        <div className="pointer-events-none absolute inset-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent" />
      </div>

      {/* Bottom footer copyright bar with gradient fade */}
      <div className="w-full text-black text-center bg-gradient-to-t from-white to-transparent min-h-12 flex items-end justify-center relative z-10">
        <div className="text-sm opacity-60 pb-2">
          © {new Date().getFullYear()} BY Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
