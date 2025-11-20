import Image from "next/image";
import Link from "next/link";
import { Wine } from "@/lib/types";

type Props = {
  wine: Wine;
  ctaLabel?: string;
};

export function WineCard({ wine, ctaLabel = "Detail vína" }: Props) {
  return (
    <Link
      href={`/viny/${wine.id}`}
      className="group card-surface flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/15"
    >
      <div className="relative h-48 w-full overflow-hidden bg-forest/5">
        <Image
          src={wine.obrazek}
          alt={wine.nazev}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold uppercase tracking-wide text-ivy">
            {wine.vinarsvi}
          </div>
          <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
            {wine.rocnik}
          </span>
        </div>
        <h3 className="font-playfair text-xl text-forest">{wine.nazev}</h3>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          {wine.zatrideni2}
        </p>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          {wine.zatrideni}
        </p>
        <p className="mt-1 line-clamp-3 text-sm text-muted">{wine.popis}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-semibold text-forest">
            {wine.cena} Kč / ks
          </span>
          <span className="rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-forest/20">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
