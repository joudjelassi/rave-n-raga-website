'use client';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/SectionDivider';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative z-10 pt-24 pb-12 px-6 text-center">
        <motion.h1 {...fadeUp} className="font-display text-3xl md:text-4xl font-bold">
          About Us
        </motion.h1>
      </section>

      {/* Our Story */}
      <section className="relative z-10 py-12 px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-indigo-100 leading-relaxed">
            Rave N Raga is a creative collaboration between two individuals who have called Kelowna home for the past seven years. What started as a shared love of music and community grew into a mission to bring people together — through high-energy raves, soul-stirring live bands, local markets, and community pop-ups across the city.
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Our Mission */}
      <section className="relative z-10 py-12 px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-indigo-100 leading-relaxed">
            We create space for sound, soul, and connection. Every event we throw is designed to celebrate self-expression, belonging, and joy — whether it’s a dance floor under the stars or an intimate jam session. We’re here to make every moment unforgettable. 🫶
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Our Team */}
      <section className="relative z-10 py-12 px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-indigo-100 leading-relaxed">
            Rave N Raga is run by two friends turned collaborators, alongside a rotating crew of local DJs, musicians, and vendors who help bring every event to life. Supporting our creative community is at the core of everything we do.
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Join the Community */}
      <section id="community" className="relative z-10 py-12 pb-24 px-6">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-14">Join the Community</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-gradient-to-br from-[#1f1f2f] to-[#121220] rounded-2xl p-6 shadow-lg hover:shadow-indigo-700/30 transition group relative overflow-hidden">
              <div className="absolute -top-6 -right-6 bg-indigo-500/20 w-24 h-24 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative z-10 text-left">
                <h3 className="font-display text-xl font-semibold mb-2 text-white">Follow us on Instagram</h3>
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
        </motion.div>
      </section>
    </>
  );
}
