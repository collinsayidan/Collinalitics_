import Reveal from "./Reveal";
import { Briefcase, Cpu, PenTool, Users } from "lucide-react";

const experience = [
  {
    year: "2024 — Present",
    role: "Analytics Consultant",
    company: "Collinalitics",
    desc: "Designing BI dashboards, data models, and analytics systems that drive clarity and decision‑making.",
    icon: Briefcase,
  },
  {
    year: "2022 — 2024",
    role: "System Engineer",
    company: "Tech Infrastructure",
    desc: "Built and maintained scalable IT systems, automated workflows, and improved operational reliability.",
    icon: Cpu,
  },
  {
    year: "2020 — Present",
    role: "Motion Designer",
    company: "Freelance / Community",
    desc: "Created cinematic motion graphics for events, branding, and storytelling across digital platforms.",
    icon: PenTool,
  },
  {
    year: "2018 — 2022",
    role: "Client Advisor",
    company: "Service & Support",
    desc: "Provided technical guidance, solved complex client issues, and delivered high‑quality customer experience.",
    icon: Users,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-20 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Experience
          </h2>

          <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            A journey shaped by engineering, analytics, design, and meaningful problem‑solving.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600/40 via-purple-600/40 to-transparent"></div>

          <div className="space-y-16 pl-12">
            {experience.map((item) => (
              <Reveal key={item.year}>
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"></div>

                  {/* Card */}
                  <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-blue-400" />
                      <p className="text-sm text-gray-400">{item.year}</p>
                    </div>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.role} —{" "}
                      <span className="text-blue-500">{item.company}</span>
                    </h3>

                    <p className="mt-3 text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
