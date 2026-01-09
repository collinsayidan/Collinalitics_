// components/SuccessModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
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
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
