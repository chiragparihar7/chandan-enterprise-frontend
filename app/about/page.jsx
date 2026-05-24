import Script from "next/script";

import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import StatsSection from "@/components/about/StatsSection";
import ServiceExpertise from "@/components/about/ServiceExpertise";
import MissionVision from "@/components/about/MissionVision";
import Testimonials from "@/components/about/Testimonials";
import CTASection from "@/components/about/CTASection";

// About Page SEO
export const metadata = {
  title:
  "About Chandan Enterprise | Waterproofing Experts",

  description:
    "Learn about Chandan Enterprise, a trusted waterproofing company in Ahmedabad providing roof, terrace, basement & leakage repair solutions.",

  keywords: [
    "about Chandan Enterprise",
    "waterproofing company Ahmedabad",
    "roof waterproofing experts",
    "terrace waterproofing company",
    "basement waterproofing Ahmedabad",
    "waterproofing contractor Ahmedabad",
    "leakage repair specialists",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Chandan Enterprise | Waterproofing Company in Ahmedabad",

    description:
      "Trusted waterproofing experts in Ahmedabad for roofs, terraces, basements & leakage repair solutions.",

    url:
      "https://www.chandanenterprises.com/about",

    siteName: "Chandan Enterprise",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Chandan Enterprise",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Chandan Enterprise | Waterproofing Experts",

    description:
      "Professional waterproofing company serving Ahmedabad and nearby areas.",

    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* About Page Schema */}
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "AboutPage",

            name:
              "About Chandan Enterprise",

            url:
              "https://www.chandanenterprises.com/about",

            description:
              "Chandan Enterprise is a professional waterproofing company in Ahmedabad specializing in roof, terrace, basement & leakage repair services.",

            mainEntity: {
              "@type": "LocalBusiness",

              name: "Chandan Enterprise",

              image:
                "https://www.chandanenterprises.com/logo.png",

              telephone: "+91XXXXXXXXXX",

              address: {
                "@type": "PostalAddress",

                addressLocality: "Ahmedabad",

                addressRegion: "Gujarat",

                addressCountry: "IN",
              },

              areaServed: "Ahmedabad",

              serviceType: [
                "Roof Waterproofing",
                "Terrace Waterproofing",
                "Basement Waterproofing",
                "Bathroom Leakage Repair",
                "Wall Seepage Treatment",
              ],
            },
          }),
        }}
      />

      <main className="overflow-hidden">

        <AboutHero />

        <CompanyStory />

        <WhyChooseUs />

        <StatsSection />

        <ServiceExpertise />

        <MissionVision />

        <Testimonials />

        <CTASection />

      </main>
    </>
  );
}