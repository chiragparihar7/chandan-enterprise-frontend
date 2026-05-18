import HeroSection from "@/components/landing/HeroSection";
import TrustStats from "@/components/landing/TrustStats";
import ServicesSection from "@/components/landing/ServicesSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import EmergencyCTA from "@/components/landing/EmergencyCTA";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection from "@/components/landing/FAQSection";

export default function WaterproofingLandingPage() {
  return (
    <>
      <StickyMobileCTA />
      <HeroSection />
      <TrustStats />
      <ServicesSection />
      <ProblemSection />
      <SolutionSection />
      <BeforeAfterSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <EmergencyCTA />
      <LeadForm />
      <FAQSection />
    </>
  );
}