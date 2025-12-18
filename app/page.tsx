import { Hero } from "@/components/Hero";
import { FeatureTextSection1 } from "@/components/FeatureTextSection1";
import { FeatureCardsSection1 } from "@/components/FeatureCardsSection1";
import { FeatureCardsSection2 } from "@/components/FeatureCardsSection2";
import { GeniusSection } from "@/components/GeniusSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <Hero />
      <FeatureTextSection1 />
      <FeatureCardsSection1 />
      <FeatureCardsSection2 />
      <GeniusSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
