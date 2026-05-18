import HeroSection from "@/components/services/HeroSection";
import FeaturedServices from "@/components/services/FeaturedServices";
import WaterproofingImportance from "@/components/services/WaterproofingImportance";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import BeforeAfterSection from "@/components/services/BeforeAfterSection";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <HeroSection />
      <FeaturedServices />
      <WaterproofingImportance />
      <ProcessTimeline />
      <BeforeAfterSection />
    </main>
  );
}