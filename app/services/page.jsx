import Script from "next/script";

import HeroSection from "@/components/services/HeroSection";
import FeaturedServices from "@/components/services/FeaturedServices";
import WaterproofingImportance from "@/components/services/WaterproofingImportance";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import BeforeAfterSection from "@/components/services/BeforeAfterSection";

// Services Page SEO
export const metadata = {
  title:
    "Waterproofing Services in Ahmedabad | Chandan Enterprise",

  description:
    "Professional waterproofing services in Ahmedabad including roof, terrace, basement, bathroom leakage repair & wall seepage treatment.",

  keywords: [
    "waterproofing services Ahmedabad",
    "roof waterproofing Ahmedabad",
    "terrace waterproofing",
    "bathroom leakage repair",
    "wall seepage treatment",
    "basement waterproofing",
    "waterproofing contractor Ahmedabad",
    "roof leakage repair",
    "commercial waterproofing",
    "residential waterproofing",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Waterproofing Services in Ahmedabad | Chandan Enterprise",

    description:
      "Trusted waterproofing experts for roofs, terraces, basements & leakage repair solutions.",

    url:
      "https://www.chandanenterprises.com/services",

    siteName: "Chandan Enterprise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waterproofing Services Ahmedabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Waterproofing Services in Ahmedabad",

    description:
      "Professional waterproofing solutions for residential & commercial properties.",

    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Schema */}
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Service",

            serviceType:
              "Waterproofing Services",

            provider: {
              "@type": "LocalBusiness",

              name: "Chandan Enterprise",

              image:
                "https://www.chandanenterprises.com/logo.png",

              url:
                "https://www.chandanenterprises.com",

              telephone:
                "+919558189429",

              address: {
                "@type": "PostalAddress",

                addressLocality:
                  "Ahmedabad",

                addressRegion:
                  "Gujarat",

                addressCountry:
                  "IN",
              },
            },

            areaServed: [
              "Ahmedabad",
              "Satellite",
              "Bopal",
              "Naroda",
              "Nikol",
              "Gandhinagar",
            ],

            hasOfferCatalog: {
              "@type": "OfferCatalog",

              name:
                "Waterproofing Services",

              itemListElement: [
                {
                  "@type": "Offer",

                  itemOffered: {
                    "@type": "Service",

                    name:
                      "Roof Waterproofing",
                  },
                },

                {
                  "@type": "Offer",

                  itemOffered: {
                    "@type": "Service",

                    name:
                      "Terrace Waterproofing",
                  },
                },

                {
                  "@type": "Offer",

                  itemOffered: {
                    "@type": "Service",

                    name:
                      "Basement Waterproofing",
                  },
                },

                {
                  "@type": "Offer",

                  itemOffered: {
                    "@type": "Service",

                    name:
                      "Bathroom Leakage Repair",
                  },
                },

                {
                  "@type": "Offer",

                  itemOffered: {
                    "@type": "Service",

                    name:
                      "Wall Seepage Treatment",
                  },
                },
              ],
            },
          }),
        }}
      />

      <main className="bg-black text-white overflow-hidden">

        <HeroSection />

        <FeaturedServices />

        <WaterproofingImportance />

        <ProcessTimeline />

        <BeforeAfterSection />

      </main>
    </>
  );
}