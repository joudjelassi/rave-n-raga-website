'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import SectionDivider from './SectionDivider';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

export default function EventRecap({ recap }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="relative h-[85vh] min-h-[520px] overflow-hidden">
        <motion.img
          src={recap.heroImage}
          alt={`${recap.seriesLabel} recap`}
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10102a] via-[#10102a]/30 to-[#10102a]/50" />
        <div className="relative z-10 h-full flex items-end max-w-6xl mx-auto px-6 pb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4">
              <span className="w-7 h-px bg-[var(--color-accent)]" />
              Event Recap
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.98]">
              {recap.theme}
              <br />
              <em className="italic font-medium text-[var(--color-accent)]">{recap.seriesLabel}</em>
            </h1>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-indigo-200">
              <span>📍 {recap.location}</span>
              <span>📅 {recap.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Recap intro */}
        <motion.section {...fadeUp} className="max-w-2xl mx-auto text-center mt-20">
          <p className="font-display italic font-medium text-xl md:text-2xl leading-snug mb-6 text-white">
            {recap.pullQuote}
          </p>
          <p className="text-indigo-100 leading-relaxed">{recap.recapText}</p>
        </motion.section>

        {/* Quick facts */}
        <motion.div
          {...fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden max-w-2xl mx-auto mt-12"
        >
          <div className="bg-[#1f1f2f] p-5 text-center">
            <div className="text-[11px] tracking-wider uppercase text-indigo-300 mb-1">Date</div>
            <div className="font-display font-semibold">{recap.date}</div>
          </div>
          <div className="bg-[#1f1f2f] p-5 text-center">
            <div className="text-[11px] tracking-wider uppercase text-indigo-300 mb-1">Venue</div>
            <div className="font-display font-semibold">{recap.location}</div>
          </div>
          <div className="bg-[#1f1f2f] p-5 text-center">
            <div className="text-[11px] tracking-wider uppercase text-indigo-300 mb-1">Doors</div>
            <div className="font-display font-semibold">{recap.doors}</div>
          </div>
          <div className="bg-[#1f1f2f] p-5 text-center">
            <div className="text-[11px] tracking-wider uppercase text-indigo-300 mb-1">Theme</div>
            <div className="font-display font-semibold">{recap.theme}</div>
          </div>
        </motion.div>

        <SectionDivider />

        {/* Lineup */}
        <motion.section {...fadeUp}>
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.18em] uppercase text-indigo-300">Behind the Decks</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mt-2">Who Played</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 max-w-2xl sm:max-w-none mx-auto">
            {recap.lineup.map((a) => (
              <div key={a.name} className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                {a.photo && (
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    onClick={() => setLightboxImage(a.photo)}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pt-10 pb-3 text-left pointer-events-none">
                  <div className="font-display font-semibold text-white">{a.name}</div>
                  {a.handle && <div className="text-sm text-[var(--color-accent)]">{a.handle}</div>}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <SectionDivider />

        {/* Featured artists */}
        <motion.section {...fadeUp}>
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.18em] uppercase text-indigo-300">Set the Scene</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mt-2">Featured Artists</h2>
          </div>
          <div className="flex flex-col gap-14">
            {recap.artists.map((artist) => (
              <div key={artist.name} className="text-center">
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-accent)] mb-1">{artist.medium}</div>
                <div className="font-display font-semibold text-2xl text-white mb-3">{artist.name}</div>
                {artist.description && (
                  <p className="text-sm text-indigo-100 leading-relaxed max-w-xl mx-auto mb-6">{artist.description}</p>
                )}
                <div
                  className={`grid gap-3 mx-auto ${artist.photos.length <= 2 ? 'max-w-sm' : 'max-w-xl'}`}
                  style={{ gridTemplateColumns: `repeat(${artist.photos.length}, minmax(0, 1fr))` }}
                >
                  {artist.photos.map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[4/5]">
                      <img
                        src={src}
                        alt={`${artist.name} artwork ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setLightboxImage(src)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <SectionDivider />
      </div>

      {/* Photo recap */}
      <motion.section {...fadeUp} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.18em] uppercase text-indigo-300">Shot by {recap.photographers.join(' & ')}</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl mt-2">The Night in Photos</h2>
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
          {recap.photos.map((photo, i) => (
            <div key={i} className="relative mb-3 break-inside-avoid rounded-xl overflow-hidden">
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                className="w-full block object-cover cursor-pointer"
                onClick={() => setLightboxImage(photo.src)}
              />
              {photo.credit && (
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded pointer-events-none">
                  📸 {photo.credit}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section {...fadeUp} className="max-w-2xl mx-auto px-6 text-center py-20">
        {recap.closingText && (
          <p className="text-indigo-100 leading-relaxed mb-8">{recap.closingText}</p>
        )}
        <p className="text-indigo-300 text-sm mb-7">All photos © {recap.photographers.join(' & ')}</p>
        <h3 className="font-display font-semibold text-2xl mb-6">Want the full album?</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={recap.galleryLink || '/gallery'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:brightness-110 transition"
          >
            View Full Gallery
          </a>
          <Link
            href="/events"
            className="px-6 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
          >
            Catch the Next Rhythm Room
          </Link>
        </div>
      </motion.section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </>
  );
}
