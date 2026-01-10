"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // REMOVE THIS AFTER TESTING
    // Forces popup to always show during development
    localStorage.removeItem("newsletterDismissed");

    const dismissed = localStorage.getItem("newsletterDismissed");
    if (dismissed === "true") return;

    const timer = setTimeout(() => {
      setOpen(true);
      setTimeout(() => setVisible(true), 50);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 200);
  };

  const dontShowAgain = () => {
    localStorage.setItem("newsletterDismissed", "true");
    closePopup();
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setSuccess(true);
      setEmail("");

      setTimeout(() => {
        dontShowAgain();
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 p-[1px] rounded-2xl bg-gradient-to-br from-blue-600/40 to-purple-600/40 shadow-xl z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-80 relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {!success ? (
          <>
            <h3 className="text-lg font-semibold text-white">Join the Newsletter</h3>
            <p className="text-gray-400 text-sm mt-1">
              Get insights, new projects, and premium design drops.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            <button
              onClick={dontShowAgain}
              className="mt-3 text-xs text-gray-400 hover:text-gray-200 underline transition"
            >
              Don’t show again
            </button>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-lg font-semibold text-white">You're in!</h3>
            <p className="text-gray-400 text-sm mt-1">Thanks for subscribing.</p>
          </div>
        )}
      </div>
    </div>
  );
}
