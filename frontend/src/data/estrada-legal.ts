import { z } from "zod";

const navSchema = z.object({
  expertise: z.string(),
  firm: z.string(),
  contact: z.string(),
  logoTitle: z.string(),
  menuOpen: z.string(),
  menuClose: z.string(),
  languageLabel: z.string(),
});

const heroSchema = z.object({
  badge: z.string(),
  titleStart: z.string(),
  titleEnd: z.string(),
  subtitle: z.string(),
  ctaPrimary: z.string(),
  ctaSecondary: z.string(),
  quote: z.string(),
  imageAlt: z.string(),
});

const serviceCardSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const servicesSchema = z.object({
  title: z.string(),
  titleAccent: z.string(),
  subtitle: z.string(),
  details: z.string(),
  cards: z.array(serviceCardSchema).length(4),
});

const statsSchema = z.object({
  sectionTitle: z.string(),
  exp: z.string(),
  cases: z.string(),
  retention: z.string(),
  value: z.string(),
});

const aboutSchema = z.object({
  quote: z.string(),
  titleStart: z.string(),
  titleEnd: z.string(),
  titleAccent: z.string(),
  description: z.string(),
  points: z.array(z.string()).length(3),
  link: z.string(),
  imageAlt: z.string(),
  quoteAuthor: z.string(),
});

const contactSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  office: z.string(),
  email: z.string(),
  phone: z.string(),
  response: z.string(),
  formName: z.string(),
  formEmail: z.string(),
  formDetails: z.string(),
  placeholderName: z.string(),
  placeholderEmail: z.string(),
  placeholderDetails: z.string(),
  formButton: z.string(),
  alert: z.string(),
  formErrors: z.object({
    name: z.string(),
    email: z.string(),
    details: z.string(),
  }),
  formSuccessTitle: z.string(),
  formSuccessMessage: z.string(),
  formSubmitting: z.string(),
});

const footerSchema = z.object({
  desc: z.string(),
  links: z.string(),
  legal: z.string(),
  privacy: z.string(),
  terms: z.string(),
  rights: z.string(),
  socialLabel: z.string(),
  socialLinkedInLabel: z.string(),
  socialXLabel: z.string(),
});

const errorSchema = z.object({
  title: z.string(),
  message: z.string(),
  action: z.string(),
});

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  headline: z.string(),
  siteName: z.string(),
  imageAlt: z.string(),
});

const translationSchema = z.object({
  nav: navSchema,
  hero: heroSchema,
  services: servicesSchema,
  stats: statsSchema,
  about: aboutSchema,
  contact: contactSchema,
  footer: footerSchema,
  errors: errorSchema,
  seo: seoSchema,
});

const translationsSchema = z.object({
  es: translationSchema,
  en: translationSchema,
});

