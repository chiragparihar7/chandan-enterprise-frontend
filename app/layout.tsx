import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Components
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LayoutWrapper from "@/components/common/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.chandanenterprises.com",
  ),

  // Default Title
  title: {
    default: "Best Waterproofing Services in Ahmedabad | Chandan Enterprise",
    template: "%s | Chandan Enterprise",
  },

  // Meta Description
  description:
    "Professional waterproofing services in Ahmedabad for roofs, terraces, basements, bathrooms & wall leakage repair. Contact Chandan Enterprise today.",

  // SEO Keywords
  keywords: [
    "waterproofing services Ahmedabad",
    "roof waterproofing",
    "terrace waterproofing",
    "basement waterproofing",
    "bathroom leakage repair",
    "wall seepage treatment",
    "waterproofing contractor Ahmedabad",
    "roof leakage repair",
    "Chandan Enterprise",
  ],

  // Authors & Publisher
  authors: [{ name: "Chandan Enterprise" }],
  creator: "Chandan Enterprise",
  publisher: "Chandan Enterprise",

  // Robots SEO
  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.chandanenterprises.com",
  },

  // Open Graph SEO
  openGraph: {
    title: "Best Waterproofing Services in Ahmedabad | Chandan Enterprise",

    description:
      "Professional waterproofing & leakage repair services in Ahmedabad.",

    url: "https://www.chandanenterprises.com",

    siteName: "Chandan Enterprise",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chandan Enterprise Waterproofing Services",
      },
    ],
  },

  // Twitter SEO
  twitter: {
    card: "summary_large_image",

    title: "Best Waterproofing Services in Ahmedabad | Chandan Enterprise",

    description:
      "Professional waterproofing solutions for roofs, terraces & basements.",

    images: ["/og-image.jpg"],
  },

  // Geo SEO
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225,72.5714",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">
        {/* Google Ads / Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18170685424"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'AW-18170685424');
          `}
        </Script>

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "LocalBusiness",

              name: "Chandan Enterprise",

              image: "https://www.chandanenterprises.com/logo.png",

              url: "https://www.chandanenterprises.com",

              telephone: "+919558189429",

              address: {
                "@type": "PostalAddress",

                streetAddress: "Ahmedabad",

                addressLocality: "Ahmedabad",

                addressRegion: "Gujarat",

                postalCode: "380001",

                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",

                latitude: "23.0225",

                longitude: "72.5714",
              },

              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",

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

              areaServed: [
                "Ahmedabad",
                "Gandhinagar",
                "Satellite",
                "Prahlad Nagar",
                "SG Highway",
                "Bopal",
                "South Bopal",
                "Science City",
                "Thaltej",
                "Bodakdev",
                "Vastrapur",
                "Gota",
                "Chandkheda",
                "Motera",
                "Nikol",
                "Naroda",
                "Maninagar",
              ],

              priceRange: "₹₹",

              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
              ],

              description:
                "Professional waterproofing services for roofs, terraces, basements, bathrooms & wall leakage repair.",

              serviceType: [
                "Terrace Waterproofing",
                "Roof Waterproofing",
                "Basement Waterproofing",
                "Bathroom Waterproofing",
                "Water Leakage Repair",
                "Wall Crack Repair",
                "Damp Proofing",
                "Structural Repair",
                "Home Renovation",
                "Office Renovation",
                "Property Refurbishment",
                "Building Restoration",
                "False Ceiling",
                "Gypsum Partition",
                "Painting Services",
                "Civil Maintenance",
              ],
            }),
          }}
        />

        <Script
  id="organization-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",

      name: "Chandan Enterprise",

      url: "https://www.chandanenterprises.com",

      logo: "https://www.chandanenterprises.com/logo.png",

      telephone: "+919558189429",

      address: {
        "@type": "PostalAddress",

        addressLocality: "Ahmedabad",

        addressRegion: "Gujarat",

        addressCountry: "IN",
      },
    }),
  }}
/>

<Script
  id="website-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",

      "@type": "WebSite",

      name: "Chandan Enterprise",

      url: "https://www.chandanenterprises.com",
    }),
  }}
/>

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
