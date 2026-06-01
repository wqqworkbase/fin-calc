import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calculatefintax.com';
  const routes = [
    '/',
    '/about',
    '/terms',
    '/privacy',
    '/compound-interest-calculator',
    '/retirement-savings-calculator',
    '/loan-amortization-calculator',
    '/apr-to-ear-calculator',
    '/savings-goal-calculator',
    '/inflation-calculator',
    '/cd-ladder-calculator',
    '/us-tax-calculator',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));
}
