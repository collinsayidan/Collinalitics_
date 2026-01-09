// components/Toast.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
