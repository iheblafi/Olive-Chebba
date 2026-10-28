import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface ReturnButtonProps {
  variant?: 'under-navbar' | 'inline' | 'icon-only';
  className?: string;
  fallbackPath?: string;
}

export default function ReturnButton({
  variant = 'under-navbar',
  className,
  fallbackPath = '/',
}: ReturnButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  // If on home page, do not render
  const isHomePage = location.pathname === '/';

  const handleReturn = () => {
    if (window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;
  const label = t.common.return;

  if (isHomePage) {
    return null;
  }

  // Pure icon button
  const iconButton = (
    <button
      type="button"
      onClick={handleReturn}
      aria-label={label}
      title={label}
      className={cn(
        "group inline-flex items-center justify-center w-9 h-9 transition-all duration-200 cursor-pointer active:scale-95",
        "bg-white/90 hover:bg-white text-primary-forest hover:text-primary-brown",
        "border border-primary-tan/60 hover:border-primary-forest shadow-xs hover:shadow-sm",
        className
      )}
    >
      <ArrowIcon className={cn(
        "w-4 h-4 transition-transform duration-200",
        isRTL ? "group-hover:translate-x-0.5" : "group-hover:-translate-x-0.5"
      )} />
    </button>
  );

  if (variant === 'icon-only' || variant === 'inline') {
    return iconButton;
  }

  // Default 'under-navbar': Positioned directly beneath the fixed navbar with generous container margin
  return (
    <div className="w-full pt-20 md:pt-24 pb-0 bg-transparent print:hidden">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-start">
        {iconButton}
      </div>
    </div>
  );
}
