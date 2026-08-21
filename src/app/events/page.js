'use client';
import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { upcomingEvents, pastEvents } from '@/data/events';

export default function EventsPage() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-6"
        >
          Events
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-indigo-100 leading-relaxed mb-20"
        >
          <p className="mb-4">
            Our main rave series, Rhythm Room, is a themed immersive experience designed to transport you into a world of music, movement, art, and energy. Each volume brings a new theme and a new world to step into.
          </p>
          <p>
            We also host Social Nights twice a month: one is a night market featuring local vendors and DJs, the other is an art-focused night with a gallery-style exhibition featuring artists of all kinds, live art, and DJs.
          </p>
        </motion.div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">
          Upcoming Events
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mt-24 mb-14"
        >
          Previous Events
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
