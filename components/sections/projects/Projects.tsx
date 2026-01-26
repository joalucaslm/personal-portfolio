"use client";

import { FeaturedProjectProps } from "@/interfaces/FeaturedProject";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

const featuredProjects: FeaturedProjectProps[] = [
  {
    title: "API Rest",
    description: (
      <>
        <p>
          API REST para automação de processos corporativos, com autenticação e
          login integrados à intranet.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Automação em <strong className="font-bold">Python</strong> integrada
            à API do Mercado Livre para processamento de perguntas e respostas e
            geração estruturada de relatórios
          </li>
          <li>
            Integração com <b className="font-bold">APIs</b> do Tiny Olist e
            Melhor Envio para cálculo automático de frete por região
          </li>
          <li>
            <b className="font-bold">Geração automatizada</b> de propostas comerciais integrada ao Tiny Olist
          </li>
          <li>
            Integração com a API do <b className="font-bold">Asana</b> para criação de lembretes,
            notificações e acompanhamento de tarefas
          </li>
          <li>Serviço de envio automático de códigos de retirada por e-mail</li>
          <li>
            Módulo de visualização de catálogo de produtos utilizando{" "}
            <strong className="font-bold">Firebase</strong>
          </li>
        </ul>
      </>
    ),

    tech: ["Node.js", "Python"],
    image: "/image/API.webp",
    altImage: "Diagrama mostrando as conexões da api em Node.js/Python",
    ariaLabel:
      "Projeto de API REST para automação de processos corporativos com integrações ao Mercado Livre, Tiny Olist, Melhor Envio, Asana e Firebase",
  },
  {
    title: "Site Institucional BTK SOLUTIONS",
    description: (
      <>
        <p>
          Website institucional desenvolvido com foco em{" "}
          <strong className="font-bold">SEO</strong>, geração de{" "}
          <strong className="font-bold">leads</strong> e otimização de{" "}
          <strong className="font-bold">performance</strong>, utilizando
          arquitetura componentizada em{" "}
          <strong className="font-bold">Next.js</strong>.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Implementação de estratégias de SEO on-page para aumento de tráfego
            orgânico
          </li>
          <li>
            Integração com <strong className="font-bold">Sanity CMS</strong>{" "}
            para gerenciamento dinâmico de conteúdos e artigos do blog
          </li>
          <li>
            Monitoramento de métricas com plataformas de{" "}
            <strong className="font-bold">análise de performance</strong> e
            comportamento do usuário (Core Web Vitals, conversões e engajamento)
          </li>
          <li>
            Componentização avançada com{" "}
            <strong className="font-bold">React</strong> e estilização com{" "}
            <strong className="font-bold">TailwindCSS</strong>
          </li>
          <li>
            Design e prototipação realizados no{" "}
            <strong className="font-bold">Figma</strong>
          </li>
        </ul>
      </>
    ),
    tech: ["Next.js", "TailwindCSS", "TypeScript", "React", "Figma"],
    image: "/image/Site BTK SOLUTIONS.webp",
    altImage: "Site Institucional da BTK SOLUTIONS",
    live: "https://www.btk.solutions/",
    ariaLabel:
      "Projeto de site institucional com foco em SEO, geração de leads, monitoramento de performance, integração com CMS e desenvolvimento em Next.js e React",
  },
  {
    title: "Modelagem da Base de Dados B.Safe",
    description: (
      <>
        <p>
          Modelagem e definição da arquitetura de uma base de dados em{" "}
          <strong className="font-bold">PostgreSQL</strong> para um sistema
          corporativo robusto e escalável.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Criação de diagramas entidade-relacionamento (ER) e definição de
            relacionamentos entre tabelas
          </li>
          <li>
            Normalização de dados visando integridade referencial e performance
          </li>
          <li>Planejamento de chaves primárias, estrangeiras e índices</li>
          <li>Estrutura preparada para crescimento e manutenção do sistema</li>
        </ul>
      </>
    ),
    tech: ["PostgreSQL"],
    image: "/image/Arquitetura Inicial da Base de Dados do B.Safe.webp",
    altImage: "Imagem real da prototipação da base de dados com os dados privados",
    ariaLabel:
      "Projeto de modelagem e arquitetura de base de dados em PostgreSQL com diagrama entidade-relacionamento, normalização e definição de índices para sistema corporativo",
  },
  {
    title: "App de Gestão de Baias - M.Deska",
    description: (
      <>
        <p>
          Aplicação desenvolvida em parceria com a{" "}
          <strong className="font-bold">M. Dias Branco</strong> após vencer um{" "}
          <strong className="font-bold">Hackathon corporativo</strong>, com foco
          na gestão e alocação de baias no escritório de São Paulo.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Desenvolvimento utilizando{" "}
            <strong className="font-bold">Power Apps</strong> para criação da
            interface e formulários dinâmicos
          </li>
          <li>
            Automação de fluxos com{" "}
            <strong className="font-bold">Power Automate</strong> para controle
            de reservas, atualizações e notificações
          </li>
          <li>
            Integração com <strong className="font-bold">SharePoint</strong>{" "}
            para persistência e gestão centralizada dos dados
          </li>
          <li>
            Prototipação e validação de experiência do usuário no{" "}
            <strong className="font-bold">Figma</strong>
          </li>
        </ul>
      </>
    ),
    tech: ["Power Apps", "Power Automate", "SharePoint", "Figma"],
    image: "/image/Tela M.Deska.webp",
    live: "https://www.joaolucasdev.com//pdf/PITCH M.Deska.pdf",
    altImage: "Imagem do aplicativo M.Deska em celular",
    ariaLabel:
      "Aplicação corporativa para gestão de baias desenvolvida em hackathon com a M. Dias Branco utilizando Power Apps, Power Automate, SharePoint e prototipação em Figma",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <motion.section
        id="projects"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden container mx-auto pt-20 px-6 max-w-6xl"
      >
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-(--gold) inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            Portfólio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`${playfair.className} text-(--text-secondary) font-display text-4xl md:text-5xl font-medium`}
          >
            Projetos em Destaque
          </motion.h2>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="mt-8 origin-center h-px w-20 sm:w-60 border-(--gold)"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative luxury-card overflow-hidden">
                  <div className="aspect-video bg-linear-to-br flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.altImage}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <span className="font-display text-3xl text-primary/20">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  {(project.github || project.live) && (
                    <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 border border-border rounded-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
                          aria-label="Repositório no GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}

                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 border border-border rounded-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
                          aria-label={project.ariaLabel}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-(--gold) text-xs tracking-[0.2em] uppercase text-accent">
                  Projeto 0{index + 1}
                </span>
                <h3
                  className={`${playfair.className} text-(--text-secondary) font-display text-2xl md:text-3xl font-medium mt-3 mb-4`}
                >
                  {project.title}
                </h3>
                <div className="luxury-card bg-white/4 p-6 mb-6 text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-(--text-secondary) tracking-wider border border-(--border-color) rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
