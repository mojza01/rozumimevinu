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
    <header className="sticky top-0 z-30 border-b border-gold/70 bg-gradient-to-r from-forest via-moss/95 to-forest text-cream shadow-xl shadow-black/20">
      <div className="mx-auto flex w-full flex-nowrap items-center gap-4 px-6 py-5 sm:px-10 lg:px-12 xl:max-w-6xl 2xl:max-w-7xl">
        <Link
          href="/"
          className="font-brand text-2xl font-semibold text-gold drop-shadow"
        >
          ROZUMIMEVINU.CZ
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 pl-4 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-cream md:flex xl:gap-10 xl:text-[0.85rem] xl:tracking-[0.22em]">
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
        <div className="ml-auto flex flex-shrink-0 items-center gap-3">
          <Link
            href="/kosik"
            className="inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-gold/90 px-7 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-forest shadow-[0_12px_34px_rgba(0,0,0,0.25)] transition hover:bg-gold hover:-translate-y-0.5"
          >
            Košík
          </Link>
        </div>
      </div>
    </header>
  );
}
