export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    brand: string;
    brandArabicSubtitle: string;
    home: string;
    about: string;
    services: string;
    solutions: string;
    blog: string;
    contact: string;
    consultation: string;
  };
  switcher: {
    label: string;
    heritageBadge: string;
    enTitle: string;
    enSubtitle: string;
    arTitle: string;
    arSubtitle: string;
  };
  home: {
    heroTag: string;
    heroTitlePart1: string;
    heroTitleHighlight: string;
    heroTitlePart2: string;
    heroDesc: string;
    missionTag: string;
    missionQuote: string;
    missionDesc: string;
    aboutTag: string;
    aboutTitle: string;
    aboutP1: string;
    aboutP2: string;
    aboutLink: string;
    servicesTag: string;
    servicesTitle: string;
    servicesDesc: string;
    servicesViewAll: string;
    servicesList: Array<{
      title: string;
      desc: string;
    }>;
    testimonialsTag: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonials: Array<{
      quote: string;
      author: string;
      role: string;
      location: string;
      highlight: string;
      rating: number;
    }>;
    testimonialQuote: string;
    testimonialAuthor: string;
    testimonialRole: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  about: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    missionBadge: string;
    missionQuote: string;
    missionDesc: string;
    valuesTag: string;
    valuesTitle: string;
    valuesDesc: string;
    valuesList: Array<{
      title: string;
      desc: string;
    }>;
    teamTitle: string;
    teamDesc: string;
    teamList: Array<{
      name: string;
      role: string;
    }>;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  footer: {
    brandDesc: string;
    companyHeading: string;
    resourcesHeading: string;
    contactHeading: string;
    companyLinks: {
      home: string;
      services: string;
      sustainability: string;
      careers: string;
    };
    resourceLinks: {
      journal: string;
      pairings: string;
      wholesale: string;
      faq: string;
    };
    address: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  placeholders: {
    services: string;
    solutions: string;
    blog: string;
    contact: string;
  };
  common: {
    returnToPrevious: string;
    backToHome: string;
    return: string;
    back: string;
  };
  servicesPage: ServicesPageContent;
  solutionsPage: SolutionsPageContent;
  blogPage: BlogPageContent;
  contactPage: ContactPageContent;
  titles: {
    home: string;
    about: string;
    services: string;
    solutions: string;
    blog: string;
    contact: string;
    notFound: string;
  };
  metaDescriptions: {
    home: string;
    about: string;
    services: string;
    solutions: string;
    blog: string;
    contact: string;
  };
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'organic' | 'conventional' | 'specialty';
  categoryLabel: string;
  tagline: string;
  description: string;
  differenceHighlight: string;
  flavorNotes: string[];
  bestPairings: string;
  acidity: string;
  harvestWindow: string;
  formats: string[];
  image: string;
}

export interface SolutionsPageContent {
  heroBadge: string;
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroTitlePart2: string;
  heroSubtitle: string;
  compareBanner: {
    tag: string;
    title: string;
    description: string;
    organicTitle: string;
    organicDesc: string;
    conventionalTitle: string;
    conventionalDesc: string;
  };
  filterAll: string;
  filterOrganic: string;
  filterConventional: string;
  filterSpecialty: string;
  products: ProductItem[];
  tastingGuideTag: string;
  tastingGuideTitle: string;
  tastingGuideSubtitle: string;
  tastingTips: Array<{
    title: string;
    desc: string;
  }>;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaSampleButton: string;
}

export interface ServiceCardItem {
  id: 'cultivation' | 'extraction' | 'export' | 'branding';
  number: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  badge: string;
  details: string[];
}

export interface ServicesPageContent {
  heroBadge: string;
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroTitlePart2: string;
  heroSubtitle: string;
  services: ServiceCardItem[];
  howWeWorkTag: string;
  howWeWorkTitle: string;
  howWeWorkDesc: string;
  steps: Array<{
    number: string;
    title: string;
    desc: string;
  }>;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaSampleButton: string;
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  location: string;
  date: string;
  rating: number;
  oilChosen: string;
  quote: string;
  whatTheyLove: string;
  verifiedPurchase: boolean;
  avatar?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'harvest' | 'award' | 'event' | 'certification';
  categoryLabel: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'health' | 'terroir' | 'kitchen' | 'harvest';
  categoryLabel: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  keyTakeaway: string;
  paragraphs: string[];
  pullQuote?: {
    text: string;
    attribution: string;
  };
  practicalTip?: {
    label: string;
    advice: string;
  };
  tags: string[];
}

export interface BlogPageContent {
  heroBadge: string;
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroTitlePart2: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  tabAll: string;
  tabNews: string;
  tabReviews: string;
  tabArticles: string;
  filterAll: string;
  filterHealth: string;
  filterTerroir: string;
  filterKitchen: string;
  filterHarvest: string;
  reviewsHeading: string;
  reviewsSubheading: string;
  shareExperienceBtn: string;
  newsHeading: string;
  newsSubheading: string;
  articlesHeading: string;
  articlesSubheading: string;
  whatPeopleLoveLabel: string;
  oilChosenLabel: string;
  verifiedClientLabel: string;
  submitReviewTitle: string;
  submitReviewSubtitle: string;
  formName: string;
  formRole: string;
  formLocation: string;
  formOil: string;
  formRating: string;
  formReview: string;
  formWhatTheyLove: string;
  formSubmitBtn: string;
  formCancelBtn: string;
  formSuccess: string;
  featuredTag: string;
  readArticle: string;
  readTimeLabel: string;
  closeArticle: string;
  keyTakeawaysLabel: string;
  relatedArticlesTitle: string;
  newsletterTag: string;
  newsletterTitle: string;
  newsletterDesc: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  newsletterSuccess: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaSampleButton: string;
  reviews: ClientReview[];
  news: NewsItem[];
  articles: BlogArticle[];
}

export interface ContactLocationItem {
  id: string;
  city: string;
  country: string;
  tagline: string;
  address: string;
  role: string;
  hours: string;
}

export interface ContactPageContent {
  heroBadge: string;
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroTitlePart2: string;
  heroSubtitle: string;
  locationsHeading: string;
  locationsSubheading: string;
  locations: ContactLocationItem[];
  directChannelsHeading: string;
  directChannelsSubheading: string;
  emailLabel: string;
  emailValue: string;
  phoneLabel: string;
  phoneValue: string;
  whatsappLabel: string;
  whatsappValue: string;
  whatsappUrl: string;
  facebookLabel: string;
  facebookUrl: string;
  formHeading: string;
  formSubheading: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formSubject: string;
  formInquiryType: string;
  inquiryTypes: {
    wholesale: string;
    sample: string;
    export: string;
    general: string;
  };
  formMessage: string;
  formSubmitBtn: string;
  formSendingBtn: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  sendAnotherBtn: string;
  directCallBadge: string;
  copyEmailSuccess: string;
  officeHoursLabel: string;
  officeHoursValue: string;
  responseTimeNote: string;
  founderHeading: string;
  founderBadge: string;
  founderRole: string;
  founderName: string;
  founderQuote: string;
  mapsHeading: string;
  mapsSubheading: string;
  getDirections: string;
  viewOnGoogleMaps: string;
  copyCoordinates: string;
  coordinatesCopied: string;
  currentLocalTime: string;
  visitingPolicy: string;
  samplePolicy: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      brand: 'Olive Chebba',
      brandArabicSubtitle: 'Tunisian Heritage',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      solutions: 'Solutions',
      blog: 'Blog',
      contact: 'Contact',
      consultation: 'Free Consultation',
    },
    switcher: {
      label: 'Language',
      heritageBadge: 'Tunisian Heritage',
      enTitle: 'English',
      enSubtitle: 'International',
      arTitle: 'العربية',
      arSubtitle: 'تراث الشابة • تونس',
    },
    home: {
      heroTag: 'Welcome to Chebba',
      heroTitlePart1: 'Harvesting',
      heroTitleHighlight: 'liquid gold',
      heroTitlePart2: 'under the Mediterranean sun.',
      heroDesc: 'We are an agricultural pioneer and digital agency dedicated to elevating authentic Tunisian olive oil on the world stage. We blend ancestral milling traditions with data-driven marketing.',
      missionTag: 'Our Goal & Mission',
      missionQuote: '"To seamlessly connect the purity of Tunisian soil with the discerning palates of the world."',
      missionDesc: 'We envision a future where the rich, robust profile of authentic Tunisian extra virgin olive oil is a staple in every premier kitchen, driven by transparent practices, data-driven marketing, and sustainable agricultural growth.',
      aboutTag: 'Heritage of Chebba',
      aboutTitle: 'Rooted in Heritage',
      aboutP1: 'From the coastal town of Chebba, our journey began with a profound respect for the olive tree. For generations, our families have cultivated the soil, observing the subtle shifts in the Mediterranean breeze to harvest the perfect olive.',
      aboutP2: 'Today, we operate at the intersection of artisanal heritage and modern commerce, empowering local groves through innovative digital strategies.',
      aboutLink: 'Read Our Full Story',
      servicesTag: 'Our Expertise',
      servicesTitle: 'Comprehensive Services',
      servicesDesc: 'From the orchard to the digital storefront, our services encompass the entire lifecycle of premium olive oil production and distribution.',
      servicesViewAll: 'View All Services',
      servicesList: [
        {
          title: 'Sustainable Cultivation',
          desc: 'Eco-conscious agricultural practices that nurture the soil and respect ancient Mediterranean rhythms.',
        },
        {
          title: 'Cold Extraction',
          desc: 'State-of-the-art milling processes preserving maximum polyphenols and authentic organoleptic notes.',
        },
        {
          title: 'Global Export',
          desc: 'End-to-end logistics and regulatory compliance for distributing our liquid gold worldwide.',
        },
        {
          title: 'Brand & Marketing',
          desc: 'Data-driven SEO, storytelling, and brand strategy for B2B partners and private culinary labels.',
        },
      ],
      testimonialsTag: 'Voices of Excellence',
      testimonialsTitle: 'Celebrated by Masters of Gastronomy',
      testimonialsSubtitle: 'From Michelin-starred kitchens to boutique importers, discover why international culinary leaders choose Olive Chebba extra virgin oil.',
      testimonials: [
        {
          quote: '"Partnering with Olive Chebba elevated our culinary brand entirely. The organoleptic purity and vibrant polyphenol richness of their cold-extracted Chebba oil is simply extraordinary — an authentic taste of ancient Tunisian coastal groves."',
          author: 'Elena Rossi',
          role: 'Director of Sourcing',
          location: 'Il Gusto Milano, Italy',
          highlight: 'Ultra-Low Acidity (<0.2%) & High Polyphenols',
          rating: 5,
        },
        {
          quote: '"In French haute cuisine, precision is everything. Olive Chebba extra virgin oil brings a golden herbaceous brilliance and delicate peppery finish that elevates our signature Mediterranean crudos and roasted langoustines."',
          author: 'Chef Marc Lefèvre',
          role: 'Executive Chef & Culinary Director',
          location: "L'Olivier Étoilé, Paris",
          highlight: 'Cold-Milled Within 4 Hours of Hand Harvest',
          rating: 5,
        },
        {
          quote: '"Our discerning clientele in Tokyo demands uncompromising purity and traceability. Olive Chebba delivers pristine laboratory certifications, flawless harvest transparency, and an incomparably smooth, velvety palate."',
          author: 'Kenji Takahashi',
          role: 'Lead Gourmet Curator',
          location: 'Mediterranean Harvest Imports, Tokyo',
          highlight: 'Single-Estate 100% Chebba Coastline Harvest',
          rating: 5,
        },
        {
          quote: '"From our luxury private labeling to table service across Manhattan, Olive Chebba sets the gold standard. Their seamless export logistics and artisanal heritage make them our most trusted Mediterranean partner."',
          author: 'Sophia Sterling',
          role: 'Founder & Managing Partner',
          location: 'Sterling Culinary Group, New York',
          highlight: 'Certified Organic & Full Batch Traceability',
          rating: 5,
        },
      ],
      testimonialQuote: '"Partnering with Olive Chebba elevated our culinary brand entirely. Their commitment to authenticity, combined with their sharp understanding of digital marketing, makes them an unmatched agency in the Mediterranean agricultural sector."',
      testimonialAuthor: 'Elena Rossi',
      testimonialRole: 'Director of Sourcing, Il Gusto Milano',
      ctaTitle: 'Ready to elevate your brand?',
      ctaDesc: "Whether you're looking for premium bulk sourcing or a digital partner to expand your agricultural brand, our experts are here to collaborate.",
      ctaButton: 'Start a Conversation',
    },
    about: {
      badge: 'About Olive Chebba',
      titlePart1: 'A Legacy of',
      titleHighlight: 'Quality',
      subtitle: 'We are a premier digital agency and agricultural pioneer dedicated to elevating Tunisian olive oil on the global stage. We blend ancestral milling traditions with data-driven marketing.',
      storyTitle: 'Our Story',
      storyP1: 'Rooted in the coastal town of Chebba, our journey began with a simple profound respect for the olive tree. For generations, our families have cultivated the soil, observing the subtle shifts in the Mediterranean breeze to harvest the perfect olive.',
      storyP2: 'Today, Olive Chebba transcends traditional farming. We operate at the intersection of artisanal heritage and modern commerce, empowering local groves through innovative digital marketing, seamless export logistics, and uncompromising quality control.',
      missionBadge: 'Mission & Vision',
      missionQuote: '"To seamlessly connect the purity of Tunisian soil with the discerning palates of the world."',
      missionDesc: 'We envision a future where the rich, robust profile of authentic Tunisian extra virgin olive oil is a staple in every premier kitchen, driven by transparent practices and sustainable growth.',
      valuesTag: 'Our Philosophy',
      valuesTitle: 'The Values We Cultivate',
      valuesDesc: 'Our ethos is grounded in the same elements that nurture our orchards: patience, integrity, and an unyielding commitment to the highest standard.',
      valuesList: [
        {
          title: 'Transparency',
          desc: 'Complete traceability from the grove to the bottle. We hide nothing and celebrate our process.',
        },
        {
          title: 'Innovation',
          desc: 'Integrating cutting-edge agronomy and digital analytics to improve yields without compromising heritage.',
        },
        {
          title: 'Purity',
          desc: 'Zero additives. Zero compromises. Only 100% extra virgin olive oil extracted at peak freshness.',
        },
        {
          title: 'Collaboration',
          desc: 'Fostering deep partnerships with local farmers, distributors, and culinary experts worldwide.',
        },
      ],
      teamTitle: 'The Hands Behind the Harvest',
      teamDesc: 'A diverse team of master millers, agronomists, and digital strategists united by a singular passion.',
      teamList: [
        { name: 'Mazen', role: 'Founder & Managing Director' },
        { name: 'Iheb', role: 'Operations & Production Lead' },
        { name: 'Islem', role: 'Export & Quality Specialist' },
      ],
      ctaTitle: 'Join our journey.',
      ctaDesc: 'Discover the meticulous care and tradition poured into every bottle.',
      ctaButton: 'Contact Us Today',
    },
    footer: {
      brandDesc: 'Cultivating the finest Tunisian olive oil. Rooted in tradition, driven by innovation and excellence.',
      companyHeading: 'Company',
      resourcesHeading: 'Resources',
      contactHeading: 'Get in Touch',
      companyLinks: {
        home: 'Home',
        services: 'Our Services',
        sustainability: 'Sustainability',
        careers: 'Careers',
      },
      resourceLinks: {
        journal: 'The Journal',
        pairings: 'Culinary Pairings',
        wholesale: 'Wholesale',
        faq: 'FAQ',
      },
      address: '5170 Cité de la Plage, Chebba, Tunisia & Munich, Germany',
      rights: 'Olive Chebba. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    placeholders: {
      services: 'Services (Coming Soon)',
      solutions: 'Solutions (Coming Soon)',
      blog: 'The Journal (Coming Soon)',
      contact: 'Contact Us (Coming Soon)',
    },
    common: {
      returnToPrevious: 'Return to previous page',
      backToHome: 'Back to Home',
      return: 'Return',
      back: 'Back',
    },
    servicesPage: {
      heroBadge: 'What We Do',
      heroTitlePart1: 'Our Services,',
      heroTitleHighlight: 'from Grove to Table',
      heroTitlePart2: '',
      heroSubtitle: 'As a dedicated family-rooted producer in Chebba, Tunisia, we take care of every step: caring for our trees, milling fresh extra virgin oil, safely shipping to your door, and helping you share our story.',
      services: [
        {
          id: 'cultivation',
          number: '01',
          title: 'Sustainable Cultivation',
          tagline: 'Eco-conscious agricultural practices that nurture the soil and respect ancient Mediterranean rhythms.',
          summary: 'We cultivate our olive groves along the sunny coast of Chebba with patience and respect for the natural environment. We rely on traditional Mediterranean farming, seasonal rainfall, and organic care to produce clean, healthy olives.',
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'Traditional & Natural',
          details: [
            'Carefully tended coastal orchards adapted to the Tunisian climate',
            'Zero harsh chemical pesticides or synthetic fertilizers',
            'Hand-harvested with care to keep every olive whole and undamaged',
          ],
        },
        {
          id: 'extraction',
          number: '02',
          title: 'Cold Extraction',
          tagline: 'State-of-the-art milling processes preserving maximum polyphenols and authentic organoleptic notes.',
          summary: 'Great olive oil starts with fast, gentle pressing. We cold-extract our olives within hours of morning picking, keeping the natural green aroma, smooth fruity flavor, and healthy antioxidants intact.',
          image: 'https://images.unsplash.com/photo-1753703986291-6f95a7f299ba?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'Fresh Daily Milling',
          details: [
            'Milled cold on the exact same day the olives are harvested',
            'Naturally low acidity with rich fruity flavor and a light peppery finish',
            'Stored in clean food-grade stainless steel to protect fresh quality',
          ],
        },
        {
          id: 'export',
          number: '03',
          title: 'Global Export',
          tagline: 'End-to-end logistics and regulatory compliance for distributing our liquid gold worldwide.',
          summary: 'We help restaurants, gourmet retailers, and specialty food distributors receive authentic Tunisian olive oil directly from our mill, handling all packaging, international shipping, and customs paperwork.',
          image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'Reliable Direct Shipping',
          details: [
            'Flexible packaging in dark glass bottles, 5L tins, or food-grade bulk containers',
            'Full export certificates, origin documents, and lab analysis included',
            'Dependable delivery with trusted freight partners right to your port or warehouse',
          ],
        },
        {
          id: 'branding',
          number: '04',
          title: 'Brand & Marketing',
          tagline: 'Data-driven SEO, storytelling, and brand strategy for B2B partners and private culinary labels.',
          summary: 'For partners who want to sell olive oil under their own label or feature it on their menu, we provide private labeling, bottle design assistance, and authentic storytelling materials about our Mediterranean roots.',
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'Private Label & Support',
          details: [
            'Custom bottle and label design tailored to your restaurant or brand',
            'Authentic photos, tasting notes, and provenance stories for your customers',
            'Practical digital guidance and search advice to help you reach more olive oil lovers',
          ],
        },
      ],
      howWeWorkTag: 'Simple Collaboration',
      howWeWorkTitle: 'How We Work With You',
      howWeWorkDesc: 'We believe in personal relationships and clear communication. Here is how we usually work together with chefs, grocers, and partners.',
      steps: [
        {
          number: '01',
          title: 'Conversation & Tasting',
          desc: 'Tell us about your project or business. We send samples from our latest harvest so you can taste the quality firsthand.',
        },
        {
          number: '02',
          title: 'Choosing Your Oil & Format',
          desc: 'Select the quantity, flavor profile, and container format that fits your needs — from custom private bottles to 5-liter kitchen tins.',
        },
        {
          number: '03',
          title: 'Fresh Preparation & Delivery',
          desc: 'We pack your order fresh from the mill, take care of export documents and shipping, and keep you updated until it arrives safely.',
        },
      ],
      ctaTitle: 'Looking to source authentic Tunisian olive oil?',
      ctaDesc: 'Whether you need a regular supply for your restaurant, custom bottles for your boutique, or a trusted small-batch producer in Tunisia, we are happy to help.',
      ctaButton: 'Contact Our Team',
      ctaSampleButton: 'Request a Sample Bottle',
    },
    solutionsPage: {
      heroBadge: 'Our Product Solutions',
      heroTitlePart1: 'Crafted Olive Oils,',
      heroTitleHighlight: 'Tailored for Every Table',
      heroTitlePart2: '',
      heroSubtitle: 'From certified organic single-plots to velvety conventional reserves and limited early-harvest pressings, explore our four core olive oil solutions crafted in Chebba.',
      compareBanner: {
        tag: 'The Core Difference',
        title: 'Organic vs. Conventional Premium: What Sets Them Apart?',
        description: 'Both oils are 100% extra virgin, cold-milled on the harvest day in Chebba, and naturally low in acidity. Here is how they differ in the grove, on the palate, and in the kitchen:',
        organicTitle: 'Organic Extra Virgin (Chebba Bio)',
        organicDesc: 'Strictly zero synthetic fertilizers or chemical pesticides. Soil is audited and certified annually. Tends to have a bolder, more pungent artichoke and peppery antioxidant bite.',
        conventionalTitle: 'Conventional Premium (Chebba Reserve)',
        conventionalDesc: 'Grown in traditional family coastal groves with standard responsible care. Offers a milder, smoother golden almond finish that makes it extremely versatile and accessible for high-volume kitchens.',
      },
      filterAll: 'All Solutions (4)',
      filterOrganic: 'Certified Organic',
      filterConventional: 'Conventional Premium',
      filterSpecialty: 'Specialty & Limited',
      products: [
        {
          id: 'organic-chebba-bio',
          name: 'Chebba Bio Extra Virgin',
          category: 'organic',
          categoryLabel: 'Certified Organic',
          tagline: 'Pure, certified nature from our coastal bio orchards with an invigorating peppery bite.',
          description: 'Grown exclusively on chemical-free coastal plots in Chebba where maritime winds and regenerative soil stewardship nurture ancient Chemlali trees. Cold-extracted within 4 hours to preserve high natural polyphenols.',
          differenceHighlight: '100% Organic certified grove sourcing. Free from synthetic inputs, delivering vibrant green artichoke bitterness and higher antioxidant potency.',
          flavorNotes: ['Freshly cut grass', 'Green artichoke', 'Persistent peppery bite', 'Wild thyme'],
          bestPairings: 'Drizzled raw over creamy burrata, fresh seafood crudos, warm sourdough, and roasted seasonal vegetables.',
          acidity: '< 0.18% Acidity',
          harvestWindow: 'November – December',
          formats: ['500ml Dark UV Glass', '750ml Marasca', '3L Estate Tin'],
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&h=800&auto=format&fit=crop',
        },
        {
          id: 'conventional-chebba-reserve',
          name: 'Chebba Reserve Extra Virgin',
          category: 'conventional',
          categoryLabel: 'Conventional Premium',
          tagline: 'The balanced, golden classic of Tunisian gastronomy: buttery, round, and chef-friendly.',
          description: 'Our generational culinary standard. Produced from traditional family orchards with responsible coastal farming, then cold-milled to extra virgin perfection. Smooth and approachable with zero aggressive bitterness.',
          differenceHighlight: 'Conventional family grove cultivation. Provides a softer golden almond profile, excellent heat stability, and approachable value for everyday restaurant use.',
          flavorNotes: ['Golden sweet almond', 'Ripe Mediterranean fruit', 'Subtle herbaceous warmth', 'Silky buttery finish'],
          bestPairings: 'Daily kitchen cooking, delicate fish pan-frying, emulsified vinaigrettes, marinades, and fresh pasta tossing.',
          acidity: '< 0.22% Acidity',
          harvestWindow: 'December – January',
          formats: ['750ml Dark Glass', '5L Kitchen Tin', '20L Bag-in-Box', '1000L Bulk IBC'],
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&h=800&auto=format&fit=crop',
        },
        {
          id: 'early-harvest-first-press',
          name: 'Chebba First Press (Early Harvest)',
          category: 'specialty',
          categoryLabel: 'Limited Early Harvest',
          tagline: 'Cold-pressed in October from unripe green olives for peak antioxidant intensity.',
          description: 'Harvested by hand during the very first weeks of autumn while the drupes are intensely green. It requires twice as many olives per liter, resulting in a radiant emerald oil with maximum Oleocanthal and a striking kick.',
          differenceHighlight: 'Early seasonal harvest (unripe green olives). Very low oil yield per tree, but unmatched polyphenol density, emerald color, and intense throat-catch.',
          flavorNotes: ['Green tomato vine', 'Wild arugula', 'Vibrant herbal spice', 'Green apple peel'],
          bestPairings: 'Finishing steak tartare, robust game meats, bitter greens, aged cheeses, or savored as a pure wellness spoonful.',
          acidity: '< 0.15% Acidity',
          harvestWindow: 'First 2 Weeks of October',
          formats: ['250ml & 500ml Heavy Black Glass'],
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
        },
        {
          id: 'coastal-culinary-blend',
          name: 'Chebba Gold (Coastal Heritage Blend)',
          category: 'specialty',
          categoryLabel: 'Artisanal Heritage Blend',
          tagline: 'A harmonious marriage of coastal Chemlali and sweet Sahli cultivars.',
          description: 'A master blend crafted for culinary lovers. We unite the resilience and spicy backbone of Chemlali with the soft fruitiness of Sahli olives, capturing the warmth and gentle sea breeze of Chebba.',
          differenceHighlight: 'Dual-cultivar blend. Calibrated for optimal culinary equilibrium where neither bitterness nor sweetness overpowers.',
          flavorNotes: ['Sunlit olive blossom', 'Green almond', 'Coastal salinity nuance', 'Velvety clean finish'],
          bestPairings: 'Grilled Mediterranean sea bass, citrus garden salads, warm artisanal focaccia, and delicate risottos.',
          acidity: '< 0.20% Acidity',
          harvestWindow: 'November – January',
          formats: ['500ml Dorica Glass', '1L Tin', '5L Family Can'],
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
        },
      ],
      tastingGuideTag: 'How to Choose',
      tastingGuideTitle: 'Finding the Right Oil for Your Kitchen',
      tastingGuideSubtitle: 'A simple culinary rule of thumb to help you pair the right oil with your menu or personal taste.',
      tastingTips: [
        {
          title: 'For Raw Drizzles & Salads',
          desc: 'Choose Chebba Bio or First Press. Their lively herbal notes and peppery finish make fresh salads, burrata, and dips sing.',
        },
        {
          title: 'For Everyday Sautéing & Cooking',
          desc: 'Choose Chebba Reserve Conventional. Its round, buttery almond body and low acidity won’t overpower delicate ingredients when warm.',
        },
        {
          title: 'For B2B Private Label Brands',
          desc: 'We can bottle both Organic and Conventional profiles under your own label, custom-matched to your clientele and budget.',
        },
      ],
      ctaTitle: 'Ready to taste the difference?',
      ctaDesc: 'We ship tasting sample kits directly to restaurant kitchens, gourmet food buyers, and culinary brands worldwide.',
      ctaButton: 'Request a Tasting Kit',
      ctaSampleButton: 'Talk With Our Miller',
    },
    blogPage: {
      heroBadge: 'The Chebba Journal & Community',
      heroTitlePart1: 'Stories, Reviews &',
      heroTitleHighlight: 'Fresh Mill News',
      heroTitlePart2: '',
      heroSubtitle: 'From real client reviews and community favorites to fresh harvest news and culinary guides, discover everything happening at Olive Chebba.',
      searchPlaceholder: 'Search articles, client reviews, news, awards...',
      tabAll: 'All Updates & Stories',
      tabNews: 'News & Mill Notes',
      tabReviews: 'Client Reviews & Stories',
      tabArticles: 'Articles & Guides',
      filterAll: 'All Stories (5)',
      filterHealth: 'Health & Polyphenols',
      filterTerroir: 'Terroir & Soil',
      filterKitchen: 'Culinary & Kitchen',
      filterHarvest: 'Harvest Diaries',
      reviewsHeading: 'What People Love About Olive Chebba',
      reviewsSubheading: 'Chefs, gourmets, and partners from Paris to Tokyo share their honest impressions of our liquid gold.',
      shareExperienceBtn: 'Share Your Experience',
      newsHeading: 'Latest News & Mill Dispatches',
      newsSubheading: 'Fresh harvest updates, international awards, and news direct from our Chebba estate.',
      articlesHeading: 'Journal Stories & Guides',
      articlesSubheading: 'In-depth reflections on Mediterranean culinary culture, high-polyphenol wellness, and grove stewardship.',
      whatPeopleLoveLabel: 'What I Love Most About Chebba:',
      oilChosenLabel: 'Favorite Oil:',
      verifiedClientLabel: 'Verified Partner / Client',
      submitReviewTitle: 'Share What You Love About Olive Chebba',
      submitReviewSubtitle: 'Whether you drizzle our oil in your restaurant, cook with it at home, or savor it as a morning ritual, we would love to hear your story.',
      formName: 'Full Name',
      formRole: 'Profession / Title (e.g. Executive Chef, Food Stylist, Home Cook)',
      formLocation: 'City & Country',
      formOil: 'Which Olive Chebba oil do you use?',
      formRating: 'Rating',
      formReview: 'Your Review & Experience',
      formWhatTheyLove: 'What do you love most about Olive Chebba?',
      formSubmitBtn: 'Post Your Review',
      formCancelBtn: 'Cancel',
      formSuccess: 'Thank you for sharing your love for Olive Chebba! Your review has been added to our community wall.',
      featuredTag: 'Featured Story',
      readArticle: 'Read Full Story',
      readTimeLabel: 'min read',
      closeArticle: 'Close Story',
      keyTakeawaysLabel: 'Key Takeaways',
      relatedArticlesTitle: 'More from the Journal',
      newsletterTag: 'Stay Connected With Our Mill',
      newsletterTitle: 'Receive Fresh Harvest Dispatches',
      newsletterDesc: 'No spam or corporate noise. Just genuine stories from our Chebba groves, early harvest announcements, and seasonal kitchen inspirations four times a year.',
      newsletterPlaceholder: 'Enter your email address',
      newsletterButton: 'Subscribe to Harvest Notes',
      newsletterSuccess: 'Thank you for joining our grove circle. We look forward to sharing our next harvest dispatch with you.',
      ctaTitle: 'Experience the Authentic Taste of Chebba',
      ctaDesc: 'Ready to bring liquid gold to your table or restaurant? Explore our crafted oils or order a fresh harvest sample kit.',
      ctaButton: 'Explore Our Olive Oils',
      ctaSampleButton: 'Request a Tasting Sample',
      reviews: [
        {
          id: 'review-karim',
          name: 'Chef Karim Ben Salem',
          role: 'Head Chef, L’Atelier Méditerranéen',
          location: 'Paris, France',
          date: 'October 20, 2026',
          rating: 5,
          oilChosen: 'Chebba Bio Extra Virgin',
          quote: 'Finding an extra virgin oil with genuine high polyphenols that does not overpower delicate fish crudos was almost impossible until I sampled Chebba Bio. The grassy aroma hits the dining room the second a warm plate is set down.',
          whatTheyLove: 'The remarkable equilibrium between a vibrant peppery finish and sweet green artichoke notes. Our guests regularly ask to buy bottles to take home.',
          verifiedPurchase: true
        },
        {
          id: 'review-sophie',
          name: 'Sophie Laurent',
          role: 'Founder, Le Marché Bio Gourmet',
          location: 'Lyon, France',
          date: 'October 15, 2026',
          rating: 5,
          oilChosen: 'Chebba Bio & Reserve 5L',
          quote: 'Working directly with Mazen and Iheb is a breath of fresh air. They ship directly from the Chebba mill within days of bottling. Our boutique customers in Lyon reorder monthly without hesitation.',
          whatTheyLove: 'The honesty and personal relationship. You know the exact month the olives were picked, and the lab acidity report is printed right on the batch sheet.',
          verifiedPurchase: true
        },
        {
          id: 'review-marco',
          name: 'Dr. Marco Rossi',
          role: 'Cardiologist & Clinical Nutritionist',
          location: 'Milan, Italy',
          date: 'September 29, 2026',
          rating: 5,
          oilChosen: 'Chebba First Press (Early Harvest)',
          quote: 'I recommend a morning tablespoon of raw, high-polyphenol oil to my patients for cardiovascular wellness. Chebba’s early harvest October press has a throat-catch that proves its extraordinary antioxidant integrity.',
          whatTheyLove: 'The laboratory-verified purity (> 480 mg/kg polyphenols). It is pure living medicine in a dark bottle.',
          verifiedPurchase: true
        },
        {
          id: 'review-elena',
          name: 'Elena Tanaka',
          role: 'Artisanal Food Importer',
          location: 'Tokyo, Japan',
          date: 'September 18, 2026',
          rating: 5,
          oilChosen: 'Chebba Gold (Coastal Heritage Blend)',
          quote: 'Tunisian olive oil has a remarkable story that Japanese chefs love once they taste it. The maritime salt breeze gives Chebba Gold a silky, rounded finish that pairs effortlessly with sashimi and steamed vegetables.',
          whatTheyLove: 'The velvety, buttery almond flavor profile that has zero harshness, and the gorgeous dark bottle presentation.',
          verifiedPurchase: true
        },
        {
          id: 'review-samir',
          name: 'Samir & Nadia Trabelsi',
          role: 'Artisanal Sourdough Bakers',
          location: 'Montreal, Canada',
          date: 'August 30, 2026',
          rating: 5,
          oilChosen: 'Chebba Reserve Conventional (5L Tin)',
          quote: 'We grew up in Tunisia, and finding the authentic taste of seaside Chebba oil in North America used to mean waiting for family to visit. Having it shipped directly to our doorstep in 5L tins brings the taste of home to our Sunday sourdough.',
          whatTheyLove: 'That rich, nostalgic golden color and the generous 5-liter kitchen format for everyday family cooking.',
          verifiedPurchase: true
        }
      ],
      news: [
        {
          id: 'news-harvest-2026',
          title: '2026 Autumn Harvest Officially Underway in Chebba Groves',
          category: 'harvest',
          categoryLabel: 'Harvest Update',
          date: 'October 24, 2026',
          summary: 'Our team has completed the first week of gentle hand-raking along the coastal Chemlali plots. Early laboratory test runs show exceptionally low acidity (0.16%) and a vibrant emerald hue.',
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'Under crisp October skies and gentle Mediterranean morning breezes, the 2026 harvest season has commenced in our coastal orchards in Chebba.',
            'Early milling tests show remarkable health in the fruit: acidity stands at a pristine 0.16%, with polyphenol counts projected above 490 mg/kg. The first fresh bottles of Chebba Bio and First Press will begin shipping to reserved partners next week.'
          ]
        },
        {
          id: 'news-london-gold',
          title: 'Olive Chebba Awarded Gold Quality Medal at London International Olive Oil Competition',
          category: 'award',
          categoryLabel: 'International Recognition',
          date: 'September 20, 2026',
          summary: 'Our single-estate Chebba Bio Extra Virgin was honored with a prestigious Gold Medal in the High-Polyphenol category, scoring 96/100 for organoleptic purity and balanced throat kick.',
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'Judges from nine Mediterranean nations evaluated over 600 international entries at the 2026 London IOOC.',
            'Olive Chebba stood out for its distinctive coastal terroir: harmonious green tomato leaf aroma, bold yet clean bitterness, and verified polyphenol density.'
          ]
        },
        {
          id: 'news-ecocert-renewal',
          title: 'Annual Ecocert Organic Certification Successfully Renewed for 2026/2027',
          category: 'certification',
          categoryLabel: 'Quality & Standards',
          date: 'August 14, 2026',
          summary: 'Following comprehensive soil audits and laboratory chemical screening of our coastal orchards, our certified organic status has been reaffirmed with zero detectable pesticide residue.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'Our commitment to regenerative, chemical-free Mediterranean agriculture has been audited and certified by Ecocert for the upcoming 2026/2027 agricultural calendar.',
            'Every batch of Chebba Bio continues to be 100% traceable from our designated organic parcel numbers to the sealed bottle.'
          ]
        },
        {
          id: 'news-seaside-tasting',
          title: 'Seaside Tasting Room & Visitors Experience Opens on Route des Oliviers',
          category: 'event',
          categoryLabel: 'Chebba Mill News',
          date: 'July 10, 2026',
          summary: 'Partners, chefs, and travelers visiting the Mahdia region can now book guided morning orchard walks and fresh cold-extraction tastings at our family mill.',
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'We are thrilled to welcome food lovers and culinary partners into our home on Route des Oliviers in Chebba.',
            'Visitors can stroll through our ancient seaside groves, learn the mechanics of cold centrifugal extraction, and taste warm olive oil straight from the separator.'
          ]
        }
      ],
      articles: [
        {
          id: 'coastal-chebba-polyphenols',
          slug: 'coastal-chebba-polyphenols',
          title: 'Why Coastal Chebba Produces Some of the World’s Highest-Polyphenol Olive Oils',
          subtitle: 'The unique synergy of salty Mediterranean sea spray, mineral limestone soils, and ancient Chemlali trees.',
          category: 'terroir',
          categoryLabel: 'Terroir & Soil',
          author: 'Iheb Lafi',
          authorRole: 'Operations & Production Lead',
          publishDate: 'October 18, 2026',
          readTime: '5 min read',
          featured: true,
          excerpt: 'For generations, international judges have wondered why coastal Tunisian olive oil carries such vibrant antioxidant density. In Chebba, our trees grow just 800 meters from the Mediterranean Sea—where morning sea breezes and intense southern sunshine spark trees to build remarkable cellular defenses.',
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'Coastal stress from marine mist and high sunlight stimulates Chemlali olive trees to concentrate polyphenols (often exceeding 450 mg/kg), yielding unmatched stability and wellness potency.',
          paragraphs: [
            'There is a quiet magic that happens where the olive groves of Chebba meet the Mediterranean coastline. While inland orchards can produce bountiful fruit, our coastal trees must withstand sandy limestone soil, arid summer winds, and constant salt-laden humidity sweeping in from the waves.',
            'In botany, moderate natural stress is the catalyst for greatness. Deprived of chemical cushions and industrial irrigation, the Chemlali cultivar draws on deep root networks established over decades. In self-defense against oxidation and heat, the tree synthesizes extraordinary concentrations of polyphenolic compounds—principally Oleocanthal and Hydroxytyrosol.',
            'When we harvest these olives in the gentle cool of early morning and press them within hours at temperatures below 27°C, these protective compounds stay locked inside the oil. Laboratory assays consistently verify polyphenol counts exceeding 450 to 520 mg/kg—far above standard commercial thresholds.',
            'To taste this oil is to understand terroir immediately: that lively tickle in the throat, that fresh green artichoke aroma, and that persistent clean finish are not flaws—they are the literal taste of living plant antioxidants forged by the sea.'
          ],
          pullQuote: {
            text: 'Terroir is not an abstract romance. In Chebba, you can measure it in the laboratory and taste it in the peppery catch at the back of your throat.',
            attribution: 'Iheb Lafi, Master Miller'
          },
          practicalTip: {
            label: 'The Throat-Catch Test',
            advice: 'When tasting pure extra virgin oil, swallow a teaspoon quickly. A pleasant, peppery cough indicates rich Oleocanthal content, known for its natural anti-inflammatory properties.'
          },
          tags: ['Chebba Terroir', 'Polyphenols', 'Chemlali Variety', 'Antioxidants']
        },
        {
          id: 'mediterranean-morning-spoonful',
          slug: 'mediterranean-morning-spoonful',
          title: 'The Mediterranean Morning Spoonful: The Science Behind Daily Liquid Gold',
          subtitle: 'How a single tablespoon of fresh, extra virgin olive oil on an empty stomach supports gut balance, cardiovascular health, and sustained vitality.',
          category: 'health',
          categoryLabel: 'Health & Polyphenols',
          author: 'Mazen',
          authorRole: 'Founder & Managing Director',
          publishDate: 'October 12, 2026',
          readTime: '4 min read',
          featured: false,
          excerpt: 'From ancient Carthaginian farmers to modern cardiovascular cardiologists, the tradition of tasting extra virgin olive oil first thing in the morning remains one of the simplest, most scientifically proven longevity rituals in the world.',
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'Taking high-polyphenol extra virgin olive oil in the morning coats the digestive lining, stimulates bile production for optimal digestion, and provides bioavailable monounsaturated fats that stabilize energy.',
          paragraphs: [
            'My grandfather never began his morning with coffee alone. Before the sun rose over the groves, he would pour a small ceramic cup of freshly pressed Chebba oil, swirl it between his palms, and drink it with a quiet smile.',
            'Modern nutritional science has finally caught up with what Mediterranean elders knew instinctively. Pure extra virgin olive oil is predominantly Oleic acid—a monounsaturated fatty acid that supports healthy cholesterol ratios, soothes gastric mucosa, and facilitates the absorption of fat-soluble vitamins (A, D, E, and K).',
            'Furthermore, fasting ingestion ensures that sensitive phenolic compounds bypass heavy food mixtures and interact directly with the endothelial walls and gut microbiome, triggering anti-inflammatory cascades throughout the body.',
            'If you want to start this life-giving habit, begin with a teaspoon of our Chebba Bio or First Press. Let it warm on your tongue for three seconds, take in the green grass aroma, and swallow. Within two weeks, you will notice smoother digestion, clearer skin, and steady morning mental clarity.'
          ],
          pullQuote: {
            text: 'A spoonful of real olive oil at dawn is not medicine—it is nutrition in its most pure, unadulterated Mediterranean form.',
            attribution: 'Mazen, Founder'
          },
          practicalTip: {
            label: 'How to Start Your Morning Ritual',
            advice: 'Take 1 tablespoon 15 minutes before breakfast. If the peppery bite is too bold for your palate at first, add three drops of fresh lemon juice or drizzle it over a warm slice of sourdough.'
          },
          tags: ['Longevity', 'Heart Health', 'Morning Ritual', 'Gut Health']
        },
        {
          id: 'demystifying-acidity-chef-standard',
          slug: 'demystifying-acidity-chef-standard',
          title: 'Demystifying Acidity: Why “< 0.2%” is the Secret Benchmark of Gourmet Kitchens',
          subtitle: 'Commercial standards allow up to 0.8% acidity, but artisanal estate oils aim far lower. Here is why that difference matters for taste and cooking.',
          category: 'kitchen',
          categoryLabel: 'Culinary & Kitchen',
          author: 'Islem',
          authorRole: 'Export & Quality Specialist',
          publishDate: 'October 5, 2026',
          readTime: '4 min read',
          featured: false,
          excerpt: 'Walk into any supermarket and you will see “Extra Virgin” stamped across dozens of bottles. Yet free acidity reveals the true story of how olives were handled: from swift morning harvest to immaculate cold centrifugation.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'Acidity under 0.2% indicates unbruised, freshly picked olives processed without delay. Lower acidity also dramatically increases thermal stability and heat resistance when cooking.',
          paragraphs: [
            'There is widespread confusion about what “acidity” means in olive oil. Unlike the tart acidity of lemons or vinegar, olive oil acidity has nothing to do with taste sourness. It is a strict chemical metric measuring Free Fatty Acids (FFA), which form when cellular membranes in the olive fruit break down.',
            'When olives fall to the ground, sit in humid burlap sacks for days, or are damaged by fruit flies, enzymes immediately begin hydrolyzing triglycerides into free acids. By international law, an oil can have up to 0.8% FFA and still legally claim the title “Extra Virgin”.',
            'At Olive Chebba, we hold ourselves to a standard four times stricter: under 0.20%. We achieve this by gentle hand-harvesting, breathable ventilated crates, and milling within 4 hours. The resulting oil has a pristine lipid structure.',
            'For professional chefs, low acidity is crucial for two reasons: First, it imparts a clean, non-greasy mouthfeel that allows delicate ingredients like white truffles and sea bass to shine. Second, lower free fatty acids give the oil a higher thermal stability (up to 207°C / 405°F), dispelling the myth that you cannot lightly cook with extra virgin oil.'
          ],
          pullQuote: {
            text: 'Acidity does not measure sourness; it measures respect. It reflects how quickly and tenderly the fruit was moved from branch to press.',
            attribution: 'Islem, Quality Lead'
          },
          practicalTip: {
            label: 'Chef Smoke Point Truth',
            advice: 'Artisanal extra virgin oil with < 0.2% acidity can safely sauté fish, roast root vegetables, or crisp garlic. You only burn olive oil when using old, high-acidity commercial blends.'
          },
          tags: ['Acidity', 'Chef Secrets', 'Smoke Point', 'Quality Standards']
        },
        {
          id: 'dawn-in-the-groves-harvest-story',
          slug: 'dawn-in-the-groves-harvest-story',
          title: 'Dawn in the Groves: Inside a Typical Autumn Harvest Morning in Chebba',
          subtitle: 'The rhythm of autumn mornings: gentle hand-raking, the crisp salty breeze, and a race against the sun to the mill.',
          category: 'harvest',
          categoryLabel: 'Harvest Diaries',
          author: 'Iheb Lafi',
          authorRole: 'Operations & Production Lead',
          publishDate: 'September 28, 2026',
          readTime: '6 min read',
          featured: false,
          excerpt: 'By 6:00 AM, our groves are already alive with conversation, the hum of canvas netting spreading across red earth, and the gentle patter of olives falling like green hail under the early autumn light.',
          image: 'https://images.unsplash.com/photo-1753703986291-6f95a7f299ba?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'Small-batch, generational harvesting avoids heavy mechanical tree shakers, preserving branch vitality for future seasons while delivering intact fruit to the press.',
          paragraphs: [
            'There is no alarm clock quite like the crisp autumn air in Chebba. As the first pale rose light breaks over the Mediterranean horizon, the harvest teams gather under the ancient trees with woven nets and hand rakes.',
            'Industrial olive farming uses heavy tractor shakers that violently vibrate the tree trunk, often stripping bark and stressing root systems. In our family plots, we still harvest largely by hand and lightweight manual combs. We lay soft nets across the clean ground, ensuring not a single olive hits bare dirt or stones.',
            'The banter is lighthearted, filled with songs and memories of harvests past. Young harvesters work alongside elders who know each tree’s quirks: which branch catches the maritime breeze, which plot ripens three days early, and which tree yields the sweetest table olives.',
            'By 10:30 AM, our first tractor trailer is loaded with ventilated crates—never sealed plastic bags where heat could build up. We roll directly down Route des Oliviers to the mill. In four short hours, what was hanging in the sea breeze is flowing out of the separator spout as glowing emerald gold.'
          ],
          pullQuote: {
            text: 'Harvest is when the entire year’s patience crystallizes. When that first stream of green oil pours from the press, the fatigue of months vanishes in an instant.',
            attribution: 'Iheb Lafi'
          },
          practicalTip: {
            label: 'Preserving Harvest Freshness at Home',
            advice: 'Keep your olive oil in a dark cupboard between 14°C and 18°C. Always screw the cap tightly after pouring to prevent ambient oxygen from dulling the fresh harvest aromatics.'
          },
          tags: ['Harvest 2026', 'Family Mill', 'Cold Press', 'Community']
        },
        {
          id: 'chef-guide-olive-oil-pairing',
          slug: 'chef-guide-olive-oil-pairing',
          title: 'The Chef’s Pairing Masterclass: When to Go Bold, When to Go Silky',
          subtitle: 'How to treat extra virgin olive oil like fine wine: matching pungent bio pressings with rich foods and gentle reserves with fresh fish.',
          category: 'kitchen',
          categoryLabel: 'Culinary & Kitchen',
          author: 'Mazen',
          authorRole: 'Founder & Managing Director',
          publishDate: 'September 15, 2026',
          readTime: '4 min read',
          featured: false,
          excerpt: 'Just as you would never pour a heavy vintage red over delicate poached sole, different olive oils carry distinct culinary weights. Here is our straightforward guide to elevating everyday home dinners into Mediterranean feasts.',
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'Pair intensity with intensity: bold, peppery oils elevate robust dishes (steaks, burrata, bean soups), while mild, almond-forward oils flatter delicate fish, risottos, and citrus desserts.',
          paragraphs: [
            'For too many kitchens, olive oil is treated merely as a cooking medium—something poured into a hot pan to keep garlic from sticking. But in Mediterranean culinary culture, high-grade olive oil is the final, defining seasoning.',
            'Think of olive oil as cold-pressed olive juice. When an oil is robust and peppery (like our Chebba Bio or First Press), it carries powerful aromatic phenols reminiscent of wild arugula, green tomato vines, and cracked peppercorns. Drizzle this over a ball of creamy burrata, a hot bowl of Tuscan white bean soup, or a seared ribeye steak, and the acidity and bitterness cut right through the dairy and fat.',
            'Conversely, when you are preparing a subtle carpaccio of sea bream, steaming tender asparagus, or baking an olive oil lemon sponge cake, an aggressive oil will overwhelm the dish. That is where our Chebba Reserve shines: round, buttery, with sweet almond notes and a velvety mouthfeel that cushions the palate.',
            'The secret to mastering olive oil in your cooking is to keep two bottles by your counter: one everyday silky workhorse for gentle heat and delicate dishes, and one vibrant, unfiltered powerhouse reserved strictly for raw finishing.'
          ],
          pullQuote: {
            text: 'The best olive oil in the world cannot save a dish if its intensity clashes with your ingredients. Balance is everything.',
            attribution: 'Chef Collaboration Notes'
          },
          practicalTip: {
            label: 'The Final Drizzle Secret',
            advice: 'Never pour finishing oil onto food while it is actively boiling on the stove. Drizzle it the moment the plate is set on the table; the ambient warmth will atomize the aromatic terpenes into the air.'
          },
          tags: ['Culinary Guide', 'Pairing Notes', 'Burrata', 'Finishing Oil']
        }
      ]
    },
    contactPage: {
      heroBadge: 'Direct Connections',
      heroTitlePart1: 'Let’s talk about',
      heroTitleHighlight: 'authentic olive oil',
      heroTitlePart2: 'for your tables & shelves.',
      heroSubtitle: 'Whether you are seeking premium extra virgin olive oil for your restaurant, bulk export for your retail brand, or requesting samples from our latest pressings, our team in Chebba and Munich is ready to assist.',
      locationsHeading: 'Our Presence',
      locationsSubheading: 'From the coastal groves of the Tunisian Sahel to central European distribution.',
      locations: [
        {
          id: 'tunisia-mill',
          city: 'Chebba',
          country: 'Tunisia',
          tagline: 'Groves, Milling & Estate Bottling',
          address: '5170 Cité de la Plage, Chebba, Mahdia, Tunisia',
          role: 'Harvest supervision, cold-extraction milling, and estate packaging.',
          hours: 'Mon – Fri: 08:00 – 17:00 (Local Time)'
        },
        {
          id: 'germany-office',
          city: 'Munich',
          country: 'Germany',
          tagline: 'European Logistics & Client Relations',
          address: 'Munich, Bavaria, Germany',
          role: 'EU logistics, rapid sample dispatch, wholesale inquiries & B2B accounts.',
          hours: 'Mon – Fri: 09:00 – 18:00 (CET)'
        }
      ],
      directChannelsHeading: 'Direct Contact Channels',
      directChannelsSubheading: 'Reach out directly by phone, WhatsApp, email, or connect with us on Facebook.',
      emailLabel: 'Email Address',
      emailValue: 'mazenslama79@gmail.com',
      phoneLabel: 'Direct Phone',
      phoneValue: '+4915511269418',
      whatsappLabel: 'WhatsApp Chat',
      whatsappValue: '+4915511269418',
      whatsappUrl: 'https://wa.me/4915511269418',
      facebookLabel: 'Facebook Profile',
      facebookUrl: 'https://www.facebook.com/mazen.slama.583',
      formHeading: 'Send an Inquiry',
      formSubheading: 'Fill out this brief form and we will reply within 24 business hours.',
      formName: 'Your Full Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number (Optional)',
      formSubject: 'Subject',
      formInquiryType: 'Inquiry Category',
      inquiryTypes: {
        wholesale: 'Wholesale & B2B Sourcing',
        sample: 'Tasting Sample Request',
        export: 'Bulk Export & Logistics',
        general: 'General Question / Collaboration'
      },
      formMessage: 'Message & Requirements',
      formSubmitBtn: 'Send Message',
      formSendingBtn: 'Sending...',
      formSuccessTitle: 'Message Received',
      formSuccessDesc: 'Thank you for reaching out to Olive Chebba. Our team will review your inquiry and get back to you shortly.',
      sendAnotherBtn: 'Send Another Inquiry',
      directCallBadge: 'Call or WhatsApp',
      copyEmailSuccess: 'Email copied to clipboard!',
      officeHoursLabel: 'Business Hours',
      officeHoursValue: 'Monday – Friday, 08:00 to 18:00 (CET)',
      responseTimeNote: 'We respect your time and respond to all inquiries within 24 hours.',
      founderHeading: 'Personal Direct Access',
      founderBadge: 'Leadership & Direct Inquiries',
      founderRole: 'Founder & Managing Director',
      founderName: 'Mazen Slama',
      founderQuote: 'Every bottle of Olive Chebba originates from centuries-old Sahel groves. Whether discussing export container logistics to Europe or custom restaurant allocations, I am glad to answer your questions directly.',
      mapsHeading: 'Estate Mill & Distribution Map',
      mapsSubheading: 'Explore our authentic physical presence: our coastal extraction mill in Chebba and our European hub in Munich.',
      getDirections: 'Get Directions',
      viewOnGoogleMaps: 'Open in Google Maps',
      copyCoordinates: 'Copy GPS Coordinates',
      coordinatesCopied: 'GPS Copied!',
      currentLocalTime: 'Current Local Time',
      visitingPolicy: 'Visiting Chebba Mill: Mill tours and private tastings are welcomed by appointment, especially during the active pressing season (October to February).',
      samplePolicy: 'European Dispatch: Express tasting sample bottles (100ml / 250ml) dispatched directly from Munich to verified chefs, distributors, and delis.'
    },
    titles: {
      home: 'Olive Chebba | Tunisian Olive Oil',
      about: 'About Us | Olive Chebba',
      services: 'Our Services | Olive Chebba',
      solutions: 'Our Products & Solutions | Olive Chebba Olive Oil',
      blog: 'The Journal | Olive Chebba',
      contact: 'Contact Us | Olive Chebba',
      notFound: 'Page Not Found | Olive Chebba',
    },
    metaDescriptions: {
      home: 'An elegant, editorial-style web application for Tunisian olive oil company Olive Chebba. Harvesting liquid gold under the Mediterranean sun.',
      about: 'Discover the heritage, mission, and generational story behind Olive Chebba, harvesting artisanal extra virgin olive oil from Chebba, Tunisia.',
      services: 'Explore Olive Chebba comprehensive services including sustainable cultivation, cold extraction milling, global export, and branding.',
      solutions: 'Discover Olive Chebba olive oil products: Chebba Bio Certified Organic, Chebba Reserve Conventional Premium, First Press Early Harvest, and Heritage Blends.',
      blog: 'Explore the Olive Chebba Journal: Mediterranean olive farming insights, culinary traditions, and agricultural innovation.',
      contact: 'Connect with the Olive Chebba team in Chebba, Tunisia for bulk extra virgin olive oil sourcing, partnerships, and consultations.',
    },
  },
  ar: {
    nav: {
      brand: 'أوليف الشابة',
      brandArabicSubtitle: 'أصالة الزيتون التونسي',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      solutions: 'حلولنا',
      blog: 'المجلة',
      contact: 'اتصل بنا',
      consultation: 'استشارة مجانية',
    },
    switcher: {
      label: 'اللغة',
      heritageBadge: 'تراث تونس العريق',
      enTitle: 'English',
      enSubtitle: 'International',
      arTitle: 'العربية',
      arSubtitle: 'تراث الشابة • تونس',
    },
    home: {
      heroTag: 'مرحباً بكم في الشابة',
      heroTitlePart1: 'حصاد',
      heroTitleHighlight: 'الذهب السائل',
      heroTitlePart2: 'تحت شمس البحر الأبيض المتوسط.',
      heroDesc: 'نحن روّاد في الزراعة والتسويق الرقمي نعمل على إعلاء شأن زيت الزيتون التونسي البكر الممتاز عالمياً، ممتزجين بين تقاليد العصر المتوارثة واستراتيجيات التسويق الحديثة.',
      missionTag: 'هدفنا ورسالتنا',
      missionQuote: '«أن نربط نقاء الأرض التونسية بذائقة العالم الرفيعة بكل أمانة وإتقان.»',
      missionDesc: 'نتطلع إلى مستقبل يحتل فيه زيت الزيتون التونسي الأصيل مكانته المستحقة في أرقى المطابخ العالمية، مدعوماً بالشفافية والابتكار والاستدامة الزراعية.',
      aboutTag: 'من تراث الشابة',
      aboutTitle: 'جذور متأصلة في التراث',
      aboutP1: 'من سواحل مدينة الشابة التاريخية، انطلقت مسيرتنا بتقدير عميق لشجرة الزيتون المباركة. لأجيال متعاقبة، رعت عائلاتنا هذه التربة مراقبة نسائم المتوسط لجني حبات الزيتون في أوج نضجها.',
      aboutP2: 'واليوم، نتجاوز الزراعة التقليدية لنكون جسراً بين أصالة الأجداد وحلول التجارة الحديثة، مُمكّنين مزارعنا المحلية بأحدث التقنيات.',
      aboutLink: 'اقرأ قصتنا كاملة',
      servicesTag: 'خبراتنا المتكاملة',
      servicesTitle: 'خدمات شاملة ومتخصصة',
      servicesDesc: 'من بساتين الزيتون إلى الأسواق الدولية، تغطي خدماتنا دورة حياة إنتاج وتوزيع زيت الزيتون الفاخر بالكامل.',
      servicesViewAll: 'عرض جميع الخدمات',
      servicesList: [
        {
          title: 'زراعة مستدامة',
          desc: 'ممارسات زراعية صديقة للبيئة تغذي التربة وتحترم إيقاعات الطبيعة المتوسطية العريقة.',
        },
        {
          title: 'العصر على البارد',
          desc: 'معاصر حديثة تضمن الحفاظ التام على مضادات الأكسدة والبوليفينول والنكهة الفريدة.',
        },
        {
          title: 'تصدير دولي',
          desc: 'حلول لوجستية متكاملة ومطابقة لأدق المعايير العالمية لإيصال ذهبنا السائل إلى شتى بقاع الأرض.',
        },
        {
          title: 'العلامة التجارية والتسويق',
          desc: 'استراتيجيات رقمية تسويقية موجهة للشركاء الدوليين والعلامات التجارية الفاخرة.',
        },
      ],
      testimonialsTag: 'شهادات التميز والجودة',
      testimonialsTitle: 'إشادة من رواد الطهي والضيافة العالمية',
      testimonialsSubtitle: 'من مطاعم ميشلان إلى كبار مستوردي الأغذية الفاخرة، اكتشف لماذا يفضل نخبة الطهاة زيت زيتون أوليف الشابة البكر الممتاز.',
      testimonials: [
        {
          quote: '«كان التعاون مع أوليف الشابة نقلة استثنائية لعلامتنا التجارية في إيطاليا. النقاء العضوي والتركيز العالي للبوليفينول ومضادات الأكسدة في زيت الشابة المعصور على البارد فريد بحق — إنه التجسيد الأسمى للزيتون التونسي الساحلي الأصيل.»',
          author: 'إلينا روسي',
          role: 'مديرة التوريد',
          location: 'إيل غوستو ميلانو، إيطاليا',
          highlight: 'حموضة منخفضة للغاية (< 0.2%) وغني بالبوليفينول',
          rating: 5,
        },
        {
          quote: '«في عالم الطهي الفرنسي الرفيع، الدقة هي كل شيء. زيت أوليف الشابة يمنح أطباقنا نكهة عشبية ذهبية ولمسة فلفلية ناعمة ترتقي بأطباق الأسماك المتوسطية وثمار البحر إلى آفاق غير مسبوقة.»',
          author: 'الشيف مارك لوفيفر',
          role: 'كبير الطهاة والمدير التنفيذي للطهي',
          location: 'مطعم لوليفييه إيتواليه، باريس',
          highlight: 'معصور على البارد خلال 4 ساعات من الجني اليدوي',
          rating: 5,
        },
        {
          quote: '«عملاؤنا في طوكيو لا يقبلون بأقل من النقاء التام والشفافية في مسار الإنتاج. وفرت لنا أوليف الشابة شهادات مخبرية صارمة، وتتبعاً دقيقاً لكل دفعة محصول، ومذاقاً مخملياً متوازناً لا يضاهى.»',
          author: 'كينجي تاكاهاشي',
          role: 'كبير مسؤولي استيراد الأغذية الفاخرة',
          location: 'ميديتيرينيان هارفست إمبورتس، طوكيو',
          highlight: 'محصول 100% من مزارع الشابة الساحلية العريقة',
          rating: 5,
        },
        {
          quote: '«سواء لعلاماتنا التجارية الخاصة أو لخدمة مائدة الطعام في مانهاتن، ترسي أوليف الشابة المعيار الذهبي للجودة. لوجستيات التصدير المتكاملة والالتزام بالتراث الزراعي جعلهم شريكنا المفضل في حوض المتوسط.»',
          author: 'صوفيا ستيرلينغ',
          role: 'المؤسسة والشريكة الإدارية',
          location: 'مجموعة ستيرلينغ كوليناري، نيويورك',
          highlight: 'عضوي معتمد مع شفافية وتتبع كامل للمزارع',
          rating: 5,
        },
      ],
      testimonialQuote: '«كان التعاون مع أوليف الشابة نقلة نوعية لعلامتنا التجارية. إن التزامهم المطلق بالأصالة مع فهمهم الرقمي المتطور يجعلهم شريكاً فريداً في القطاع الزراعي المتوسطي.»',
      testimonialAuthor: 'إلينا روسي',
      testimonialRole: 'مديرة التوريد، إيل غوستو ميلانو',
      ctaTitle: 'هل أنت مستعد للارتقاء بعلامتك؟',
      ctaDesc: 'سواء كنت تبحث عن توريد زيت زيتون بكر ممتاز أو شريك رقمي لتوسيع علامتك الزراعية، خبراؤنا هنا للتعاون معك.',
      ctaButton: 'ابدأ المحادثة الآن',
    },
    about: {
      badge: 'عن أوليف الشابة',
      titlePart1: 'إرث من',
      titleHighlight: 'الجودة والأصالة',
      subtitle: 'نحن وكالة رقمية رائدة ومبادرة زراعية متخصصة في إبراز قيمة زيت الزيتون التونسي على الساحة الدولية، نمزج بين تقاليد العصر التليدة والابتكار الحديث.',
      storyTitle: 'قصتنا',
      storyP1: 'من بلدة الشابة الساحلية، بدأت حكايتنا من الاحترام العميق لشجرة الزيتون. عبر أجيال متتالية، عكفت عائلاتنا على خدمة الأرض، مستلهمة من نسيم البحر المتوسط مواعيد الحصاد الأمثل.',
      storyP2: 'واليوم، تتخطى أوليف الشابة حدود الزراعة التقليدية، حيث نجمع بين عبق التراث وديناميكية التجارة الرقمية، لندعم المنتجين المحليين بسلاسل إمداد موثوقة ومراقبة جودة صارمة.',
      missionBadge: 'الرؤية والرسالة',
      missionQuote: '«أن نربط نقاء الأرض التونسية بذائقة العالم الرفيعة بكل أمانة وإتقان.»',
      missionDesc: 'نطمح إلى أن يكون زيت الزيتون التونسي البكر الممتاز الحائز على أعلى درجات الجودة حاضراً على أرقى الموائد العالمية، مسنوداً بممارسات مستدامة ونمو متوازن.',
      valuesTag: 'فلسفتنا',
      valuesTitle: 'قيم نغرسها وننميها',
      valuesDesc: 'ترتكز مبادئنا على ذات العناصر التي تغذي بساتيننا: الصبر، والنزاهة، والالتزام الثابت بأرفع معايير الإتقان.',
      valuesList: [
        {
          title: 'الشفافية الكاملة',
          desc: 'تتبع شامل من الحقل إلى القارورة. لا نساوم في وضوح مسار منتجاتنا ومصادرها.',
        },
        {
          title: 'الابتكار الواعي',
          desc: 'دمج التقنيات الزراعية الحديثة والتحليلات الرقمية لتعظيم الجودة دون المساس بأصالة التراث.',
        },
        {
          title: 'النقاء المطلق',
          desc: 'خالٍ من أي إضافات، 100% زيت زيتون بكر ممتاز يُعصر طازجاً في ذروة النضج.',
        },
        {
          title: 'الشراكة والتكامل',
          desc: 'بناء علاقات وطيدة ومستدامة مع مزارعينا المحليين وشركائنا حول العالم.',
        },
      ],
      teamTitle: 'الأيادي المخلصة وراء كل قطرة',
      teamDesc: 'فريق شغوف يجمع خبراء العصر، والمهندسين الزراعيين، وخبراء الاستراتيجيات الرقمية.',
      teamList: [
        { name: 'مازن', role: 'المؤسس والمدير التنفيذي' },
        { name: 'إيهاب', role: 'مسؤول العمليات والإنتاج' },
        { name: 'إسلام', role: 'مسؤولة التصدير ومراقبة الجودة' },
      ],
      ctaTitle: 'انضم إلى رحلتنا.',
      ctaDesc: 'اكتشف العناية الفائقة والتقاليد المتوارثة المنسكبة في كل قطرة زيت.',
      ctaButton: 'تواصل معنا اليوم',
    },
    footer: {
      brandDesc: 'نعتني بأجود أنواع زيت الزيتون التونسي. متجذرون في التراث، ومندفعون نحو التميز والابتكار.',
      companyHeading: 'عن المؤسسة',
      resourcesHeading: 'المصادر',
      contactHeading: 'تواصل معنا',
      companyLinks: {
        home: 'الرئيسية',
        services: 'خدماتنا',
        sustainability: 'الاستدامة البيئية',
        careers: 'فرص العمل',
      },
      resourceLinks: {
        journal: 'المجلة والمدونة',
        pairings: 'فن التذوق والمطبخ',
        wholesale: 'طلبات الجملة',
        faq: 'الأسئلة الشائعة',
      },
      address: '5170 سيتي دي لا بلاج، الشابة، تونس & ميونخ، ألمانيا',
      rights: 'أوليف الشابة. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
    },
    placeholders: {
      services: 'خدماتنا (قريباً)',
      solutions: 'حلولنا (قريباً)',
      blog: 'المجلة الزراعية (قريباً)',
      contact: 'اتصل بنا (قريباً)',
    },
    common: {
      returnToPrevious: 'العودة إلى الصفحة السابقة',
      backToHome: 'العودة إلى الرئيسية',
      return: 'الرجوع',
      back: 'رجوع',
    },
    servicesPage: {
      heroBadge: 'ما نقدمه لكم',
      heroTitlePart1: 'خدماتنا،',
      heroTitleHighlight: 'من بساتين الشابة إلى مائدتكم',
      heroTitlePart2: '',
      heroSubtitle: 'كمؤسسة عائلية متجذرة في مدينة الشابة بتونس، نتولى كل خطوة بعناية: رعاية أشجار الزيتون، عصر الزيت البكر الممتاز، وتوصيله إليكم ومساعدتكم في مشاركة قصتنا.',
      services: [
        {
          id: 'cultivation',
          number: '٠١',
          title: 'زراعة مستدامة',
          tagline: 'ممارسات زراعية صديقة للبيئة تغذي التربة وتحترم إيقاعات الطبيعة المتوسطية العريقة.',
          summary: 'نعتني ببساتين الزيتون على سواحل الشابة المشمسة بصبر وانسجام مع الطبيعة، معتمدين على الزراعة البعلية التقليدية ومياه الأمطار والتسميد الطبيعي لإنتاج ثمار نقية وصحية.',
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'زراعة طبيعية متوارثة',
          details: [
            'بساتين ساحلية معتنى بها بعناية متأقلمة مع المناخ التونسي',
            'خالية تماماً من المبيدات الكيميائية والأسمدة الصناعية',
            'جني يدوي لطيف يحافظ على سلامة حبات الزيتون دون أضرار',
          ],
        },
        {
          id: 'extraction',
          number: '٠٢',
          title: 'العصر على البارد',
          tagline: 'معاصر حديثة تضمن الحفاظ التام على مضادات الأكسدة والبوليفينول والنكهة الفريدة.',
          summary: 'يبدأ الزيت الممتاز بالعصر السريع واللطيف. نعصر الزيتون على البارد خلال ساعات قليلة من قطافه الصباحي، لنحافظ على النكهة العشبية الطازجة والطعم المتوازن ومضادات الأكسدة الطبيعية.',
          image: 'https://images.unsplash.com/photo-1753703986291-6f95a7f299ba?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'عصر يومي طازج',
          details: [
            'عصر بارد في نفس يوم قطاف ثمار الزيتون',
            'حموضة منخفضة طبيعياً مع نكهة فاكهية ولمسة فلفلية خفيفة',
            'حفظ في خزانات ستانلس ستيل غذائية لحماية الجودة والنقاء',
          ],
        },
        {
          id: 'export',
          number: '٠٣',
          title: 'تصدير دولي',
          tagline: 'حلول لوجستية متكاملة ومطابقة لأدق المعايير العالمية لإيصال ذهبنا السائل إلى شتى بقاع الأرض.',
          summary: 'نساعد المطاعم والمتاجر المتخصصة وموزعي الأغذية الفاخرة على استلام زيت الزيتون التونسي مباشرة من معصرتنا، مع إدارة التعبئة والشحن الدولي وشهادات التصدير.',
          image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'شحن مباشر موثوق',
          details: [
            'خيارات تعبئة متعددة: قوارير زجاجية داكنة، صفائح ٥ لتر، أو عبوات كبرى',
            'إصدار كافة شهادات المنشأ والتحاليل المخبرية المعتمدة',
            'شحن آمن مع شركاء نقل موثوقين حتى باب متجرك أو ميناء الوصول',
          ],
        },
        {
          id: 'branding',
          number: '٠٤',
          title: 'العلامة التجارية والتسويق',
          tagline: 'استراتيجيات رقمية تسويقية موجهة للشركاء الدوليين والعلامات التجارية الفاخرة.',
          summary: 'للشركاء الراغبين في تقديم زيت الزيتون باسم مطعمهم أو علامتهم الخاصة، نوفر تصاميم مخصصة للقوارير والملصقات، ونشاركهم صوراً وقصصاً حقيقية عن تراث زيت الزيتون التونسي.',
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
          badge: 'دعم العلامات الخاصة',
          details: [
            'تصميم ملصقات وهوية خاصة لقوارير الزيت لمطعمك أو متجرك',
            'محتوى وصور أصيلة تعكس أصل الزيت وجودته لزبائنك',
            'إرشادات عملية للتسويق الرقمي والوصول لعشاق زيت الزيتون الفاخر',
          ],
        },
      ],
      howWeWorkTag: 'تعاون بسيط وواضح',
      howWeWorkTitle: 'كيف نعمل معكم',
      howWeWorkDesc: 'نؤمن بالعلاقات الإنسانية والتواصل الشفاف. إليكم الخطوات المعتادة للتعاون مع المطاعم والمتاجر والشركاء.',
      steps: [
        {
          number: '٠١',
          title: 'الحوار والتذوق',
          desc: 'نستمع لاحتياجاتكم ونرسل لكم عينات من أحدث موسم عصر لتتذوقوا النكهة وتتأكدوا من الجودة بأنفسكم.',
        },
        {
          number: '٠٢',
          title: 'اختيار الزيت والتعبئة',
          desc: 'تختارون الكمية ونوع العبوة المناسبة — سواء قوارير فاخرة مخصصة لعلامتكم أو صفائح للمطبخ.',
        },
        {
          number: '٠٣',
          title: 'التجهيز الطازج والشحن',
          desc: 'نجهز طلبيتكم طازجة من المعصرة، ونتولى إجراءات التصدير والشحن حتى تصلكم الشحنة بأمان.',
        },
      ],
      ctaTitle: 'هل تبحث عن مصدر موثوق لزيت الزيتون التونسي؟',
      ctaDesc: 'سواء كنت بحاجة إلى توريد منتظم لمطعمك، أو قوارير خاصة بمتجرك، أو شريك موثوق في تونس، يسعدنا التواصل معكم.',
      ctaButton: 'تواصل مع فريقنا',
      ctaSampleButton: 'طلب عينة تذوق',
    },
    solutionsPage: {
      heroBadge: 'منتجاتنا وحلولنا',
      heroTitlePart1: 'زيوت زيتون طبيعية،',
      heroTitleHighlight: 'مختارة بعناية لكل مائدة',
      heroTitlePart2: '',
      heroSubtitle: 'من البساتين العضوية المعتمدة إلى الزيوت التقليدية الفاخرة والعصرات المبكرة المحدودة، نقدم لكم أربعة أصناف أساسية من زيت الزيتون الصافي المعصور في الشابة.',
      compareBanner: {
        tag: 'الفرق الجوهري',
        title: 'الزيت العضوي والزيت التقليدي الفاخر: ما الفرق بينهما؟',
        description: 'كلا المنتجين زيت بكر ممتاز ١٠٠٪، يُعصران على البارد في نفس يوم الجني في الشابة، ويتميزان بنسبة حموضة منخفضة جداً. إليكم كيف يختلفان في الحقل، المذاق، والاستخدام في المطبخ:',
        organicTitle: 'زيت الزيتون العضوي (بيو الشابة)',
        organicDesc: 'خالٍ تماماً من الأسمدة الكيميائية والمبيدات الصناعية، وموثق بشهادات عضوية دورية. يتميز بنكهة عشبية حيوية، وحدّة فلفلية واضحة تدل على غناه العالي بمضادات الأكسدة.',
        conventionalTitle: 'الزيت التقليدي الفاخر (احتياط الشابة)',
        conventionalDesc: 'يُزرع في البساتين العائلية الساحلية المعتنى بها بأساليب متوارثة مسؤولة. يتميز بمذاق ناعم بنكهة اللوز الذهبي، مما يجعله مثالياً ومتوازناً للطهي اليومي والمطابخ الحرفية.',
      },
      filterAll: 'كافة الأصناف (٤)',
      filterOrganic: 'عضوي موثق',
      filterConventional: 'تقليدي فاخر',
      filterSpecialty: 'إصدارات خاصة ومحدودة',
      products: [
        {
          id: 'organic-chebba-bio',
          name: 'بيو الشابة – بكر ممتاز عضوي',
          category: 'organic',
          categoryLabel: 'عضوي موثق',
          tagline: 'نقاء الطبيعة من بساتيننا الساحلية العضوية مع لمسة فلفلية طازجة ومنعشة.',
          description: 'يُنتج حصرياً من قطع أراضينا الساحلية في الشابة الخالية من أي مواد كيميائية، حيث نسيم البحر الأبيض المتوسط ورعاية التربة المتوارثة لأشجار الشملالي العريقة. يُعصر على البارد خلال ٤ ساعات للحفاظ على أعلى مستويات البوليفينول.',
          differenceHighlight: 'مصدر عضوي موثق ١٠٠٪. خالٍ تماماً من المركبات الكيميائية، بطعم عشبي فواح ومرارة خفيفة طبيعية تعكس غناه بمضادات الأكسدة.',
          flavorNotes: ['عشب مقصوص طازج', 'خرشوف أخضر', 'حدّة فلفلية متوازنة', 'زعتر بري'],
          bestPairings: 'يُرش نيئاً فوق جبن البوراتا، السلطات الطازجة، المخبوزات الدافئة، والخضار المشوية.',
          acidity: 'حموضة < ٠.١٨٪',
          harvestWindow: 'نوفمبر – ديسمبر',
          formats: ['قارورة زجاج داكن ٥٠٠ مل', 'قارورة ماراسكا ٧٥٠ مل', 'صفيحة مزارع ٣ لتر'],
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&h=800&auto=format&fit=crop',
        },
        {
          id: 'conventional-chebba-reserve',
          name: 'احتياط الشابة – بكر ممتاز تقليدي فاخر',
          category: 'conventional',
          categoryLabel: 'تقليدي فاخر',
          tagline: 'الخيار الذهبي المتوازن للمطبخ التونسي والعالمي: ناعم، غني، ومفضل لدى الطهاة.',
          description: 'معيارنا العائلي عبر الأجيال. يُنتج من بساتين الزيتون العائلية العريقة وفق ممارسات ساحلية مسؤولة، ثم يُعصر على البارد ليصل إلى جودة البكر الممتاز. نكهته هادئة ومتناغمة بدون مرارة حادة.',
          differenceHighlight: 'زراعة عائلية تقليدية متوازنة. نكهة لوز ذهبي أكثر نعومة وثبات عالي عند الطهي، وقيمة عملية ممتازة للاستخدام اليومي في المطاعم.',
          flavorNotes: ['لوز حلو ذهبي', 'فواكه متوسطية ناضجة', 'دفء عشبي خفيف', 'قوام حريري متوازن'],
          bestPairings: 'الطهي اليومي، تتبيل الأسماك والخضار، الصلصات والمخللات، ولمسات الباستا النهائية.',
          acidity: 'حموضة < ٠.٢٢٪',
          harvestWindow: 'ديسمبر – جانفي',
          formats: ['قارورة زجاج داكن ٧٥٠ مل', 'صفيحة مطبخ ٥ لتر', 'حقيبة في كرتون ٢٠ لتر', 'حاوية كبرى ١٠٠٠ لتر'],
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&h=800&auto=format&fit=crop',
        },
        {
          id: 'early-harvest-first-press',
          name: 'عصرة أولى – جني مبكر من الشابة',
          category: 'specialty',
          categoryLabel: 'جني مبكر محدود',
          tagline: 'معصور على البارد في شهر أكتوبر من حبات الزيتون الخضراء لتركيز استثنائي للبوليفينول.',
          description: 'يُجنى يدوياً في أوائل الخريف عندما تكون الثمار خضراء تماماً. يتطلب ضعف كمية الزيتون لكل لتر، لينتج زيتاً زمردياً فائق الجودة بأعلى نسبة من الأوليوروبين والبوليفينول وطعم عشبي قوي.',
          differenceHighlight: 'جني مبكر جداً (ثمار خضراء غير مكتملة النضج). إنتاجية زيت أقل لكل شجرة، لكن بكثافة استثنائية لمضادات الأكسدة ولون زمردي فائق ولمسة فلفلية حيوية.',
          flavorNotes: ['شجيرات طماطم خضراء', 'جرجير بري', 'توابل عشبية حيوية', 'قشر تفاح أخضر'],
          bestPairings: 'مثالي فوق اللحوم المشوية، الأجبان المعتقة، الخضار الورقية، أو ملعقة صباحية صحية.',
          acidity: 'حموضة < ٠.١٥٪',
          harvestWindow: 'الأسبوعان الأولان من أكتوبر',
          formats: ['قارورة فاخرة ثقيلة ٢٥٠ و ٥٠٠ مل'],
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
        },
        {
          id: 'coastal-culinary-blend',
          name: 'ذهب الشابة – المزيج الساحلي التراثي',
          category: 'specialty',
          categoryLabel: 'مزيج تراثي متوازن',
          tagline: 'توليفة متناغمة تجمع بين زيتون الشملالي الساحلي وزيتون الساحلي الحلو.',
          description: 'مزيج احترافي مدروس لعشاق الطهي الراقي. يجمع بين أصالة ونكهة الشملالي الخفيفة وحلاوة ثمار الزيتون الساحلي، ليعكس دفء شمس الشابة ونسيم بحرها اللطيف.',
          differenceHighlight: 'مزيج صنفين محليين. مصمم بدقة لتحقيق توازن مثالي بين النكهة الفاكهية والحدّة الخفيفة.',
          flavorNotes: ['أزهار الزيتون المشمسة', 'لوز أخضر غض', 'لمسة ملوحة بحرية خفيفة', 'نهاية حريرية نقية'],
          bestPairings: 'سمك القاروص المشوي، سلطات الحمضيات، خبز الفوكاشيا الحرفي، وأطباق الأرز الإيطالي.',
          acidity: 'حموضة < ٠.٢٠٪',
          harvestWindow: 'نوفمبر – جانفي',
          formats: ['قارورة دوريكا ٥٠٠ مل', 'صفيحة ١ لتر', 'صفيحة عائلية ٥ لتر'],
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
        },
      ],
      tastingGuideTag: 'دليل الاختيار',
      tastingGuideTitle: 'كيف تختار الزيت الأنسب لمائدتك ومطبخك؟',
      tastingGuideSubtitle: 'إرشادات عملية بسيطة لتنسيق نوع الزيت مع أطباقك أو متطلبات زبائنك.',
      tastingTips: [
        {
          title: 'للرش النيء والسلطات والمقبلات',
          desc: 'اختر بيو الشابة العضوي أو العصرة الأولى المبكرة، حيث تضفي النكهات العشبية والحدّة الفلفلية حيوية استثنائية على السلطات والجبن والمقبلات.',
        },
        {
          title: 'للطهي اليومي والتتبيل',
          desc: 'اختر احتياط الشابة التقليدي، فقوامه الناعم ونكهة اللوز الحلوة وانخفاض حموضته يحافظ على توازن المكونات عند تعرضه للحرارة.',
        },
        {
          title: 'للعلامات الخاصة والمطاعم الفاخرة',
          desc: 'نوفر إمكانية تعبئة كل من الصنفين العضوي والتقليدي تحت علامتكم الخاصة وبالحجم المناسب لزبائنكم وميزانيتكم.',
        },
      ],
      ctaTitle: 'هل ترغب في تذوق الفرق بنفسك؟',
      ctaDesc: 'نرسل عينات تذوق طازجة مباشرة إلى المطابخ ومشتري الأغذية والعلامات التجارية حول العالم.',
      ctaButton: 'طلب عينة تذوق',
      ctaSampleButton: 'تحدث مع فريق المعصرة',
    },
    blogPage: {
      heroBadge: 'مجلة ومجتمع أوليف الشابة',
      heroTitlePart1: 'قصص، آراء العملاء،',
      heroTitleHighlight: 'وآخر أخبار المعصرة',
      heroTitlePart2: '',
      heroSubtitle: 'من تجارب الطهاة وآراء العملاء حول العالم إلى جديد موسم الجني وأحدث الجوائز، اكتشفوا كل ما يدور في عالم أوليف الشابة.',
      searchPlaceholder: 'ابحث في المقالات، آراء العملاء، الأخبار، والجوائز...',
      tabAll: 'كافة المستجدات والقصص',
      tabNews: 'أخبار المعصرة والمواسم',
      tabReviews: 'آراء وتجارب العملاء',
      tabArticles: 'المقالات والأدلة الإرشادية',
      filterAll: 'كافة المقالات (٥)',
      filterHealth: 'الصحة والبوليفينول',
      filterTerroir: 'الأرض والمناخ الساحلي',
      filterKitchen: 'فنون الطهي والمطبخ',
      filterHarvest: 'يوميات موسم الجني',
      reviewsHeading: 'ماذا يقول عشاق الزيت عن أوليف الشابة؟',
      reviewsSubheading: 'طهاة، خبراء تغذية، وموزعون من باريس إلى طوكيو يشاركون انطباعاتهم الصادقة حول ذهبنا السائل.',
      shareExperienceBtn: 'شاركنا تجربتك مع الزيت',
      newsHeading: 'آخر الأخبار ومستجدات المعصرة',
      newsSubheading: 'تحديثات موسم الجني، جوائز الجودة الدولية، وأحدث نشاطات بساتيننا في الشابة.',
      articlesHeading: 'مقالات المجلة وأسرار المطبخ',
      articlesSubheading: 'قراءات معمقة في ثقافة زيت الزيتون التونسي، الفوائد الصحية، وعالم الطهي المتوسطي.',
      whatPeopleLoveLabel: 'أكثر ما يعجبني في أوليف الشابة:',
      oilChosenLabel: 'الزيت المفضل:',
      verifiedClientLabel: 'شريك / عميل موثوق',
      submitReviewTitle: 'شاركنا ما تحبه في زيت أوليف الشابة',
      submitReviewSubtitle: 'سواء كنت تستخدم زيتنا في مطعمك، في وجبات عائلتك، أو كعادة صحية صباحية، يسعدنا أن نسمع قصتك وانطباعك.',
      formName: 'الاسم الكامل',
      formRole: 'المهنة أو الصفة (مثال: شيف تنفيذي، هاوي طهي، أخصائي تغذية)',
      formLocation: 'المدينة والدولة',
      formOil: 'ما هو صنف الزيت الذي تستخدمه؟',
      formRating: 'تقييمك',
      formReview: 'انطباعك وتجربتك بالتفصيل',
      formWhatTheyLove: 'أكثر ميزة تعجبك في أوليف الشابة',
      formSubmitBtn: 'نشر رأيك في مجتمعنا',
      formCancelBtn: 'إلغاء',
      formSuccess: 'شكراً لمشاركتنا تجربتك الجميلة! أُضيف رأيك بنجاح إلى جدار مجتمع أوليف الشابة.',
      featuredTag: 'المقال المميز',
      readArticle: 'قراءة القصة كاملة',
      readTimeLabel: 'دقائق قراءة',
      closeArticle: 'إغلاق المقال',
      keyTakeawaysLabel: 'خلاصة المقال',
      relatedArticlesTitle: 'مقالات أخرى من المجلة',
      newsletterTag: 'ابقوا على تواصل مع معصرتنا',
      newsletterTitle: 'استقبلوا رسائل موسم الجني الطازجة',
      newsletterDesc: 'دون رسائل دعائية مزعجة. مجرد رسائل حقيقية من بساتيننا في الشابة، وإعلانات الزيت البكر الطازج، وإلهامات طهي موسمية أربع مرات سنوياً.',
      newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
      newsletterButton: 'الاشتراك في رسائل البستان',
      newsletterSuccess: 'شكراً لانضمامكم إلى مجتمع بساتيننا. نتطلع لمشاركتكم نفحات موسم الجني القادم.',
      ctaTitle: 'تذوقوا سحر زيت الزيتون التونسي الأصيل',
      ctaDesc: 'هل ترغبون في إثراء مائدتكم أو مطبخ مطعمكم بذهب الشابة السائل؟ استكشفوا منتجاتنا أو اطلبوا عينة تذوق طازجة.',
      ctaButton: 'استكشف منتجاتنا',
      ctaSampleButton: 'طلب عينة تذوق',
      reviews: [
        {
          id: 'review-karim',
          name: 'الشيف كريم بن سالم',
          role: 'رئيس الطهاة، مطعم ورشة المتوسط',
          location: 'باريس، فرنسا',
          date: '٢٠ أكتوبر ٢٠٢٦',
          rating: 5,
          oilChosen: 'بيو الشابة – بكر ممتاز عضوي',
          quote: 'كان من الصعب جداً العثور على زيت بكر ممتاز بنسبة بوليفينول عالية حقيقية دون أن يطغى على سمك الكرودو الحساس، حتى جربت بيو الشابة. رائحة العشب الطازج تعبق في صالة المطعم بمجرد تقديم الطبق دافئاً.',
          whatTheyLove: 'التوازن المذهل بين الحدّة الفلفلية الحيوية وحلاوة نكهة الخرشوف الأخضر. زبائننا يطلبون شراء القوارير باستمرار للمنزل.',
          verifiedPurchase: true
        },
        {
          id: 'review-sophie',
          name: 'صوفي لوران',
          role: 'مؤسسة متجر المنتجات العضوية الفاخرة',
          location: 'ليون، فرنسا',
          date: '١٥ أكتوبر ٢٠٢٦',
          rating: 5,
          oilChosen: 'بيو واحتياط الشابة صفائح ٥ لتر',
          quote: 'التعامل المباشر مع مازن وإيهاب يمنحك ثقة مطلقة. الشحن يتم مباشرة من معصرة الشابة خلال أيام قليلة من التعبئة. زبائن متجرنا في ليون يكررون طلباتهم شهرياً دون تردد.',
          whatTheyLove: 'الصدق والشفافية التامة؛ تعرف الشهر الدقيق للجني، وشهادة التحليل المخبري لنسبة الحموضة مرفقة مع كل شحنة.',
          verifiedPurchase: true
        },
        {
          id: 'review-marco',
          name: 'د. ماركو روسي',
          role: 'طبيب قلب وأخصائي تغذية علاجية',
          location: 'ميلانو، إيطاليا',
          date: '٢٩ سبتمبر ٢٠٢٦',
          rating: 5,
          oilChosen: 'عصرة أولى – جني مبكر من الشابة',
          quote: 'أنصح مرضاي بملعقة صباحية من زيت الزيتون الصافي عالي البوليفينول لصحة القلب والأوعية الدموية. العصرة الأولى المبكرة من الشابة تتميز بحدّة واضحة في الحلق تثبت غناها الاستثنائي بمضادات الأكسدة.',
          whatTheyLove: 'النقاء المخبري الموثق (أكثر من ٤٨٠ مغ/كغ بوليفينول). إنه دواء طبيعي حي في قارورة داكنة أنيقة.',
          verifiedPurchase: true
        },
        {
          id: 'review-elena',
          name: 'إيلينا تاناكا',
          role: 'مستوردة أغذية حرفية متخصصة',
          location: 'طوكيو، اليابان',
          date: '١٨ سبتمبر ٢٠٢٦',
          rating: 5,
          oilChosen: 'ذهب الشابة – المزيج الساحلي التراثي',
          quote: 'لزيت الزيتون التونسي قصة ساحرة يعشقها الطهاة اليابانيون عند تذوقه. نسيم البحر المتوسط يمنح ذهب الشابة قواماً حريرياً ناعماً يتناغم بسلاسة مع الساشيمي والخضار المطهوة بالبخار.',
          whatTheyLove: 'نكهة اللوز الحلوة الناعمة الخالية من أي مرارة خشنة، وفخامة تصميم القارورة الداكنة.',
          verifiedPurchase: true
        },
        {
          id: 'review-samir',
          name: 'سمير ونادية الطرابلسي',
          role: 'حرفيو مخبوزات القمح والخميرة الطبيعية',
          location: 'مونتريال، كندا',
          date: '٣٠ أغسطس ٢٠٢٦',
          rating: 5,
          oilChosen: 'احتياط الشابة التقليدي (صفيحة ٥ لتر)',
          quote: 'نشأنا في تونس، وكان تذوق زيت الشابة الساحلي الأصيل في أمريكا الشمالية يتطلب انتظار زيارة الأقارب. استلام صفائح الـ ٥ لتر مباشرة إلى بيتنا في مونتريال أعاد روح الوطن لمخبوزاتنا الأسبوعية.',
          whatTheyLove: 'اللون الذهبي الغني الذي يذكرنا بالوطن، وحجم الصفيحة المناسب جداً لاستهلاك العائلة اليومي.',
          verifiedPurchase: true
        }
      ],
      news: [
        {
          id: 'news-harvest-2026',
          title: 'انطلاق موسم الجني الخريفي ٢٠٢٦ رسمياً في بساتين الشابة الساحلية',
          category: 'harvest',
          categoryLabel: 'مستجدات الجني',
          date: '٢٤ أكتوبر ٢٠٢٦',
          summary: 'أكمل فريقنا الأسبوع الأول من الجني اليدوي اللطيف في بساتين الشملالي الساحلية. الاختبارات المخبرية الأولية تظهر حموضة قياسية منخفضة جداً (٠.١٦٪) ولوناً زمردياً بديعاً.',
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'تحت سماء أكتوبر المشرقة ونسيم البحر الأبيض المتوسط العليل، بدأ رسمياً موسم جني الزيتون لعام ٢٠٢٦ في بساتيننا الساحلية بمدينة الشابة.',
            'أظهرت أولى تجارب العصر على البارد نتائج مذهلة لسلامة الثمار: بلغت نسبة الحموضة ٠.١٦٪ فقط، مع مؤشرات بوليفينول تتجاوز ٤٩٠ مغ/كغ. ستبدأ أولى شحنات الزيت الطازج بالانطلاق نحو شركائنا الأسبوع المقبل.'
          ]
        },
        {
          id: 'news-london-gold',
          title: 'أوليف الشابة تحصد الميدالية الذهبية للجودة في مسابقة لندن الدولية لزيت الزيتون',
          category: 'award',
          categoryLabel: 'اعتراف دولي',
          date: '٢٠ سبتمبر ٢٠٢٦',
          summary: 'تُوّج صنف بيو الشابة العضوي بالميدالية الذهبية لفئة الزيوت الغنية بالبوليفينول، محققاً ٩٦ نقطة من أصل ١٠٠ لنقائه الفائق وتوازنه الحسي.',
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'شارك في مسابقة لندن الدولية لهذا العام أكثر من ٦٠٠ صنف من ٩ دول متوسطية ورائدة في إنتاج زيت الزيتون.',
            'نال زيت أوليف الشابة إشادة خاصة من لجنة التحكيم بفضل أثر المناخ الساحلي الواضح: عبير أوراق الطماطم الخضراء، ولمسة الفلفل المتوازنة، والكثافة المثبتة للبوليفينول.'
          ]
        },
        {
          id: 'news-ecocert-renewal',
          title: 'تجديد شهادة الزراعة العضوية الدولية إيكوسيرت لموسم ٢٠٢٦ / ٢٠٢٧ بنجاح',
          category: 'certification',
          categoryLabel: 'الجودة والمعايير',
          date: '١٤ أغسطس ٢٠٢٦',
          summary: 'بعد فحص دوري شامل لتربة البساتين الساحلية وتحاليل مخبرية دقيقة، جددت هيئة إيكوسيرت اعتمادها العضوي لبساتيننا مع خلو تام من أي رواسب كيميائية.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'أكد التدقيق السنوي التزامنا التام بمبادئ الزراعة العضوية التجديدية دون أي أسمدة صناعية أو مبيدات.',
            'كل قطرة من زيت بيو الشابة موثقة المصدر من أرقام القطع الأرضية المسجلة حتى وصول القارورة إلى مائدتكم.'
          ]
        },
        {
          id: 'news-seaside-tasting',
          title: 'افتتاح فضاء التذوق واستقبال الزوار على طريق الزياتين بالشابة',
          category: 'event',
          categoryLabel: 'أخبار المعصرة',
          date: '١٠ يوليو ٢٠٢٦',
          summary: 'يمكن لشركائنا ولعشاق زيت الزيتون وزوار ولاية المهدية الآن حجز جولات صباحية بين أشجار البساتين العتيقة وتذوق الزيت الطازج مباشرة من المعصرة.',
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
          content: [
            'يسعدنا فتح أبواب معصرتنا العائلية على طريق الزياتين لاستقبال الأصدقاء والشركاء ومحبي المطبخ المتوسطي.',
            'تتضمن الزيارة جولة بين أشجار الشملالي الساحلية، والتعرف على تقنيات العصر الحديثة على البارد، وجلسة تذوق إرشادية لاكتشاف الفروق الحسية بين مختلف العصرات.'
          ]
        }
      ],
      articles: [
        {
          id: 'coastal-chebba-polyphenols',
          slug: 'coastal-chebba-polyphenols',
          title: 'لماذا تنتج بساتين الشابة الساحلية زيوتاً من بين الأعلى عالمياً في مضادات الأكسدة؟',
          subtitle: 'التناغم الفريد بين رذاذ البحر الأبيض المتوسط، والتربة الكلسية الغنية، وأشجار الشملالي العريقة.',
          category: 'terroir',
          categoryLabel: 'الأرض والمناخ الساحلي',
          author: 'إيهاب لافي',
          authorRole: 'مسؤول العمليات والإنتاج',
          publishDate: '١٨ أكتوبر ٢٠٢٦',
          readTime: '٥ دقائق',
          featured: true,
          excerpt: 'لطالما تساءل خبراء التذوق الدوليون عن سر الكثافة الاستثنائية لمضادات الأكسدة في زيت زيتون الشابة. في بساتيننا الساحلية الواقعة على بعد ٨٠٠ متر فقط من البحر، يحفز نسيم البحر وشمس تونس الساطعة أشجار الزيتون على بناء دفاعات نباتية مذهلة.',
          image: 'https://images.unsplash.com/photo-1565459374854-6fa73a99abf5?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'المناخ الساحلي ورذاذ البحر المالح يدفع أشجار الشملالي لتركيز البوليفينول (أكثر من ٤٥٠ مغ/كغ)، مما يمنح الزيت ثباتاً نادراً وفوائد صحية خارقة.',
          paragraphs: [
            'ثمة سر ساحر يكمن في نقطة التقاء بساتين زيتون الشابة بمياه البحر الأبيض المتوسط. بينما تنتج البساتين الداخلية وفرة من الثمار، تواجه أشجارنا الساحلية رياحاً بحرية محملة باليود وتربة كلسية جافة تحت شمس ساطعة.',
            'في علم النبات، الضغط البيئي المعتدل هو محفز الجودة الفائقة. ففي غياب الأسمدة الكيميائية، تعتمد أشجار الشملالي على جذورها الضاربة عميقاً في الأرض لعقود، وتفرز لحماية نفسها من الأكسدة تركيزات قياسية من مركبات البوليفينول الثمينة مثل الأوليوكانثال والهيدروكسيتيروسول.',
            'عندما نجني هذه الحبات يدوياً في نسيم الصباح الباكر ونعصرها في أقل من ٤ ساعات عند درجات حرارة أقل من ٢٧ مئوية، تبقى هذه الخصائص الحيوية محبوسة في قطرات الزيت النقية بنسب تتجاوز ٤٥٠ إلى ٥٢٠ مغ/كغ.',
            'إن تذوق هذا الزيت يكشف على الفور روح الأرض: تلك الحرقة الخفيفة المميزة في الحلق، والرائحة العشبية المنعشة، والقوام النقي ليست عيوباً، بل هي توقيع مضادات الأكسدة الحية التي صاغها نسيم البحر.'
          ],
          pullQuote: {
            text: 'أصالة الأرض ليست فكرة شاعرية عابرة؛ في الشابة، يمكنك قياسها بدقة في التحاليل المخبرية وتذوقها حية في الحلق.',
            attribution: 'إيهاب لافي، المشرف على المعصرة'
          },
          practicalTip: {
            label: 'اختبار حرقة الحلق',
            advice: 'عند تذوق الزيت البكر الصافي، ابتلع ملعقة صغيرة بسرعة. السعلة الخفيفة أو اللمسة الفلفلية في الحلق تؤكد احتواء الزيت على الأوليوكانثال الطبيعي المقاوم للالتهابات.'
          },
          tags: ['أرض الشابة', 'البوليفينول', 'زيتون الشملالي', 'مضادات الأكسدة']
        },
        {
          id: 'mediterranean-morning-spoonful',
          slug: 'mediterranean-morning-spoonful',
          title: 'ملعقة الصباح المتوسطية: السر العلمي وراء قطرات الذهب اليومية',
          subtitle: 'كيف تدعم ملعقة واحدة من زيت الزيتون البكر الممتاز على الريق صحة الجهاز الهضمي والقلب والنشاط الدائم.',
          category: 'health',
          categoryLabel: 'الصحة والبوليفينول',
          author: 'مازن',
          authorRole: 'المؤسس والمدير العام',
          publishDate: '١٢ أكتوبر ٢٠٢٦',
          readTime: '٤ دقائق',
          featured: false,
          excerpt: 'من مزارعي قرطاج القدماء إلى أطباء القلب المعاصرين، تبقى عادة تناول ملعقة من زيت الزيتون البكر الممتاز على الريق صباحاً من أبسط العادات الصحية وأكثرها إثباتاً علمياً في العالم.',
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'تناول الزيت البكر الغني بالبوليفينول صباحاً يغلف جدار المعدة، وينشط إفراز العصارة الهضمية، ويمد الجسم بأحماض دهنية أحادية نقية تمنح طاقة ذهنية مستقرة.',
          paragraphs: [
            'لم يكن جدي يبدأ صباحه أبداً بالقهوة وحدها. قبل شروق الشمس فوق أشجار الشابة، كان يسكب فنجاناً فخارياً صغيراً من زيت الزيتون الطازج المعصور في نفس الأسبوع، يدفئه بين راحتيه، ثم يرتشفه بابتسامة وقورة.',
            'أثبتت الأبحاث الغذائية الحديثة ما كان يعرفه أجدادنا بالفطرة. زيت الزيتون البكر الممتاز يتكون بشكل أساسي من حمض الأوليك، وهو دهن صحي غير مشبع يخفض الكوليسترول الضار، ويلطف الغشاء المخاطي للمعدة، ويساعد على امتصاص الفيتامينات الأساسية.',
            'بالإضافة إلى ذلك، فإن تناوله على معدة فارغة يتيح للمركبات الفينولية الدقيقة التفاعل المباشر مع جدران الأوعية الدموية والميكروبيوم المعوي، مما يطلق استجابات طبيعية مضادة للأكسدة في سائر أنحاء الجسم.',
            'لبدء هذه العادة البسيطة، جرب ملعقة صغيرة يومياً من بيو الشابة أو العصرة الأولى. دعه يلامس لسانك لثوانٍ، واستنشق عبير العشب الطازج، ثم ابتلعه. في غضون أسبوعين ستشعر بخفة في الهضم ونقاء في البشرة ونشاط ذهني متزن.'
          ],
          pullQuote: {
            text: 'ملعقة زيت الزيتون عند الفجر ليست مجرد دواء؛ بل هي غذاء حي بأصدق صورة متوسطية عرفها التاريخ.',
            attribution: 'مازن، المؤسس'
          },
          practicalTip: {
            label: 'كيف تبدأ عادتك الصباحية',
            advice: 'تناول ملعقة طعام قبل الإفطار بربع ساعة. إذا بدت لك نكهة الزيت الفلفلية قوية في البداية، أضف إليها قطرات من الليمون الطازج أو اغمس بها قطعة خبز قمح دافئة.'
          },
          tags: ['طول العمر', 'صحة القلب', 'طقوس الصباح', 'صحة الهضم']
        },
        {
          id: 'demystifying-acidity-chef-standard',
          slug: 'demystifying-acidity-chef-standard',
          title: 'حقيقة نسبة الحموضة: لماذا تعد “أقل من ٠.٢٪” المعيار الذهبي لأمهر الطهاة؟',
          subtitle: 'تسمح المعايير التجارية العالمية بحموضة تصل إلى ٠.٨٪، لكن معاصرنا تسعى لأقل من ذلك بكثير. إليكم سبب أهمية ذلك للمذاق والطهي.',
          category: 'kitchen',
          categoryLabel: 'فنون الطهي والمطبخ',
          author: 'إسلام',
          authorRole: 'أخصائية الجودة والتصدير',
          publishDate: '٥ أكتوبر ٢٠٢٦',
          readTime: '٤ دقائق',
          featured: false,
          excerpt: 'في المتاجر الكبرى ترى عبارة “بكر ممتاز” على عشرات القوارير. لكن نسبة الحموضة الحرة هي التي تفضح القصة الحقيقية: هل عُصر الزيتون طازجاً في نفس الصباح أم تُرك أياماً ليتخمر؟',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'حموضة أقل من ٠.٢٪ تعني زيتوناً سليماً قُطف باليد وعُصر فوراً دون أي تخمر، كما تمنح الزيت نقطة تدخين أعلى بكثير وثباتاً ممتازاً عند التسخين.',
          paragraphs: [
            'هناك خلط شائع بين حموضة زيت الزيتون وحموضة الليمون أو الخل. حموضة الزيت ليست طعماً حامضاً، بل هي قياس كيميائي دقيق للأحماض الدهنية الحرة الناتجة عن تكسر جدران حبات الزيتون.',
            'عندما تسقط الحبات على الأرض أو تُحفظ في أكياس بلاستيكية دافئة لأيام، تبدأ الإنزيمات بتحليل الدهون وإطلاق الأحماض الحرة. ويسمح القانون الدولي ببيع الزيت كـ “بكر ممتاز” حتى نسبة ٠.٨٪.',
            'في أوليف الشابة، نلتزم بمعيار أكثر صرامة بأربع مرات: أقل من ٠.٢٠٪. نحقق ذلك بفضل الجني اليدوي اللطيف، ونقل الزيتون في صناديق مهواة، وعصره في أقل من ٤ ساعات من الجني.',
            'بالنسبة للطهاة المحترفين، انخفاض الحموضة يمنح الزيت قواماً حريرياً خفيفاً لا يطغى على نكهة الأسماك أو الأطباق الراقية. كما يرفع نقطة احتراق الزيت إلى أكثر من ٢٠٥ درجات مئوية، مما يدحض تماماً خرافة عدم صلاحية زيت الزيتون للطهي الخفيف.'
          ],
          pullQuote: {
            text: 'الحموضة لا تقيس المذاق الحامض؛ بل تقيس الاحترام المتبادل بين المزارع وشجرة الزيتون وسرعة وصول الثمرة إلى المعصرة.',
            attribution: 'إسلام، مسؤولة الجودة'
          },
          practicalTip: {
            label: 'حقيقة القلي بزيت الزيتون',
            advice: 'الزيت البكر الممتاز ذو الحموضة المنخفضة (< ٠.٢٪) يتحمل حرارة الطهي الخفيف والتحمير بأمان تام دون أن يتأكسد. فالزيوت التي تحترق بسرعة هي الزيوت الرديئة مرتفعة الحموضة.'
          },
          tags: ['نسبة الحموضة', 'أسرار الطهاة', 'نقطة التدخين', 'معايير الجودة']
        },
        {
          id: 'dawn-in-the-groves-harvest-story',
          slug: 'dawn-in-the-groves-harvest-story',
          title: 'فجر البساتين: يوم نموذجي في موسم جني الزيتون في الشابة',
          subtitle: 'إيقاع الصباح الخريفي: مشاطات يدوية ناعمة، نسيم البحر المالح، وسباق هادئ مع شمس الظهيرة نحو المعصرة.',
          category: 'harvest',
          categoryLabel: 'يوميات موسم الجني',
          author: 'إيهاب لافي',
          authorRole: 'مسؤول العمليات والإنتاج',
          publishDate: '٢٨ سبتمبر ٢٠٢٦',
          readTime: '٦ دقائق',
          featured: false,
          excerpt: 'مع حلول السادسة صباحاً، تدب الحياة في بساتيننا مع هبات النسيم الخريفي المنعش، وبسط شباك الجني النظيفة على التربة الحمراء، وتساقط حبات الزيتون كحبات المطر الأخضر تحت الضوء الأول.',
          image: 'https://images.unsplash.com/photo-1753703986291-6f95a7f299ba?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'الجني التقليدي العائلي يتفادى هزازات الجرارات الميكانيكية العنيفة، مما يحمي أغصان الشجرة للمواسم القادمة ويضمن وصول الثمار سليمة وندية إلى المعصرة.',
          paragraphs: [
            'لا يوجد منبه أجمل من هواء الصباح الباكر في الشابة. مع أولى خيوط الفجر الوردية فوق مياه البحر المتوسط، يتجمع فريق الجني تحت ظلال الأشجار العتيقة مزودين بالشباك القماشية والمشاطات اليدوية.',
            'في الزراعة الصناعية، تُستخدم جرارات ضخمة تهز جذوع الأشجار بعنف، مما قد يجرح اللحاء ويجهد الجذور. في بساتيننا العائلية، نجني بأيدينا وبمشاطات يدوية خفيفة، ونفرش الشباك بعناية حتى لا تلامس حبة زيتون واحدة التراب أو الحجارة.',
            'أجواء الحقل مفعمة بالحكايات والأهازيج التونسية المتوارثة. يعمل الشباب إلى جانب الشيوخ الذين يعرفون طباع كل شجرة: أي فرع يستقبل نسيم البحر أولاً، وأي رقعة تنضج مبكراً، وأي غصن يحمل أصفى قطف.',
            'بحلول العاشرة والنصف صباحاً، تكون مقطورة الصناديق المهواة جاهزة للانطلاق نحو المعصرة على طريق الزياتين. في غضون ٤ ساعات، يتحول ما كان يداعب نسيم البحر إلى شلال من الذهب الزمردي الصافي المتدفق من فوهة المعصرة.'
          ],
          pullQuote: {
            text: 'موسم الجني هو اللحظة التي يتبلور فيها صبر عام كامل. وعندما يتدفق أول خيط من الزيت الأخضر الطازج، يتلاشى تعب الشهور في رمشة عين.',
            attribution: 'إيهاب لافي'
          },
          practicalTip: {
            label: 'حفظ نضارة الزيت في المنزل',
            advice: 'احفظ قوارير الزيت في خزانة مظلمة بحرارة معتدلة (بين ١٤ و ١٨ درجة). وأحكم إغلاق السدادة دائماً بعد كل استخدام لمنع أكسجين الهواء من تبديد الروائح العشبية الفواحة.'
          },
          tags: ['موسم ٢٠٢٦', 'معصرة عائلية', 'عصر على البارد', 'تراث الشابة']
        },
        {
          id: 'chef-guide-olive-oil-pairing',
          slug: 'chef-guide-olive-oil-pairing',
          title: 'دليل الطهاة لتنسيق الزيوت: متى تختار الزيت القوي ومتى تختار الزيت الحريري؟',
          subtitle: 'كيف تتعامل مع زيت الزيتون كعنصر فندقي راقٍ: مطابقة الزيت العضوي القوي مع اللحوم والشوربات، والزيت الناعم مع الأسماك والحلويات.',
          category: 'kitchen',
          categoryLabel: 'فنون الطهي والمطبخ',
          author: 'مازن',
          authorRole: 'المؤسس والمدير العام',
          publishDate: '١٥ سبتمبر ٢٠٢٦',
          readTime: '٤ دقائق',
          featured: false,
          excerpt: 'كما لا يمكن سكب صلصة ثقيلة فوق سمك خفيف، فإن لكل صنف من زيت الزيتون وزناً ونكهة خاصة. إليكم دليلنا المبسط لتحويل وجباتكم اليومية إلى تجارب طهي متوسطية فاخرة.',
          image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?q=80&w=1200&h=800&auto=format&fit=crop',
          keyTakeaway: 'وازِن بين قوة النكهات: الزيوت العشبية الفلفلية الحادة ترتقي بالأطباق الدسمة (لحوم مشوية، جبن البوراتا، حساء البقوليات)، بينما الزيوت الهادئة بنكهة اللوز تبرز نعومة الأسماك والباستا.',
          paragraphs: [
            'في كثير من المطابخ، يُعامل زيت الزيتون كمجرد مادة دهنية لمنع التصاق الطعام بالمقلاة. لكن في ثقافة الطهي المتوسطي الحقيقية، زيت الزيتون البكر الممتاز هو البهار النهائي الذي يمنح الطبق روحه وهويته.',
            'فكر في زيت الزيتون كعصير ثمار طبيعي. عندما يكون الزيت حيوياً وقوياً (مثل بيو الشابة العضوي أو العصرة الأولى)، فإنه يحمل مركبات عطرية تذكر بالجرجير البري وأوراق الطماطم والفلفل الأخضر. اسكب خيطاً منه فوق جبن البوراتا، أو طبق لبلابي تونسي دافئ، أو شريحة لحم مشوية، وستلاحظ كيف تخترق حدته حلاوة الدهون لتعيد التوازن للفم.',
            'في المقابل، عند تحضير سمك القاروص الرقيق، أو سلق الهليون الأخضر، أو خبز كعكة ليمون بزيت الزيتون، فإن الزيت القوي قد يطغى على المكونات. هنا يتألق زيت احتياط الشابة التقليدي: ناعم، بقوام حريري ونكهة لوز حلوة تداعب الحواس.',
            'سر الاحتراف في المطبخ هو الاحتفاظ بقارورتين بجوارك: قارورة حريرية متوازنة للطهي اليومي واللمسات الهادئة، وقارورة عشبية نقية وقوية مخصصة حصرياً لرشات التقديم الأخيرة.'
          ],
          pullQuote: {
            text: 'أفضل زيت زيتون في العالم لن ينقذ طبقاً إذا تعارضت حدته مع طبيعة المكونات. التوازن هو كل شيء.',
            attribution: 'ملاحظات الطهاة الشركاء'
          },
          practicalTip: {
            label: 'سر الرشة النهائية',
            advice: 'لا تسكب زيت الزيتون الفاخر فوق الطعام وهو يغلي على النار. اسكبه لحظة وضع الطبق على المائدة؛ فالحرارة المعتدلة ستطلق المركبات العطرية الفواحة مباشرة نحو حواسك.'
          },
          tags: ['دليل التنسيق', 'أسرار الطهي', 'جبن البوراتا', 'رشة التقديم']
        }
      ]
    },
    contactPage: {
      heroBadge: 'تواصل مباشر',
      heroTitlePart1: 'لنتحدث عن',
      heroTitleHighlight: 'أصالة زيت الزيتون',
      heroTitlePart2: 'لمائدتك ومتجرك.',
      heroSubtitle: 'سواء كنت تبحث عن زيت زيتون بكر ممتاز فاخر لمطعمك، أو توريد بالجملة لعلامتك التجارية، أو ترغب في طلب عينات للتذوق من آخر عصرات الموسم، فريقنا في الشابة وميونخ في خدمتكم.',
      locationsHeading: 'مقراتنا ومواقعنا',
      locationsSubheading: 'من بساتين الساحل التونسي العريقة إلى مركز التوزيع الأوروبي.',
      locations: [
        {
          id: 'tunisia-mill',
          city: 'الشابة',
          country: 'تونس',
          tagline: 'البساتين والمعصرة والتعبئة',
          address: '5170 سيتي دي لا بلاج (حي الشاطئ)، الشابة، المهدية، تونس',
          role: 'إشراف مباشر على الجني، العصر على البارد، والتعبئة في قلب البساتين.',
          hours: 'الاثنين – الجمعة: 08:00 – 17:00 (توقيت تونس)'
        },
        {
          id: 'germany-office',
          city: 'ميونخ',
          country: 'ألمانيا',
          tagline: 'التوزيع الأوروبي وخدمة العملاء',
          address: 'ميونخ، بافاريا، ألمانيا',
          role: 'الخدمات اللوجستية الأوروبية، إرسال العينات السريع، وشراكات الأعمال الدولية.',
          hours: 'الاثنين – الجمعة: 09:00 – 18:00 (توقيت وسط أوروبا)'
        }
      ],
      directChannelsHeading: 'قنوات التواصل المباشرة',
      directChannelsSubheading: 'تواصل معنا مباشرة عبر الهاتف، الواتساب، البريد الإلكتروني، أو الفيسبوك.',
      emailLabel: 'البريد الإلكتروني',
      emailValue: 'mazenslama79@gmail.com',
      phoneLabel: 'الهاتف المباشر',
      phoneValue: '+4915511269418',
      whatsappLabel: 'محادثة واتساب',
      whatsappValue: '+4915511269418',
      whatsappUrl: 'https://wa.me/4915511269418',
      facebookLabel: 'حساب فيسبوك',
      facebookUrl: 'https://www.facebook.com/mazen.slama.583',
      formHeading: 'أرسل استفسارك',
      formSubheading: 'املأ الاستمارة وسيتواصل معك فريقنا خلال 24 ساعة عمل.',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف (اختياري)',
      formSubject: 'الموضوع',
      formInquiryType: 'نوع الاستفسار',
      inquiryTypes: {
        wholesale: 'طلبات الجملة والتوريد B2B',
        sample: 'طلب عينات للتذوق',
        export: 'التصدير الدولي واللوجستيات',
        general: 'استفسار عام / تعاون'
      },
      formMessage: 'الرسالة والتفاصيل',
      formSubmitBtn: 'إرسال الرسالة',
      formSendingBtn: 'جاري الإرسال...',
      formSuccessTitle: 'تم استلام رسالتك بنجاح',
      formSuccessDesc: 'شكراً لتواصلك مع أوليف الشابة. سيقوم فريقنا بمراجعة استفسارك والرد عليك في أقرب وقت.',
      sendAnotherBtn: 'إرسال استفسار آخر',
      directCallBadge: 'اتصال أو واتساب',
      copyEmailSuccess: 'تم نسخ البريد الإلكتروني بنجاح!',
      officeHoursLabel: 'أوقات العمل',
      officeHoursValue: 'الاثنين – الجمعة، من 08:00 حتى 18:00 (توقيت وسط أوروبا)',
      responseTimeNote: 'نلتزم بالرد على جميع الرسائل والاستفسارات خلال 24 ساعة.',
      founderHeading: 'تواصل مباشر مع الإدارة',
      founderBadge: 'القيادة والاستفسارات المباشرة',
      founderRole: 'المؤسس والمدير الإداري',
      founderName: 'مازن سلامة (Mazen Slama)',
      founderQuote: 'كل قطرة من زيت أوليف الشابة تنبع من بساتين متوارثة على ساحل الشابة. يسعدني الإجابة مباشرة عن أي استفسار يتعلق بموسم العصر، شحنات التصدير إلى أوروبا، أو طلبات العينات للمطاعم والمتاجر.',
      mapsHeading: 'الموقع الجغرافي للمعصرة ومراكز التوزيع',
      mapsSubheading: 'اكتشف مواقعنا الحقيقية: معصرتنا العائلية على شاطئ الشابة ومكتب التوزيع الأوروبي في ميونخ.',
      getDirections: 'الاتجاهات وخط السير',
      viewOnGoogleMaps: 'فتح في خرائط Google',
      copyCoordinates: 'نسخ إحداثيات GPS',
      coordinatesCopied: 'تم نسخ الإحداثيات!',
      currentLocalTime: 'التوقيت المحلي الحالي',
      visitingPolicy: 'زيارة معصرة الشابة: نرحب بالزيارات وتذوق الزيت بالتنسيق المسبق، خاصة خلال موسم جني وعصر الزيتون (من أكتوبر إلى فيفري).',
      samplePolicy: 'الشحن السريع للعينات في أوروبا: يتم إرسال عبوات العينات التذوقية (100 مل / 250 مل) مباشرة من ميونخ للطهاة والموزعين.'
    },
    titles: {
      home: 'أوليف الشابة | زيت الزيتون التونسي البكر الممتاز',
      about: 'من نحن | أوليف الشابة – أصالة وتراث',
      services: 'خدماتنا | أوليف الشابة – العصر على البارد والتصدير',
      solutions: 'منتجاتنا وحلولنا | أوليف الشابة – زيت زيتون عضوي وتقليدي فاخر',
      blog: 'المجلة | أوليف الشابة – قصص من بساتين الزيتون',
      contact: 'اتصل بنا | أوليف الشابة – تواصل معنا',
      notFound: 'الصفحة غير موجودة | أوليف الشابة',
    },
    metaDescriptions: {
      home: 'أوليف الشابة: رواد في زراعة وتسويق زيت الزيتون التونسي البكر الممتاز، حصاد الذهب السائل تحت شمس البحر الأبيض المتوسط في الشابة، تونس.',
      about: 'تعرف على قصة وتراث أوليف الشابة ورسالتها في ربط نقاء الأرض التونسية بذائقة العالم الرفيعة عبر أجيال متوارثة.',
      services: 'خدمات أوليف الشابة المتكاملة: زراعة مستدامة، عصر فائق الجودة على البارد، تصدير دولي، واستراتيجيات تسويق رقمي زراعي.',
      solutions: 'اكتشف أصناف زيت الزيتون التونسي من أوليف الشابة: بيو الشابة العضوي، احتياط الشابة التقليدي الفاخر، العصرة الأولى المبكرة، والمزيج التراثي الساحلي.',
      blog: 'مجلة أوليف الشابة: مقالات متخصصة في ثقافة الزيتون، التغذية المتوسطية، وأحدث الابتكارات الزراعية.',
      contact: 'تواصل مع فريق أوليف الشابة في مدينة الشابة بالمهدية لطلبات التوريد بالجملة والشراكات الاستراتيجية.',
    },
  },
};
