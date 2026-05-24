import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:
        "https://www.chandanenterprises.com",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 1,
    },

    {
      url:
        "https://www.chandanenterprises.com/about",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.8,
    },

    {
      url:
        "https://www.chandanenterprises.com/services",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 0.9,
    },

    {
      url:
        "https://www.chandanenterprises.com/projects",

      lastModified:
        new Date(),

      changeFrequency:
        "weekly",

      priority: 0.8,
    },

    {
      url:
        "https://www.chandanenterprises.com/clients",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.7,
    },

    {
      url:
        "https://www.chandanenterprises.com/contact",

      lastModified:
        new Date(),

      changeFrequency:
        "monthly",

      priority: 0.8,
    },
  ];
}