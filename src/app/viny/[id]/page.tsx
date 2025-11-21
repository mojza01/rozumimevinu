import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AddToCart } from "@/components/AddToCart";
import { getWineById, wines } from "@/lib/data";

type Params = Promise<{ id: string }>;

type Props = {
  params: Params;
};

export async function generateStaticParams() {
  return wines.map((wine) => ({ id: wine.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const wine = getWineById(id);
  if (!wine) return {};
  return {
    title: `${wine.nazev} ${wine.rocnik} | ROZUMIMEVINU.CZ`,
    description: wine.popis,
  };
}

export default async function WineDetailPage({ params }: Props) {
  const { id } = await params;
  const wine = getWineById(id);
  if (!wine) return notFound();

  return (
    <section className="section-padding mx-auto max-w-6xl">
      <div className="card-surface overflow-hidden p-4 sm:p-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative min-h-[460px] w-full overflow-hidden rounded-3xl bg-white">
            <Image
              src={wine.obrazek}
              alt={wine.nazev}
              fill
              className="object-contain p-8"
              sizes="100vw"
            />
            <div className="absolute left-4 top-4 rounded-full bg-forest px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
              {wine.oblast}
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 rounded-full border border-stone/50 bg-white px-6 py-3 text-sm uppercase tracking-wide text-ivy shadow-inner shadow-stone/20">
              <span className="rounded-full bg-forest/10 px-3 py-1 font-semibold text-forest">
                {wine.rocnik}
              </span>
              <span>{wine.vinarsvi}</span>
              <span className="text-muted">•</span>
              <span>{wine.zatrideni2}</span>
            </div>
            <div>
              <h1 className="font-playfair text-3xl text-forest sm:text-4xl">
                {wine.nazev}
              </h1>
              <p className="mt-2 text-lg text-muted">{wine.popis}</p>
            </div>
            <div className="grid gap-3 rounded-2xl bg-stone/60 p-4 text-sm text-forest">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-ivy" />
                <div>
                  <div className="font-semibold text-forest">Charakter & chuť</div>
                  <p className="text-muted">{wine.chut}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-ivy" />
                <div>
                  <div className="font-semibold text-forest">Vůně</div>
                  <p className="text-muted">{wine.vune}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-ivy" />
                <div>
                  <div className="font-semibold text-forest">Párování s jídlem</div>
                  <p className="text-muted">{wine.pairing}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone/60 bg-white p-4 text-sm text-muted">
                <div className="flex items-center justify-between">
                  <span>Zbytkový cukr</span>
                  <strong className="text-forest">{wine.parametry.cukr}</strong>
                </div>
              </div>
              <div className="rounded-2xl border border-stone/60 bg-white p-4 text-sm text-muted">
                <div className="flex items-center justify-between">
                  <span>Kyseliny</span>
                  <strong className="text-forest">
                    {wine.parametry.kyseliny}
                  </strong>
                </div>
              </div>
              <div className="rounded-2xl border border-stone/60 bg-white p-4 text-sm text-muted">
                <div className="flex items-center justify-between">
                  <span>Alkohol</span>
                  <strong className="text-forest">{wine.parametry.alkohol}</strong>
                </div>
              </div>
              <div className="rounded-2xl border border-stone/60 bg-white p-4 text-sm text-muted">
                <div className="flex items-center justify-between">
                  <span>Cena</span>
                  <strong className="text-forest">{wine.cena} Kč</strong>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-forest px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cream shadow-lg shadow-forest/20">
                {wine.cena} Kč / lahev
              </div>
              <AddToCart
                wineId={wine.id}
                wineName={wine.nazev}
                price={wine.cena}
                image={wine.obrazek}
              />
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/viny"
                  className="inline-flex items-center justify-center rounded-full border border-forest/40 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/5"
                >
                  Zpět na výběr vín
                </Link>
                <Link
                  href="/kosik"
                  className="inline-flex items-center justify-center rounded-full bg-forest/10 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/20"
                >
                  Zobrazit košík
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
