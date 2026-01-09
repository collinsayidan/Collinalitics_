"use client";

import { useEffect, useState } from "react";

interface Track {
  title: string;
  artist: string;
  url: string;
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    // Demo data — replace with real API later
    setTrack({
      title: "No Song Playing",
      artist: "Spotify",
      url: "#",
    });
  }, []);

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
      
      {/* Equalizer Animation */}
      <div className="flex gap-[3px]">
        <span className="w-[3px] h-3 bg-green-400 animate-eq1"></span>
        <span className="w-[3px] h-3 bg-green-400 animate-eq2"></span>
        <span className="w-[3px] h-3 bg-green-400 animate-eq3"></span>
      </div>

      {/* Track Info */}
      <div>
        <p className="text-sm text-gray-300 font-medium">
          {track?.title}
        </p>
        <p className="text-xs text-gray-500">{track?.artist}</p>
      </div>
    </div>
  );
}
