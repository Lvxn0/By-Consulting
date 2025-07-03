"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights and News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const validPaths = navItems.map((item) => item.href);
  const isNotFound = !validPaths.includes(pathname);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolledPastButton, setScrolledPastButton] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setScrolledPastButton(true);
      return;
    }

    const onScroll = () => {
      const btn = document.getElementById("headerEnd");
      if (!btn) return;

      const btnTop = btn.getBoundingClientRect().top;
      setScrolledPastButton(btnTop <= 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (isNotFound) return null;

  const isTransparent = isHome && !scrolledPastButton;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${
          // Mobile styles: bg/text based on scroll state
          isMobile
            ? scrolledPastButton || !isHome
              ? "bg-white text-charcoal shadow-md shadow-black/10"
              : "bg-transparent text-white"
            : ""
        }
        ${
          // Desktop styles: only on md+ screens
          !isMobile
            ? isTransparent
              ? "md:bg-transparent md:text-white md:shadow-none"
              : "md:bg-white md:text-black md:shadow-md md:shadow-black/10"
            : ""
        }
        ${
          // Mobile backdrop blur only when menu open or not on home
          isMobile && (mobileOpen || !isHome) ? "backdrop-blur-md" : ""
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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
                  : "brightness-0 invert"
                : isTransparent
                ? "brightness-0 invert"
                : ""
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex gap-6 text-md font-bold py-2 transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-charcoal"
          }`}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative group">
              <span>{item.label}</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 transform-gpu ${
                  isTransparent ? "bg-white" : "bg-sky"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
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
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="md:max-w-6xl md:mx-auto md:border-b md:border-white/20" />

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen
            ? "max-h-96 opacity-100 border-b border-white/10 backdrop-blur-md"
            : "max-h-0 opacity-0"
        }`}
        style={{
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
              onClick={() => setMobileOpen(false)}
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
