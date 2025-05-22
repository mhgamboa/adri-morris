import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import PhilosophySection from "./components/PhilosophySection";
import CTASection from "./components/CTASection";

export default function About() {
  return (
    <main className="pt-24">
      <HeroSection />
      <BioSection />
      <PhilosophySection />
      <CTASection />
    </main>
  );
}
