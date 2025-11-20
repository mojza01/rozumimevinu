import Image from "next/image";
import { notFound } from "next/navigation";
import { OrderForm } from "@/components/OrderForm";
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
    <section className="section-padding mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
        <div className="card-surface overflow-hidden">
          <div className="relative h-72 w-full">
            <Image
              src={wine.obrazek}
              alt={wine.nazev}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute left-4 top-4 rounded-full bg-forest px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
              {wine.oblast}
              </div>
          </div>
          <div className="space-y-4 p-6">
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-ivy">
              <span className="rounded-full bg-forest/10 px-3 py-1 font-semibold text-forest">
                {wine.rocnik}
              </span>
              <span>{wine.vinarsvi}</span>
              <span className="text-muted">•</span>
              <span>{wine.odruda}</span>
            </div>
            <h1 className="font-playfair text-3xl text-forest sm:text-4xl">
              {wine.nazev}
            </h1>
            <p className="text-lg text-muted">{wine.popis}</p>
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

            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-full bg-forest px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cream shadow-lg shadow-forest/20">
                {wine.cena} Kč / lahev
              </div>
              <a
                href="#objednavka"
                className="rounded-full border border-forest px-5 py-3 text-sm font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/15"
              >
                Objednat víno
              </a>
            </div>
          </div>
        </div>
        <div>
          <OrderForm wineId={wine.id} wineName={wine.nazev} />
        </div>
      </div>
    </section>
  );
}
