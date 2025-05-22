import HeroSection from "./components/HeroSection";
import ServicesOverview from "./components/ServicesOverview";
import CTASection from "./components/CTASection";

export default function Services() {
  return (
    <main className="pt-24">
      <HeroSection />
      <ServicesOverview />
      <CTASection />
    </main>
  );
}
