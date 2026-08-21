'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Starfield from './Starfield';

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const heroHeight = heroRef.current.offsetHeight;
        setShowScrollIndicator(heroBottom > heroHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative z-10 flex items-center justify-center h-screen px-4 overflow-hidden">
      <Starfield />
      <div className="text-center max-w-2xl">
        <motion.img
          src="/logo.png"
          alt="Rave N Raga Logo"
          className="mx-auto mb-6 h-56 w-56 md:h-72 md:w-72 object-contain"
          initial={{ scale: 0.3, rotate: -540, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => setShowContent(true)}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ pointerEvents: showContent ? 'auto' : 'none' }}
        >
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4">Rave N Raga</h1>
          <p className="text-lg md:text-2xl mb-6 text-white">
            Creating space for sound, soul & connection 🎶<br />
            Raves, bands & everything in between in Kelowna.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/events" className="bg-[var(--color-accent)] text-[#1a0512] font-semibold py-2 px-6 rounded-full hover:brightness-110 transition">
              View Events
            </Link>
            <a
              href="https://www.instagram.com/rave.n.raga"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition hover:shadow-[0_0_10px_white]"
            >
              Follow us on Instagram
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm animate-bounce"
      >
        ↓ Scroll down
      </motion.div>
    </div>
  );
}
