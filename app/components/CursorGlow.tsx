"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      const dot = dotRef.current;
      if (!dot) return;

      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] transition-transform duration-200"
      style={{
        background: "radial-gradient(circle, rgba(0,123,255,0.4) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
