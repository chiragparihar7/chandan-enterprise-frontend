
import type { Metadata } from "next";

import HeroSection from "@/components/building-repair-maintenance/HeroSection";
import TrustStrip from "@/components/building-repair-maintenance/TrustStrip";
import ProblemsSection from "@/components/building-repair-maintenance/ProblemsSection";
import ServicesSection from "@/components/building-repair-maintenance/ServicesSection";
import ProjectsSection from "@/components/building-repair-maintenance/ProjectsSection";
import WhyChooseUs from "@/components/building-repair-maintenance/WhyChooseUs";
import ProcessSection from "@/components/building-repair-maintenance/ProcessSection";
import TestimonialsSection from "@/components/building-repair-maintenance/TestimonialsSection";
import QuoteCTASection from "@/components/building-repair-maintenance/QuoteCTASection";
import FAQSection from "@/components/building-repair-maintenance/FAQSection";
import ContactSection from "@/components/building-repair-maintenance/ContactSection";
import StickyMobileCTA from "@/components/building-repair-maintenance/StickyMobileCTA";

export const metadata: Metadata = {
  title:
    "Building Repair & Waterproofing Services in Ahmedabad | Chandan Enterprise",

  description:
    "Looking for building repair and waterproofing services in Ahmedabad? Contact Chandan Enterprise for terrace leakage, bathroom seepage, damp wall treatment, exterior waterproofing, plaster repair and building maintenance.",

  keywords: [
    "building repair services Ahmedabad",
    "waterproofing services Ahmedabad",
    "terrace waterproofing Ahmedabad",
    "water leakage repair Ahmedabad",
    "bathroom leakage repair Ahmedabad",
    "damp wall treatment Ahmedabad",
    "exterior wall waterproofing Ahmedabad",
    "plaster repair Ahmedabad",
    "building maintenance Ahmedabad",
    "Chandan Enterprise",
  ],

  alternates: {
    canonical:
      "https://YOUR-DOMAIN.com/building-repair-maintenance",
  },

  openGraph: {
    title:
      "Building Repair & Waterproofing in Ahmedabad | Chandan Enterprise",

    description:
      "Get help with terrace leakage, damp walls, bathroom seepage and building repair. Contact Chandan Enterprise to discuss your property requirements in Ahmedabad.",

    url: "https://YOUR-DOMAIN.com/building-repair-maintenance",

    siteName: "Chandan Enterprise",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BuildingRepairMaintenancePage() {
  return (
    <main className="ce-landing-page">
      {/* Hero and primary conversion section */}
      <HeroSection />

      {/* Business approach and trust points */}
      <TrustStrip />

      {/* Common building problems */}
      <ProblemsSection />

      {/* Waterproofing and building repair services */}
      <ServicesSection />

      {/* Project examples and work approach */}
      <ProjectsSection />

      {/* Business benefits */}
      <WhyChooseUs />

      {/* Steps from inspection to completion */}
      <ProcessSection />

      {/* Customer feedback section */}
      <TestimonialsSection />

      {/* Additional inspection CTA */}
      <QuoteCTASection />

      {/* Frequently asked questions */}
      <FAQSection />

      {/* Contact information and lead form */}
      <ContactSection />

      {/* Fixed call and WhatsApp buttons on mobile */}
      <StickyMobileCTA />
    </main>
  );
}
