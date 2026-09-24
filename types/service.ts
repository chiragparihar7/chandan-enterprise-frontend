export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
  step?: number | string;
  icon?: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProblem {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceApplication {
  category: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  slug: string;

  // Hero
  title: string;
  subtitle: string;
  shortDescription: string;
  heroImage: string;

  // SEO
  seoTitle: string;
  seoDescription: string;

  // Overview
  overview: string;

  // Benefits
  benefits: ServiceBenefit[];

  // Problems
  problems: ServiceProblem[];

  // Process
  process: ServiceProcessStep[];

  // Applications
  applications: ServiceApplication[];

  // FAQ
  faqs: ServiceFAQ[];
}