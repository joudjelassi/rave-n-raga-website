'use client';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
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
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const sampleEvents = [
    {
      title: 'Neon Pulse',
      date: 'August 31, 2025',
      location: 'Kelowna Warehouse',
      description: 'A night of hypnotic beats, lasers, and bass drops. Kick off the vibe with a bang.',
    },
    {
      title: 'Ambient Flow',
      date: 'September 14, 2025',
      location: 'Downtown Rooftop',
      description: 'Chill ambient grooves under the stars with a view of the city skyline.',
    },
    {
      title: 'Bass Ritual',
      date: 'October 5, 2025',
      location: 'Underground Hall',
      description: 'Dark techno and bass-heavy sets. Enter the ritual zone.',
    },
  ];
  return (
    <main className="relative bg-gradient-to-b from-[#050518] to-[#01010d] text-white overflow-x-hidden overflow-y-auto">
      {/* Starfield Layer */}
      <div className="starfield">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: `${0.5 + Math.random() * 0.5}`,
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div ref={heroRef} className="relative z-10 flex items-center justify-center h-screen px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Rave n Raga</h1>
          <p className="text-lg md:text-2xl mb-6 text-[#B0B0FF]">
            Creating space for sound, soul & connection 🎶<br />
            Raves, bands & everything in between in Kelowna.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#events" className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-600 transition">View Events</a>
            <a
              href="https://www.instagram.com/rave.n.raga"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition hover:shadow-[0_0_10px_white]"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
        <motion.div
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm animate-bounce"
        >
          ↓ Scroll down
        </motion.div>
      </div>
      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Rave n Raga</h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-indigo-100 leading-relaxed">
            Rave n Raga is Kelowna’s homegrown hub for underground sound and connection.
            Whether you're vibing to EDM drops or chilling to ambient melodies, we bring people
            together through unforgettable music events, immersive lightshows, and a vibrant
            local scene.
          </motion.p>
        </div>
      </section>
      <section id="events" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Upcoming Events</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sampleEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1f1f2f] to-[#121220] rounded-2xl p-6 shadow-lg hover:shadow-indigo-700/30 transition group relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 bg-indigo-500/20 w-24 h-24 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-indigo-300 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-[#AAAAFF] mb-2 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 2.828l4.243 4.243a8 8 0 11-11.314-11.314 8 8 0 0111.314 11.314z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-[#AAAAFF] mb-6 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <button className="w-full mt-auto px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                    RSVP Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery" className="relative z-10 py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-14">Gallery</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <div key={id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <button
            onClick={() => setLightboxImage(`https://picsum.photos/seed/rave${id}/1200/900`)}
            className="w-full"
          >
            <img
              src={`https://picsum.photos/seed/rave${id}/800/600`}
              alt={`Event ${id}`}
              className="w-full h-60 object-cover"
              loading="lazy"
            />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Join the Community Section */}
      <section id="community" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">Join the Community</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-gradient-to-br from-[#1f1f2f] to-[#121220] rounded-2xl p-6 shadow-lg hover:shadow-indigo-700/30 transition group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 bg-indigo-500/20 w-24 h-24 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-xl font-semibold mb-2 text-white">Follow us on Instagram</h3>
                <p className="text-sm text-indigo-300 mb-6">Stay updated with event teasers, aftermovies, and behind-the-scenes moments.</p>
                <a
                  href="https://www.instagram.com/rave.n.raga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  Follow @rave.n.raga
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1f1f2f] to-[#121220] rounded-2xl p-6 shadow-lg hover:shadow-indigo-700/30 transition group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 bg-indigo-500/20 w-24 h-24 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-xl font-semibold mb-2 text-white">Join the WhatsApp Group</h3>
                <p className="text-sm text-indigo-300 mb-6">Get exclusive invites, community updates, and early access to tickets.</p>
                <a
                  href="#"
                  className="inline-block bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}

      {/* Location / Venue Section */}
      <section id="venue" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Venue</h2>
          <p className="text-lg text-indigo-100 mb-6">
            All events are hosted at our main venue:
          </p>
          <h3 className="text-xl font-semibold text-white mb-2">Unleashed Brewing</h3>
          <p className="text-md text-indigo-300 mb-6">880 Clement Ave, Kelowna, BC V1Y 7E2</p>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Unleashed+Brewing,+880+Clement+Ave,+Kelowna,+BC&output=embed"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px] border-0 rounded-lg"
            ></iframe>
          </div>
          {/* Venue Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipM0JRDqNFRhSgSnz1sAyLoNe5J3Rl1kya-FYoEv=w800-h600-k-no"
              alt="Unleashed Brewing interior"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipPf-vp2zRbiAdZgvJHY4vutlBvEkOWcbxruMnU3=w800-h600-k-no"
              alt="Unleashed Brewing bar view"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <footer className="relative z-10 bg-[#0d0d1a] text-white py-10 px-6 border-t border-indigo-900 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold">Rave n Raga</h3>
            <p className="text-sm text-indigo-300">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/rave.n.raga"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              Instagram
            </a>
            <a
              href="mailto:info@ravenraga.com"
              className="hover:text-indigo-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}