import type { Metadata } from "next";

import RepairHero from "@/components/repair-maintenance/RepairHero";
import TrustBar from "@/components/repair-maintenance/TrustBar";
import ProblemsSection from "@/components/repair-maintenance/ProblemsSection";
import ServicesGrid from "@/components/repair-maintenance/ServicesGrid";
import BeforeAfterGallery from "@/components/repair-maintenance/BeforeAfterGallery";
import WhyChooseUs from "@/components/repair-maintenance/WhyChooseUs";
import RepairProcess from "@/components/repair-maintenance/RepairProcess";
import ServiceAreas from "@/components/repair-maintenance/ServiceAreas";
import Testimonials from "@/components/repair-maintenance/Testimonials";
import FAQ from "@/components/repair-maintenance/FAQ";
import ContactForm from "@/components/repair-maintenance/ContactForm";
import FloatingCTA from "@/components/repair-maintenance/FloatingCTA";

export const metadata: Metadata = {
metadataBase: new URL("https://www.chandanenterprise.com"),

title:
"Building Repair, Waterproofing & Renovation Services in Ahmedabad | Chandan Enterprise",

description:
"Professional building repair, waterproofing, renovation, false ceiling, gypsum partition and maintenance services in Ahmedabad. Free site inspection available.",

keywords: [
"building repair Ahmedabad",
"waterproofing Ahmedabad",
"repair and maintenance Ahmedabad",
"renovation services Ahmedabad",
"water leakage repair Ahmedabad",
"terrace waterproofing Ahmedabad",
"roof waterproofing Ahmedabad",
"wall crack repair Ahmedabad",
"damp proofing Ahmedabad",
"structural repair Ahmedabad",
"home renovation Ahmedabad",
"office renovation Ahmedabad",
"false ceiling Ahmedabad",
"gypsum partition Ahmedabad",
"property maintenance Ahmedabad",
"civil contractor Ahmedabad",
"building restoration Ahmedabad",
"repair contractor Ahmedabad",
"Chandan Enterprise",
],

alternates: {
canonical:
"https://www.chandanenterprise.com/repair-maintenance",
},

robots: {
index: true,
follow: true,
},

openGraph: {
title:
"Building Repair, Waterproofing & Renovation Services in Ahmedabad",


description:
  "Trusted repair, waterproofing, renovation and maintenance solutions across Ahmedabad.",

url:
  "https://www.chandanenterprise.com/repair-maintenance",

siteName: "Chandan Enterprise",

locale: "en_IN",

type: "website",

images: [
  {
    url:
      "https://www.chandanenterprise.com/repair-maintenance/og-image.jpg",

    width: 1200,
    height: 630,

    alt:
      "Repair Maintenance Services Ahmedabad",
  },
],


},

twitter: {
card: "summary_large_image",


title:
  "Repair & Waterproofing Services Ahmedabad",

description:
  "Professional waterproofing, repair and renovation solutions.",

images: [
  "https://www.chandanenterprise.com/repair-maintenance/og-image.jpg",
],


},
};

export default function RepairMaintenancePage() {
const localBusinessSchema = {
"@context": "https://schema.org",
"@type": "LocalBusiness",


name: "Chandan Enterprise",

url: "https://www.chandanenterprise.com",

telephone: "+91 95581 89429",

image:
  "https://www.chandanenterprise.com/logo.png",

description:
  "Building repair, waterproofing, renovation and maintenance services in Ahmedabad.",

areaServed: [
  "Ahmedabad",
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
  "Gandhinagar",
],

address: {
  "@type": "PostalAddress",
  addressLocality: "Ahmedabad",
  addressRegion: "Gujarat",
  addressCountry: "IN",
},


};

const serviceSchema = {
"@context": "https://schema.org",
"@type": "Service",


serviceType:
  "Building Repair and Waterproofing Services",

provider: {
  "@type": "LocalBusiness",
  name: "Chandan Enterprise",
},

areaServed: "Ahmedabad",

hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Repair Maintenance Services",

  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Terrace Waterproofing",
      },
    },

    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Water Leakage Repair",
      },
    },

    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wall Crack Repair",
      },
    },

    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "False Ceiling Work",
      },
    },

    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Gypsum Partition Work",
      },
    },

    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Home Renovation",
      },
    },
  ],
},


};

const breadcrumbSchema = {
"@context": "https://schema.org",
"@type": "BreadcrumbList",

itemListElement: [
  {
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://www.chandanenterprise.com",
  },

  {
    "@type": "ListItem",
    position: 2,
    name: "Repair & Maintenance",
    item:
      "https://www.chandanenterprise.com/repair-maintenance",
  },
],


};

return (
<>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(localBusinessSchema),
}}
/>


  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(serviceSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(breadcrumbSchema),
    }}
  />

  <main className="overflow-hidden bg-white">
    <RepairHero />
    <TrustBar />
    <ProblemsSection />
    <ServicesGrid />
    <BeforeAfterGallery />
    <ServiceAreas />
    <WhyChooseUs />
    <RepairProcess />
    <Testimonials />
    <FAQ />
    <ContactForm />
    <FloatingCTA />
  </main>
</>


);
}
