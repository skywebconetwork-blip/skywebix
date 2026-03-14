import AboutSnapshot from "@/components/sections/AboutSnapshot";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSnapshot />
      <ServicesSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
