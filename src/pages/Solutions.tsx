import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Sparkles, 
  Droplets, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Clock, 
  Package, 
  Utensils 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ProductItem } from '../lib/translations';

const LUXURY_EASE = [0.25, 0.1, 0.25, 1.0] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: LUXURY_EASE } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    }
  }
};

type FilterCategory = 'all' | 'organic' | 'conventional' | 'specialty';

export default function Solutions() {
  const { t, isRTL } = useLanguage();
  const sol = t.solutionsPage;
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredProducts = activeCategory === 'all'
    ? sol.products
    : sol.products.filter((p: ProductItem) => p.category === activeCategory);

  return (
    <div className="w-full bg-primary-cream">
      {/* Warm & Realistic Header */}
      <section className="pt-8 pb-14 md:pt-12 md:pb-16 px-6 bg-primary-cream border-b border-primary-tan/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-px bg-primary-brown/50"></span>
              <span className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown">
                {sol.heroBadge}
              </span>
              <span className="w-6 h-px bg-primary-brown/50"></span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-dark leading-tight mb-5 font-semibold"
            >
              {sol.heroTitlePart1}{' '}
              <span className="italic font-normal text-primary-forest">{sol.heroTitleHighlight}</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-base md:text-lg font-body text-primary-gray max-w-2xl mx-auto leading-relaxed"
            >
              {sol.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Difference Clarification Banner (Organic vs Conventional) */}
      <section className="py-10 px-6 bg-white border-b border-primary-tan/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary-cream/50 border border-primary-tan/40 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-primary-forest" />
              <span className="text-xs font-meta uppercase tracking-widest font-bold text-primary-brown">
                {sol.compareBanner.tag}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-primary-dark mb-3">
              {sol.compareBanner.title}
            </h2>
            <p className="text-sm font-body text-primary-gray mb-6 leading-relaxed max-w-3xl">
              {sol.compareBanner.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-primary-tan/30">
              {/* Organic Side */}
              <div className="bg-white p-5 border border-primary-forest/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary-forest/10 text-primary-forest flex items-center justify-center">
                      <Leaf className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-base font-display font-bold text-primary-dark">
                      {sol.compareBanner.organicTitle}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                    {sol.compareBanner.organicDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary-tan/20 flex items-center gap-2 text-[11px] font-meta text-primary-forest font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Certified Organic &middot; Peppery & Antioxidant Rich</span>
                </div>
              </div>

              {/* Conventional Premium Side */}
              <div className="bg-white p-5 border border-primary-tan/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary-oil/20 text-primary-brown flex items-center justify-center">
                      <Droplets className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-base font-display font-bold text-primary-dark">
                      {sol.compareBanner.conventionalTitle}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                    {sol.compareBanner.conventionalDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-primary-tan/20 flex items-center gap-2 text-[11px] font-meta text-primary-brown font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Family Orchards &middot; Smooth Golden Almond & Versatile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-10 pb-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1 bg-white border border-primary-tan/40">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-meta uppercase font-bold tracking-wider transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary-dark text-white'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              {sol.filterAll}
            </button>
            <button
              onClick={() => setActiveCategory('organic')}
              className={`px-4 py-2 text-xs font-meta uppercase font-bold tracking-wider transition-colors ${
                activeCategory === 'organic'
                  ? 'bg-primary-forest text-white'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              {sol.filterOrganic}
            </button>
            <button
              onClick={() => setActiveCategory('conventional')}
              className={`px-4 py-2 text-xs font-meta uppercase font-bold tracking-wider transition-colors ${
                activeCategory === 'conventional'
                  ? 'bg-primary-brown text-white'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              {sol.filterConventional}
            </button>
            <button
              onClick={() => setActiveCategory('specialty')}
              className={`px-4 py-2 text-xs font-meta uppercase font-bold tracking-wider transition-colors ${
                activeCategory === 'specialty'
                  ? 'bg-primary-dark text-white'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              {sol.filterSpecialty}
            </button>
          </div>
        </div>
      </section>

      {/* The 4 Core Products: Distinct, Simple & Creative */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product: ProductItem, index: number) => {
              const isEven = index % 2 === 1;

              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: LUXURY_EASE }}
                  className="bg-white border border-primary-tan/40 shadow-xs overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Photo Panel (Same strict 1200x800 crop sizing as Services interface) */}
                    <div className={`lg:col-span-5 relative overflow-hidden h-72 sm:h-80 md:h-96 lg:h-auto min-h-[280px] lg:min-h-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-black/10 pointer-events-none" />
                      
                      {/* Category Badge & Acidity Tag */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-primary-dark/85 backdrop-blur-sm text-white text-[11px] font-meta uppercase tracking-wider">
                          {product.category === 'organic' ? (
                            <Leaf className="w-3.5 h-3.5 text-primary-oil" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5 text-primary-oil" />
                          )}
                          <span>{product.categoryLabel}</span>
                        </div>
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary-dark text-[11px] font-meta font-bold tracking-wide">
                          {product.acidity}
                        </span>
                      </div>

                      {/* Harvest Timing bottom tag */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white/90 text-[11px] font-body">
                        <Clock className="w-3 h-3 text-primary-oil" />
                        <span>{product.harvestWindow}</span>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className={`lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        {/* Title */}
                        <div className="flex items-baseline justify-between gap-3 mb-2">
                          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark">
                            {product.name}
                          </h2>
                        </div>

                        {/* Tagline Callout */}
                        <p className="text-sm md:text-base font-display italic text-primary-forest leading-relaxed mb-4 pl-3 rtl:pl-0 rtl:pr-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary-forest/60">
                          "{product.tagline}"
                        </p>

                        {/* Description */}
                        <p className="text-sm md:text-base font-body text-primary-gray leading-relaxed mb-5">
                          {product.description}
                        </p>

                        {/* Explicit Distinction Callout: Clear & Informative */}
                        <div className="mb-5 p-3.5 bg-primary-cream/60 border-l-3 rtl:border-l-0 rtl:border-r-3 border-primary-brown/70">
                          <div className="text-[11px] font-meta uppercase tracking-wider font-bold text-primary-brown mb-1 flex items-center gap-1.5">
                            <Scale className="w-3.5 h-3.5" />
                            <span>{isRTL ? 'الفرق في الإنتاج والمذاق' : 'What Defines This Oil'}</span>
                          </div>
                          <p className="text-xs md:text-sm font-body text-primary-dark leading-relaxed">
                            {product.differenceHighlight}
                          </p>
                        </div>

                        {/* Flavor Notes Tags */}
                        <div className="mb-5">
                          <span className="text-[11px] font-meta uppercase tracking-wider font-bold text-primary-gray mb-2 block">
                            {isRTL ? 'ملامح النكهة والتذوق' : 'Tasting & Flavor Notes'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {product.flavorNotes.map((note, nIdx) => (
                              <span 
                                key={nIdx}
                                className="px-2.5 py-1 bg-primary-cream text-primary-dark border border-primary-tan/40 text-xs font-body"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Best Pairings & Formats */}
                        <div className="space-y-2 mb-6 pt-3 border-t border-primary-tan/20">
                          <div className="flex items-start gap-2">
                            <Utensils className="w-3.5 h-3.5 text-primary-forest shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                              <strong className="text-primary-dark font-semibold">
                                {isRTL ? 'الاستخدام الأمثل: ' : 'Best Pairings: '}
                              </strong>
                              {product.bestPairings}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Package className="w-3.5 h-3.5 text-primary-brown shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                              <strong className="text-primary-dark font-semibold">
                                {isRTL ? 'العبوات المتاحة: ' : 'Available Formats: '}
                              </strong>
                              {product.formats.join(' &middot; ')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="pt-4 border-t border-primary-tan/30 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-xs font-meta uppercase font-bold tracking-wider text-primary-forest hover:text-primary-dark transition-colors group"
                        >
                          <span>{isRTL ? 'طلب عينة أو استفسار عن هذا الصنف' : 'Inquire / Request a Sample'}</span>
                          <ArrowRight className={isRTL ? "w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform" : "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Tasting & Kitchen Pairing Guide */}
      <section className="py-16 md:py-20 px-6 bg-white border-y border-primary-tan/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-2 block">
              {sol.tastingGuideTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-3">
              {sol.tastingGuideTitle}
            </h2>
            <p className="text-sm font-body text-primary-gray leading-relaxed">
              {sol.tastingGuideSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sol.tastingTips.map((tip, idx) => (
              <div 
                key={idx}
                className="p-6 bg-primary-cream/40 border border-primary-tan/30 flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-full bg-primary-forest/10 text-primary-forest flex items-center justify-center font-display font-bold text-sm mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-display font-bold text-primary-dark mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warm & Simple CTA */}
      <section className="py-16 md:py-20 px-6 bg-primary-cream">
        <div className="max-w-3xl mx-auto text-center bg-primary-dark text-white p-8 md:p-14 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              {sol.ctaTitle}
            </h2>
            <p className="text-sm md:text-base font-body text-primary-cream/80 max-w-xl mx-auto leading-relaxed mb-8">
              {sol.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3 bg-primary-oil text-primary-dark font-meta uppercase font-bold text-xs tracking-widest hover:bg-white transition-colors"
              >
                {sol.ctaButton}
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3 border border-white/30 text-white font-meta uppercase font-bold text-xs tracking-widest hover:bg-white/10 transition-colors"
              >
                {sol.ctaSampleButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
