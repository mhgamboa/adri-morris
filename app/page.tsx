import { Hero } from "@/app/components/home/Hero";
import { About } from "@/app/components/home/About";
import { Services } from "@/app/components/home/Services";
import { Testimonial } from "@/app/components/home/Testimonial";
import { CTA } from "@/app/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <CTA />
    </main>
  );
}
