// app/services/[slug]/page.tsx

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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
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

      <ServiceProblems problems={service.problems} />

      <ServiceProcess process={service.process} />

      <ServiceApplications
        applications={service.applications}
      />

      <WhyChooseUs />

      <ServiceFAQ faqs={service.faqs} />

      <RelatedServices
        relatedServices={relatedServices}
        currentSlug={service.slug}
      />

      <ServiceCTA />
    </>
  );
}