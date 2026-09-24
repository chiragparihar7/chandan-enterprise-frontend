import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ProblemSolutionSection from "../components/home/ProblemSolutionSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import ApplicationsSection from "../components/home/ApplicationsSection";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ServiceAreas from "../components/home/ServiceAreas";
import FaqSection from "../components/home/FaqSection";
import EnquirySection from "../components/home/EnquirySection";

import Script from "next/script";

export const metadata = {
  title:
    "Waterproofing Services in Ahmedabad | Chandan Enterprises",

  description:
    "Professional waterproofing and leakage protection services in Ahmedabad for terraces, roofs, bathrooms, basements, exterior walls and other property areas.",

  keywords: [
    "waterproofing services Ahmedabad",
    "waterproofing contractor Ahmedabad",
    "roof waterproofing Ahmedabad",
    "terrace waterproofing Ahmedabad",
    "bathroom waterproofing Ahmedabad",
    "basement waterproofing Ahmedabad",
    "wall leakage repair Ahmedabad",
    "water leakage treatment Ahmedabad",
    "dampness treatment Ahmedabad",
  ],

  metadataBase: new URL("https://www.chandanenterprises.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Waterproofing Services in Ahmedabad | Chandan Enterprises",

    description:
      "Professional waterproofing and leakage protection solutions for residential, commercial and industrial properties in Ahmedabad.",

    url: "https://www.chandanenterprises.com",

    siteName: "Chandan Enterprises",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Enterprises Waterproofing Services in Ahmedabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Waterproofing Services in Ahmedabad | Chandan Enterprises",

    description:
      "Professional waterproofing and leakage protection services in Ahmedabad.",

    images: ["/og-image.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What waterproofing services does Chandan Enterprises provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Chandan Enterprises provides terrace waterproofing, bathroom waterproofing, exterior wall waterproofing, rising dampness treatment, basement waterproofing, swimming pool waterproofing, PU injection grouting, expansion joint sealing and roof waterproofing.",
      },
    },
    {
      "@type": "Question",
      name: "How do you identify the cause of water leakage?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The process begins with site inspection and leak detection. The affected area, surface condition and visible signs of moisture are considered before determining the appropriate waterproofing or leakage treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide terrace and roof waterproofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Terrace waterproofing and roof waterproofing are part of the waterproofing services provided by Chandan Enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide bathroom waterproofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Bathroom waterproofing is available for wet areas where moisture penetration, leakage or dampness can affect surrounding surfaces and spaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can you treat damp walls and seepage?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Chandan Enterprises provides exterior wall waterproofing and rising dampness treatment for moisture-related problems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide basement waterproofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Basement waterproofing is one of our services for properties experiencing moisture, seepage or water penetration in basement areas.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our primary service location is Ahmedabad, Gujarat, with service coverage across Ahmedabad and nearby areas depending on the project requirement.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a waterproofing inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "You can contact Chandan Enterprises through the enquiry form, phone or WhatsApp to discuss your waterproofing or leakage problem and request an inspection.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        <Hero />

        <TrustBar />

        <AboutSection />

        <ServicesSection />

        <ProblemSolutionSection />

        <WhyChooseUs />

        <ProcessSection />

        <ApplicationsSection />

        <ProjectsPreview />

        <ServiceAreas />

        <FaqSection />

        <EnquirySection />
      </main>
    </>
  );
}