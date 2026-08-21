const BAR_DELAYS = [0, 0.15, 0.3, 0.15, 0];

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-4" aria-hidden="true">
      <span className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-[var(--color-accent)]/50" />
      <div className="flex items-end gap-1 h-6">
        {BAR_DELAYS.map((delay, i) => (
          <span
            key={i}
            className="w-1.5 h-full rounded-full bg-[var(--color-accent)] origin-bottom"
            style={{ animation: 'eq-pulse 1.1s ease-in-out infinite', animationDelay: `${delay}s` }}
          />
        ))}
      </div>
      <span className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-[var(--color-accent)]/50" />
    </div>
  );
}
