"use client";

import Reveal from "./Reveal";
import { Briefcase, Users } from "lucide-react";
import { FcEngineering } from "react-icons/fc";
import { GrAnalytics, GrUserAdmin } from "react-icons/gr";

interface ExperienceItem {
  id: number;
  year: string;
  role: string;
  company: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const experience: ExperienceItem[] = [
  {
    id: 1,
    year: "2024 — Present",
    role: "Analytics Consultant",
    company: "Collinalitics",
    desc: "Built full‑stack analytics solutions, interactive dashboards, and automated data workflows that improved reporting clarity and decision‑making across multiple domains.",
    icon: Briefcase,
  },
  {
    id: 2,
    year: "2025 — Present",
    role: "Client Advisor",
    company: "Social Security Scotland",
    desc: "Analysed complex client data, identified inconsistencies, and improved decision accuracy while supporting data‑driven service delivery in a high‑volume environment.",
    icon: Users,
  },
  {
    id: 3,
    year: "2025 — 2026",
    role: "Field Engineer",
    company: "Simplify Networks",
    desc: "Configured and maintained enterprise IT infrastructure, automated monitoring workflows, and improved system reliability through proactive diagnostics and scripting.",
    icon: FcEngineering,
  },
  {
    id: 4,
    year: "2025 — 2025",
    role: "Administrative Support",
    company: "Scottish Qualifications Authority",
    desc: "Validated and cleaned assessment datasets, automated reporting tasks, and improved data accuracy for national qualification processes.",
    icon: GrUserAdmin,
  },
  {
    id: 5,
    year: "2025 — 2025",
    role: "Analytical Consultant",
    company: "AMDARI",
    desc: "Delivered end‑to‑end analytics projects, built BI dashboards, automated reporting pipelines, and improved operational efficiency through data‑driven insights.",
    icon: GrAnalytics,
  },
  {
    id: 6,
    year: "2023 — 2024",
    role: "Insights Analyst",
    company: "Victory House Consulting",
    desc: "Developed dashboards, analysed engagement trends, and improved data quality to support strategic planning and community impact reporting.",
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
            {experience.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.id}>
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"></div>

                    {/* Card */}
                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-blue-400" />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
