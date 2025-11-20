import { WineCard } from "@/components/WineCard";
import { wines } from "@/lib/data";

export const metadata = {
  title: "Nabídka vín | ROZUMIMEVINU.CZ",
  description: "Aktuální seznam vín vybraných Tomášem Mojžíškem.",
};

export default function WineListPage() {
  return (
    <section className="section-padding mx-auto max-w-6xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"> {/* gap-4 -> gap-6 */}
        <div className="space-y-6"> {/* přidá větší mezery mezi p, h1, p */}
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
            Nabídka vín
          </p>
          <h1 className="font-playfair text-3xl text-forest sm:text-4xl">
            Vína z rodinného vinařství Mayer Mikulov.
          </h1>
          <p className="text-muted">
            Veškerá vína v nabídce jsou z rodinného vinařství Mayer Mikulov. Rodinné vinařství odkazuje na dlouholetou tradici a kvalitu,
            kterou se pyšní ve svých vínech. Vína jsou různorodá, od suchých po polosladké, od pozdního sběru po výběr z hroznů.
          </p>
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
