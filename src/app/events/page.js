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
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-indigo-100 leading-relaxed mb-20"
        >
          Our main rave series, Rhythm Room, is a themed experience that transforms the space into full immersion, with different artists showcasing their art each volume — led by our Creative Director, Zoe Turcotte (Maldor the Visual). We also host Social Nights twice a month: one a night market featuring local vendors and DJs, the other an art-focused night with a gallery-style exhibition featuring artists of all kinds, live art, and DJs.
        </motion.p>

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
