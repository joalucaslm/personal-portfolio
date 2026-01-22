"use client";

import IconButton from "@/components/ui/IconButton/IconButton";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "joaolucaslimamaia@gmail.com" },
    { icon: MapPin, label: "Localização", value: "Fortaleza, Brasil" },
    { icon: Phone, label: "Telefone", value: "+55 (85) 98219-4601" },
  ];

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 max-w-5xl"
      >
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-(--gold) inline-block text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`${playfair.className} text-(--text-secondary) font-display text-4xl md:text-5xl font-medium `}
          >
            Vamos Conversar
          </motion.h2>

          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="mt-8 origin-center h-px w-20 border-(--gold)"
            aria-hidden="true"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6 font-light"
          >
            Tem um projeto em mente? Vamos trabalhar juntos para transformar sua
            ideia em realidade.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
            aria-label="Informações de contato"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="luxury-card bg-(--accent)/10 p-6 flex items-center gap-5 group"
              >
                <IconButton Icon={info.icon} color="gold" />
                <div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">
                    {info.label}
                  </p>
                  <p className="text-(--text-secondary) font-light mt-1">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="luxury-card bg-(--accent)/10 p-6 border-accent/20"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-center gap-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-light">
                  Disponível para novos projetos
                </span>
              </div>
            </motion.div>
          </motion.aside>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="luxury-card bg-(--accent)/10 p-8 space-y-6"
              aria-label="Formulário de contato"
              name="contact"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs tracking-wider uppercase text-muted-foreground mb-3"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-(--bg-secondary) border border-(--border-color) rounded-sm focus:border-(--accent) focus:outline-none transition-colors font-light"
                    placeholder="Seu nome completo"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs tracking-wider uppercase text-muted-foreground mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-(--bg-secondary) border border-(--border-color) rounded-sm focus:border-(--accent) focus:outline-none transition-colors font-light"
                    placeholder="seu@email.com"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs tracking-wider uppercase text-muted-foreground mb-3"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-(--bg-secondary) border border-(--border-color) rounded-sm focus:border-(--accent) focus:outline-none transition-colors resize-none font-light"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                  aria-required="true"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-(--accent) py-2 cursor-pointer flex items-center justify-center gap-3"
                aria-label={
                  isSubmitted
                    ? "Mensagem enviada com sucesso"
                    : "Enviar mensagem de contato"
                }
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Mensagem Enviada
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
