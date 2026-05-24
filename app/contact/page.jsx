import Script from "next/script";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ProcessTimeline from "@/components/contact/ProcessTimeline";
import FAQSection from "@/components/contact/FAQSection";
import EmergencyCTA from "@/components/contact/EmergencyCTA";

// Contact Page SEO
export const metadata = {
  title:
    "Contact Us | Chandan Enterprise",

  description:
    "Contact Chandan Enterprise for roof waterproofing, terrace leakage repair, basement protection & wall seepage solutions in Ahmedabad.",

  keywords: [
    "contact waterproofing company Ahmedabad",
    "roof waterproofing contact",
    "terrace leakage repair Ahmedabad",
    "waterproofing contractor contact",
    "basement waterproofing services",
    "bathroom leakage repair",
    "wall seepage treatment Ahmedabad",
    "waterproofing enquiry Ahmedabad",
    "Chandan Enterprise contact",
    "emergency leakage repair",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Chandan Enterprise | Waterproofing Services Ahmedabad",

    description:
      "Get in touch for professional waterproofing and leakage repair solutions in Ahmedabad.",

    url:
      "https://www.chandanenterprises.com/contact",

    siteName: "Chandan Enterprise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Chandan Enterprise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Us | Chandan Enterprise",

    description:
      "Professional waterproofing and leakage repair experts in Ahmedabad.",

    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Page Schema */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "ContactPage",

            name:
              "Contact Chandan Enterprise",

            url:
              "https://www.chandanenterprises.com/contact",

            description:
              "Contact Chandan Enterprise for waterproofing and leakage repair services in Ahmedabad.",

            mainEntity: {
              "@type": "LocalBusiness",

              name: "Chandan Enterprise",

              image:
                "https://www.chandanenterprises.com/logo.png",

              telephone:
                "+919558189429",

              email:
                "info@chandanenterprises.com",

              url:
                "https://www.chandanenterprises.com",

              address: {
                "@type": "PostalAddress",

                addressLocality:
                  "Ahmedabad",

                addressRegion:
                  "Gujarat",

                postalCode:
                  "380001",

                addressCountry:
                  "IN",
              },

              geo: {
                "@type": "GeoCoordinates",

                latitude:
                  "23.0225",

                longitude:
                  "72.5714",
              },

              areaServed: [
                "Ahmedabad",
                "Satellite",
                "Bopal",
                "Naroda",
                "Nikol",
                "Gandhinagar",
              ],

              openingHoursSpecification: {
                "@type":
                  "OpeningHoursSpecification",

                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],

                opens: "09:00",

                closes: "20:00",
              },

              contactPoint: {
                "@type": "ContactPoint",

                telephone:
                  "+919558189429",

                contactType:
                  "customer service",

                areaServed:
                  "IN",

                availableLanguage: [
                  "English",
                  "Hindi",
                  "Gujarati",
                ],
              },
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="contact-faq-schema"
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
                  "How can I contact Chandan Enterprise?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "You can contact Chandan Enterprise through phone, email or the enquiry form available on our website.",
                },
              },

              {
                "@type": "Question",

                name:
                  "Do you provide waterproofing services across Ahmedabad?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Yes, we provide waterproofing services across Ahmedabad and nearby areas.",
                },
              },

              {
                "@type": "Question",

                name:
                  "Do you offer emergency leakage repair services?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Yes, we provide emergency leakage inspection and waterproofing solutions depending on project requirements.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-white text-black overflow-hidden">

        <ContactHero />

        <ContactInfo />

        <ContactForm />

        <ProcessTimeline />

        <FAQSection />

        <EmergencyCTA />

      </main>
    </>
  );
}