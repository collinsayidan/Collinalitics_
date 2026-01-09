import Reveal from "./Reveal";
import { BarChart3, Brain, Server, PenTool } from "lucide-react";

const matrix = [
  {
    category: "Analytics",
    icon: BarChart3,
    skills: ["Power BI", "DAX", "SQL", "Data Modeling"],
  },
  {
    category: "Data Science",
    icon: Brain,
    skills: ["Python", "Pandas", "Scikit-Learn"],
  },
  {
    category: "Engineering",
    icon: Server,
    skills: ["Azure", "Bash", "Automation", "ETL"],
  },
  {
    category: "Design",
    icon: PenTool,
    skills: ["Motion Graphics", "Branding", "UI/UX"],
  },
];

export default function SkillsMatrix() {
  return (
    <Reveal>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Skills Matrix</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {matrix.map((item) => (
            <div
              key={item.category}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-400">
                  {item.category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="mt-4 space-y-2 text-gray-300">
                {item.skills.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
