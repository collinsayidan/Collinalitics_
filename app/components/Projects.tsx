import Reveal from "./Reveal";
import Link from "next/link";

const projects = [
  {
    title: "Analytics Dashboard",
    desc: "A modern Power BI dashboard with advanced data modeling and interactive insights.",
    image: "/projects/analytics.png",
    tech: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "System Automation",
    desc: "Infrastructure automation that improved reliability and reduced manual workload.",
    image: "/projects/automation.png",
    tech: ["Python", "Bash", "Azure"],
  },
  {
    title: "Customer Churn Prediction",
    desc: "A machine learning model that predicts customer churn using behavioral and transactional data.",
    image: "/projects/churn.png",
    tech: ["Python", "Pandas", "Scikit-Learn"],
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, "-");
}

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="px-6 py-20 bg-[var(--background)] text-[var(--foreground)]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Featured Projects
          </h2>

          <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            A selection of data-driven work blending analytics, engineering, and automation.
          </p>

          {/* Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => {
              const slug = slugify(project.title);

              return (
                <Link
                  key={project.title}
                  href={`/projects/${slug}`}
                  className="group block rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                >
                  <div className="rounded-2xl bg-[var(--background)] backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col h-full">
                    
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>

                      <p className="mt-3 text-gray-500 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-sm bg-blue-100/20 text-blue-400 border border-blue-400/20 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <span className="inline-block mt-6 text-blue-400 font-medium group-hover:underline">
                        View Project →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
