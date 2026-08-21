export default function EventCard({ event }) {
  return (
    <div
      className={`group bg-[#1f1f2f] rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-[0_10px_40px_-10px_var(--color-accent)] ${
        event.isPast ? 'opacity-70' : ''
      }`}
    >
      {/* Event Poster */}
      {event.altImage ? (
        <div className="relative w-full h-120">
          <img
            src={event.image}
            alt={`${event.title} poster`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <img
            src={event.altImage}
            alt={`${event.title} alternate poster`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      ) : (
        <img
          src={event.image}
          alt={`${event.title} poster`}
          className="w-full h-120 object-cover"
        />
      )}

      {/* Info Box */}
      <div className="p-5 text-left flex flex-col justify-between h-full">
        <h3 className="font-display text-xl font-semibold text-white mb-4">{event.title}</h3>

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

        {/* Action */}
        {event.isPast ? (
          <div className="w-full mt-auto px-5 py-2 rounded-full border border-white/30 text-white/60 text-center font-medium">
            Past Event
          </div>
        ) : event.ticketLink ? (
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block mt-auto px-5 py-2 rounded-full bg-white text-black font-medium text-center hover:bg-gray-200 transition"
          >
            Get Tickets
          </a>
        ) : event.isFreeEntry ? (
          <div className="w-full mt-auto px-5 py-2 rounded-full border border-white text-white text-center font-medium opacity-80">
            No Cover
          </div>
        ) : (
          <div className="w-full mt-auto px-5 py-2 rounded-full border border-white text-white text-center font-medium opacity-80">
            RSVP Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}
