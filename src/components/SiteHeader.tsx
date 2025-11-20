import Link from "next/link";

const navItems = [
  { href: "/", label: "Domů" },
  { href: "/viny", label: "Nabídka vín" },
  { href: "/#pribeh", label: "O nás" },
  { href: "/#degustace", label: "Degustace" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-gold/70 bg-gradient-to-r from-forest via-moss/95 to-forest text-cream shadow-lg shadow-black/20">
      <div className="mx-auto flex w-full flex-nowrap items-center gap-3 px-6 py-4 sm:px-10 lg:px-12 xl:max-w-6xl 2xl:max-w-7xl">
        <Link
          href="/"
          className="font-brand text-xl font-semibold text-gold drop-shadow"
        >
          ROZUMIMEVINU.CZ
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-cream md:flex xl:gap-9 xl:text-[0.7rem] xl:tracking-[0.18em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-transparent px-4 py-2 transition hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#degustace"
          className="ml-auto inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-gold/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-gold hover:-translate-y-0.5"
        >
          Domluvit degustaci
        </Link>
      </div>
    </header>
  );
}
