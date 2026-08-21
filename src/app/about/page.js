'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">About Us</h1>
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

      {/* Join the Community Section */}
      <section id="community" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">Join the Community</h2>
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
        </div>
      </section>
    </>
  );
}
