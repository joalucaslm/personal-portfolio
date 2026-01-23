"use client";

import IconButton from "@/components/ui/IconButton/IconButton";
import { Linkedin, Github, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

const roles = [
  "Full Stack Developer",
  "Teaching Through Code",
  "React Specialist",
  "Obsessed With Learning",
  "Building With Purpose",
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
    <section
      className="min-h-screen mt-24 flex flex-col items-center"
      aria-label="Introdução e apresentação"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-(--gold) border border-(--gold) rounded-sm"
        role="text"
        aria-label="Cargo principal"
      >
        FULL STACK DEVELOPER
      </motion.div>
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
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl md:text-2xl text-muted-foreground mb-8 h-10 font-light"
        aria-hidden="true"
      >
        <span className="font-mono text-lg tracking-wide">
          {displayedText}
          <span className="animate-pulse text-primary ml-0.5">|</span>
        </span>
      </motion.div>

      <div className="sr-only">
        <h2>Especialidades e Habilidades</h2>
        <p>
          Full Stack Developer, React Specialist, Node.js Expert, Problem Solver
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-2xl text-center text-lg mb-8"
      >
        Obcecado por aprender, determinado a ensinar e focado em construir
        tecnologia de alto nível.
      </motion.p>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-6"
        aria-label="Links de redes sociais e contato"
      >
        <IconButton
          Icon={Github}
          href="https://github.com/joaolucaslm"
          aria-label="Visite meu perfil no GitHub"
        />
        <IconButton
          Icon={Linkedin}
          href="https://linkedin.com/in/joaolucaslm"
          aria-label="Conecte-se comigo no LinkedIn"
        />
        <IconButton Icon={Mail} mail={true} aria-label="Envie-me um email" />
      </motion.nav>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
        aria-label="Rolar para a seção Sobre Mim"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 cursor-pointer" />
        </motion.div>
      </motion.button>
    </section>
  );
}
