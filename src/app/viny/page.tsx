import { WineCard } from "@/components/WineCard";
import { wines } from "@/lib/data";

export const metadata = {
  title: "Nabídka vín | ROZUMIMEVINU.CZ",
  description: "Aktuální seznam vín vybraných Tomášem Mojžíškem.",
};

export default function WineListPage() {
  return (
    <section className="section-padding mx-auto max-w-6xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
            Nabídka vín
          </p>
          <h1 className="font-playfair text-3xl text-forest sm:text-4xl">
            Vína v nabídce
          </h1>
          <p className="text-muted">
            Všechna vína pocházejí z rodinných vinařství v Mikulově a na Pálavě.
            Každý ročník ochutnáváme a popisujeme srozumitelně.
          </p>
        </div>
        <div className="rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream">
          {wines.length} vín
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wines.map((wine) => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </section>
  );
}
