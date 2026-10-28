import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

const TEAM_PHOTO_MAP: Record<string, string> = {
  Mazen: "/assets/img/mazen.jpg",
  Iheb: "/assets/img/me2.jpg",
  Islem: "/assets/img/islem.png",
  "مازن": "/assets/img/mazen.jpg",
  "إيهاب": "/assets/img/me2.jpg",
  "إسلام": "/assets/img/islem.png",
};

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="w-full bg-primary-cream">
      {/* Minimal Header */}
      <section className="pt-2 pb-16 px-6 bg-primary-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" as const }}
            >
              <span className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-6 block">
                {t.about.badge}
              </span>
            <h1 className="text-5xl md:text-7xl font-display text-primary-dark leading-[1.1] mb-8">
              {t.about.titlePart1}{' '}
              <i className="text-primary-forest not-italic italic">
                {t.about.titleHighlight}
              </i>
            </h1>
            <p className="text-lg md:text-xl font-body text-primary-gray max-w-2xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Our Story & Mission */}
      <section className="py-24 px-6 bg-primary-oil border-y border-primary-tan/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-display text-primary-dark mb-8">
                {t.about.storyTitle}
              </h2>
              <div className="space-y-6 text-primary-gray text-lg leading-relaxed font-body mb-12">
                <p>{t.about.storyP1}</p>
                <p>{t.about.storyP2}</p>
              </div>

              <div className="bg-primary-cream p-8 md:p-10 border-l-4 rtl:border-l-0 rtl:border-r-4 border-primary-forest">
                <h3 className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-brown mb-4 block">
                  {t.about.missionBadge}
                </h3>
                <p className="text-xl md:text-2xl font-display text-primary-dark leading-snug italic mb-4">
                  {t.about.missionQuote}
                </p>
                <p className="text-primary-gray font-body text-sm leading-relaxed">
                  {t.about.missionDesc}
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative h-[500px] md:h-[700px] w-full">
              <img 
                src="https://cdn.pixabay.com/photo/2020/03/22/01/24/olive-grove-4955574_1280.jpg" 
                alt="Tunisian Olive Branch" 
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-tan/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-primary-dark text-primary-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div {...fadeIn} className="lg:col-span-4">
              <span className="text-xs font-meta uppercase tracking-[0.2em] font-bold text-primary-tan mb-4 block">
                {t.about.valuesTag}
              </span>
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                {t.about.valuesTitle}
              </h2>
              <p className="text-primary-tan/80 font-body leading-relaxed mb-8">
                {t.about.valuesDesc}
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16"
            >
              {t.about.valuesList.map((value, idx) => (
                <motion.div key={idx} variants={fadeIn} className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l rtl:border-l-0 rtl:border-r border-primary-forest">
                  <h3 className="text-xl font-display font-medium mb-3">{value.title}</h3>
                  <p className="text-primary-tan/70 font-body text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-primary-dark mb-6">
              {t.about.teamTitle}
            </h2>
            <p className="text-lg text-primary-gray font-body">
              {t.about.teamDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.about.teamList.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group cursor-pointer text-center"
              >
                <div className="w-48 h-48 sm:w-60 sm:h-60 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary-oil shadow-xl bg-primary-cream/60">
                  <img 
                    src={TEAM_PHOTO_MAP[member.name] || "/assets/img/professional_pic.jpg"} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-display text-primary-dark mb-2">{member.name}</h3>
                <span className="text-xs font-meta uppercase tracking-widest text-primary-forest font-bold">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 px-6 bg-primary-cream border-t border-primary-tan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-display text-primary-dark mb-8">
              {t.about.ctaTitle}
            </h2>
            <p className="text-xl font-body text-primary-gray mb-12">
              {t.about.ctaDesc}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-primary-forest text-primary-cream px-10 py-5 text-sm font-meta uppercase font-bold tracking-widest hover:bg-primary-dark transition-colors">
              {t.about.ctaButton}
              <ArrowRight className={isRTL ? "w-4 h-4 rotate-180" : "w-4 h-4"} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
