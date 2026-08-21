const RING_DOTS = Array.from({ length: 8 });

export default function SectionDivider() {
  return (
    <div className="flex justify-center my-8" aria-hidden="true">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        style={{ animation: 'mandala-spin 50s linear infinite', transformOrigin: '50% 50%' }}
      >
        <circle cx="28" cy="28" r="3" fill="var(--color-accent)" />
        {RING_DOTS.map((_, i) => {
          const angle = (i / RING_DOTS.length) * 2 * Math.PI;
          const radius = 18;
          const cx = 28 + radius * Math.cos(angle);
          const cy = 28 + radius * Math.sin(angle);
          const isMajor = i % 2 === 0;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={isMajor ? 2.5 : 1.5}
              fill="var(--color-accent)"
              opacity={isMajor ? 0.9 : 0.5}
            />
          );
        })}
      </svg>
    </div>
  );
}
