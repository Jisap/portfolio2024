import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </main>
  );
}
