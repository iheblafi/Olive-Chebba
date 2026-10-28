import { motion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ScrollProgressBar() {
  const { isRTL } = useLanguage();
  const { scrollYProgress } = useScroll();

  // Smooth out scroll progression using spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] pointer-events-none overflow-hidden bg-primary-tan/10"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-primary-forest via-[#426c55] to-primary-brown rtl:bg-gradient-to-l shadow-[0_0_8px_rgba(42,74,59,0.4)]"
        style={{
          scaleX,
          transformOrigin: isRTL ? 'right' : 'left',
        }}
      />
    </div>
  );
}
