import Header from "@/shared/header/header";
import Hero from "@/shared/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col items-center ">
        <Hero />
      </main>
    </>
  );
}
