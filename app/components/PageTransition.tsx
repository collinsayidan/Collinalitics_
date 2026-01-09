"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [fade, setFade] = useState("opacity-0");

  useEffect(() => {
    setFade("opacity-0");

    const timeout = setTimeout(() => {
      setFade("opacity-100");
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`transition-opacity duration-500 ${fade}`}>
      {children}
    </div>
  );
}
