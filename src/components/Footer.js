export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0d0d1a] text-white py-10 px-6 border-t border-indigo-900 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="font-display text-xl font-semibold">Rave N Raga</h3>
          <p className="text-sm text-indigo-300">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/rave.n.raga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition"
          >
            Instagram
          </a>
          <a
            href="mailto:rave.n.raga.booking@gmail.com"
            className="hover:text-[var(--color-accent)] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
