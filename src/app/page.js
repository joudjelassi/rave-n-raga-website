'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import EventCard from '@/components/EventCard';
import { upcomingEvents } from '@/data/events';

export default function Home() {
  const previewEvents = upcomingEvents.slice(0, 2);

  return (
    <>
      <Hero />

      {/* About teaser */}
      <section className="relative z-10 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-indigo-100 leading-relaxed mb-6">
            Rave n Raga is a creative collaboration bringing people together through the power of music and community — from high-energy raves to soul-stirring live bands and local pop-ups in Kelowna.
          </p>
          <Link
            href="/about"
            className="inline-block border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
          >
            Learn more about us
          </Link>
        </motion.div>
      </section>

      {/* Upcoming events preview */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">Upcoming Events</h2>
          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            {previewEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          <Link
            href="/events"
            className="inline-block mt-14 px-6 py-2 rounded-full bg-[var(--color-accent)] text-[#1a1400] font-semibold hover:brightness-110 transition"
          >
            View All Events
          </Link>
        </div>
      </section>
    </>
  );
}
