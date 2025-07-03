"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Define the navigation items for the menu
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights and News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname(); // Get current route path
  const isHome = pathname === "/"; // Check if we are on the home page

  // Collect all valid navigation paths
  const validPaths = navItems.map((item) => item.href);
  // Check if current path is NOT in the navigation (like 404 or unknown pages)
  const isNotFound = !validPaths.includes(pathname);

  // State to toggle mobile menu open/closed
  const [mobileOpen, setMobileOpen] = useState(false);
  // State to detect if user is on mobile viewport
  const [isMobile, setIsMobile] = useState(false);
  // State to track if user has scrolled past the headerEnd element (used on homepage)
  const [scrolledPastButton, setScrolledPastButton] = useState(false);

  // Detect window resize and set isMobile based on max-width 767px
  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll listener to update scrolledPastButton state only on homepage
  useEffect(() => {
    // If not on home, always consider scrolledPastButton true (header is sticky with bg)
    if (!isHome) {
      setScrolledPastButton(true);
      return;
    }

    // Handler checks if the element with id "headerEnd" is above viewport top
    const onScroll = () => {
      const btn = document.getElementById("headerEnd");
      if (!btn) return;

      const btnTop = btn.getBoundingClientRect().top;
      setScrolledPastButton(btnTop <= 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // If on a page not in navigation, do not render the header at all
  if (isNotFound) return null;

  // Determine if the header should be transparent (only on home and before scrolling past button)
  const isTransparent = isHome && !scrolledPastButton;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${
          // Mobile styles:
          // If scrolled past or not home, show white bg with charcoal text and subtle shadow
          // Otherwise transparent bg with white text
          isMobile
            ? scrolledPastButton || !isHome
              ? "bg-white text-charcoal shadow-md shadow-black/10"
              : "bg-transparent text-white"
            : ""
        }
        ${
          // Desktop styles for md+ screens:
          // Transparent bg and white text if isTransparent, else white bg with black text and shadow
          !isMobile
            ? isTransparent
              ? "md:bg-transparent md:text-white md:shadow-none"
              : "md:bg-white md:text-black md:shadow-md md:shadow-black/10"
            : ""
        }
        ${
          // Mobile backdrop blur effect only when menu is open or not on home page
          isMobile && (mobileOpen || !isHome) ? "backdrop-blur-md" : ""
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - links to homepage */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="The Hub Transport Advisory"
            width={160}
            height={40}
            className={`object-contain transition-all duration-300 ${
              isMobile
                ? scrolledPastButton || !isHome
                  ? ""
                  : "brightness-0 invert" // invert logo colors on mobile when transparent header
                : isTransparent
                ? "brightness-0 invert" // invert logo colors on desktop transparent header
                : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation Links - hidden on mobile */}
        <nav
          className={`hidden md:flex gap-6 text-md font-bold py-2 transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-charcoal"
          }`}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative group">
              <span>{item.label}</span>
              {/* Animated underline on hover */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 transform-gpu ${
                  isTransparent ? "bg-white" : "bg-sky"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          className={`md:hidden z-50 transition duration-300 ${
            isMobile
              ? scrolledPastButton || !isHome
                ? "text-charcoal"
                : "text-white"
              : isHome
              ? "text-white"
              : "text-charcoal"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {/* Toggle between hamburger and close icon */}
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Divider line under header only visible on md+ */}
      <div className="md:max-w-6xl md:mx-auto md:border-b md:border-white/20" />

      {/* Mobile Navigation Menu - slides down when open */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen
            ? "max-h-96 opacity-100 border-b border-white/10 backdrop-blur-md"
            : "max-h-0 opacity-0"
        }`}
        style={{
          // Background white when scrolled or not on home, else transparent
          backgroundColor:
            isMobile && (scrolledPastButton || !isHome) ? "white" : undefined,
        }}
      >
        <nav
          className={`flex flex-col gap-3 px-4 py-3 text-lg font-semibold text-center ${
            isMobile && (scrolledPastButton || !isHome)
              ? "text-charcoal"
              : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)} // Close menu on nav click
              className="px-2 py-1 hover:underline transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
