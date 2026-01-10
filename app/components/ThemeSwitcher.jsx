"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [accent, setAccent] = useState("default");

  // Load saved accent theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("accent");
    if (saved) {
      setAccent(saved);
      applyAccent(saved);
    }
  }, []);

  const applyAccent = (theme) => {
    const root = document.documentElement;

    // Remove all accent classes
    root.classList.remove("theme-emerald", "theme-gold", "theme-rose");

    // Apply new accent
    if (theme !== "default") {
      root.classList.add(`theme-${theme}`);
    }
  };

  const changeAccent = (theme) => {
    setAccent(theme);
    applyAccent(theme);
    localStorage.setItem("accent", theme);
  };

  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={() => changeAccent("default")}
        className={`px-3 py-1 rounded border ${
          accent === "default"
            ? "bg-card text-foreground border-border"
            : "bg-muted text-muted-foreground border-border"
        }`}
      >
        Default
      </button>

      <button
        onClick={() => changeAccent("emerald")}
        className={`px-3 py-1 rounded ${
          accent === "emerald"
            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300"
            : "bg-muted text-muted-foreground"
        }`}
      >
        Emerald
      </button>

      <button
        onClick={() => changeAccent("gold")}
        className={`px-3 py-1 rounded ${
          accent === "gold"
            ? "bg-amber-500/20 text-amber-600 dark:text-amber-300"
            : "bg-muted text-muted-foreground"
        }`}
      >
        Gold
      </button>

      <button
        onClick={() => changeAccent("rose")}
        className={`px-3 py-1 rounded ${
          accent === "rose"
            ? "bg-rose-500/20 text-rose-600 dark:text-rose-300"
            : "bg-muted text-muted-foreground"
        }`}
      >
        Rose
      </button>
    </div>
  );
}
