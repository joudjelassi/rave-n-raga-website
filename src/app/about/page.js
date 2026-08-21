'use client';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/SectionDivider';
import { team } from '@/data/team';

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

      {/* Our Mission */}
      <section className="relative z-10 py-12 px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-indigo-100 leading-relaxed mb-4">
            We’re here to create the kind of spaces we’ve always wanted to be part of. Spaces where music, art, and self-expression can exist freely. Where artists have room to create, strangers can become friends, and everyone can feel welcomed, safe, and completely themselves.
          </p>
          <p className="text-lg text-indigo-100 leading-relaxed">
            Rave N Raga brings music, art, and culture together to create experiences that feel intentional, inclusive, and alive. We believe the best experiences are the ones we create together, through music, movement, creativity, and community.
          </p>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Our Story */}
      <section className="relative z-10 py-12 px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-indigo-100 leading-relaxed mb-4">
            Rave N Raga started as a creative collaboration between the two of us, who have called Kelowna home for the past seven years.
          </p>
          <p className="text-lg text-indigo-100 leading-relaxed mb-4">
            Over the years, we’ve watched this city grow, found our own communities here, and experienced firsthand how music can bring people together. We wanted to create something that felt like a reflection of that — spaces where people could come together, discover new sounds, support local artists and makers, and simply have a good time.
          </p>
          <p className="text-lg text-indigo-100 leading-relaxed mb-4">
            What began as an idea between the two of us has grown into a community built around dance, art, music, and supporting the people around us.
          </p>
          <p className="text-lg text-indigo-100 leading-relaxed mb-6">
            We’re just getting started, and we’re excited to build it with you.
          </p>
          <p className="font-display text-xl italic text-[var(--color-accent)]">Joud & Aryan</p>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Our Team */}
      <section className="relative z-10 py-12 px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-indigo-100 leading-relaxed mb-10">
            All of this wouldn’t be possible without our entire team.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="bg-[#1f1f2f] rounded-xl px-5 py-4 text-left">
                <p className="font-display text-white font-semibold">{member.name}</p>
                <p className="text-sm text-[var(--color-accent)]">{member.role}</p>
              </div>
            ))}
          </div>
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
                <p className="text-sm text-indigo-300 mb-6">Stay updated with event teasers, posters, behind-the-scenes moments, and more.</p>
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
