"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Mail, Linkedin, Github } from "lucide-react";
import { links } from "@/lib/links";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (form.website !== "") {
      setStatus("error");
      return;
    }

    // Client-side validation
    if (form.name.length < 2 || !form.email.includes("@") || form.message.length < 10) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setShowModal(true);
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal>
      <section
        id="contact"
        className="px-6 py-20 bg-[var(--background)] text-[var(--foreground)]"
      >
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Whether you have a project in mind, need technical guidance, or want
            to collaborate, I’d love to hear from you. Let’s build something meaningful.
          </p>

          {/* Contact Card */}
          <div className="mt-14 p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl">

              <form onSubmit={handleSubmit} className="grid gap-6">

                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="hidden"
                />

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition"
                />

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Check your details and try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-8 text-gray-400">

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--accent-1)] transition font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--accent-1)] transition font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href={links.email}
              className="flex items-center gap-2 hover:text-[var(--accent-1)] transition font-medium"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>

          </div>
        </div>

        {/* Success Toast */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl z-50"
            >
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 text-center"
              >
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-300 mt-2">I’ll get back to you shortly.</p>

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Reveal>
  );
}
