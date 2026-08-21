'use client';
import { useState } from 'react';
import { galleryImages } from '@/data/gallery';
import { galleryEvents } from '@/data/galleryEvents';

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-14">Gallery</h1>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative mb-3 break-inside-avoid rounded-xl overflow-hidden shadow-lg">
              <img
                src={img.src}
                alt={`Gallery ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full block object-cover cursor-pointer"
                onClick={() => setLightboxImage(img.src)}
              />
              {(img.event || img.credit) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-6 pb-2 text-left">
                  {img.event && (
                    <p className="text-white text-xs font-medium leading-tight">{img.event}</p>
                  )}
                  {img.credit && (
                    <p className="text-indigo-200 text-[11px] leading-tight">📸 {img.credit}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-20 mb-8">Event Albums</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {galleryEvents.map((event) =>
            event.dropboxUrl ? (
              <a
                key={event.title}
                href={event.dropboxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:brightness-110 transition"
              >
                {event.title}
              </a>
            ) : (
              <span
                key={event.title}
                className="px-6 py-2 rounded-full border border-white/30 text-white/60 font-medium cursor-not-allowed"
                title="Album link coming soon"
              >
                {event.title} — Coming Soon
              </span>
            )
          )}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
}
