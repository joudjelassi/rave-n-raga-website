export default function Starfield({ count = 200 }) {
  return (
    <div className="starfield">
      {[...Array(count)].map((_, i) => (
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
  );
}
