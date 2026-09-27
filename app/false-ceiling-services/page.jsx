import HeroSection from "@/components/false-ceiling-landing/HeroSection";
import TrustStats from "@/components/false-ceiling-landing/TrustStats";
import ServicesSection from "@/components/false-ceiling-landing/ServicesSection";
import ProblemSection from "@/components/false-ceiling-landing/ProblemSection";
import SolutionSection from "@/components/false-ceiling-landing/SolutionSection";
import FalseCeilingTypes from "@/components/false-ceiling-landing/FalseCeilingTypes";
import RoomApplications from "@/components/false-ceiling-landing/RoomApplications";
import WhyChooseUs from "@/components/false-ceiling-landing/WhyChooseUs";
import ProcessTimeline from "@/components/false-ceiling-landing/ProcessTimeline";
import ProjectShowcase from "@/components/false-ceiling-landing/ProjectShowcase";
import BeforeAfterSection from "@/components/false-ceiling-landing/BeforeAfterSection";
import ConsultationCTA from "@/components/false-ceiling-landing/ConsultationCTA";
import LeadForm from "@/components/false-ceiling-landing/LeadForm";
import FAQSection from "@/components/false-ceiling-landing/FAQSection";
import StickyMobileCTA from "@/components/false-ceiling-landing/StickyMobileCTA";
export const metadata = {
  title: "False Ceiling Services in Ahmedabad | Chandan Enterprises",
  description:
    "False ceiling services in Ahmedabad for residential, office and commercial interiors. Explore gypsum, POP, cove, grid, decorative and lighting-integrated ceiling solutions.",
  alternates: {
    canonical: "/false-ceiling-services",
  },
};

export default function FalseCeilingServicesPage() {
  return (
    <>
      <StickyMobileCTA />
      {/*  */}
      <main>
        <HeroSection />
        <TrustStats />
        <ServicesSection />
        <ProblemSection />
        <ProjectShowcase />
        <BeforeAfterSection />
        <SolutionSection />
        <FalseCeilingTypes />
        <RoomApplications />
        <WhyChooseUs />
        <ProcessTimeline />
        <LeadForm />
        <FAQSection />
        <ConsultationCTA />
      </main>
    </>
  );
}
