"use client";

import { useEffect, useState } from "react";
import {
  SiPython,
  SiTableau,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

type IconPosition = {
  top: string;
  left: string;
  delay: number;
};

const icons = [
  SiPython,
  SiTableau,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
];

export default function TechCloud() {
  const [positions, setPositions] = useState<IconPosition[]>([]);

  useEffect(() => {
    const randomPositions = icons.map(() => ({
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%",
      delay: Math.random() * 5,
    }));
    setPositions(randomPositions);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="absolute text-4xl text-white animate-float"
          style={{
            top: positions[i]?.top,
            left: positions[i]?.left,
            animationDelay: `${positions[i]?.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
