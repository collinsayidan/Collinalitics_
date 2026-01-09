"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-6 p-[1px] rounded-2xl bg-gradient-to-br from-blue-600/40 to-purple-600/40 shadow-xl z-50">
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-80 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-lg font-semibold text-white">Join the Newsletter</h3>
        <p className="text-gray-400 text-sm mt-1">
          Get insights, new projects, and premium design drops.
        </p>

        <form className="mt-4 flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
