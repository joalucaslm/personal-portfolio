import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.joaolucasdev.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];
}
