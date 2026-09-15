export type SanityImage = { asset?: { _ref?: string; _type?: 'reference' }; alt?: string; crop?: unknown; hotspot?: unknown };
export type HeroSection = { _type: 'heroSection'; title?: string; subtitle?: string; primaryCtaLabel?: string; primaryCtaLink?: string; backgroundImage?: SanityImage };
export type LandingPage = { title?: string; slug?: string; seo?: { seoTitle?: string; seoDescription?: string }; sections?: HeroSection[] };