const rawTranslations = {
  es: {
    nav: {
      expertise: "ÁREAS DE EXPERTISE",
      firm: "LA FIRMA",
      contact: "CONTACTO",
      logoTitle: "Volver al inicio",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      languageLabel: "Cambiar idioma",
    },
    hero: {
      badge: "Excelencia Legal Moderna",
      titleStart: "Defensa Estratégica para un",
      titleEnd: "Mundo Complejo",
      subtitle:
        "Rompemos con la abogacía tradicional. Ofrecemos soluciones jurídicas ágiles, precisas y adaptadas a la era digital. Su éxito es nuestro único veredicto.",
      ctaPrimary: "Iniciar Caso",
      ctaSecondary: "Conocer la Firma",
      quote: "La justicia no es solo un resultado, es un proceso de precisión.",
      imageAlt: "Oficina legal moderna con luz natural",
    },
    services: {
      title: "Áreas de",
      titleAccent: "Expertise",
      subtitle:
        "Enfoque multidisciplinario para resolver los desafíos legales más intrincados de hoy.",
      details: "DETALLES",
      cards: [
        {
          title: "Litigio Corporativo",
          description:
            "Representación de alto nivel en disputas comerciales complejas, protegiendo sus activos y reputación.",
        },
        {
          title: "Defensa Penal Económica",
          description:
            "Estrategias de defensa robustas para delitos de cuello blanco, cumplimiento normativo y fiscal.",
        },
        {
          title: "Fusiones y Adquisiciones",
          description:
            "Arquitectura legal para la expansión de su empresa, due diligence y negociaciones transnacionales.",
        },
        {
          title: "Derecho Digital & Startups",
          description:
            "Asesoría moderna para el ecosistema tecnológico, propiedad intelectual, datos y venture capital.",
        },
      ],
    },
    stats: {
      sectionTitle: "Métricas clave",
      exp: "Años de Experiencia",
      cases: "Casos Éxitosos",
      retention: "Tasa de Retención",
      value: "Valor Protegido",
    },
    about: {
      quote: "La ley es la razón libre de pasión.",
      titleStart: "Más que abogados,",
      titleEnd: "somos",
      titleAccent: "arquitectos legales",
      description:
        "Fundada bajo la premisa de que el mundo moderno requiere una defensa moderna. En Eduardo Legal, combinamos la rigurosidad académica tradicional con herramientas tecnológicas de vanguardia para predecir resultados, optimizar tiempos y garantizar la victoria.",
      points: [
        "Atención personalizada 24/7",
        "Análisis predictivo de casos",
        "Transparencia total en honorarios",
      ],
      link: "Leer Perfil Completo",
      imageAlt: "Abogado",
      quoteAuthor: "Aristóteles",
    },
    contact: {
      title: "Inicie su Defensa",
      subtitle:
        "Cada minuto cuenta en asuntos legales. Contáctenos para una evaluación preliminar de su caso. Estricta confidencialidad garantizada.",
      office: "Oficinas Centrales",
      email: "Correo Electrónico",
      phone: "Línea Directa",
      response: "Respuesta en menos de 2 horas",
      formName: "Nombre Completo",
      formEmail: "Correo Corporativo",
      formDetails: "Detalles del Caso",
      placeholderName: "Eduardo Abogado",
      placeholderEmail: "correo@empresa.com",
      placeholderDetails: "...",
      formButton: "SOLICITAR CONSULTA",
      alert: "Gracias por contactar a Eduardo Legal. Nos pondremos en contacto en breve.",
      formErrors: {
        name: "Ingrese un nombre válido.",
        email: "Ingrese un correo válido.",
        details: "Describa el caso en al menos 10 caracteres.",
      },
      formSuccessTitle: "Solicitud recibida",
      formSuccessMessage:
        "Gracias por contactar a Eduardo Legal. Nos pondremos en contacto en breve.",
      formSubmitting: "Enviando solicitud...",
    },
    footer: {
      desc: "Redefiniendo el estándar de la práctica legal con precisión, ética y visión estratégica.",
      links: "Enlaces",
      legal: "Legal",
      privacy: "Aviso de Privacidad",
      terms: "Términos de Uso",
      rights: "Todos los derechos reservados.",
      socialLabel: "Redes sociales",
      socialLinkedInLabel: "LinkedIn de Eduardo Legal",
      socialXLabel: "Eduardo Legal en X",
    },
    errors: {
      title: "Hubo un problema inesperado",
      message:
        "Algo salió mal al cargar esta sección. Intente recargar la página o vuelva en unos minutos.",
      action: "Recargar página",
    },
    seo: {
      title: "Eduardo Legal | Defensa Estratégica para un Mundo Complejo",
      description:
        "Firma boutique con soluciones jurídicas ágiles en litigio corporativo, defensa penal económica, M&A y derecho digital. Estrategia, precisión y resultados.",
      headline: "Defensa Estratégica para un Mundo Complejo",
      siteName: "Eduardo Legal",
      imageAlt: "Equipo de Eduardo Legal en oficina moderna",
    },
  },
  en: {
    nav: {
      expertise: "AREAS OF EXPERTISE",
      firm: "THE FIRM",
      contact: "CONTACT",
      logoTitle: "Back to top",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      languageLabel: "Change language",
    },
    hero: {
      badge: "Modern Legal Excellence",
      titleStart: "Strategic Defense for a",
      titleEnd: "Complex World",
      subtitle:
        "Breaking with traditional law. We offer agile, precise legal solutions adapted to the digital age. Your success is our only verdict.",
      ctaPrimary: "Start Case",
      ctaSecondary: "Meet the Firm",
      quote: "Justice is not just a result, it is a process of precision.",
      imageAlt: "Modern law office with natural light",
    },
    services: {
      title: "Areas of",
      titleAccent: "Expertise",
      subtitle: "Multidisciplinary approach to solving today's most intricate legal challenges.",
      details: "DETAILS",
      cards: [
        {
          title: "Corporate Litigation",
          description:
            "High-level representation in complex commercial disputes, protecting your assets and reputation.",
        },
        {
          title: "White Collar Defense",
          description:
            "Robust defense strategies for white-collar crimes, regulatory compliance, and tax matters.",
        },
        {
          title: "Mergers & Acquisitions",
          description:
            "Legal architecture for your company's expansion, due diligence, and transnational negotiations.",
        },
        {
          title: "Digital Law & Startups",
          description:
            "Modern advisory for the tech ecosystem, intellectual property, data privacy, and venture capital.",
        },
      ],
    },
    stats: {
      sectionTitle: "Key metrics",
      exp: "Years Experience",
      cases: "Successful Cases",
      retention: "Retention Rate",
      value: "Value Protected",
    },
    about: {
      quote: "The law is reason free from passion.",
      titleStart: "More than lawyers,",
      titleEnd: "we are",
      titleAccent: "legal architects",
      description:
        "Founded on the premise that the modern world requires modern defense. At Eduardo Legal, we combine traditional academic rigor with cutting-edge technological tools to predict outcomes, optimize timing, and guarantee victory.",
      points: ["24/7 Personalized Attention", "Predictive Case Analysis", "Total Fee Transparency"],
      link: "Read Full Profile",
      imageAlt: "Attorney portrait",
      quoteAuthor: "Aristotle",
    },
    contact: {
      title: "Begin Your Defense",
      subtitle:
        "Every minute counts in legal matters. Contact us for a preliminary evaluation of your case. Strict confidentiality guaranteed.",
      office: "Headquarters",
      email: "Email Address",
      phone: "Direct Line",
      response: "Response within 2 hours",
      formName: "Full Name",
      formEmail: "Corporate Email",
      formDetails: "Case Details",
      placeholderName: "e.g. Alice Johnson",
      placeholderEmail: "name@company.com",
      placeholderDetails: "...",
      formButton: "REQUEST CONSULTATION",
      alert: "Thank you for contacting Eduardo Legal. We will be in touch shortly.",
      formErrors: {
        name: "Please enter a valid name.",
        email: "Please enter a valid email address.",
        details: "Describe the case in at least 10 characters.",
      },
      formSuccessTitle: "Request received",
      formSuccessMessage: "Thank you for contacting Eduardo Legal. We will be in touch shortly.",
      formSubmitting: "Sending request...",
    },
    footer: {
      desc: "Redefining the standard of legal practice with precision, ethics, and strategic vision.",
      links: "Links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
      socialLabel: "Social channels",
      socialLinkedInLabel: "Eduardo Legal on LinkedIn",
      socialXLabel: "Eduardo Legal on X",
    },
    errors: {
      title: "Something went wrong",
      message:
        "We hit an unexpected issue while loading this section. Please reload the page or try again later.",
      action: "Reload page",
    },
    seo: {
      title: "Eduardo Legal | Strategic Defense for a Complex World",
      description:
        "Boutique law firm delivering agile solutions in corporate litigation, white-collar defense, M&A, and digital law. Strategy, precision, results.",
      headline: "Strategic Defense for a Complex World",
      siteName: "Eduardo Legal",
      imageAlt: "Eduardo Legal team in a modern office",
    },
  },
} as const;

