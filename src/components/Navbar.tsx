import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.solutions, path: '/solutions' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on a dark hero section (only Home page when unscrolled)
  const isDarkHero = isHomePage && !isScrolled;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isDarkHero
            ? 'bg-transparent py-5'
            : isScrolled
              ? 'bg-primary-dark/65 backdrop-blur-md border-b border-white/10 py-3 shadow-md'
              : 'bg-primary-dark/85 backdrop-blur-md border-b border-white/10 py-4 shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className={cn(
                "font-display font-bold tracking-tight flex items-baseline gap-2 transition-colors duration-300",
                isDarkHero ? "text-white drop-shadow-md" : "text-primary-cream hover:text-white"
              )}
            >
              <span className="text-2xl">
                {language === 'ar' ? 'أوليف الشابة' : 'Olive Chebba.'}
              </span>
              <span
                className={cn(
                  "text-[10px] font-meta uppercase tracking-widest hidden sm:inline-block font-medium opacity-85",
                  isDarkHero ? "text-primary-tan" : "text-primary-tan"
                )}
              >
                {language === 'ar' ? 'تونس • Chebba' : 'Tunisian Heritage'}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-5 lg:gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'text-sm font-meta font-semibold uppercase tracking-wider transition-colors duration-200 drop-shadow-sm',
                        isActive
                          ? 'text-primary-oil border-b-2 border-primary-oil pb-1'
                          : 'text-white/85 hover:text-white'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {/* Language Switcher in Desktop Navbar */}
              <LanguageSwitcher isScrolled={!isDarkHero} />

              <Link
                to="/contact"
                className={cn(
                  "px-5 py-2.5 text-xs font-meta uppercase font-bold tracking-widest transition-colors shadow-sm whitespace-nowrap",
                  isDarkHero
                    ? "bg-primary-oil text-primary-dark hover:bg-primary-cream"
                    : "bg-primary-oil text-primary-dark hover:bg-white"
                )}
              >
                {t.nav.consultation}
              </Link>
            </div>
          </div>

          {/* Mobile Right Controls: Quick Switcher + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher isScrolled={!isDarkHero} />
            <button
              className="p-2 -mr-2 text-white transition-colors duration-300 hover:text-primary-tan"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-primary-cream flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-primary-tan/30">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold tracking-tight text-primary-forest">
                  {language === 'ar' ? 'أوليف الشابة' : 'Olive Chebba.'}
                </span>
                <span className="text-[10px] font-meta text-primary-brown uppercase tracking-wider font-semibold">
                  {language === 'ar' ? 'تونس' : 'Tunisia'}
                </span>
              </div>
              <button
                className="text-primary-dark p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-6 overflow-y-auto flex-1 justify-between">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-xl font-display transition-colors',
                        isActive ? 'text-primary-forest italic font-semibold' : 'text-primary-dark'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="pt-6 border-t border-primary-tan/30 flex flex-col gap-4">
                {/* Language Switcher in Mobile Drawer */}
                <LanguageSwitcher variant="mobile" />

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center block bg-primary-forest text-primary-cream px-6 py-4 text-sm font-meta uppercase font-bold tracking-widest shadow-sm"
                >
                  {t.nav.consultation}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
