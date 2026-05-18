import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ProcessTimeline from "@/components/contact/ProcessTimeline";
import FAQSection from "@/components/contact/FAQSection";
import EmergencyCTA from "@/components/contact/EmergencyCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ProcessTimeline />
      <FAQSection />
      <EmergencyCTA />
    </>
  );
}