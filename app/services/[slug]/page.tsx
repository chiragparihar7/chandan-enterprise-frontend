// app/services/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";

import ServiceHero from "@/components/service-details/ServiceHero";
import ServiceOverview from "@/components/service-details/ServiceOverview";
import ServiceProblems from "@/components/service-details/ServiceProblems";
import ServiceProcess from "@/components/service-details/ServiceProcess";
import ServiceApplications from "@/components/service-details/ServiceApplications";
import WhyChooseUs from "@/components/service-details/WhyChooseUs";
import ServiceFAQ from "@/components/service-details/ServiceFAQ";
import RelatedServices from "@/components/service-details/RelatedServices";
import ServiceCTA from "@/components/service-details/ServiceCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.chandanenterprises.com";

/**
 * Generate SEO metadata dynamically for every service.
 */
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Chandan Enterprise",
      description:
        "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

  const imageUrl = service.heroImage.startsWith("http")
    ? service.heroImage
    : `${SITE_URL}${service.heroImage}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,

    keywords: service.seoKeywords || [
      service.title,
      `${service.title} Ahmedabad`,
      `${service.title} services Ahmedabad`,
      `${service.title} contractor Ahmedabad`,
      "Chandan Enterprise",
    ],

    authors: [
      {
        name: "Chandan Enterprise",
      },
    ],

    creator: "Chandan Enterprise",
    publisher: "Chandan Enterprise",

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: canonicalUrl,
      siteName: "Chandan Enterprise",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} - Chandan Enterprise`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,

      images: [imageUrl],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(slug);

  return (
    <>
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        shortDescription={service.shortDescription}
        heroImage={service.heroImage}
      />

      <ServiceOverview
        overview={service.overview}
        benefits={service.benefits}
      />

      <ServiceProblems
        problems={service.problems}
      />

      <ServiceProcess
        process={service.process}
      />

      <ServiceApplications
        applications={service.applications}
      />

      <WhyChooseUs />

      <ServiceFAQ
        faqs={service.faqs}
      />

      <RelatedServices
        relatedServices={relatedServices}
        currentSlug={service.slug}
      />

      <ServiceCTA />
    </>
  );
} 