"use client";

import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-6"
        }`}
        aria-label="Voltar ao início da página"
      >
        <div className="container mx-auto px-4 md:px-0">
          <div
            className={`flex items-center justify-between transition-all duration-500 border-(--border-color) ${
              isScrolled
                ? "relative overflow-hidden rounded-lg bg-(--bg-secondary)/70 backdrop-blur-md border border-(--border-color) px-6 py-3"
                : ""
            }`}
          >
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#");
              }}
              className={`${playfair.className} font-display text-xl tracking-wide`}
              whileHover={{ opacity: 0.7 }}
            >
              <span className="text-(--text-secondary)">JOÃO LUCAS LIMA</span>
              <span className="text-(--gold)">.</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="
                    relative text-(--text-primary) text-sm tracking-wider uppercase
                    
                    transition-colors duration-300 hover:text-(--text-secondary)
                  
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-px after:w-0 after:bg-(--gold)
                    after:transition-all after:duration-500 hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="cursor-pointer uppercase bg-(--btn-bg) px-6 py-2.5 rounded-sm text-[#ededed] text-sm font-light tracking-wider transition-all duration-300 hover:bg-(--btn-bg-hover) hover:scale-[103%]"
              >
                CONTATO
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 "
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-50 md:hidden "
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="absolute right-0 top-0 bottom-0 w-2/4 max-w-sm bg-(--bg-secondary) rounded-(--radius) border border-(--border-color) shadow-[0_10px_30px_var(--shadow)] p-8 pt-24"
        >
          <div className="absolute top-8">
            <ThemeToggle />
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-lg tracking-wider uppercase  hover: transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
