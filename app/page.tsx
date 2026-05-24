import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyTrustSection from "../components/home/WhyTrustSection";
import FaqSection from "../components/home/FaqSection";
import EnquiryFormSection from "../components/home/EnquiryFormSection";
import Script from "next/script";
export const metadata = {
  title:
    "Best Waterproofing Services in Ahmedabad | Chandan Enterprise",

    description:
    "Professional waterproofing services in Ahmedabad for roofs, terraces, basements, bathrooms & wall leakage repair. Contact Chandan Enterprise today.",

  keywords: [
    "waterproofing services Ahmedabad",
    "roof waterproofing",
    "terrace waterproofing",
    "bathroom leakage repair",
    "wall seepage treatment",
    "basement waterproofing",
    "waterproofing contractor Ahmedabad",
  ],

  metadataBase: new URL("https://www.chandanenterprises.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Best Waterproofing Services in Ahmedabad | Chandan Enterprise",

    description:
      "Professional waterproofing & leakage repair services in Ahmedabad.",

    url: "https://www.chandanenterprises.com",

    siteName: "Chandan Enterprise",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Enterprise Waterproofing Services",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best Waterproofing Services in Ahmedabad | Chandan Enterprise",

    description:
      "Professional roof, terrace & basement waterproofing solutions.",

    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
  
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
  
            "@type": "FAQPage",
  
            mainEntity: [
              {
                "@type": "Question",
  
                name:
                  "What waterproofing services do you provide?",
  
                acceptedAnswer: {
                  "@type": "Answer",
  
                  text:
                    "We provide roof, terrace, basement, bathroom and wall waterproofing services in Ahmedabad.",
                },
              },
  
              {
                "@type": "Question",
  
                name:
                  "Do you provide waterproofing warranty?",
  
                acceptedAnswer: {
                  "@type": "Answer",
  
                  text:
                    "Yes, we provide waterproofing warranty depending on the service type.",
                },
              },
  
              {
                "@type": "Question",
  
                name:
                  "Which areas do you serve?",
  
                acceptedAnswer: {
                  "@type": "Answer",
  
                  text:
                    "We provide waterproofing services across Ahmedabad and nearby areas.",
                },
              },
            ],
          }),
        }}
      />
  
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