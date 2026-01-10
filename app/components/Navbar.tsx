"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { Bell, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileDropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!(e.target instanceof Node)) return;

      const clickedOutsideDropdown =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target);

      const clickedOutsideMobileDropdown =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target);

      const clickedOutsideNotifications =
        notificationsRef.current &&
        !notificationsRef.current.contains(e.target);

      if (clickedOutsideDropdown) setDropdown(false);
      if (clickedOutsideMobileDropdown) setDropdown(false);
      if (clickedOutsideNotifications) setNotificationsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Collinalitics
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Links */}
          <motion.div
            className="flex items-center gap-8 text-sm font-medium text-foreground"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: -5 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Notification Bell + Panel */}
          <div className="relative" ref={notificationsRef}>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNotificationsOpen(prev => !prev)}
              className="relative p-2 rounded-md hover:bg-accent transition"
            >
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>

            <AnimatePresence>
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 w-64 bg-background border border-border rounded-md shadow-lg p-4 z-50"
                >
                  <p className="text-sm text-muted-foreground">
                    No new notifications
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Dropdown (⋮ menu) */}
          <div className="relative ml-2" ref={desktopDropdownRef}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDropdown(prev => !prev)}
              className="p-2 rounded-md border border-border bg-muted hover:bg-accent transition flex items-center justify-center"
            >
              <MoreVertical className="w-5 h-5 text-foreground" />
            </motion.button>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 w-56 bg-background border border-border rounded-md shadow-lg p-4 z-50"
                >
                  <div className="flex items-center justify-between py-2 gap-4">
                    <span className="text-xs text-muted-foreground">Mode</span>
                    <ModeToggle onToggle={() => setDropdown(false)} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-foreground"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 text-foreground"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    setDropdown(false);
                    setNotificationsOpen(false);
                  }}
                  className="py-2 text-sm"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Dropdown (⋮ menu) */}
            <div className="pt-4" ref={mobileDropdownRef}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDropdown(prev => !prev)}
                className="w-full p-2 rounded-md border border-border bg-muted hover:bg-accent transition flex justify-center"
              >
                <MoreVertical className="w-6 h-6 text-foreground" />
              </motion.button>

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="mt-2 w-full bg-background border border-border rounded-md shadow-lg p-4 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between py-2 gap-4">
                      <span className="text-xs text-muted-foreground">Mode</span>
                      <ModeToggle onToggle={() => setDropdown(false)} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
