import Reveal from "./Reveal";
import { SiPython, SiMysql } from "react-icons/si";
import { BarChart3, Cloud } from "lucide-react";

const stack = [
  { name: "Python", icon: SiPython, url: "https://www.python.org" },
  { name: "Power BI", icon: BarChart3, url: "https://powerbi.microsoft.com" },
  { name: "Azure", icon: Cloud, url: "https://azure.microsoft.com" },
  { name: "SQL", icon: SiMysql, url: "https://www.mysql.com" },
];

export default function TechStack() {
  return (
    <Reveal>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Tech Stack</h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {stack.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <item.icon className="w-12 h-12 text-blue-400" />
              <p className="text-gray-300 font-medium">{item.name}</p>
            </a>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
