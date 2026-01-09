import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Samuel K.",
    role: "Technical Lead",
    quote:
      "Collins brings clarity and precision to every project. His blend of analytics, engineering, and design makes him an invaluable asset.",
  },
  {
    name: "Linda A.",
    role: "Project Manager",
    quote:
      "His attention to detail is unmatched. Collins consistently delivers premium work that elevates the entire team.",
  },
  {
    name: "Michael O.",
    role: "Creative Director",
    quote:
      "A rare talent — technical, creative, and deeply intentional. Collins transforms ideas into polished, meaningful experiences.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-20 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Testimonials
          </h2>

          <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            What people say about working with me.
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <div
                className="
                  p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5
                  hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300
                "
              >
                <div
                  className="
                    p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                    shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col
                  "
                >
                  {/* Quote */}
                  <p className="text-gray-300 italic leading-relaxed">
                    “{item.quote}”
                  </p>

                  {/* Name + Role */}
                  <div className="mt-6">
                    <p className="font-semibold text-white text-lg">
                      {item.name}
                    </p>
                    <p className="text-sm text-blue-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
