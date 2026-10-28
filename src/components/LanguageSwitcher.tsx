import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../lib/translations';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
  variant?: 'navbar' | 'mobile' | 'compact';
  className?: string;
}

export default function LanguageSwitcher({
  isScrolled = false,
  variant = 'navbar',
  className,
}: LanguageSwitcherProps) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Mobile layout - full width elegant selector
  if (variant === 'mobile') {
    return (
      <div className={cn("w-full bg-primary-cream/80 border border-primary-tan/40 p-3 rounded-none", className)}>
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-primary-tan/30">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary-forest" />
            <span className="text-xs font-meta uppercase font-bold tracking-wider text-primary-forest">
              {t.switcher.label}
            </span>
          </div>
          <span className="text-[11px] font-meta text-primary-brown font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-primary-brown" />
            {t.switcher.heritageBadge}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* English option */}
          <button
            type="button"
            onClick={() => selectLanguage('en')}
            className={cn(
              "flex flex-col items-start p-2.5 transition-all text-left border",
              language === 'en'
                ? "bg-primary-forest text-primary-cream border-primary-forest shadow-sm"
                : "bg-white/70 text-primary-dark border-primary-tan/30 hover:bg-white hover:border-primary-forest/50"
            )}
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-meta font-bold text-xs tracking-wider">EN</span>
              {language === 'en' && <Check className="w-3.5 h-3.5 text-primary-cream" />}
            </div>
            <span className="text-xs font-semibold mt-1">English</span>
            <span className={cn("text-[10px]", language === 'en' ? "text-primary-tan" : "text-primary-gray")}>
              International
            </span>
          </button>

          {/* Arabic option */}
          <button
            type="button"
            onClick={() => selectLanguage('ar')}
            className={cn(
              "flex flex-col items-start p-2.5 transition-all text-right border",
              language === 'ar'
                ? "bg-primary-forest text-primary-cream border-primary-forest shadow-sm"
                : "bg-white/70 text-primary-dark border-primary-tan/30 hover:bg-white hover:border-primary-forest/50"
            )}
            dir="rtl"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-meta font-bold text-xs tracking-wider">AR</span>
              {language === 'ar' && <Check className="w-3.5 h-3.5 text-primary-cream" />}
            </div>
            <span className="text-xs font-semibold mt-1 font-arabic">العربية</span>
            <span className={cn("text-[10px] font-arabic", language === 'ar' ? "text-primary-tan" : "text-primary-gray")}>
              تراث الشابة • تونس
            </span>
          </button>
        </div>
      </div>
    );
  }

  // Desktop / Navbar variant with dropdown & quick toggle
  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      {/* Compact Trigger Button: Just the planet icon and EN/AR */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Switch Language"
        className={cn(
          "group flex items-center gap-1.5 px-2.5 py-1 text-xs font-meta tracking-wider transition-all duration-200 border rounded-none cursor-pointer",
          isScrolled
            ? "border-white/30 hover:border-white/80 bg-white/10 hover:bg-white/20 text-white"
            : "border-white/40 hover:border-white bg-black/20 hover:bg-black/35 text-white backdrop-blur-sm shadow-sm",
          isOpen && "border-white bg-white/25 ring-1 ring-white/30"
        )}
      >
        <Globe className={cn(
          "w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12 shrink-0",
          isScrolled ? "text-primary-oil" : "text-primary-tan"
        )} />

        <span className="font-bold uppercase tracking-wider text-[11px] leading-none text-white">
          {language === 'en' ? 'EN' : 'AR'}
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute z-50 mt-2 w-56 bg-primary-cream border border-primary-tan/40 shadow-xl overflow-hidden",
              isRTL ? "left-0 origin-top-left" : "right-0 origin-top-right"
            )}
          >
            {/* Header info badge celebrating brand heritage */}
            <div className="px-3.5 py-2 bg-primary-oil/70 border-b border-primary-tan/30 flex items-center justify-between">
              <span className="text-[10px] font-meta uppercase font-bold tracking-widest text-primary-brown flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-primary-brown inline" />
                {t.switcher.heritageBadge}
              </span>
              <span className="text-[10px] text-primary-forest font-semibold">
                Chebba • الشابة
              </span>
            </div>

            {/* Language options */}
            <div className="p-1.5 space-y-1">
              {/* English */}
              <button
                type="button"
                onClick={() => selectLanguage('en')}
                className={cn(
                  "w-full flex items-center justify-between px-2.5 py-2 text-left transition-colors duration-150 group",
                  language === 'en'
                    ? "bg-primary-forest text-primary-cream"
                    : "hover:bg-primary-tan/20 text-primary-dark"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "w-5 h-5 rounded-none flex items-center justify-center text-[9px] font-bold font-meta border",
                    language === 'en'
                      ? "bg-primary-cream text-primary-forest border-primary-cream"
                      : "bg-white text-primary-gray border-primary-tan/40 group-hover:border-primary-forest"
                  )}>
                    EN
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-wide">
                      {t.switcher.enTitle}
                    </div>
                    <div className={cn(
                      "text-[9px]",
                      language === 'en' ? "text-primary-tan" : "text-primary-gray"
                    )}>
                      {t.switcher.enSubtitle}
                    </div>
                  </div>
                </div>
                {language === 'en' && (
                  <Check className="w-3.5 h-3.5 text-primary-cream shrink-0" />
                )}
              </button>

              {/* Arabic */}
              <button
                type="button"
                onClick={() => selectLanguage('ar')}
                className={cn(
                  "w-full flex items-center justify-between px-2.5 py-2 text-right transition-colors duration-150 group",
                  language === 'ar'
                    ? "bg-primary-forest text-primary-cream"
                    : "hover:bg-primary-tan/20 text-primary-dark"
                )}
                dir="rtl"
              >
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "w-5 h-5 rounded-none flex items-center justify-center text-[9px] font-bold font-meta border",
                    language === 'ar'
                      ? "bg-primary-cream text-primary-forest border-primary-cream"
                      : "bg-white text-primary-gray border-primary-tan/40 group-hover:border-primary-forest"
                  )}>
                    AR
                  </span>
                  <div>
                    <div className="text-xs font-bold font-arabic tracking-wide">
                      {t.switcher.arTitle}
                    </div>
                    <div className={cn(
                      "text-[9px] font-arabic",
                      language === 'ar' ? "text-primary-tan" : "text-primary-gray"
                    )}>
                      {t.switcher.arSubtitle}
                    </div>
                  </div>
                </div>
                {language === 'ar' && (
                  <Check className="w-3.5 h-3.5 text-primary-cream shrink-0" />
                )}
              </button>
            </div>

            {/* Subtle bottom note */}
            <div className="px-3 py-1 bg-primary-cream border-t border-primary-tan/20 text-[9px] text-primary-gray/80 text-center font-meta">
              {language === 'ar' ? 'زيت زيتون تونسي بكر ممتاز من الشابة' : 'Tunisian Extra Virgin Olive Oil from Chebba'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
