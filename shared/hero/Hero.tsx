"use client";

import IconButton from "@/components/IconButton/IconButton";
import { Linkedin, Github, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="mt-24 flex flex-col items-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-(--gold) border border-(--gold) rounded-sm"
      >
        FULL STACK DEVELOPER
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`${playfair.className} text-(--text-secondary) p-8 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight`}
      >
        João Lucas Lima
      </motion.h1>

      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="mb-8 origin-center h-px w-96 border-(--gold)"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl md:text-2xl text-muted-foreground mb-8 h-10 font-light"
      >
        <span className="font-mono text-lg tracking-wide">
          {displayedText}
          <span className="animate-pulse text-primary ml-0.5">|</span>
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-2xl text-center text-lg mb-8"
      >
        Transformo ideias em experiências digitais excepcionais. Especializado
        em aplicações web modernas e escaláveis.
      </motion.p>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-6"
      >
        <IconButton Icon={Github} />
        <IconButton Icon={Linkedin} />
        <IconButton Icon={Mail} />
      </motion.nav>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
