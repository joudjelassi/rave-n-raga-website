'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050518] bg-opacity-70 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="Rave n Raga Logo" className="h-16 w-16 object-contain" />
          <div className="font-display text-lg font-bold tracking-wide">Rave n Raga</div>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm uppercase font-medium">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition hover:text-[var(--color-accent)] ${
                  active ? 'text-[var(--color-accent)]' : ''
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-[var(--color-accent)] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-6 text-sm uppercase font-medium">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-[var(--color-accent)] ${active ? 'text-[var(--color-accent)]' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
