import HeroSection from "@/components/landing/HeroSection";
import TrustStats from "@/components/landing/TrustStats";
import ServicesSection from "@/components/landing/ServicesSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WaterproofingTypes from "@/components/landing/WaterproofingTypes";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ProjectShowcase from "@/components/landing/ProjectShowcase";
import WhyTrustSection from "@/components/landing/WhyTrustSection";
import EmergencyCTA from "@/components/landing/EmergencyCTA";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection from "@/components/landing/FAQSection";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";

export default function WaterproofingLandingPage() {
  return (
    <>
      <StickyMobileCTA />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Trust / Business Snapshot */}
        <TrustStats />

        {/* Services */}
        <ServicesSection />

        {/* Problems */}
        <ProblemSection />

        {/* Solution / Methodology */}
        <SolutionSection />

        {/* Service Applications */}
        <WaterproofingTypes />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Process */}
        <ProcessTimeline />

        {/* Before / After */}
        <BeforeAfterSection />

        {/* Project Showcase */}
        <ProjectShowcase />

        {/* Trust */}
        <WhyTrustSection />

        {/* Lead Form */}
        <LeadForm />

        {/* FAQ */}
        <FAQSection />

        {/* Strong CTA */}
        <EmergencyCTA />
      </main>
    </>
  );
}
