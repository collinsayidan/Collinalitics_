import Reveal from "./Reveal";
import { BarChart3, Brain, Server, Workflow, Users, Sparkles } from "lucide-react";

const skills = [
  { name: "Analytics & BI", desc: "Power BI, dashboards, DAX, data modeling", icon: BarChart3 },
  { name: "Data Science", desc: "Python, Pandas, Scikit‑Learn, feature engineering", icon: Brain },
  { name: "System Engineering", desc: "Infrastructure, automation, optimization", icon: Server },
  { name: "Data Engineering", desc: "ETL pipelines, SQL, Azure, workflow automation", icon: Workflow },
  { name: "Client Advisory", desc: "Technical guidance, solution design, communication", icon: Users },
  { name: "Integration & Automation", desc: "APIs, orchestration, scalable systems", icon: Sparkles },
];

export default function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="px-6 py-20 bg-[var(--background)] text-[var(--foreground)]"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Skills & Expertise
          </h2>

          <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            A blend of analytical thinking, engineering precision, and modern data practices.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-[inset_0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <p className="mt-2 text-gray-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
