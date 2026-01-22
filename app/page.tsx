import Header from "@/components/sections/header/Header";
import About from "@/components/sections/about/About";
import Hero from "@/components/layout/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center ">
        <Hero />
        <About />
      </main>
    </>
  );
}
