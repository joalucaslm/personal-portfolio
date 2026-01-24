"use client";

import Image from "next/image";
import JoaoLucas from "@/public/image/Pitch João Lucas Lima M.Dias Branco.webp";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container px-6 max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-(--gold) mb-6"
          >
            Sobre Mim
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={` ${playfair.className} text-(--text-secondary) font-display text-4xl md:text-5xl font-medium`}
          >
            Quem sou eu
          </motion.h2>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="mt-8 origin-center h-px w-20 border-(--gold)"
            aria-hidden="true"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="absolute -inset-4 border border-(--gold)/50 rounded-sm"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-8 border border-(--accent)/50 rounded-sm"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden">
                <div className="aspect-4/5 bg-linear-to-br from-secondary to-muted flex items-center justify-center">
                  <Image
                    src={JoaoLucas}
                    alt="João Lucas Lima - Desenvolvedor Full Stack"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Olá! Sou o João Lucas Lima! Sou{" "}
              <strong className="font-semibold text-foreground">
                Desenvolvedor Full Stack
              </strong>{" "}
              apaixonado pela programação e por ensinar pessoas. Com mais de 4
              anos de experiência, sou apaixonado por transformar ideias em
              produtos de alto impacto.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Atualmente estou no 5º semestre de{" "}
              <strong className="font-semibold text-foreground">
                Ciência da Computação
              </strong>{" "}
              na UNIFOR e atuo como desenvolvedor na BTK Solutions, trabalhando
              com{" "}
              <strong className="font-semibold text-foreground">
                Next.js, React, Node.js e TypeScript
              </strong>
              , além de bancos de dados SQL e NoSQL.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Acredito que programação é mais do que código. Por isso, você pode
              me encontrar ensinando e{" "}
              <strong className="font-semibold text-foreground">
                mentorando desenvolvedores
              </strong>
              . Gosto de estudar e experimentar novas tecnologias e estou sempre
              em prol do bem-estar da comunidade de programação.
            </p>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center items-center gap-6 text-3xl text-(--text-secundary)"
            >
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express" />
              <SiNextdotjs title="Next.js" />
              <SiTypescript title="TypeScript" />
              <FaReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiPostgresql title="PostgreSQL" />
              <SiMongodb title="MongoDB" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
