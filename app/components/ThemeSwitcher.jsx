"use client";

export default function ThemeSwitcher() {
  const setTheme = (theme) => {
    document.documentElement.classList.remove(
      "theme-emerald",
      "theme-gold",
      "theme-rose"
    );

    if (theme !== "default") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  };

  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={() => setTheme("default")}
        className="px-3 py-1 rounded bg-white/10 text-white"
      >
        Default
      </button>

      <button
        onClick={() => setTheme("emerald")}
        className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300"
      >
        Emerald
      </button>

      <button
        onClick={() => setTheme("gold")}
        className="px-3 py-1 rounded bg-amber-500/20 text-amber-300"
      >
        Gold
      </button>

      <button
        onClick={() => setTheme("rose")}
        className="px-3 py-1 rounded bg-rose-500/20 text-rose-300"
      >
        Rose
      </button>
    </div>
  );
}
