import Reveal from "./Reveal";
import Image from "next/image";
import { User, Briefcase, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="relative min-h-screen flex items-center px-6 py-24 bg-[var(--background)] text-[var(--foreground)]"
      >
        {/* Spotlight Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-center">
            About Me
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-center text-gray-400 text-lg max-w-2xl mx-auto">
            A blend of analytics, engineering, creativity, and intentional design.
          </p>

          {/* Glass Card */}
          <div className="mt-12 p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-xl">

              {/* Profile + Info Row */}
              <div className="flex flex-col sm:flex-row items-center gap-10 mb-12">

                {/* Profile Image */}
                <div className="relative">
                  <div className="absolute inset-0 w-40 h-40 bg-blue-500/20 blur-2xl rounded-full" />
                  <Image
                    src="/profile.jpg"
                    alt="Collins Ayidan"
                    width={160}
                    height={160}
                    className="relative rounded-full border border-white/20 shadow-xl object-cover"
                  />
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <User className="w-7 h-7 text-blue-400" />
                    <p className="text-gray-300 font-medium">Collins Ayidan</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Briefcase className="w-7 h-7 text-blue-400" />
                    <p className="text-gray-300 font-medium">Analytics & Engineering</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Sparkles className="w-7 h-7 text-blue-400" />
                    <p className="text-gray-300 font-medium">Creative Problem Solver</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-10" />

              {/* Main Text */}
              <p className="text-lg leading-relaxed text-gray-300">
                I’m Collins Ayidan — an Analytics Consultant, System Engineer,
                Client Advisor, and Motion Designer. I specialize in transforming
                complex data, systems, and ideas into clear, modern, and visually
                compelling experiences.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                My work blends technical precision with creative storytelling.
                Whether I’m building dashboards, designing motion graphics, or
                engineering scalable systems, I focus on clarity, intentionality,
                and premium execution.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                I thrive in environments where design meets engineering — where
                strategy, data, and creativity come together to solve real
                problems and elevate user experience.
              </p>

              {/* Values Row */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <Target className="w-6 h-6 mx-auto text-blue-400" />
                  <p className="mt-2 text-gray-300 font-medium">Intentional Design</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <Sparkles className="w-6 h-6 mx-auto text-blue-400" />
                  <p className="mt-2 text-gray-300 font-medium">Creative Precision</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <Briefcase className="w-6 h-6 mx-auto text-blue-400" />
                  <p className="mt-2 text-gray-300 font-medium">Impact‑Driven Work</p>
                </div>
              </div>

              {/* Signature */}
              <p className="mt-10 text-gray-400 italic text-center">
                “My goal is simple — build solutions that feel premium, purposeful, and human.”
              </p>

            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
