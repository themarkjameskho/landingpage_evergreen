export type SanityImage = {
  asset?: { _ref?: string; _type?: 'reference'; url?: string };
  alt?: string;
  crop?: unknown;
  hotspot?: unknown;
};

export type HeroSection = {
  _type: 'heroSection';
  _key?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  sideImage?: SanityImage;
  backgroundImage?: SanityImage;
  overlayVariant?: 'darkGreen' | 'evergreen' | 'lightGreen' | 'none';
};

export type TwoColumnSection = {
  _type: 'twoColTextImageSection';
  _key?: string;
  title?: string;
  subtitle?: string;
  description?: Array<{ children?: Array<{ text?: string }> }>;
  bullets?: string[];
  ctaLabel?: string;
  ctaLink?: string;
  images?: SanityImage[];
  imagePlacement?: 'imageLeft' | 'imageRight';
  backgroundTheme?: string;
};

export type IconGridSection = {
  _type: 'iconGridSection';
  _key?: string;
  title?: string;
  subtitle?: string;
  colorTheme?: string;
  items?: Array<{ _key?: string; label?: string; description?: string; icon?: SanityImage; ctaLabel?: string; ctaLink?: string }>;
};

export type ServiceGridSection = {
  _type: 'serviceGridSection';
  _key?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundVariant?: string;
  desktopColumns?: number;
  items?: Array<{ _key?: string; label?: string; description?: string; image?: SanityImage; icon?: SanityImage; imageDisplay?: 'icon' | 'landscape' | 'square'; linkLabel?: string; linkUrl?: string }>;
};

export type FaqSection = {
  _type: 'faqSection';
  _key?: string;
  heading?: string;
  title?: string;
  description?: string;
  colorTheme?: string;
  faqs?: Array<{ _key?: string; question?: string; answer?: string }>;
  buttonLabel?: string;
  buttonLink?: string;
};

export type HtmlSection = {
  _type: 'htmlSection';
  _key?: string;
  htmlContent?: string;
};

export type LandingSection = HeroSection | TwoColumnSection | IconGridSection | ServiceGridSection | FaqSection | HtmlSection;

export type LandingPage = {
  title?: string;
  slug?: string;
  seo?: { seoTitle?: string; seoDescription?: string; ogImage?: SanityImage };
  sections?: LandingSection[];
};
