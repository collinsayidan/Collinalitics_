"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type ModeToggleProps = {
  onToggle?: () => void;
};

export default function ModeToggle({ onToggle }: ModeToggleProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setMode(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);

    document.documentElement.classList.toggle("dark", newMode === "dark");
    localStorage.setItem("theme", newMode);

    onToggle?.();
  };

  return (
    <button
      onClick={toggleMode}
      className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted transition"
      aria-label="Toggle dark mode"
    >
      {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
