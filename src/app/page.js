'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
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
      title: 'Social Nights',
      date: 'Every Other Friday',
      location: 'Unleashed Brewing',
      description: 'Rotating DJs, great drinks, 15% off for students — and yes, even your dog’s invited — the ultimate Friday night starts at Unleashing Brewing Co.',
      image: '/posters/social-nights.jpg',
    },
  ];
  const galleryImages = [
    {src: '/gallery/1.JPG', credit: null },
    {src: '/gallery/2.jpg', credit: null },
    {src: '/gallery/3.jpg', credit: null },
    {src: '/gallery/4.jpg', credit: "@truenorth_shots" },
    {src: '/gallery/5.jpg', credit: "@truenorth_shots" },
  ];
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

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050518] bg-opacity-70 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Rave n Raga Logo" className="h-20 w-20 object-contain" />
          <div className="text-lg font-bold tracking-wide">Rave n Raga</div>
        </div>
        <nav className="flex space-x-6 text-sm uppercase font-medium">
          <a href="#events" className="hover:text-indigo-400 transition">Events</a>
          <a href="#about" className="hover:text-indigo-400 transition">About Us</a>
          <a href="#gallery" className="hover:text-indigo-400 transition">Gallery</a>
        </nav>
      </div>
    </header>

    <main className="pt-20 relative bg-gradient-to-b from-[#050518] to-[#01010d] text-white overflow-x-hidden overflow-y-auto">
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
              Follow us on Instagram
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
      {/* About Us Section */}
       <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-indigo-100 leading-relaxed"
          >
            Rave n Raga is a creative collaboration between two individuals who have called Kelowna home for the past seven years. United by a shared mission to create space for sound, soul, and connection, we bring people together through the power of music and community. From high-energy raves to soul-stirring live bands, local markets, and community pop-ups, we create experiences that celebrate self-expression, belonging, and joy. Our events feature DJs, musicians, and vendors from the local scene — because supporting our creative community is at the core of everything we do. Whether it’s a dance floor under the stars or an intimate jam session, we’re here to make every moment unforgettable. 🫶
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
                className="bg-[#1f1f2f] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-700/30 transition transform hover:scale-105"
              >
                {/* Event Poster */}
                <img
                  src={event.image}
                  alt={`${event.title} poster`}
                  className="w-full h-120 object-cover"
                />

                {/* Info Box */}
                <div className="p-5 text-left flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-indigo-300 mb-4">{event.description}</p>

                  {/* Location */}
                  <div className="flex items-center text-sm text-[#AAAAFF] mb-2 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 2.828l4.243 4.243a8 8 0 11-11.314-11.314 8 8 0 0111.314 11.314z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-sm text-[#AAAAFF] mb-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>

                  {/* RSVP Button */}
                  {event.ticketLink ? (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block mt-auto px-5 py-2 rounded-full bg-white text-black font-medium text-center hover:bg-gray-200 transition"
                    >
                      Get Tickets
                    </a>
                  ) : (
                    <div className="w-full mt-auto px-5 py-2 rounded-full border border-white text-white text-center font-medium opacity-80">
                      No Cover
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section id="gallery" className="relative z-10 py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-14">Gallery</h2>
    <Slider {...sliderSettings}>
      {galleryImages.map((img, idx) => (
        <div key={idx} className="px-3 relative">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={img.src}
              alt={`Gallery ${idx + 1}`}
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
  </> 
  );
}