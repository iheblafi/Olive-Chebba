import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  Star, 
  Newspaper, 
  FileText, 
  CheckCircle, 
  PlusCircle, 
  ArrowRight, 
  Quote, 
  Lightbulb, 
  Mail, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  Heart,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BlogArticle, ClientReview, NewsItem } from '../lib/translations';

const LUXURY_EASE = [0.25, 0.1, 0.25, 1.0] as const;

type ActiveTab = 'reviews' | 'news' | 'articles';

export default function Blog() {
  const { t, isRTL } = useLanguage();
  const bp = t.blogPage;

  // Trimmed to 3 distinct, uncluttered views. Default to client reviews & voices as requested.
  const [activeTab, setActiveTab] = useState<ActiveTab>('reviews');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Client reviews list (initialized from translations, can be appended to)
  const [communityReviews, setCommunityReviews] = useState<ClientReview[]>(bp.reviews);

  // Review form state
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: '',
    location: '',
    oilChosen: 'Chebba Bio Extra Virgin',
    rating: 5,
    quote: '',
    whatTheyLove: '',
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return bp.articles;
    return bp.articles.filter((a: BlogArticle) => 
      a.title.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }, [bp.articles, searchQuery]);

  // Filtered Reviews
  const filteredReviews = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return communityReviews;
    return communityReviews.filter((r: ClientReview) => 
      r.name.toLowerCase().includes(q) ||
      r.role.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.quote.toLowerCase().includes(q) ||
      r.whatTheyLove.toLowerCase().includes(q) ||
      r.oilChosen.toLowerCase().includes(q)
    );
  }, [communityReviews, searchQuery]);

  // Filtered News
  const filteredNews = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return bp.news;
    return bp.news.filter((n: NewsItem) => 
      n.title.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.categoryLabel.toLowerCase().includes(q)
    );
  }, [bp.news, searchQuery]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.name && reviewForm.quote) {
      const newReview: ClientReview = {
        id: `review-${Date.now()}`,
        name: reviewForm.name,
        role: reviewForm.role || (isRTL ? 'محب لزيت الزيتون' : 'Olive Oil Enthusiast'),
        location: reviewForm.location || (isRTL ? 'تونس' : 'Tunisia'),
        date: isRTL ? 'الآن' : 'Just now',
        rating: reviewForm.rating,
        oilChosen: reviewForm.oilChosen,
        quote: reviewForm.quote,
        whatTheyLove: reviewForm.whatTheyLove || reviewForm.quote.slice(0, 80),
        verifiedPurchase: true,
      };

      setCommunityReviews([newReview, ...communityReviews]);
      setReviewSubmitted(true);
      setTimeout(() => {
        setReviewSubmitted(false);
        setIsReviewModalOpen(false);
        setReviewForm({
          name: '',
          role: '',
          location: '',
          oilChosen: 'Chebba Bio Extra Virgin',
          rating: 5,
          quote: '',
          whatTheyLove: '',
        });
      }, 1500);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen">
      {/* Editorial Header - Airy & Breathable */}
      <section className="pt-10 pb-8 md:pt-14 md:pb-10 px-6 border-b border-primary-tan/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
          >
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-5 h-px bg-primary-brown/40"></span>
              <span className="text-[11px] font-meta uppercase tracking-[0.2em] font-semibold text-primary-brown">
                {bp.heroBadge}
              </span>
              <span className="w-5 h-px bg-primary-brown/40"></span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display text-primary-dark leading-tight mb-3 font-semibold">
              {bp.heroTitlePart1}{' '}
              <span className="italic font-normal text-primary-forest">{bp.heroTitleHighlight}</span>
            </h1>

            <p className="text-xs md:text-sm font-body text-primary-gray max-w-xl mx-auto leading-relaxed">
              {bp.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Streamlined Navigation Tabs & Quick Search */}
      <section className="px-6 bg-white/90 backdrop-blur-md border-b border-primary-tan/30 sticky top-16 md:top-20 z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-2.5">
          {/* Focused Tabs (Pill-Free, Minimalist Underline Style) */}
          <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-3 py-2 text-xs font-meta uppercase tracking-wider font-semibold transition-all relative flex items-center gap-1.5 shrink-0 ${
                activeTab === 'reviews'
                  ? 'text-primary-forest font-bold'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${activeTab === 'reviews' ? 'text-primary-forest' : 'text-primary-gray/60'}`} />
              <span>{bp.tabReviews}</span>
              <span className="text-[10px] opacity-75 font-mono">({communityReviews.length})</span>
              {activeTab === 'reviews' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-forest"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab('news')}
              className={`px-3 py-2 text-xs font-meta uppercase tracking-wider font-semibold transition-all relative flex items-center gap-1.5 shrink-0 ${
                activeTab === 'news'
                  ? 'text-primary-brown font-bold'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              <Newspaper className={`w-3.5 h-3.5 ${activeTab === 'news' ? 'text-primary-brown' : 'text-primary-gray/60'}`} />
              <span>{bp.tabNews}</span>
              <span className="text-[10px] opacity-75 font-mono">({bp.news.length})</span>
              {activeTab === 'news' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-brown"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab('articles')}
              className={`px-3 py-2 text-xs font-meta uppercase tracking-wider font-semibold transition-all relative flex items-center gap-1.5 shrink-0 ${
                activeTab === 'articles'
                  ? 'text-primary-dark font-bold'
                  : 'text-primary-gray hover:text-primary-dark'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${activeTab === 'articles' ? 'text-primary-dark' : 'text-primary-gray/60'}`} />
              <span>{bp.tabArticles}</span>
              <span className="text-[10px] opacity-75 font-mono">({bp.articles.length})</span>
              {activeTab === 'articles' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-dark"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          </div>

          {/* Minimal Search Field */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-primary-gray/60 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={bp.searchPlaceholder}
              className="w-full pl-8 rtl:pl-3 rtl:pr-8 pr-3 py-1.5 text-xs font-body text-primary-dark bg-primary-cream/40 border border-primary-tan/50 focus:outline-hidden focus:border-primary-forest transition-colors placeholder:text-primary-gray/50 rounded-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 rtl:right-auto rtl:left-2 top-1/2 -translate-y-1/2 text-primary-gray hover:text-primary-dark"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area - Displaying One Focused Section At A Time */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        {/* VIEW 1: CLIENT REVIEWS & WHAT THEY LOVE */}
        {activeTab === 'reviews' && (
          <div>
            {/* Clean Section Top Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-primary-tan/30">
              <div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-primary-dark">
                  {bp.reviewsHeading}
                </h2>
                <p className="text-xs font-body text-primary-gray mt-0.5">
                  {bp.reviewsSubheading}
                </p>
              </div>

              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary-forest text-white text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-dark transition-colors shrink-0 shadow-2xs"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{bp.shareExperienceBtn}</span>
              </button>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="text-center py-12 bg-white border border-primary-tan/40 p-6">
                <p className="text-xs font-body text-primary-gray">
                  {isRTL ? 'لم يتم العثور على آراء مطابقة للبحث' : 'No client reviews matched your search.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((rev: ClientReview) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: LUXURY_EASE }}
                    className="bg-white border border-primary-tan/35 p-5 md:p-6 shadow-2xs flex flex-col justify-between hover:border-primary-forest/40 transition-colors"
                  >
                    <div>
                      {/* Top: Stars & Subtle Verified Status */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-0.5 text-primary-oil">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>

                        {rev.verifiedPurchase && (
                          <span className="flex items-center gap-1 text-[10px] font-meta text-primary-forest font-semibold uppercase tracking-wider">
                            <CheckCircle className="w-3 h-3" />
                            <span>{bp.verifiedClientLabel}</span>
                          </span>
                        )}
                      </div>

                      {/* Main Quote */}
                      <p className="text-xs md:text-sm font-display italic text-primary-dark leading-relaxed mb-4">
                        "{rev.quote}"
                      </p>

                      {/* What They Love - Sleek & Unboxed */}
                      <div className="mb-4 pt-3 border-t border-primary-tan/20">
                        <span className="text-[10px] font-meta uppercase font-bold text-primary-brown tracking-wider block mb-1">
                          {bp.whatPeopleLoveLabel}
                        </span>
                        <p className="text-xs font-body text-primary-dark/85 leading-relaxed">
                          {rev.whatTheyLove}
                        </p>
                      </div>
                    </div>

                    {/* Author & Preferred Oil */}
                    <div className="pt-3 border-t border-primary-tan/25 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-xs font-display font-bold text-primary-dark truncate">
                          {rev.name}
                        </h3>
                        <p className="text-[11px] font-body text-primary-gray truncate">
                          {rev.role} · {rev.location}
                        </p>
                      </div>

                      <span className="text-[10px] font-meta uppercase tracking-wider text-primary-forest font-medium shrink-0 bg-primary-cream/80 px-2 py-0.5 border border-primary-tan/30">
                        {rev.oilChosen}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: ESTATE NEWS & MILL DISPATCHES */}
        {activeTab === 'news' && (
          <div>
            <div className="mb-8 pb-4 border-b border-primary-tan/30">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary-dark">
                {bp.newsHeading}
              </h2>
              <p className="text-xs font-body text-primary-gray mt-0.5">
                {bp.newsSubheading}
              </p>
            </div>

            {filteredNews.length === 0 ? (
              <div className="text-center py-12 bg-white border border-primary-tan/40 p-6">
                <p className="text-xs font-body text-primary-gray">
                  {isRTL ? 'لم يتم العثور على أخبار مطابقة' : 'No news items matched your search.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((newsItem: NewsItem) => (
                  <motion.article
                    key={newsItem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: LUXURY_EASE }}
                    onClick={() => setSelectedNews(newsItem)}
                    className="bg-white border border-primary-tan/35 shadow-2xs overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-primary-forest/40 transition-colors"
                  >
                    <div>
                      <div className="relative overflow-hidden h-40 w-full bg-primary-cream">
                        <img
                          src={newsItem.image}
                          alt={newsItem.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5">
                          <span className="px-2 py-0.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-meta uppercase tracking-wider font-semibold">
                            {newsItem.categoryLabel}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <span className="text-[10px] font-body text-primary-gray block mb-1">
                          {newsItem.date}
                        </span>
                        <h3 className="text-sm md:text-base font-display font-bold text-primary-dark leading-snug mb-2 group-hover:text-primary-forest transition-colors line-clamp-2">
                          {newsItem.title}
                        </h3>
                        <p className="text-xs font-body text-primary-gray leading-relaxed line-clamp-2">
                          {newsItem.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center justify-between text-xs font-meta uppercase font-bold text-primary-forest tracking-wider">
                      <span>{isRTL ? 'اقرأ البيان' : 'Read Dispatch'}</span>
                      <ArrowUpRight className={isRTL ? "w-3 h-3 rotate-90" : "w-3 h-3"} />
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: HARVEST ARTICLES & GUIDES */}
        {activeTab === 'articles' && (
          <div>
            <div className="mb-8 pb-4 border-b border-primary-tan/30">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary-dark">
                {bp.articlesHeading}
              </h2>
              <p className="text-xs font-body text-primary-gray mt-0.5">
                {bp.articlesSubheading}
              </p>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12 bg-white border border-primary-tan/40 p-6">
                <p className="text-xs font-body text-primary-gray">
                  {isRTL ? 'لم يتم العثور على مقالات مطابقة' : 'No articles matched your search.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article: BlogArticle) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: LUXURY_EASE }}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-white border border-primary-tan/35 shadow-2xs overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-primary-forest/40 transition-colors"
                  >
                    <div>
                      <div className="relative overflow-hidden h-44 w-full bg-primary-cream">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-1.5 text-[10px] text-primary-gray mb-1.5 font-body">
                          <span className="font-meta uppercase tracking-wider font-bold text-primary-brown">
                            {article.categoryLabel}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3 className="text-sm md:text-base font-display font-bold text-primary-dark leading-snug mb-2 group-hover:text-primary-forest transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-xs font-body text-primary-gray leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0 border-t border-primary-tan/20 flex items-center justify-between text-xs font-meta uppercase font-bold tracking-wider text-primary-forest group-hover:text-primary-dark transition-colors mt-2">
                      <span className="text-[10px] font-body text-primary-gray font-normal">
                        {article.publishDate}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span>{bp.readArticle}</span>
                        <ArrowRight className={isRTL ? "w-3 h-3 rotate-180" : "w-3 h-3"} />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Streamlined Closing Band: Lightweight Newsletter & Direct Action */}
      <section className="border-t border-primary-tan/30 bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left rtl:md:text-right">
            <span className="text-[11px] font-meta uppercase tracking-wider font-bold text-primary-brown block mb-1">
              {bp.newsletterTag}
            </span>
            <h3 className="text-lg md:text-xl font-display font-bold text-primary-dark mb-1">
              {bp.newsletterTitle}
            </h3>
            <p className="text-xs font-body text-primary-gray leading-relaxed">
              {bp.newsletterDesc}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {newsletterSubmitted ? (
              <div className="px-4 py-2 bg-primary-forest/10 border border-primary-forest/30 flex items-center gap-2 text-primary-forest text-xs font-body">
                <Check className="w-4 h-4" />
                <span>{bp.newsletterSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-primary-gray/60 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={bp.newsletterPlaceholder}
                    className="w-full sm:w-60 pl-8 rtl:pl-3 rtl:pr-8 pr-3 py-2 text-xs font-body text-primary-dark bg-primary-cream/30 border border-primary-tan/50 focus:outline-hidden focus:border-primary-forest transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-forest text-white font-meta uppercase font-bold text-xs tracking-wider hover:bg-primary-dark transition-colors shrink-0"
                >
                  {bp.newsletterButton}
                </button>
              </form>
            )}

            <div className="mt-3 flex items-center justify-center md:justify-start rtl:md:justify-end gap-3 text-xs font-body text-primary-gray">
              <span>{isRTL ? 'مهتم بالطلب؟' : 'Looking for oils?'}</span>
              <Link to="/solutions" className="text-primary-forest font-semibold hover:underline">
                {bp.ctaButton}
              </Link>
              <span>·</span>
              <Link to="/contact" className="hover:text-primary-dark">
                {bp.ctaSampleButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL 1: Interactive Review Submission Modal */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReviewModalOpen(false)}
              className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="relative w-full max-w-lg bg-white border border-primary-tan/50 shadow-xl z-10 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-primary-tan/30">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-dark">
                    {bp.submitReviewTitle}
                  </h3>
                  <p className="text-xs font-body text-primary-gray mt-0.5">
                    {bp.submitReviewSubtitle}
                  </p>
                </div>
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="text-primary-gray hover:text-primary-dark p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {reviewSubmitted ? (
                <div className="py-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary-forest/10 text-primary-forest flex items-center justify-center mx-auto mb-2.5">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-display font-bold text-primary-dark mb-1">
                    {isRTL ? 'تم استلام رأيك بنجاح!' : 'Review Submitted Successfully!'}
                  </h4>
                  <p className="text-xs font-body text-primary-gray">
                    {bp.formSuccess}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                        {bp.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewForm.name}
                        onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                        placeholder={isRTL ? 'مثال: سامي الجلاصي' : 'e.g. Thomas Keller'}
                        className="w-full p-2 text-xs font-body border border-primary-tan/60 bg-primary-cream/20 focus:border-primary-forest focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                        {bp.formRole}
                      </label>
                      <input
                        type="text"
                        value={reviewForm.role}
                        onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                        placeholder={isRTL ? 'مثال: رئيس طهاة / هاوي طبخ' : 'e.g. Chef / Food Enthusiast'}
                        className="w-full p-2 text-xs font-body border border-primary-tan/60 bg-primary-cream/20 focus:border-primary-forest focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                        {bp.formLocation}
                      </label>
                      <input
                        type="text"
                        value={reviewForm.location}
                        onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                        placeholder={isRTL ? 'تونس / باريس / لندن' : 'e.g. London, UK'}
                        className="w-full p-2 text-xs font-body border border-primary-tan/60 bg-primary-cream/20 focus:border-primary-forest focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                        {bp.formOil}
                      </label>
                      <select
                        value={reviewForm.oilChosen}
                        onChange={(e) => setReviewForm({ ...reviewForm, oilChosen: e.target.value })}
                        className="w-full p-2 text-xs font-body border border-primary-tan/60 bg-primary-cream/20 focus:border-primary-forest focus:outline-hidden"
                      >
                        <option value="Chebba Bio Extra Virgin">Chebba Bio Extra Virgin (Organic)</option>
                        <option value="Chebba Reserve Conventional">Chebba Reserve Conventional Premium</option>
                        <option value="Chebba First Press">Chebba First Press (Early Harvest)</option>
                        <option value="Chebba Gold Heritage Blend">Chebba Gold Heritage Blend</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {bp.formRating}
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                          className="p-0.5 text-primary-oil hover:scale-110 transition-transform"
                        >
                          <Star className={`w-4 h-4 ${star <= reviewForm.rating ? 'fill-current' : 'text-primary-tan'}`} />
                        </button>
                      ))}
                      <span className="text-xs font-meta font-bold text-primary-gray ml-2 rtl:ml-0 rtl:mr-2">
                        {reviewForm.rating} / 5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {bp.formReview} *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={reviewForm.quote}
                      onChange={(e) => setReviewForm({ ...reviewForm, quote: e.target.value })}
                      placeholder={isRTL ? 'صف تجربتك مع الزيت، النكهة، ورائحة البستان عند فتح القارورة...' : 'Share your tasting experience with Olive Chebba...'}
                      className="w-full p-2 text-xs font-body border border-primary-tan/60 bg-primary-cream/20 focus:border-primary-forest focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-meta uppercase font-bold text-primary-dark block mb-1">
                      {bp.formWhatTheyLove}
                    </label>
                    <input
                      type="text"
                      value={reviewForm.whatTheyLove}
                      onChange={(e) => setReviewForm({ ...reviewForm, whatTheyLove: e.target.value })}
                      placeholder={isRTL ? 'مثال: التوازن الفريد بين المرارة الخفيفة ورائحة الخرشوف الطازج' : 'e.g. The intense peppery aroma and low acidity'}
                      className="w-full p-2 text-xs font-body border border-primary-tan/60 bg-primary-cream/20 focus:border-primary-forest focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2 border-t border-primary-tan/30 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsReviewModalOpen(false)}
                      className="px-3 py-1.5 border border-primary-tan text-primary-gray hover:text-primary-dark text-xs font-meta uppercase font-bold tracking-wider"
                    >
                      {bp.formCancelBtn}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-1.5 bg-primary-forest text-white text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-dark transition-colors"
                    >
                      {bp.formSubmitBtn}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: News Dispatch Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="relative w-full max-w-xl bg-white border border-primary-tan/50 shadow-xl z-10 p-5 md:p-7 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-primary-tan/30">
                <div className="flex items-center gap-2 text-xs font-meta text-primary-brown font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-primary-oil" />
                  <span>{selectedNews.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-primary-gray font-normal">{selectedNews.date}</span>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-primary-gray hover:text-primary-dark p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative overflow-hidden h-52 w-full mb-4">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h2 className="text-lg md:text-xl font-display font-bold text-primary-dark mb-3">
                {selectedNews.title}
              </h2>

              <div className="space-y-2.5 mb-5">
                {selectedNews.content.map((p, idx) => (
                  <p key={idx} className="text-xs md:text-sm font-body text-primary-dark leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-3 border-t border-primary-tan/30 flex items-center justify-between">
                <span className="text-[11px] font-body text-primary-gray">
                  Olive Chebba Official Estate Press
                </span>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-3.5 py-1.5 bg-primary-dark text-white text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-forest transition-colors"
                >
                  {bp.closeArticle}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 3: Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="relative w-full max-w-2xl bg-white border border-primary-tan/50 shadow-xl z-10 my-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-2.5 border-b border-primary-tan/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-meta text-primary-brown font-bold uppercase tracking-wider">
                  <span>{selectedArticle.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-primary-gray font-normal">{selectedArticle.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-meta uppercase font-bold tracking-wider text-primary-gray hover:text-primary-dark transition-colors"
                >
                  <span>{bp.closeArticle}</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-5 md:p-8">
                <div className="relative overflow-hidden h-52 sm:h-64 w-full mb-6">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h1 className="text-xl md:text-3xl font-display font-bold text-primary-dark leading-tight mb-2">
                  {selectedArticle.title}
                </h1>

                <p className="text-sm md:text-base font-display italic text-primary-forest leading-relaxed mb-5">
                  {selectedArticle.subtitle}
                </p>

                <div className="flex items-center justify-between py-3 border-y border-primary-tan/30 mb-6">
                  <div>
                    <span className="text-xs font-display font-bold text-primary-dark block">
                      {selectedArticle.author}
                    </span>
                    <span className="text-[11px] font-body text-primary-gray">
                      {selectedArticle.authorRole}
                    </span>
                  </div>

                  <div className="text-right rtl:text-left text-xs font-body text-primary-gray">
                    <span>{selectedArticle.publishDate}</span>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="p-3.5 bg-primary-cream/60 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary-forest mb-6">
                  <div className="flex items-center gap-1 text-xs font-meta uppercase font-bold tracking-wider text-primary-forest mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{bp.keyTakeawaysLabel}</span>
                  </div>
                  <p className="text-xs font-body text-primary-dark leading-relaxed">
                    {selectedArticle.keyTakeaway}
                  </p>
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-3.5 mb-6">
                  {selectedArticle.paragraphs.map((p: string, pIdx: number) => (
                    <p 
                      key={pIdx} 
                      className="text-xs md:text-sm font-body text-primary-dark leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {selectedArticle.pullQuote && (
                  <div className="my-6 p-4 bg-primary-cream/30 border border-primary-tan/40">
                    <Quote className="w-5 h-5 text-primary-oil mb-1.5 opacity-80" />
                    <blockquote className="text-sm md:text-base font-display italic text-primary-dark leading-relaxed mb-2">
                      "{selectedArticle.pullQuote.text}"
                    </blockquote>
                    <cite className="text-[11px] font-meta uppercase font-bold text-primary-brown tracking-wider block not-italic">
                      — {selectedArticle.pullQuote.attribution}
                    </cite>
                  </div>
                )}

                {selectedArticle.practicalTip && (
                  <div className="my-5 p-3.5 bg-white border border-primary-tan/40 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary-oil/20 text-primary-brown flex items-center justify-center shrink-0 mt-0.5">
                      <Lightbulb className="w-3 h-3" />
                    </span>
                    <div>
                      <strong className="text-[11px] font-meta uppercase font-bold text-primary-dark tracking-wider block mb-0.5">
                        {selectedArticle.practicalTip.label}
                      </strong>
                      <p className="text-xs font-body text-primary-gray leading-relaxed">
                        {selectedArticle.practicalTip.advice}
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-primary-tan/30 flex flex-wrap items-center gap-1.5 mb-6">
                  <span className="text-[11px] font-meta uppercase text-primary-gray font-bold tracking-wider">
                    {isRTL ? 'المواضيع:' : 'Topics:'}
                  </span>
                  {selectedArticle.tags.map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-primary-cream text-primary-dark border border-primary-tan/30 text-[11px] font-body"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="p-4 bg-primary-cream/50 border border-primary-tan/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-display font-bold text-primary-dark">
                      {isRTL ? 'تذوق نقاء زيت الزيتون من معصرتنا' : 'Taste the Purity of Chebba Olive Oil'}
                    </h4>
                    <p className="text-[11px] font-body text-primary-gray">
                      {isRTL ? 'اكتشف أصنافنا واطلب عينة لمطبخك' : 'Discover our varieties or request tasting samples.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to="/solutions"
                      onClick={() => setSelectedArticle(null)}
                      className="px-3 py-1.5 bg-primary-forest text-white text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-dark transition-colors"
                    >
                      {isRTL ? 'الأصناف' : 'Solutions'}
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setSelectedArticle(null)}
                      className="px-3 py-1.5 border border-primary-dark text-primary-dark text-xs font-meta uppercase font-bold tracking-wider hover:bg-primary-dark hover:text-white transition-colors"
                    >
                      {isRTL ? 'اتصل بنا' : 'Contact'}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
