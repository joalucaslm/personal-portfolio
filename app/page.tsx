import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Projects from "@/components/sections/projects/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "João Lucas | Desenvolvedor Full Stack",
  description:
    "Portfólio de João Lucas, desenvolvedor frontend especializado em React, Next.js e interfaces modernas.",
  keywords: [
    "João Lucas",
    "frontend",
    "react",
    "next.js",
    "portfólio",
    "desenvolvedor full stack",
  ],
  authors: [{ name: "João Lucas Lima" }],
  creator: "João Lucas Lima",
  metadataBase: new URL("https://www.joaolucasdev.com"),
  openGraph: {
    title: "João Lucas Lima | Desenvolvedor Full Stack",
    description:
      "Confira meu portfólio com projetos em React, Next.js e UI moderna.",
    url: "https://www.joaolucasdev.com",
    siteName: "Portfólio João Lucas Lima",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Portfólio João Lucas Lima",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center ">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
