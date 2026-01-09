"use client";

import { MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocationTimeBadge() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-gray-300 text-sm">
      <MapPin className="w-4 h-4 text-blue-400" />
      Edinburgh, UK
      <Clock className="w-4 h-4 text-purple-400 ml-3" />
      {time}
    </div>
  );
}
