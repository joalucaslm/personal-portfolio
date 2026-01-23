"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/provider/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-sm cursor-pointer border border-(--border-color) backdrop-blur-sm transition-colors hover:border-primary/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon className="w-4.5 h-4.5 text-(--gold)" />
        ) : (
          <Sun className="w-4.5 h-4.5 text-(--gold)" />
        )}
      </motion.div>
    </motion.button>
  );
}
