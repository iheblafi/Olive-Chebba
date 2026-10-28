import { motion, type Variants } from 'motion/react';
import { Leaf, Droplet, Globe2, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TestimonialCarousel from '../components/TestimonialCarousel';

// Silky, editorial transition curves
const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: LUXURY_EASE,
    },
  },
};

const cardStaggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: LUXURY_EASE,
    },
  },
};

const SERVICE_ICONS = [Leaf, Droplet, Globe2, Target];

export default function Home() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="w-full bg-primary-cream">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 overflow-hidden flex items-center min-h-[80vh] md:min-h-[90vh]">
        <div className="absolute inset-0 z-0 bg-primary-dark">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://cdn.pixabay.com/video/2024/06/12/216471_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary-dark/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/10 to-primary-dark/40"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full mb-12">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span 
              variants={fadeUpItem}
              className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-tan mb-6 block drop-shadow-md"
            >
              {t.home.heroTag}
            </motion.span>
            <motion.h1 
              variants={fadeUpItem}
              className="text-5xl md:text-7xl font-display text-white leading-[1.1] mb-8 drop-shadow-lg"
            >
              {t.home.heroTitlePart1}{' '}
              <i className="text-primary-tan font-light not-italic italic">
                {t.home.heroTitleHighlight}
              </i>{' '}
              {t.home.heroTitlePart2}
            </motion.h1>
            <motion.p 
              variants={fadeUpItem}
              className="text-lg md:text-xl font-body text-primary-cream/90 max-w-2xl leading-relaxed drop-shadow-md"
            >
              {t.home.heroDesc}
            </motion.p>
          </motion.div>
        </div>

        {/* Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none transform translate-y-[1px]">
          <svg 
            className="relative block w-full h-[20px] md:h-[40px] lg:h-[55px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,60 C250,110 350,10 600,60 C850,110 950,10 1200,60 L1200,120 L0,120 Z" 
              className="fill-primary-oil"
            ></path>
          </svg>
        </div>
      </section>

      {/* Goal & Mission */}
      <section className="py-24 px-6 bg-primary-oil border-b border-primary-tan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span 
              variants={fadeUpItem}
              className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-6 block"
            >
              {t.home.missionTag}
            </motion.span>
            <motion.p 
              variants={fadeUpItem}
              className="text-3xl md:text-5xl font-display text-primary-dark leading-snug italic mb-8"
            >
              {t.home.missionQuote}
            </motion.p>
            <motion.div
              variants={fadeUpItem}
              className="w-16 h-[2px] bg-primary-forest/30 mx-auto mb-8"
            />
            <motion.p 
              variants={fadeUpItem}
              className="text-lg text-primary-gray font-body leading-relaxed"
            >
              {t.home.missionDesc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Extract */}
      <section className="py-24 px-6 bg-white border-b border-primary-tan/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-[400px] md:h-[600px] w-full order-2 lg:order-1"
            >
              <img 
                src="https://cdn.pixabay.com/photo/2020/03/22/01/24/olive-grove-4955574_1280.jpg" 
                alt="Tunisian Olive Branch" 
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-tan/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div 
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <motion.span 
                variants={fadeUpItem}
                className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-3 block"
              >
                {t.home.aboutTag}
              </motion.span>
              <motion.h2 
                variants={fadeUpItem}
                className="text-4xl md:text-5xl font-display text-primary-dark mb-8"
              >
                {t.home.aboutTitle}
              </motion.h2>
              <motion.div 
                variants={fadeUpItem}
                className="space-y-6 text-primary-gray text-lg leading-relaxed font-body mb-10"
              >
                <p>{t.home.aboutP1}</p>
                <p>{t.home.aboutP2}</p>
              </motion.div>
              <motion.div variants={fadeUpItem}>
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-3 border-b-2 border-primary-forest text-primary-dark pb-1 text-sm font-meta uppercase font-bold tracking-widest hover:text-primary-forest transition-colors group"
                >
                  {t.home.aboutLink}
                  <ArrowRight className={isRTL ? "w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" : "w-4 h-4 group-hover:translate-x-1 transition-transform"} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-24 md:py-32 px-6 bg-primary-cream overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
          >
            <motion.span 
              variants={fadeUpItem}
              className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-4 block"
            >
              {t.home.servicesTag}
            </motion.span>
            <motion.h2 
              variants={fadeUpItem}
              className="text-4xl md:text-5xl font-display text-primary-dark mb-6"
            >
              {t.home.servicesTitle}
            </motion.h2>
            <motion.p 
              variants={fadeUpItem}
              className="text-lg text-primary-gray font-body"
            >
              {t.home.servicesDesc}
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
          >
             <Link 
               to="/services" 
               className="inline-flex items-center gap-3 bg-primary-forest text-primary-cream px-8 py-4 text-sm font-meta uppercase font-bold tracking-widest hover:bg-primary-dark transition-colors shadow-sm"
             >
                {t.home.servicesViewAll}
                <ArrowRight className={isRTL ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
             </Link>
          </motion.div>
        </div>

        {/* Horizontal Carousel with Staggered Entrance */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.home.servicesList.map((service, idx) => {
              const IconComp = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div 
                  key={idx} 
                  variants={cardStaggerItem}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="snap-start shrink-0 w-[280px] md:w-[320px] bg-primary-oil/60 p-8 border border-primary-tan/30 hover:border-primary-forest/50 transition-colors group shadow-sm hover:shadow-md"
                >
                  <div className="mb-6 inline-flex p-3 bg-primary-cream text-primary-forest group-hover:bg-primary-forest group-hover:text-primary-cream transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-primary-dark mb-4">{service.title}</h3>
                  <p className="text-primary-gray font-body text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Final CTA */}
      <section className="py-32 px-6 bg-primary-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              variants={fadeUpItem}
              className="text-5xl md:text-6xl font-display text-primary-dark mb-8"
            >
              {t.home.ctaTitle}
            </motion.h2>
            <motion.p 
              variants={fadeUpItem}
              className="text-xl font-body text-primary-gray mb-12"
            >
              {t.home.ctaDesc}
            </motion.p>
            <motion.div variants={fadeUpItem}>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary-forest text-primary-cream px-10 py-5 text-sm font-meta uppercase font-bold tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg active:scale-98"
              >
                {t.home.ctaButton}
                <ArrowRight className={isRTL ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
