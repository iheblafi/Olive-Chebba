import { motion } from 'motion/react';
import { 
  Sprout, 
  Droplets, 
  Ship, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Mail,
  Wine
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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

const SERVICE_ICONS: Record<string, React.ElementType> = {
  cultivation: Sprout,
  extraction: Droplets,
  export: Ship,
  branding: TrendingUp,
};

export default function Services() {
  const { t, isRTL } = useLanguage();
  const sp = t.servicesPage;

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
                {sp.heroBadge}
              </span>
              <span className="w-6 h-px bg-primary-brown/50"></span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-dark leading-tight mb-5 font-semibold"
            >
              {sp.heroTitlePart1}{' '}
              <span className="italic font-normal text-primary-forest">{sp.heroTitleHighlight}</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-base md:text-lg font-body text-primary-gray max-w-2xl mx-auto leading-relaxed"
            >
              {sp.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The 4 Core Services: Clear, Readable & Realistic */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          {sp.services.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.id] || Sprout;
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: LUXURY_EASE }}
                className="bg-white border border-primary-tan/40 shadow-xs overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch`}>
                  {/* Photo Panel */}
                  <div className={`lg:col-span-5 relative overflow-hidden h-72 sm:h-80 md:h-96 lg:h-auto min-h-[260px] lg:min-h-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-black/10 pointer-events-none" />
                    
                    {/* Badge & Number */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-primary-dark/80 backdrop-blur-sm text-white text-[11px] font-meta uppercase tracking-wider">
                        <IconComp className="w-3.5 h-3.5 text-primary-oil" />
                        <span>{service.badge}</span>
                      </div>
                      <span className="text-2xl font-display font-bold text-white/90 drop-shadow-sm">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className={`lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Service Title */}
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-3">
                        {service.title}
                      </h2>

                      {/* Tagline Callout */}
                      <p className="text-sm md:text-base font-display italic text-primary-forest leading-relaxed mb-4 pl-3 rtl:pl-0 rtl:pr-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary-forest/60">
                        "{service.tagline}"
                      </p>

                      {/* Realistic, Readable Summary */}
                      <p className="text-sm md:text-base font-body text-primary-gray leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      {/* Decent Details Bullet Points */}
                      <div className="space-y-2.5 mb-8">
                        {service.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-primary-forest/10 text-primary-forest flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                            <span className="text-xs md:text-sm font-body text-primary-dark">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-primary-tan/30 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-meta uppercase font-bold tracking-wider text-primary-forest hover:text-primary-dark transition-colors group"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className={isRTL ? "w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform" : "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Realistic 3-Step "How We Work With You" */}
      <section className="py-16 md:py-20 px-6 bg-white border-y border-primary-tan/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-2 block">
              {sp.howWeWorkTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-3">
              {sp.howWeWorkTitle}
            </h2>
            <p className="text-sm font-body text-primary-gray leading-relaxed">
              {sp.howWeWorkDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sp.steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 bg-primary-cream/40 border border-primary-tan/30 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-display font-bold text-primary-forest/80 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-base font-display font-bold text-primary-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple, Warm CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-primary-cream">
        <div className="max-w-3xl mx-auto text-center bg-primary-dark text-white p-8 md:p-14 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              {sp.ctaTitle}
            </h2>
            <p className="text-sm md:text-base font-body text-primary-cream/80 max-w-xl mx-auto leading-relaxed mb-8">
              {sp.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3 bg-primary-oil text-primary-dark font-meta uppercase font-bold text-xs tracking-widest hover:bg-white transition-colors"
              >
                {sp.ctaButton}
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3 border border-white/30 text-white font-meta uppercase font-bold text-xs tracking-widest hover:bg-white/10 transition-colors"
              >
                {sp.ctaSampleButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
