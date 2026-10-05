import { site, socialProfiles } from '../data/site';

export const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${site.url}/#business`,
  description: `Mortgage guidance in California and Texas, based in ${site.address}. Referrals to fellow Planet Home Lending loan officers for clients in other states.`,
  name: site.name,
  alternateName: `${site.advisor} - ${site.positioning}`,
  url: site.url,
  telephone: '+1-760-715-3434',
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: 'US',
  },
  areaServed: site.licensedStates,
  location: {
    '@type': 'Place',
    name: site.licensingOffice.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.licensingOffice.streetAddress,
      addressLocality: site.licensingOffice.city,
      addressRegion: site.licensingOffice.state,
      postalCode: site.licensingOffice.postalCode,
      addressCountry: 'US',
    },
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  }],
  sameAs: socialProfiles,
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: new URL(crumb.href, site.url).toString(),
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    image: new URL(options.image, site.url).toString(),
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: {
      '@type': 'Person',
      '@id': `${site.url}/#jason-herbert`,
      name: site.advisor,
      url: new URL('/about', site.url).toString(),
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: new URL('/images/logo.svg', site.url).toString(),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': new URL(`/blog/${options.slug}`, site.url).toString(),
    },
  };
}

export function serviceSchema(options: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    serviceType: 'Mortgage lending',
    provider: {
      '@type': 'FinancialService',
      '@id': `${site.url}/#business`,
      name: site.name,
      url: site.url,
    },
    areaServed: site.licensedStates,
    url: new URL(options.url, site.url).toString(),
  };
}

/** Combines multiple JSON-LD objects into a single @graph document. */
export function combineSchema(...schemas: (object | undefined | null)[]) {
  const valid = schemas.filter(Boolean) as object[];
  if (valid.length === 0) return undefined;
  if (valid.length === 1) return valid[0];
  return {
    '@context': 'https://schema.org',
    '@graph': valid.map((schema) => {
      const { '@context': _context, ...rest } = schema as Record<string, unknown>;
      return rest;
    }),
  };
}
