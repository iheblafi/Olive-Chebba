import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary-dark text-primary-cream py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-baseline gap-2 mb-4">
            <h2 className="text-2xl font-display font-bold tracking-tight text-primary-cream">
              {language === 'ar' ? 'أوليف الشابة' : 'Olive Chebba.'}
            </h2>
            <span className="text-[10px] font-meta text-primary-tan uppercase tracking-wider font-semibold">
              {language === 'ar' ? 'تونس' : 'Tunisia'}
            </span>
          </div>
          <p className="text-sm font-body text-primary-tan/80 leading-relaxed max-w-xs">
            {t.footer.brandDesc}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a 
              href="https://wa.me/4915511269418" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className="text-primary-tan hover:text-emerald-400 transition-colors"
              title="Chat on WhatsApp (+4915511269418)"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.216c-4.418 0-8 3.582-8 8 0 1.411.366 2.738 1.004 3.889l-1.066 3.899 3.993-1.048c1.111.606 2.383.96 3.738.96 4.418 0 8-3.582 8-8s-3.582-8-8-8z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/mazen.slama.583" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="text-primary-tan hover:text-primary-cream transition-colors"
              title="Connect on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-primary-tan hover:text-primary-cream transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-primary-tan hover:text-primary-cream transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-meta uppercase tracking-widest font-bold mb-6 text-primary-tan">
            {t.footer.companyHeading}
          </h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{t.footer.companyLinks.home}</Link></li>
            <li><Link to="/about" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{language === 'ar' ? 'من نحن' : 'About Us'}</Link></li>
            <li><Link to="/services" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{t.footer.companyLinks.services}</Link></li>
            <li><Link to="/solutions" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{language === 'ar' ? 'منتجاتنا وحلولنا' : 'Solutions'}</Link></li>
            <li><Link to="/contact" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-meta uppercase tracking-widest font-bold mb-6 text-primary-tan">
            {t.footer.resourcesHeading}
          </h3>
          <ul className="space-y-4">
            <li><Link to="/blog" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{t.footer.resourceLinks.journal}</Link></li>
            <li><Link to="/solutions" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{t.footer.resourceLinks.wholesale}</Link></li>
            <li><Link to="/contact" className="text-sm font-body text-primary-cream/80 hover:text-primary-cream hover:underline underline-offset-4 decoration-primary-forest">{language === 'ar' ? 'طلب عينات' : 'Request Samples'}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-meta uppercase tracking-widest font-bold mb-6 text-primary-tan">
            {t.footer.contactHeading}
          </h3>
          <ul className="space-y-4 text-sm font-body text-primary-cream/80">
            <li className="leading-relaxed">{t.footer.address}</li>
            <li>
              <a href="mailto:mazenslama79@gmail.com" className="hover:text-primary-cream underline-offset-2 hover:underline">
                mazenslama79@gmail.com
              </a>
            </li>
            <li dir="ltr" className={language === 'ar' ? 'text-right' : 'text-left'}>
              <a href="tel:+4915511269418" className="hover:text-primary-cream">
                +4915511269418
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary-tan/10 text-xs font-meta text-primary-tan/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary-cream transition-colors">{t.footer.privacy}</Link>
          <Link to="/terms" className="hover:text-primary-cream transition-colors">{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
