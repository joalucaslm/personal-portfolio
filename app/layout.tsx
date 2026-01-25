import { ThemeProvider } from "@/provider/ThemeProvider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "João Lucas Lima | Full Stack Developer (React, Node.js, TypeScript)",
  description:
    "Portfólio de João Lucas Lima, Full Stack Developer especializado em React, Next.js, Node.js e TypeScript, com foco em aplicações web modernas, acessíveis e performáticas.",
  keywords: [
    "João Lucas Lima",
    "engenheiro de software",
    "desenvolvedor frontend",
    "desenvolvedor backend",
    "full stack developer",
    "software developer",
    "desenvolvedor full stack",
    "react developer",
    "next.js",
    "node.js",
    "typescript",
    "web developer",
    "portfólio desenvolvedor",
  ],

  authors: [{ name: "João Lucas Lima" }],
  creator: "João Lucas Lima",
  metadataBase: new URL("https://www.joaolucasdev.com"),

  openGraph: {
    title: "João Lucas Lima | Full Stack Developer",
    description:
      "Conheça o portfólio de João Lucas Lima, Full Stack Developer com projetos em React, Next.js, Node.js e APIs REST.",
    url: "https://www.joaolucasdev.com",
    images: [
      {
        url: "/image/Pitch João Lucas Lima M.Dias Branco.webp",
        width: 1200,
        height: 630,
        alt: "Portfólio João Lucas Lima | Desenvolvedor Full Stack",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
