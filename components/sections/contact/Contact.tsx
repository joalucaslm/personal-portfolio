"use client";

import IconButton from "@/components/ui/IconButton/IconButton";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Shield,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import emailjs from "@emailjs/browser";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const validateInput = (text: string, maxLength: number): boolean => {
    if (text.length > maxLength) return false;
    const dangerousPatterns = /<script|javascript:|onerror=|onclick=/i;
    return !dangerousPatterns.test(text);
  };

  // Honeypot field (campo invisível para pegar bots)
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      console.log("Bot detectado");
      return;
    }

    if (cooldown > 0) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }

    if (
      !validateInput(formData.name, 100) ||
      !validateInput(formData.email, 100) ||
      !validateInput(formData.message, 2000)
    ) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    console.log(
      "Service ID:",
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      "Template ID:",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      "Public Key:",
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    );

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setCooldown(60);

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsLoading(false);
    }
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
            Gostaria de conversar comigo? Entre em contato pelo formulário
            abaixo. Ficarei feliz em responder o mais breve possível!
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="luxury-card bg-(--accent)/10 p-8 space-y-6"
              aria-label="Formulário de contato"
              name="contact"
            >
              <input
                type="text"
                name="bot_field"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

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
                    name="user_name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    maxLength={100}
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
                    name="user_email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    maxLength={100}
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
                  className="block text-xs tracking-wider uppercase mb-3"
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
                  maxLength={2000}
                  className="w-full px-4 py-3 bg-(--bg-secondary) border border-(--border-color) rounded-sm focus:border-(--accent) focus:outline-none transition-colors font-light"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                  aria-required="true"
                />
                <p className="text-xs  mt-1">
                  {formData.message.length}/2000 caracteres
                </p>
              </div>

              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    {cooldown > 0
                      ? `Aguarde ${cooldown}s para enviar novamente`
                      : "Erro ao enviar mensagem. Verifique os dados."}
                  </span>
                </motion.div>
              )}

              {cooldown > 0 && !isError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-yellow-500 text-sm"
                >
                  <Shield className="w-4 h-4" />
                  <span>Aguarde {cooldown}s para enviar outra mensagem</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading || cooldown > 0}
                whileHover={{ scale: isLoading || cooldown > 0 ? 1 : 1.01 }}
                whileTap={{ scale: isLoading || cooldown > 0 ? 1 : 0.99 }}
                className="text-[#ededed] w-full bg-(--accent) py-2 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={
                  isSubmitted
                    ? "Mensagem enviada com sucesso"
                    : "Enviar mensagem de contato"
                }
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                    Enviando...
                  </>
                ) : isSubmitted ? (
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
