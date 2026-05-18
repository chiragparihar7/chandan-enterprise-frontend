import ClientsHero from "@/components/clients/ClientsHero";
import ClientLogos from "@/components/clients/ClientLogos";
import FeaturedClients from "@/components/clients/FeaturedClients";
import ClientCategories from "@/components/clients/ClientCategories";
import CaseStudySection from "@/components/clients/CaseStudySection";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientLogos />
      <FeaturedClients />
      <ClientCategories />
      <CaseStudySection />
    </>
  );
}