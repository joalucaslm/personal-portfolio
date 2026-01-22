"use client";

import Image from "next/image";
import JoaoLucas from "@/public/image/Imagem João Lucas com Fundo.jpg"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

const highlights = [
  {
    icon: Code2,
    title: "+5",
    subtitle: "Anos",
    description: "de experiência",
  },
  {
    icon: Rocket,
    title: "+50",
    subtitle: "Projetos",
    description: "entregues",
  },
  {
    icon: Users,
    title: "+30",
    subtitle: "Clientes",
    description: "satisfeitos",
  },
  {
    icon: Zap,
    title: "100",
    subtitle: "%",
    description: "dedicação",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
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
                {/* Elegant Frame */}
                <div className="absolute -inset-4 border border-(--gold)/20 rounded-sm" />
                <div className="absolute -inset-8 border border-(--accent)/50 rounded-sm" />

                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <Image src={JoaoLucas} alt="" fill />
                  </div>
                </div>

                {/* <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 glass-card px-5 py-3 border border-accent/30"
                >
                  <span className="text-xs tracking-wider uppercase gold-accent">
                    Open to work
                  </span>
                </motion.div> */}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Olá! Sou um{" "}
                <span className="text-foreground">
                  Desenvolvedor Full Stack
                </span>{" "}
                apaixonado por criar soluções digitais que fazem a diferença.
                Com mais de 5 anos de experiência, tenho trabalhado com startups
                e empresas de diversos setores.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Minha jornada começou com curiosidade e se transformou em uma
                carreira dedicada a construir{" "}
                <span className="text-foreground">aplicações web modernas</span>{" "}
                e experiências de usuário memoráveis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Quando não estou codando, você pode me encontrar explorando
                novas tecnologias, contribuindo para projetos open-source ou
                tomando um bom café.
              </p>

              {/* <div className="grid grid-cols-2 gap-6 pt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="luxury-card p-6 group"
                  >
                    <item.icon className="w-5 h-5 text-accent mb-4 group-hover:text-primary transition-colors" />
                    <p className="font-display text-3xl font-medium">
                      {item.title}
                      <span className="text-accent">{item.subtitle}</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
