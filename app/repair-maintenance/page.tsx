import type { Metadata } from "next";

import RepairHero from "@/components/repair-maintenance/RepairHero";
import TrustBar from "@/components/repair-maintenance/TrustBar";
import ProblemsSection from "@/components/repair-maintenance/ProblemsSection";
import ServicesGrid from "@/components/repair-maintenance/ServicesGrid";
import BeforeAfterGallery from "@/components/repair-maintenance/BeforeAfterGallery";
import WhyChooseUs from "@/components/repair-maintenance/WhyChooseUs";
import RepairProcess from "@/components/repair-maintenance/RepairProcess";
import ServiceAreas from "@/components/repair-maintenance/ServiceAreas";
import Testimonials from "@/components/repair-maintenance/Testimonials";
import FAQ from "@/components/repair-maintenance/FAQ";
import ContactForm from "@/components/repair-maintenance/ContactForm";
import FloatingCTA from "@/components/repair-maintenance/FloatingCTA";

export const metadata: Metadata = {
  title: "Repair & Maintenance Services in Ahmedabad | Chandan Enterprise",
  description:
    "Professional repair and maintenance services in Ahmedabad. Expert solutions for water leakage repair, terrace repair, wall crack repair, damp proofing, waterproofing maintenance, and structural repairs. Free inspection available.",

  keywords: [
    "repair services Ahmedabad",
    "maintenance services Ahmedabad",
    "water leakage repair Ahmedabad",
    "terrace repair Ahmedabad",
    "roof repair Ahmedabad",
    "wall crack repair Ahmedabad",
    "damp proofing Ahmedabad",
    "waterproofing maintenance Ahmedabad",
    "building repair Ahmedabad",
    "property maintenance Ahmedabad",
    "Chandan Enterprise",
  ],

  openGraph: {
    title: "Repair & Maintenance Services in Ahmedabad | Chandan Enterprise",
    description:
      "Professional repair and maintenance services in Ahmedabad with free inspection and expert solutions.",
    type: "website",
  },
};

export default function RepairMaintenancePage() {
  return (
    <main className="overflow-hidden bg-white">
      <RepairHero />

      <TrustBar />

      <ProblemsSection />

      <ServicesGrid />

      <BeforeAfterGallery />

      <ServiceAreas />

      <WhyChooseUs />

      <RepairProcess />

      <Testimonials />

      <FAQ />

      <ContactForm />

      <FloatingCTA />
    </main>
  );
}
