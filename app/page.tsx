import Header from "@/shared/header/header";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col items-center gap-4">
        <span className="mt-24 inline-block px-4 py-2 text-xs tracking-[0.3em] uppercase text-(--gold) border border-(--gold) rounded-sm">
          FULL STACK DEVELOPER
        </span>
        <h1 className={`${playfair.className} font-title text-8xl`}>
          João Lucas Lima
        </h1>
      </main>
    </>
  );
}
