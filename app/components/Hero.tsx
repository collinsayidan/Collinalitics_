"use client";

import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import Reveal from "./Reveal";
import TechCloud from "./TechCloud";

export default function Hero() {
  const text = useTypewriter([
    "Analytics Consultant",
    "Data Analyst",
    "Business Intelligence Engineer",
    "Machine Learning Practitioner",
  ]);

  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <TechCloud />
      {/* 🔥 Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-20"
        style={{
          backgroundImage: "url('/Collins-Hero.jpg')",
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* 🔥 Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-[2px]" />

      {/* 🔥 Spotlight Glow Behind Name */}
      <div className="absolute top-1/3 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 🔥 Purple Glow */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />

      {/* 🔥 Content */}
      <Reveal>
        <h1 className="relative text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
            Collins Ayidan
          </span>
        </h1>

        <h2 className="relative mt-4 text-2xl md:text-3xl text-gray-300 h-10 font-medium">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="relative mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
          I build data-driven solutions that transform raw information into
          clear insights, intelligent automation, and measurable business impact.
        </p>

        {/* 🔥 Buttons */}
        <div className="relative mt-10 flex gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-blue-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </Reveal>
    </section>
  );
}
