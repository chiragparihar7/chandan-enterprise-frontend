import Script from "next/script";

import ClientsHero from "@/components/clients/ClientsHero";
import ClientLogos from "@/components/clients/ClientLogos";
import FeaturedClients from "@/components/clients/FeaturedClients";
import ClientCategories from "@/components/clients/ClientCategories";
import CaseStudySection from "@/components/clients/CaseStudySection";

// Clients Page SEO
export const metadata = {
  title:
    "Our Clients | Chandan Enterprise",

  description:
    "Explore trusted clients and successful waterproofing partnerships by Chandan Enterprise across residential and commercial projects in Ahmedabad.",

  keywords: [
    "Chandan Enterprise clients",
    "waterproofing company clients",
    "commercial waterproofing clients",
    "residential waterproofing Ahmedabad",
    "trusted waterproofing contractor",
    "roof waterproofing projects Ahmedabad",
    "waterproofing case studies",
    "Ahmedabad waterproofing company",
    "industrial waterproofing services",
    "client testimonials waterproofing",
  ],

  alternates: {
    canonical: "/clients",
  },

  openGraph: {
    title:
      "Our Clients | Chandan Enterprise",

    description:
      "Trusted by residential and commercial clients for professional waterproofing services in Ahmedabad.",

    url:
      "https://www.chandanenterprises.com/clients",

    siteName: "Chandan Enterprise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Enterprise Clients",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our Clients | Chandan Enterprise",

    description:
      "Explore our trusted waterproofing clients and successful project partnerships.",

    images: ["/og-image.jpg"],
  },
};

export default function ClientsPage() {
  return (
    <>
      {/* Clients Schema */}
      <Script
        id="clients-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Organization",

            name: "Chandan Enterprise",

            url:
              "https://www.chandanenterprises.com/clients",

            description:
              "Trusted waterproofing company serving residential and commercial clients in Ahmedabad.",

            areaServed: [
              "Ahmedabad",
              "Satellite",
              "Bopal",
              "Naroda",
              "Nikol",
              "Gandhinagar",
            ],

            knowsAbout: [
              "Roof Waterproofing",
              "Terrace Waterproofing",
              "Basement Waterproofing",
              "Bathroom Leakage Repair",
              "Wall Seepage Treatment",
            ],
          }),
        }}
      />

      {/* Testimonial Schema */}
      <Script
        id="testimonial-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Review",

            itemReviewed: {
              "@type": "LocalBusiness",

              name: "Chandan Enterprise",
            },

            reviewRating: {
              "@type": "Rating",

              ratingValue: "5",

              bestRating: "5",
            },

            author: {
              "@type": "Person",

              name: "Satisfied Client",
            },

            reviewBody:
              "Professional waterproofing service with quality workmanship and long-lasting leakage protection.",
          }),
        }}
      />

      <main className="bg-white text-black overflow-hidden">

        <ClientsHero />

        <ClientLogos />

        <FeaturedClients />

        <ClientCategories />

        <CaseStudySection />

      </main>
    </>
  );
}