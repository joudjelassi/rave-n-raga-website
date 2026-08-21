export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-4" aria-hidden="true">
      <span className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
      <span className="h-2 w-2 rotate-45 bg-[var(--color-accent)]" />
      <span className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
    </div>
  );
}
