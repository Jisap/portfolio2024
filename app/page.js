import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Subscription from "@/components/Subscription";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Subscription />
    </main>
  );
}
