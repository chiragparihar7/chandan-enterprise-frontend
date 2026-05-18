import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import StatsSection from "@/components/about/StatsSection";
import ServiceExpertise from "@/components/about/ServiceExpertise";
import MissionVision from "@/components/about/MissionVision";
import Testimonials from "@/components/about/Testimonials";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <CompanyStory />
      <WhyChooseUs />
      <StatsSection />
      <ServiceExpertise />
      <MissionVision />
      <Testimonials />
      <CTASection />
    </main>
  );
}