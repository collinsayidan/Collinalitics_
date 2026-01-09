import Reveal from "./Reveal";
import { SiPython, SiMysql } from "react-icons/si";
import { BarChart3, Cloud } from "lucide-react";

const stack = [
  { name: "Python", icon: SiPython },
  { name: "Power BI", icon: BarChart3 }, // clean premium alternative
  { name: "Azure", icon: Cloud },        // correct replacement
  { name: "SQL", icon: SiMysql },
];

export default function TechStack() {
  return (
    <Reveal>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Tech Stack</h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {stack.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <item.icon className="w-12 h-12 text-blue-400" />
              <p className="text-gray-300 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
