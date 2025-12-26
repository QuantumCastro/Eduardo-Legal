import {
  contactInfo,
  languagePaths,
  mediaAssets,
  siteConfig,
  translations,
  type Language,
} from "../data/estrada-legal";

type AlternateLink = {
  hreflang: string;
  href: string;
};

type SeoImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type SeoPayload = {
  lang: Language;
  title: string;
  description: string;
  headline: string;
  canonical: string;
  alternates: AlternateLink[];
  og: {
    url: string;
    title: string;
    description: string;
    image: SeoImage;
    siteName: string;
    locale: string;
    localeAlternates: string[];
  };
  twitter: {
    title: string;
    description: string;
    image: SeoImage;
    handle: string;
  };
  jsonLd: Record<string, unknown>;
  preloadImage: {
    href: string;
    width: number;
    height: number;
  };
};

const normalizeSiteUrl = (url: string) => url.replace(/\/+$/, "");

const resolveBaseUrl = () => {
  const envUrl = import.meta.env.PUBLIC_SITE_URL;
  const base = envUrl && envUrl.trim().length > 0 ? envUrl : siteConfig.siteUrl;
  return normalizeSiteUrl(base);
};

const toAbsoluteUrl = (baseUrl: string, path: string) => {
  if (!baseUrl) {
    return path;
  }
  return new URL(path, baseUrl).toString();
};

const getLanguageTag = (locale: string) => locale.replace("_", "-");

export const buildSeo = (language: Language): SeoPayload => {
  const baseUrl = resolveBaseUrl();
  const t = translations[language];
  const defaultLanguage = siteConfig.defaultLanguage as Language;

  const canonicalPath = languagePaths[language];
  const canonical = toAbsoluteUrl(baseUrl, canonicalPath);

  const alternates: AlternateLink[] = [
    {
      hreflang: "es",
      href: toAbsoluteUrl(baseUrl, languagePaths.es),
    },
    {
      hreflang: "en",
      href: toAbsoluteUrl(baseUrl, languagePaths.en),
    },
    {
      hreflang: "x-default",
      href: toAbsoluteUrl(baseUrl, languagePaths[defaultLanguage]),
    },
  ];

  const ogImage: SeoImage = {
    url: toAbsoluteUrl(baseUrl, siteConfig.ogImagePath),
    alt: t.seo.imageAlt,
    width: mediaAssets.heroBackground.width,
    height: mediaAssets.heroBackground.height,
  };

  const locale = siteConfig.localeMap[language] ?? language;
  const localeAlternates = Object.values(siteConfig.localeMap).filter((value) => value !== locale);

  const orgId = baseUrl ? `${baseUrl}#organization` : "#organization";
  const websiteId = baseUrl ? `${baseUrl}#website` : "#website";
  const logoId = baseUrl ? `${baseUrl}#logo` : "#logo";
  const pageId = canonical ? `${canonical}#webpage` : "#webpage";
  const imageId = canonical ? `${canonical}#primaryimage` : "#primaryimage";
  const breadcrumbId = canonical ? `${canonical}#breadcrumb` : "#breadcrumb";

  const logoUrl = toAbsoluteUrl(baseUrl, siteConfig.logoPath);
  const schemaLanguage = getLanguageTag(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LegalService"],
        "@id": orgId,
        name: t.seo.siteName,
        legalName: siteConfig.legalName,
        description: t.seo.description,
        url: baseUrl || canonical,
        logo: {
          "@type": "ImageObject",
          "@id": logoId,
          url: logoUrl,
          width: 64,
          height: 64,
        },
        image: {
          "@id": imageId,
        },
        sameAs: siteConfig.sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: contactInfo.email,
          telephone: contactInfo.phone,
          areaServed: [contactInfo.country],
          availableLanguage: Object.keys(languagePaths),
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: contactInfo.address,
          addressLocality: contactInfo.locality,
          addressRegion: contactInfo.region,
          addressCountry: contactInfo.country,
        },
        knowsAbout: t.services.cards.map((card) => card.title),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: baseUrl || canonical,
        name: t.seo.siteName,
        description: t.seo.description,
        publisher: {
          "@id": orgId,
        },
        inLanguage: Object.keys(languagePaths),
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: canonical,
        name: t.seo.title,
        headline: t.seo.headline,
        description: t.seo.description,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": orgId,
        },
        primaryImageOfPage: {
          "@id": imageId,
        },
        breadcrumb: {
          "@id": breadcrumbId,
        },
        inLanguage: schemaLanguage,
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        caption: ogImage.alt,
      },
      {
        "@type": "ImageObject",
        "@id": logoId,
        url: logoUrl,
        width: 64,
        height: 64,
        caption: t.seo.siteName,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.seo.siteName,
            item: canonical,
          },
        ],
      },
    ],
  };

  return {
    lang: language,
    title: t.seo.title,
    description: t.seo.description,
    headline: t.seo.headline,
    canonical,
    alternates,
    og: {
      url: canonical,
      title: t.seo.title,
      description: t.seo.description,
      image: ogImage,
      siteName: t.seo.siteName,
      locale,
      localeAlternates,
    },
    twitter: {
      title: t.seo.title,
      description: t.seo.description,
      image: ogImage,
      handle: siteConfig.twitterHandle,
    },
    jsonLd,
    preloadImage: {
      href: ogImage.url,
      width: ogImage.width,
      height: ogImage.height,
    },
  };
};

export type { SeoPayload };
