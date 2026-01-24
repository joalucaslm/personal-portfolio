import { ThemeProvider } from "@/provider/ThemeProvider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
        url: "/logo/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Portfólio João Lucas Lima",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: "/logo/favicon.svg",
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
        <link rel="icon" href="/logo/favicon.svg" sizes="any" />
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
