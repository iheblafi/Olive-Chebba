import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function setMetaTag(attributeName: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export default function PageMetadata() {
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    const pathname = location.pathname.toLowerCase().replace(/\/$/, '') || '/';

    let routeKey: 'home' | 'about' | 'services' | 'solutions' | 'blog' | 'contact' | 'notFound' = 'home';

    if (pathname === '/' || pathname === '') {
      routeKey = 'home';
    } else if (pathname === '/about') {
      routeKey = 'about';
    } else if (pathname === '/services') {
      routeKey = 'services';
    } else if (pathname === '/solutions') {
      routeKey = 'solutions';
    } else if (pathname === '/blog') {
      routeKey = 'blog';
    } else if (pathname === '/contact') {
      routeKey = 'contact';
    } else {
      routeKey = 'notFound';
    }

    const title = t.titles[routeKey] || t.titles.home;
    const description = routeKey === 'notFound' ? t.metaDescriptions.home : (t.metaDescriptions[routeKey] || t.metaDescriptions.home);
    const currentUrl = window.location.href;

    // 1. Update document title
    document.title = title;

    // 2. Standard Meta Description
    setMetaTag('name', 'description', description);

    // 3. OpenGraph tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:locale', language === 'ar' ? 'ar_TN' : 'en_US');

    // 4. Twitter Card tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 5. Canonical Link
    setCanonicalLink(currentUrl);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname, language, t]);

  return null;
}