export const translations = translationsSchema.parse(rawTranslations);

export type Translation = z.infer<typeof translationSchema>;
export type Language = keyof typeof translations;

export const siteConfig = {
  siteUrl: "https://estradalegal.com",
  siteName: "Eduardo Legal",
  legalName: "Eduardo Legal S.C.",
  logoPath: "/favicon.svg",
  ogImagePath: "/images/hero-office.jpg",
  twitterHandle: "@EdyardoLegal",
  socialLinks: {
    linkedIn: "https://www.linkedin.com/company/estrada-legal",
    x: "https://x.com/estradalegal",
  },
  sameAs: ["https://www.linkedin.com/company/estrada-legal", "https://x.com/estradalegal"],
  localeMap: {
    es: "es_MX",
    en: "en_US",
  },
  defaultLanguage: "es",
} as const;

export const languageOptions = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
] as const satisfies ReadonlyArray<{ code: Language; label: string }>;

export type NavSectionKey = keyof Translation["nav"];
export type NavIconKey = "scale" | "briefcase" | "mail";

export const navSections = [
  { key: "expertise", href: "#services", icon: "scale" },
  { key: "firm", href: "#about", icon: "briefcase" },
  { key: "contact", href: "#contact", icon: "mail" },
] as const satisfies ReadonlyArray<{
  key: NavSectionKey;
  href: string;
  icon: NavIconKey;
}>;

export const languagePaths = {
  es: "/",
  en: "/en/",
} as const satisfies Record<Language, string>;

export const contactInfo = {
  address: "Av.2, Torre Mercedes, Piso 4",
  city: "Sán José, CR",
  locality: "San José",
  region: "San José",
  country: "CR",
  email: "contacto@EduardoLegal.com",
  phone: "+506 00000000",
} as const;

export const mediaAssets = {
  heroBackground: {
    src: "/images/hero-office.jpg",
    width: 1600,
    height: 1068,
  },
  aboutPortrait: {
    src: "/images/lawyer-portrait.jpg",
    width: 1200,
    height: 800,
  },
} as const;
