import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection"
import ServicesSection from "../components/home/ServicesSection";
import ServicesOverview from "../components/home/ServicesOverview"
import WhyTrustSection from "../components/home/WhyTrustSection";
import FaqSection from "../components/home/FaqSection";
import EnquiryFormSection from "../components/home/EnquiryFormSection"
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ServicesOverview />
      <WhyTrustSection />
      <FaqSection />
      <EnquiryFormSection />
    </>
  );
}