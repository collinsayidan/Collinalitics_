"use client";

import { Mail, Linkedin, Github, ArrowUp, Sun, Moon } from "lucide-react";
import { useState } from "react";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import LocationTimeBadge from "./LocationTimeBadge";
import { links } from "@/lib/links";

/*import ThemeSwitcher from "./ThemeSwitcher";*/

export default function Footer() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light");
  };

  return (
    <footer className="relative bg-[var(--background)] text-[var(--foreground)] pt-28 pb-20 border-t border-white/10 overflow-hidden">

      {/* 🔥 Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 🔥 Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58.2 4.09 113.9 22.63 172.1 26.72 86.4 6.08 172.1-16.26 258.5-22.34 70.5-5.03 140.3 1.89 210.8 6.92 69.7 4.97 139.4 7.09 209.1 2.06V0H0v27.35c86.4 6.08 172.1 16.26 258.5 22.34 70.5 5.03 140.3-1.89 210.8-6.92 69.7-4.97 139.4-7.09 209.1-2.06z"
            fill="url(#gradient)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 🔥 Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Column 1 — Branding */}
        <div>
          <h3 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Collinalitics
            </span>
          </h3>

          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Premium analytics, engineering, and design — crafted with clarity and intention.
          </p>

          <div className="mt-6 text-xs text-gray-500">
            <p className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
                Made with Next.js
              </span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
                Tailwind CSS
              </span>
            </p>
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 — Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with insights, new projects, and premium design drops.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 4 — Connect */}
        <div className="flex flex-col gap-6">
          <h4 className="font-semibold text-lg">Connect</h4>

          {/* Spotify + Time */}
          <div className="flex flex-col gap-4">
            <SpotifyNowPlaying />
            <LocationTimeBadge />
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400 mt-2">

            {/* LinkedIn */}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[var(--accent-1)] transition"
            >
              <Linkedin className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-gray-300 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:text-[var(--accent-1)] transition"
            >
              <Github className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-gray-300 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                GitHub
              </span>
            </a>

            {/* Email */}
            <a
              href={links.email}
              className="group relative hover:text-[var(--accent-1)] transition"
            >
              <Mail className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-gray-300 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                Email
              </span>
            </a>

          </div>


          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-sm">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>

      {/* 🔥 Signature Animation */}
      <p className="mt-16 text-center text-sm text-gray-500 animate-fade">
        Crafted with intention by Collins Ayidan
      </p>

      {/* 🔥 Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl hover:opacity-90 transition"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </footer>
  );
}
