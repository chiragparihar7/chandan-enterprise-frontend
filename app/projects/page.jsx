import Script from "next/script";

import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectStats from "@/components/projects/ProjectStats";
import TestimonialsSection from "@/components/projects/TestimonialsSection";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import FAQSection from "@/components/projects/FAQSection";

// Projects Page SEO
export const metadata = {
  title:
  "Waterproofing Projects | Chandan Enterprise",

  description:
    "Explore completed waterproofing projects by Chandan Enterprise including roof waterproofing, terrace leakage, basement protection & wall seepage solutions.",

  keywords: [
    "waterproofing projects Ahmedabad",
    "roof waterproofing projects",
    "terrace waterproofing work",
    "basement waterproofing projects",
    "bathroom leakage repair projects",
    "wall seepage treatment",
    "waterproofing contractor Ahmedabad",
    "before after waterproofing",
    "waterproofing case studies",
    "completed waterproofing services",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title:
      "Our Waterproofing Projects in Ahmedabad | Chandan Enterprise",

    description:
      "View completed waterproofing and leakage repair projects across Ahmedabad.",

    url:
      "https://www.chandanenterprises.com/projects",

    siteName: "Chandan Enterprise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Enterprise Waterproofing Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Waterproofing Projects | Chandan Enterprise",

    description:
      "Explore our successful roof, terrace & basement waterproofing projects.",

    images: ["/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Projects Schema */}
      <Script
        id="projects-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "CollectionPage",

            name:
              "Waterproofing Projects",

            url:
              "https://www.chandanenterprises.com/projects",

            description:
              "Completed waterproofing and leakage repair projects by Chandan Enterprise in Ahmedabad.",

            mainEntity: {
              "@type": "ItemList",

              itemListElement: [
                {
                  "@type": "CreativeWork",

                  position: 1,

                  name:
                    "Roof Waterproofing Project",
                },

                {
                  "@type": "CreativeWork",

                  position: 2,

                  name:
                    "Terrace Leakage Repair Project",
                },

                {
                  "@type": "CreativeWork",

                  position: 3,

                  name:
                    "Basement Waterproofing Project",
                },

                {
                  "@type": "CreativeWork",

                  position: 4,

                  name:
                    "Bathroom Leakage Repair Project",
                },

                {
                  "@type": "CreativeWork",

                  position: 5,

                  name:
                    "Wall Seepage Treatment Project",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="projects-faq-schema"
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
                  "What types of waterproofing projects have you completed?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "We have completed roof waterproofing, terrace leakage repair, basement waterproofing, bathroom leakage repair and wall seepage treatment projects.",
                },
              },

              {
                "@type": "Question",

                name:
                  "Do you provide waterproofing services for residential and commercial properties?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Yes, we provide waterproofing solutions for both residential and commercial buildings in Ahmedabad.",
                },
              },

              {
                "@type": "Question",

                name:
                  "Do your waterproofing projects include warranty support?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Yes, selected waterproofing services include warranty support depending on project type and materials used.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-white text-black overflow-hidden">

        <ProjectsHero />

        <FeaturedProjects />

        <ProjectStats />

        <TestimonialsSection />

        <ProcessTimeline />

        <FAQSection />

      </main>
    </>
  );
}