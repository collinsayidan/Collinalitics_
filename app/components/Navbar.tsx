"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-white tracking-tight hover:opacity-80 transition"
        >
          Collinalitics
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#skills" label="Skills" />
          <NavItem href="#about" label="About" />
          <NavItem href="#contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

/* ------------------------------
   PREMIUM NAV ITEM COMPONENT
--------------------------------*/
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="
        text-gray-300 hover:text-white transition relative
        after:absolute after:left-0 after:-bottom-1 after:h-[2px]
        after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
        hover:after:w-full after:transition-all after:duration-300
      "
    >
      {label}
    </Link>
  );
}

/* ------------------------------
   MOBILE MENU COMPONENT
--------------------------------*/
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl focus:outline-none"
      >
        ☰
      </button>

      {open && (
        <div className="
          absolute top-full right-6 mt-3 w-48 rounded-xl
          bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl
          p-4 flex flex-col gap-4
        ">
          <MobileNavItem href="#projects" label="Projects" />
          <MobileNavItem href="#skills" label="Skills" />
          <MobileNavItem href="#about" label="About" />
          <MobileNavItem href="#contact" label="Contact" />
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-200 hover:text-white transition text-lg"
    >
      {label}
    </Link>
  );
}
