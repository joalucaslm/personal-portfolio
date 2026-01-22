import Header from "@/components/sections/header/Header";
import Hero from "@/components/layout/hero/Hero";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center ">
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}
