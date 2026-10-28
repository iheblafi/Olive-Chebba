import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PageMetadata from './components/PageMetadata';
import ScrollProgressBar from './components/ScrollProgressBar';
import ReturnButton from './components/ReturnButton';
import { LanguageProvider } from './context/LanguageContext';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar />
      <ReturnButton variant="under-navbar" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Layout>
      <PageMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}
