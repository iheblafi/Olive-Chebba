import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Clock, 
  Send, 
  Building2, 
  Sparkles,
  Facebook,
  Compass,
  ExternalLink,
  ShieldCheck,
  Package,
  CalendarCheck,
  Truck,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LUXURY_EASE = [0.25, 0.1, 0.25, 1.0] as const;

interface LocationDetail {
  id: 'chebba' | 'munich';
  city: string;
  country: string;
  badgeEn: string;
  badgeAr: string;
  taglineEn: string;
  taglineAr: string;
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
  timeZone: string;
  roleEn: string;
  roleAr: string;
  hoursEn: string;
  hoursAr: string;
  highlightEn: string;
  highlightAr: string;
  directionsUrl: string;
  osmEmbedUrl: string;
}

const LOCATIONS_DATA: LocationDetail[] = [
  {
    id: 'chebba',
    city: 'Chebba',
    country: 'Tunisia',
    badgeEn: 'Artisanal Mill & Coastal Groves',
    badgeAr: 'المعصرة والبساتين الساحلية',
    taglineEn: 'Estate Pressing & Coastal Groves',
    taglineAr: 'العصر في قلب البساتين الساحلية',
    address: '5170 Cité de la Plage, Chebba, Mahdia, Tunisia',
    coordinates: '35.2372° N, 11.1156° E',
    lat: 35.2372,
    lng: 11.1156,
    timeZone: 'Africa/Tunis',
    roleEn: 'Continuous cold-extraction milling, immediate harvest bottling, and bulk container staging for international maritime export.',
    roleAr: 'معصرة متطورة للعصر على البارد الفوري، تعبئة مباشرة، وتجهيز شحنات التصدير البحري من ميناء صفاقس ورادس.',
    hoursEn: 'Mon – Fri: 08:00 – 17:00 (Tunis GMT+1)',
    hoursAr: 'الاثنين – الجمعة: 08:00 – 17:00 (توقيت تونس GMT+1)',
    highlightEn: 'Harvest tours & live pressings welcome Oct – Feb by appointment.',
    highlightAr: 'نرحب بزيارات البساتين وجولات العصر من أكتوبر إلى فيفري بالتنسيق المسبق.',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=5170+Cite+de+la+Plage+Chebba+Tunisia',
    osmEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=11.0850%2C35.2200%2C11.1450%2C35.2550&layer=mapnik&marker=35.2372%2C11.1156',
  },
  {
    id: 'munich',
    city: 'Munich',
    country: 'Germany',
    badgeEn: 'European Logistics & Trade Hub',
    badgeAr: 'مركز التوزيع والشراكات الأوروبي',
    taglineEn: 'European Logistics & Client Relations',
    taglineAr: 'اللوجستيات الأوروبية وخدمة الشركاء',
    address: 'Munich, Bavaria, Germany',
    coordinates: '48.1371° N, 11.5754° E',
    lat: 48.1371,
    lng: 11.5754,
    timeZone: 'Europe/Berlin',
    roleEn: 'Central European commercial desk, sample parcel dispatch for restaurateurs, certified compliance, and regional wholesale accounts.',
    roleAr: 'المكتب التجاري لأوروبا، إرسال عينات التذوق المعتمدة للمطاعم والموزعين، ومتابعة العقود التجارية.',
    hoursEn: 'Mon – Fri: 09:00 – 18:00 (CET/CEST)',
    hoursAr: 'الاثنين – الجمعة: 09:00 – 18:00 (توقيت وسط أوروبا CET)',
    highlightEn: '48-hour tasting sample dispatch to verified chefs & specialty delis.',
    highlightAr: 'إرسال سريع لعينات التذوق خلال 48 ساعة للمطاعم والمتاجر المتخصصة.',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Munich+Bavaria+Germany',
    osmEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=11.5400%2C48.1150%2C11.6200%2C48.1600&layer=mapnik&marker=48.1371%2C11.5754',
  },
];

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const cp = t.contactPage;

  // Active Map Tab State
  const [activeLocationId, setActiveLocationId] = useState<'chebba' | 'munich'>('chebba');

  // Live Clocks State
  const [localTimes, setLocalTimes] = useState({
    chebba: '',
    munich: '',
    chebbaIsOpen: true,
    munichIsOpen: true,
  });

  // GPS Coordinates Copied State
  const [copiedCoords, setCopiedCoords] = useState<string | null>(null);

  // Email Copied State
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'wholesale',
    productInterest: 'all',
    destination: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Compute live local clocks for both locations
  useEffect(() => {
    const updateClocks = () => {
      try {
        const now = new Date();

        const chebbaFormatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Tunis',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        const munichFormatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Berlin',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });

        const chebbaTimeStr = chebbaFormatter.format(now);
        const munichTimeStr = munichFormatter.format(now);

        const chebbaHour = parseInt(chebbaTimeStr.split(':')[0], 10);
        const munichHour = parseInt(munichTimeStr.split(':')[0], 10);

        setLocalTimes({
          chebba: chebbaTimeStr,
          munich: munichTimeStr,
          chebbaIsOpen: chebbaHour >= 8 && chebbaHour < 17,
          munichIsOpen: munichHour >= 9 && munichHour < 18,
        });
      } catch {
        // Fallback
        setLocalTimes({
          chebba: '09:30',
          munich: '09:30',
          chebbaIsOpen: true,
          munichIsOpen: true,
        });
      }
    };

    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cp.emailValue);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyCoords = (coords: string, id: string) => {
    navigator.clipboard.writeText(coords);
    setCopiedCoords(id);
    setTimeout(() => setCopiedCoords(null), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'wholesale',
        productInterest: 'all',
        destination: '',
        subject: '',
        message: '',
      });
    }, 700);
  };

  const activeLocation = LOCATIONS_DATA.find((l) => l.id === activeLocationId) || LOCATIONS_DATA[0];

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen">
      {/* Editorial Header */}
      <section className="pt-10 pb-10 md:pt-14 md:pb-12 px-6 border-b border-primary-tan/30 bg-radial from-white via-[#fbf9f5] to-[#fbf9f5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
          >
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-px bg-primary-brown/40"></span>
              <span className="text-[11px] font-meta uppercase tracking-[0.2em] font-semibold text-primary-brown">
                {cp.heroBadge}
              </span>
              <span className="w-5 h-px bg-primary-brown/40"></span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display text-primary-dark leading-tight mb-3 font-semibold">
              {cp.heroTitlePart1}{' '}
              <span className="italic font-normal text-primary-forest">{cp.heroTitleHighlight}</span>{' '}
              {cp.heroTitlePart2}
            </h1>

            <p className="text-xs md:text-sm font-body text-primary-gray max-w-2xl mx-auto leading-relaxed">
              {cp.heroSubtitle}
            </p>

            {/* Live Operational Status Strip */}
            <div className="mt-6 pt-5 border-t border-primary-tan/20 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 border border-primary-tan/30 shadow-2xs">
                <span className={`w-2 h-2 rounded-full ${localTimes.chebbaIsOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <span className="font-medium text-primary-dark font-body">🇹🇳 Chebba Mill:</span>
                <span className="text-primary-forest font-semibold">{localTimes.chebba} GMT+1</span>
                <span className="text-[10px] uppercase font-meta text-primary-gray font-bold">
                  {localTimes.chebbaIsOpen ? (isRTL ? 'مفتوح' : 'Open') : (isRTL ? 'مغلق حالياً' : 'Closed')}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 border border-primary-tan/30 shadow-2xs">
                <span className={`w-2 h-2 rounded-full ${localTimes.munichIsOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <span className="font-medium text-primary-dark font-body">🇩🇪 Munich Office:</span>
                <span className="text-primary-forest font-semibold">{localTimes.munich} CET</span>
                <span className="text-[10px] uppercase font-meta text-primary-gray font-bold">
                  {localTimes.munichIsOpen ? (isRTL ? 'مفتوح' : 'Open') : (isRTL ? 'مغلق حالياً' : 'Closed')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-14 space-y-12">

        {/* SECTION 1: Personal Founder Access Card (Mazen Slama) */}
        <section className="bg-white border border-primary-tan/40 p-6 md:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Founder Portrait & Identity */}
            <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left rtl:sm:text-right">
              <div className="relative mb-4">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary-forest/30 shadow-sm p-1 bg-white">
                  <img
                    src="/assets/img/mazen.jpg"
                    alt="Mazen Slama - Founder & Managing Director"
                    className="w-full h-full object-cover object-top rounded-full"
                    onError={(e) => {
                      // Fallback if local image not found
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop';
                    }}
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active"></span>
              </div>

              <span className="text-[10px] font-meta uppercase font-bold tracking-widest text-primary-brown bg-primary-cream px-2 py-0.5 border border-primary-tan/30 mb-1">
                {cp.founderBadge}
              </span>
              <h2 className="text-lg md:text-xl font-display font-bold text-primary-dark">
                {cp.founderName}
              </h2>
              <p className="text-xs font-meta uppercase font-semibold tracking-wider text-primary-forest">
                {cp.founderRole}
              </p>
            </div>

            {/* Founder Statement & Direct Channels */}
            <div className="md:col-span-8 flex flex-col justify-between border-t md:border-t-0 md:border-l rtl:md:border-l-0 rtl:md:border-r border-primary-tan/20 pt-4 md:pt-0 md:pl-6 rtl:md:pr-6">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-meta uppercase tracking-wider font-semibold text-primary-brown">
                  <Sparkles className="w-3.5 h-3.5 text-primary-forest" />
                  <span>{cp.founderHeading}</span>
                </div>
                <blockquote className="text-xs md:text-sm font-body text-primary-dark/80 italic leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary-forest/40 pl-3 rtl:pr-3">
                  "{cp.founderQuote}"
                </blockquote>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="mt-5 pt-4 border-t border-primary-tan/20 flex flex-wrap items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/4915511269418?text=Hello%20Mazen%2C%20I%20am%20reaching%20out%20regarding%20Olive%20Chebba%20olive%20oil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-meta uppercase font-bold tracking-wider inline-flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp (+4915511269418)</span>
                  <ArrowUpRight className={isRTL ? "w-3 h-3 rotate-90" : "w-3 h-3"} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/mazen.slama.583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#1877F2] hover:bg-blue-700 text-white text-xs font-meta uppercase font-bold tracking-wider inline-flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Facebook Profile</span>
                  <ArrowUpRight className={isRTL ? "w-3 h-3 rotate-90" : "w-3 h-3"} />
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${cp.emailValue}`}
                  className="px-3.5 py-2 bg-primary-cream hover:bg-primary-tan/30 text-primary-dark text-xs font-meta uppercase font-bold tracking-wider inline-flex items-center gap-1.5 border border-primary-tan/40 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary-forest" />
                  <span>mazenslama79@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Authentic Interactive Locations & Live Maps */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-meta uppercase tracking-wider font-semibold text-primary-forest mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>{isRTL ? 'الخريطة والمواقع الميدانية' : 'Physical Mill & European Hub'}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-primary-dark">
                {cp.mapsHeading}
              </h2>
              <p className="text-xs font-body text-primary-gray mt-0.5">
                {cp.mapsSubheading}
              </p>
            </div>

            {/* Location Switcher Tabs */}
            <div className="inline-flex p-1 bg-white border border-primary-tan/40 shadow-2xs">
              {LOCATIONS_DATA.map((loc) => {
                const isActive = activeLocationId === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocationId(loc.id)}
                    className={`px-3.5 py-1.5 text-xs font-meta uppercase font-bold tracking-wider transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-primary-forest text-white shadow-2xs'
                        : 'text-primary-dark hover:text-primary-forest'
                    }`}
                  >
                    <span>{loc.id === 'chebba' ? '🇹🇳 Chebba, Tunisia' : '🇩🇪 Munich, Germany'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Map & Location Deep Dive */}
          <div className="bg-white border border-primary-tan/40 overflow-hidden shadow-xs">
            {/* Location Top Bar Info */}
            <div className="p-5 md:p-6 border-b border-primary-tan/30 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#fdfcf9]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-meta uppercase font-bold px-2 py-0.5 bg-primary-cream border border-primary-tan/30 text-primary-brown">
                    {isRTL ? activeLocation.badgeAr : activeLocation.badgeEn}
                  </span>
                  <span className="text-xs font-mono text-primary-forest font-semibold">
                    {activeLocation.coordinates}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-primary-dark">
                  {activeLocation.city},{' '}
                  <span className="font-normal text-primary-gray">{activeLocation.country}</span>
                </h3>
                <p className="text-xs font-body text-primary-gray flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary-forest shrink-0" />
                  <span className="font-medium text-primary-dark">{activeLocation.address}</span>
                </p>
              </div>

              {/* Action Buttons: Directions, Google Maps, Copy GPS */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleCopyCoords(activeLocation.coordinates, activeLocation.id)}
                  className="px-3 py-1.5 bg-white border border-primary-tan/40 hover:border-primary-forest text-primary-dark text-xs font-meta uppercase font-bold tracking-wider inline-flex items-center gap-1.5 transition-colors"
                  title="Copy Coordinates"
                >
                  {copiedCoords === activeLocation.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">{cp.coordinatesCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-primary-gray" />
                      <span>{cp.copyCoordinates}</span>
                    </>
                  )}
                </button>

                <a
                  href={activeLocation.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-primary-forest hover:bg-primary-dark text-white text-xs font-meta uppercase font-bold tracking-wider inline-flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <span>{cp.viewOnGoogleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Live Map & Contextual Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Live Interactive Map Frame */}
              <div className="lg:col-span-8 relative min-h-[360px] md:min-h-[420px] bg-slate-100 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-primary-tan/30">
                <iframe
                  title={`Map of ${activeLocation.city}, ${activeLocation.country}`}
                  src={activeLocation.osmEmbedUrl}
                  className="w-full h-full min-h-[360px] md:min-h-[420px] border-0"
                  loading="lazy"
                ></iframe>

                {/* Floating Map Watermark & Control Badge */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 border border-primary-tan/40 shadow-xs flex items-center gap-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-primary-forest"></div>
                  <span className="text-[11px] font-display font-semibold text-primary-dark">
                    Olive Chebba • {activeLocation.city}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 bg-white/95 backdrop-blur-xs px-2 py-1 text-[10px] font-mono text-primary-gray border border-primary-tan/30">
                  OpenStreetMap • Authentic GPS
                </div>
              </div>

              {/* Practical Operational Details */}
              <div className="lg:col-span-4 p-5 md:p-6 flex flex-col justify-between bg-white space-y-4">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-meta uppercase font-bold tracking-wider text-primary-brown block mb-1">
                      {isRTL ? 'الدور الميداني والتشغيلي' : 'Operational Focus'}
                    </span>
                    <p className="text-xs font-body text-primary-gray leading-relaxed">
                      {isRTL ? activeLocation.roleAr : activeLocation.roleEn}
                    </p>
                  </div>

                  <div className="p-3 bg-primary-cream/40 border border-primary-tan/30 space-y-2">
                    <div className="flex items-start gap-2 text-xs font-body text-primary-dark">
                      <Clock className="w-3.5 h-3.5 text-primary-forest shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">{isRTL ? 'أوقات العمل الميدانية:' : 'Working Hours:'}</span>
                        <span className="text-primary-gray text-[11px]">
                          {isRTL ? activeLocation.hoursAr : activeLocation.hoursEn}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs font-body text-primary-dark pt-2 border-t border-primary-tan/20">
                      <CalendarCheck className="w-3.5 h-3.5 text-primary-brown shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">{isRTL ? 'إرشادات الزيارة والعينات:' : 'Visit & Logistics Notice:'}</span>
                        <span className="text-primary-gray text-[11px]">
                          {isRTL ? activeLocation.highlightAr : activeLocation.highlightEn}
                        </span>
                      </div>
                    </div>
                  </div>

                  {activeLocation.id === 'chebba' ? (
                    <div className="text-[11px] font-body text-primary-gray/90 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-primary-dark">
                        <Truck className="w-3.5 h-3.5 text-primary-forest" />
                        <span>{isRTL ? 'اللوجستيات والشحن البحري' : 'Direct Maritime Freight'}</span>
                      </div>
                      <p className="text-[10px] leading-relaxed">
                        {isRTL 
                          ? 'شحن الحاويات المبردة والعادية عبر ميناء صفاقس وميناء رادس التجاري مباشرة إلى موانئ مرسيليا وجنوة وهامبورغ.'
                          : 'Reefer & dry container staging dispatched via Port of Sfax & Port of Rades directly to Mediterranean and European ports.'}
                      </p>
                    </div>
                  ) : (
                    <div className="text-[11px] font-body text-primary-gray/90 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-primary-dark">
                        <Package className="w-3.5 h-3.5 text-primary-forest" />
                        <span>{isRTL ? 'خدمة العينات والتوزيع السريع' : 'Fast Sample Service'}</span>
                      </div>
                      <p className="text-[10px] leading-relaxed">
                        {isRTL
                          ? 'توفير عبوات تجريبية معتمدة مع شهادات التحليل الكيميائي لنسبة الحموضة والبوليفينول للمشترين والموزعين في أوروبا.'
                          : 'Sample tasting kits with verified chemical lab analyses (acidity, peroxides, polyphenols) for culinary directors and wholesale buyers.'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-primary-tan/20">
                  <a
                    href={activeLocation.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-primary-cream hover:bg-primary-tan/30 text-primary-dark text-xs font-meta uppercase font-bold tracking-wider inline-flex items-center justify-center gap-1.5 border border-primary-tan/40 transition-colors"
                  >
                    <span>{cp.getDirections}</span>
                    <ArrowUpRight className={isRTL ? "w-3.5 h-3.5 rotate-90" : "w-3.5 h-3.5"} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Dual Location Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LOCATIONS_DATA.map((loc) => {
              const isSelected = activeLocationId === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`p-4 border transition-all cursor-pointer bg-white ${
                    isSelected 
                      ? 'border-primary-forest shadow-xs ring-1 ring-primary-forest/30' 
                      : 'border-primary-tan/40 hover:border-primary-forest/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-display font-bold text-primary-dark flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary-forest" />
                      {loc.city}, {loc.country}
                    </span>
                    <span className="text-[10px] font-mono text-primary-brown">
                      {loc.id === 'chebba' ? localTimes.chebba + ' GMT+1' : localTimes.munich + ' CET'}
                    </span>
                  </div>
                  <p className="text-[11px] font-body text-primary-gray truncate">
                    {loc.address}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: Direct Reach Channels (WhatsApp, Facebook, Email, Phone) */}
        <section>
          <div className="mb-5">
            <h2 className="text-lg md:text-xl font-display font-semibold text-primary-dark">
              {cp.directChannelsHeading}
            </h2>
            <p className="text-xs font-body text-primary-gray mt-0.5">
              {cp.directChannelsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/4915511269418?text=Hello%20Olive%20Chebba%2C%20I%20would%20like%20to%20inquire%20about%20your%20extra%20virgin%20olive%20oil."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: LUXURY_EASE }}
              className="bg-white border border-primary-tan/40 p-5 shadow-2xs hover:border-emerald-600/50 hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.216c-4.418 0-8 3.582-8 8 0 1.411.366 2.738 1.004 3.889l-1.066 3.899 3.993-1.048c1.111.606 2.383.96 3.738.96 4.418 0 8-3.582 8-8s-3.582-8-8-8z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-meta uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 tracking-wider">
                    {isRTL ? 'محادثة سريعة' : 'Direct Chat'}
                  </span>
                </div>

                <h3 className="text-sm font-display font-bold text-primary-dark mb-1">
                  {cp.whatsappLabel}
                </h3>
                <p className="text-xs font-mono text-primary-dark font-medium dir-ltr text-left rtl:text-right">
                  +4915511269418
                </p>
                <p className="text-[11px] font-body text-primary-gray mt-1 leading-relaxed">
                  {isRTL ? 'تواصل فوري لطلب العينات واستفسارات الأسعار' : 'Instant chat for tastings & wholesale queries'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-primary-tan/20 flex items-center justify-between text-xs font-meta uppercase font-bold text-emerald-700 group-hover:text-emerald-800 tracking-wider">
                <span>{isRTL ? 'فتح واتساب' : 'Open WhatsApp'}</span>
                <ArrowUpRight className={isRTL ? "w-3.5 h-3.5 rotate-90" : "w-3.5 h-3.5"} />
              </div>
            </motion.a>

            {/* Facebook Card */}
            <motion.a
              href="https://www.facebook.com/mazen.slama.583"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: LUXURY_EASE }}
              className="bg-white border border-primary-tan/40 p-5 shadow-2xs hover:border-[#1877F2]/50 hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1877F2] flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    <Facebook className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[10px] font-meta uppercase font-bold text-[#1877F2] bg-blue-50 px-2 py-0.5 tracking-wider">
                    {isRTL ? 'حساب الإدارة' : 'Founder Profile'}
                  </span>
                </div>

                <h3 className="text-sm font-display font-bold text-primary-dark mb-1">
                  {cp.facebookLabel}
                </h3>
                <p className="text-xs font-display font-semibold text-primary-dark truncate">
                  Mazen Slama
                </p>
                <p className="text-[11px] font-body text-primary-gray mt-1 leading-relaxed">
                  {isRTL ? 'تواصل مع المدير الإداري والمؤسس' : 'Official Facebook page & updates'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-primary-tan/20 flex items-center justify-between text-xs font-meta uppercase font-bold text-[#1877F2] tracking-wider">
                <span>{isRTL ? 'زيارة فيسبوك' : 'Open Facebook'}</span>
                <ArrowUpRight className={isRTL ? "w-3.5 h-3.5 rotate-90" : "w-3.5 h-3.5"} />
              </div>
            </motion.a>

            {/* Direct Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: LUXURY_EASE }}
              className="bg-white border border-primary-tan/40 p-5 shadow-2xs hover:border-primary-forest/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-cream text-primary-forest flex items-center justify-center group-hover:bg-primary-forest group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] font-meta uppercase font-bold text-primary-brown hover:text-primary-dark flex items-center gap-1 bg-primary-cream/60 px-2 py-0.5 border border-primary-tan/30 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">{isRTL ? 'تم النسخ' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{isRTL ? 'نسخ' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-sm font-display font-bold text-primary-dark mb-1">
                  {cp.emailLabel}
                </h3>
                <a
                  href={`mailto:${cp.emailValue}`}
                  className="text-xs font-mono text-primary-forest hover:underline break-all block"
                >
                  {cp.emailValue}
                </a>
                <p className="text-[11px] font-body text-primary-gray mt-1 leading-relaxed">
                  {isRTL ? 'لجميع المراسلات الرسمية والطلبات التجارية' : 'Direct inbox for contracts, quotes & requests'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-primary-tan/20 flex items-center justify-between text-xs font-meta uppercase font-bold text-primary-forest tracking-wider">
                <a href={`mailto:${cp.emailValue}`} className="hover:underline flex items-center gap-1">
                  <span>{isRTL ? 'إرسال بريد' : 'Compose Email'}</span>
                  <ArrowUpRight className={isRTL ? "w-3.5 h-3.5 rotate-90" : "w-3.5 h-3.5"} />
                </a>
              </div>
            </motion.div>

            {/* Direct Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: LUXURY_EASE }}
              className="bg-white border border-primary-tan/40 p-5 shadow-2xs hover:border-primary-forest/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-cream text-primary-brown flex items-center justify-center group-hover:bg-primary-brown group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-meta uppercase font-bold text-primary-brown bg-primary-cream px-2 py-0.5 tracking-wider">
                    {isRTL ? 'مباشر' : 'Direct'}
                  </span>
                </div>

                <h3 className="text-sm font-display font-bold text-primary-dark mb-1">
                  {cp.phoneLabel}
                </h3>
                <a
                  href={`tel:${cp.phoneValue}`}
                  className="text-xs font-mono text-primary-dark hover:text-primary-forest font-medium dir-ltr text-left rtl:text-right block"
                >
                  {cp.phoneValue}
                </a>
                <p className="text-[11px] font-body text-primary-gray mt-1 leading-relaxed">
                  {isRTL ? 'خط هاتفي مباشر لمتابعة الصفقات والشحن' : 'Direct line for logistics and customer care'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-primary-tan/20 flex items-center justify-between text-xs font-meta uppercase font-bold text-primary-forest tracking-wider">
                <a href={`tel:${cp.phoneValue}`} className="hover:underline flex items-center gap-1">
                  <span>{isRTL ? 'اتصال هاتفي' : 'Call Now'}</span>
                  <ArrowUpRight className={isRTL ? "w-3.5 h-3.5 rotate-90" : "w-3.5 h-3.5"} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Bespoke Consultation & Tasting Sample Inquiry Desk */}
        <section className="bg-white border border-primary-tan/40 p-6 md:p-10 shadow-xs">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-meta uppercase tracking-wider font-bold text-primary-brown block mb-1">
                {isRTL ? 'استفسار تجاري وعينات' : 'Trade Inquiries & Sample Allocations'}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                {cp.formHeading}
              </h2>
              <p className="text-xs md:text-sm font-body text-primary-gray leading-relaxed">
                {cp.formSubheading}
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-dark">
                  {cp.formSuccessTitle}
                </h3>
                <p className="text-xs md:text-sm font-body text-primary-gray max-w-md mx-auto leading-relaxed">
                  {cp.formSuccessDesc}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-primary-forest text-white text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-dark transition-colors"
                  >
                    {cp.sendAnotherBtn}
                  </button>
                  <a
                    href="https://wa.me/4915511269418?text=Hello%20Olive%20Chebba%2C%20I%20just%20submitted%20an%20inquiry%20via%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-emerald-600 text-emerald-700 text-xs font-meta uppercase font-bold tracking-wider hover:bg-emerald-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{isRTL ? 'متابعة عبر واتساب' : 'Follow up on WhatsApp'}</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {cp.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRTL ? 'مثال: كريم المنصوري' : 'e.g. Marc Lefèvre'}
                      className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {cp.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {cp.formPhone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 ... / +216 ..."
                      className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {cp.formInquiryType}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                    >
                      <option value="wholesale">{cp.inquiryTypes.wholesale}</option>
                      <option value="sample">{cp.inquiryTypes.sample}</option>
                      <option value="export">{cp.inquiryTypes.export}</option>
                      <option value="general">{cp.inquiryTypes.general}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {isRTL ? 'المنتج محل الاهتمام' : 'Oil of Interest'}
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                    >
                      <option value="all">{isRTL ? 'جميع الأصناف / تشكيلة متكاملة' : 'Full Portfolio / All Varieties'}</option>
                      <option value="bio">{isRTL ? 'بيو الشابة العضوي (Bio Extra Virgin)' : 'Chebba Bio Organic EVOO'}</option>
                      <option value="reserve">{isRTL ? 'احتياط الشابة التقليدي (Chebba Reserve)' : 'Chebba Reserve Conventional EVOO'}</option>
                      <option value="first_press">{isRTL ? 'العصرة الأولى المبكرة (Early Harvest)' : 'First Cold Press Early Harvest'}</option>
                      <option value="bulk">{isRTL ? 'شحنات الصهاريج والحاويات السائبة (Bulk Tank/IBC)' : 'Bulk Export (Tankers / Flexitanks)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {isRTL ? 'وجهة التسليم / الدولة' : 'Destination Port / Country'}
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder={isRTL ? 'مثال: ألمانيا، فرنسا، إيطاليا...' : 'e.g. Germany, France, UAE, USA...'}
                      className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                    {cp.formSubject}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isRTL ? 'مثال: طلب عينات زيت بيو للمطعم / استفسار كميات التصدير' : 'e.g. Tasting Sample Allocation for Restaurant Group'}
                    className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                    {cp.formMessage} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isRTL ? 'أخبرنا باحتياجاتك، الكميات التقريبية، وموقع التسليم...' : 'Please describe your culinary or retail requirements, estimated volume, and delivery timeline...'}
                    className="w-full p-2.5 text-xs font-body border border-primary-tan/60 bg-[#fbf9f5]/50 focus:border-primary-forest focus:outline-hidden transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-body text-primary-gray">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary-forest shrink-0" />
                    <span>{cp.responseTimeNote}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-2.5 bg-primary-forest text-white text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60 shadow-2xs"
                  >
                    {isSubmitting ? (
                      <span>{cp.formSendingBtn}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{cp.formSubmitBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
