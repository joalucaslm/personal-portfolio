"use client";

import IconButton from "@/components/ui/IconButton/IconButton";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-(--border-color) relative overflow-hidden">
      <div className="container px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-xl tracking-wide"
          whileHover={{ opacity: 0.7 }}
        >
          <span className={`${playfair.className} text-(--text-secondary)`}>
            JOÃO LUCAS LIMA
          </span>
          <span className="text-(--gold)">.</span>
        </motion.a>

        <nav className="flex justify-center gap-6">
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
        </nav>

        <p className="text-muted-foreground text-sm font-light tracking-wide">
          © {currentYear} <span className="gold-accent">·</span> Todos os
          direitos reservados
        </p>
      </div>
    </footer>
  );
}
