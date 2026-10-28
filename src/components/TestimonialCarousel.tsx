import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

export default function TestimonialCarousel() {
  const { t, isRTL } = useLanguage();
  const testimonials = t.home.testimonials || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const paginate = useCallback((newDirection: number) => {
    if (total === 0) return;
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, paginate, total]);

  if (total === 0) return null;

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? (isRTL ? -90 : 90) : (isRTL ? 90 : -90),
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: LUXURY_EASE,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? (isRTL ? 90 : -90) : (isRTL ? -90 : 90),
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.4,
        ease: LUXURY_EASE,
      },
    }),
  };

  return (
    <section 
      className="py-24 md:py-32 px-6 bg-primary-tan/10 border-t border-primary-tan/20 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-oil/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
          >
            <span className="text-xs font-meta uppercase tracking-[0.25em] font-bold text-primary-brown mb-4 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary-brown" />
              {t.home.testimonialsTag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-primary-dark mb-5 leading-tight">
              {t.home.testimonialsTitle}
            </h2>
            <p className="text-base md:text-lg text-primary-gray font-body leading-relaxed max-w-2xl mx-auto">
              {t.home.testimonialsSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Carousel Card Container */}
        <div className="relative min-h-[380px] md:min-h-[330px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -100) {
                  paginate(isRTL ? -1 : 1);
                } else if (swipe > 100) {
                  paginate(isRTL ? 1 : -1);
                }
              }}
              className="w-full bg-primary-cream/90 backdrop-blur-sm border border-primary-tan/40 p-8 md:p-14 shadow-lg shadow-primary-dark/5 relative cursor-grab active:cursor-grabbing"
            >
              {/* Top Accent: Stars & Quality Highlight Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-primary-tan/30">
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating || 5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-[#C89B3C] text-[#C89B3C]" 
                    />
                  ))}
                  <span className="text-xs font-meta font-bold text-primary-dark ml-2 rtl:ml-0 rtl:mr-2">
                    5.0
                  </span>
                </div>

                {/* Quality Certification Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-oil text-primary-forest text-xs font-meta font-semibold border border-primary-tan/50 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-forest shrink-0" />
                  <span>{current.highlight}</span>
                </div>
              </div>

              {/* Decorative Quote Icon in Card */}
              <Quote className="w-10 h-10 text-primary-forest/20 mb-4" />

              {/* Testimonial Quote */}
              <p className="text-xl md:text-3xl font-display text-primary-dark leading-snug md:leading-relaxed italic mb-8">
                {current.quote}
              </p>

              {/* Author Attribution */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-primary-tan/20">
                <div className="flex items-center gap-4">
                  {/* Initials Badge */}
                  <div className="w-12 h-12 bg-primary-forest text-primary-cream flex items-center justify-center font-display font-bold text-lg shadow-sm">
                    {current.author
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-meta uppercase font-bold tracking-wider text-primary-dark">
                      {current.author}
                    </h3>
                    <p className="text-xs md:text-sm font-body text-primary-gray">
                      {current.role} • <span className="text-primary-forest font-medium">{current.location}</span>
                    </p>
                  </div>
                </div>

                {/* Counter indicator e.g. 01 / 04 */}
                <div className="text-xs font-meta tracking-widest text-primary-brown font-bold uppercase">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-between mt-8 pt-4">
          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-2 transition-all duration-300 rounded-none focus:outline-none",
                  idx === currentIndex 
                    ? "w-8 bg-primary-forest" 
                    : "w-2.5 bg-primary-tan/60 hover:bg-primary-forest/50"
                )}
              />
            ))}
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous Testimonial"
              className="p-3 bg-primary-cream border border-primary-tan/50 hover:border-primary-forest hover:bg-primary-forest hover:text-primary-cream text-primary-dark transition-all duration-200 shadow-sm active:scale-95"
            >
              <ChevronLeft className={cn("w-5 h-5", isRTL && "rotate-180")} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next Testimonial"
              className="p-3 bg-primary-cream border border-primary-tan/50 hover:border-primary-forest hover:bg-primary-forest hover:text-primary-cream text-primary-dark transition-all duration-200 shadow-sm active:scale-95"
            >
              <ChevronRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
