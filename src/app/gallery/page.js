'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { galleryImages } from '@/data/gallery';
import { galleryEvents } from '@/data/galleryEvents';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-14">Gallery</h1>
        <Slider {...sliderSettings}>
          {galleryImages.map((img, idx) => (
            <div key={idx} className="px-3 relative">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img.src}
                  alt={`Gallery ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover cursor-pointer"
                  onClick={() => setLightboxImage(img.src)}
                />
                {img.credit && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                    📸 {img.credit}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>

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
