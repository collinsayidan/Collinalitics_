"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import TechCloud from "./TechCloud";

export default function Hero() {
  const text = useTypewriter([
    "Analytics Consultant",
    "Data Analyst",
    "Business Intelligence Engineer",
    "Machine Learning Practitioner",
  ]);

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Letter animation for your name
  const name = "Collins Ayidan".split("");

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <TechCloud />

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-20"
        style={{
          backgroundImage: "url('/HERO-5.jpg')",
        }}
        animate={{ y: offsetY }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* Soft Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-[3px]" />

      {/* Floating Glows */}
      <motion.div
        className="absolute top-1/3 w-[500px] h-[500px] bg-blue-600/25 blur-[140px] rounded-full pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/25 blur-[160px] rounded-full pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {/* Name */}
        <h1 className="relative text-5xl md:text-6xl font-bold tracking-tight drop-shadow-xl flex justify-center">
          Hi, I’m{" "}
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient flex">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Typewriter */}
        <motion.h2
          className="relative mt-4 text-2xl md:text-3xl text-gray-300 h-10 font-medium"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="relative mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed mx-auto"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          I build data-driven solutions that transform raw information into
          clear insights, intelligent automation, and measurable business impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-blue-500/30"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
