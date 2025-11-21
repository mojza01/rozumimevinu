import Image from "next/image";
import Link from "next/link";
import { featuredWines } from "@/lib/data";
import { WineCard } from "@/components/WineCard";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-forest text-cream">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/vinice.png"
              alt="Vinice v Mikulově"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/70 to-forest/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest/20 to-forest" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center gap-10 px-6 py-24 text-center sm:px-10 lg:px-12 lg:py-32">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Vína, která dávají smysl
            </p>
            <h1 className="font-playfair text-4xl leading-snug sm:text-5xl">
              ROZUMIMEVINU.CZ
            </h1>
            <p className="text-lg text-cream/85">
              Pomáhám lidem rozumět vínu, ne jen pít. Ochutnávám desítky vzorků
              od moravských rodinných vinařů a vybírám jen to nejlepší, co má
              duši Mikulovska.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/viny"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
              >
                Aktuální nabídka vín
              </Link>
              <Link
                href="#degustace"
                className="inline-flex items-center justify-center rounded-full border border-cream/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:bg-cream/10 hover:shadow-lg hover:shadow-cream/20"
              >
                Domluvit řízenou degustaci
              </Link>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-cream/70">
              Jižní Morava • Mikulov • Rodinné vinařství Mayer
            </p>
          </div>
        </div>
      </section>

      <section id="pribeh" className="section-padding mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
              Příběh Tomáše Mojžíška
            </p>
            <h2 className="font-playfair text-3xl text-forest sm:text-4xl">
              Mladý someliér, který chce, aby víno bylo srozumitelné
            </h2>
            <p className="text-lg text-muted">
              Jsem Tomáš Mojžíšek a stojím za značkou ROZUMIMEVINU.CZ. Vyrůstal
              jsem mezi vinicemi rodinného vinařství Mayer Mikulov. Každý rok
              ochutnám desítky vzorků, poslouchám příběhy vinařů a vybírám
              lahve, které mají čistou aromatiku, energii a původ v Mikulově.
            </p>
            <div className="grid gap-3 text-sm text-forest">
              <div className="rounded-2xl border border-stone/70 bg-white/70 p-4 shadow-inner shadow-stone/30">
                <strong>Vybírám jako pro sebe.</strong> Každý vzorek ochutnám,
                zaznamenám a porovnám. Zůstane jen to, za co se osobně zaručím.
              </div>
              <div className="rounded-2xl border border-stone/70 bg-white/70 p-4 shadow-inner shadow-stone/30">
                <strong>Vysvětluji jednoduše.</strong> Degustace vedu tak, aby
                se ve víně našel každý host – bez složitých pojmů, s respektem k
                terroiru.
              </div>
            </div>
          </div>
          <div className="card-surface overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/4.jpg"
                alt="Someliér a degustační sklenky"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="space-y-4 p-6">
              <h3 className="font-playfair text-2xl text-forest">
                Sommelier Bc. Tomáš Mojžíšek
              </h3>
              <p className="text-muted">
                Zakladatel značky ROZUMIMEVINU.CZ, certifikovaný someliér s
                vášní pro moravská vína a jejich příběhy. Zástupce rodinného vinařství Mayer Mikulov.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="degustace" className="section-padding bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/90">
              Řízené degustace & teambuildingy
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl">
              Degustace, které vtáhnou tým i přátele do světa vína
            </h2>
            <p className="text-lg text-cream/85">
              Připravím degustaci u vás ve firmě, na teambuildingu nebo u vás
              doma. Od úvodu do vína až po detailní porovnání terroiru Mikulovska.
            </p>
            <div className="grid gap-3">
              <div className="rounded-2xl bg-white/10 p-4 text-cream">
                <h4 className="font-semibold uppercase tracking-wide text-gold">
                  Pro firmy a teambuildingy
                </h4>
                <p className="text-sm text-cream/85">
                  Váš tým ochutná 6–8 vzorků, naučí se číst etikety, pozná rozdíl
                  mezi odrůdami a odnese si jednoduché tipy k nákupu vína.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-cream">
                <h4 className="font-semibold uppercase tracking-wide text-gold">
                  Pro soukromé akce
                </h4>
                <p className="text-sm text-cream/85">
                  Degustace doma, oslavy nebo zahradní party. Přivezu chladící
                  boxy, sklenky a připravím pairing s lokálními delikatesami.
                </p>
              </div>
            </div>
            <Link
              href="#kontakt"
              className="inline-flex w-fit items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
            >
              Nezávazně poptat degustaci
            </Link>
          </div>
          <div className="card-surface overflow-hidden border-none bg-cream text-forest shadow-forest/15">
            <div className="relative h-60 w-full">
              <Image
                src="/foto1.jpg"
                alt="Degustace vín pro firmy"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-playfair text-2xl text-forest">
                Co se naučíte
              </h3>
              <ul className="grid gap-2 text-sm text-muted">
                <li>• Jak číst etikety a ročníky bez zbytečných složitostí.</li>
                <li>• Jak poznat čisté víno od přearomatizovaného.</li>
                <li>• Párování moravských vín s jídlem na českém stole.</li>
                <li>• Jak skladovat a servírovat víno, aby chutnalo nejlépe.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-6xl" id="nabidka">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
              Aktuální výběr
            </p>
            <h2 className="font-playfair text-3xl text-forest sm:text-4xl">
              Vína, která právě doporučuji
            </h2>
          </div>
          <Link
            href="/viny"
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-xs font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/20"
          >
            Zobrazit celou nabídku
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-stone/50">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
              Mayer Mikulov
            </p>
            <h2 className="font-playfair text-3xl text-forest sm:text-4xl">
              Rodinné vinařství Mayer Mikulov
            </h2>
            <p className="text-lg text-muted">
              Pavel Mayer je 80letý vinař, který se vinařství věnuje již více než padesát let. Své vinařství založil v roce 1972 a od té doby
              se vypracoval mezi respektované producenty regionu. Mikulovská vinařská oblast patří k nejpreztižnějším v české republice a její
              specifické půdní i klimatické podmínky se výrazně odrážejí ve vínech tohoto vinařství. <br/>
            </p>
            <p className="text-lg text-muted">
              Pan Pavel Mayer se při pěstování hroznů zaměřuje na ekologické a biodynamické postupy. V posledních letech se stále 
              více orientuje na PIWI odrůdy - vyšlechtěné k vyšší odolnosti vůci houbovým chorobám a umožňující minimalizaci chemických postřiků.
              Tyto odrůdy poskytují kvalitní hrozny a vynikající potenciál pro výrobu moderních, čistých vín.
            </p>
            <div className="grid gap-3 text-sm text-forest">
              <div className="rounded-2xl border border-stone/60 bg-white/60 p-4 shadow-inner shadow-stone/20">
                <strong>Pečlivost a odbornost</strong>
                <p>Veškerá vína jsou nejvyšší kvality a dosahují zahraničního ocenění.</p>
              </div>
              <div className="rounded-2xl border border-stone/60 bg-white/60 p-4 shadow-inner shadow-stone/20">
                <strong>Rodinná tradice</strong>
                <p>Víno vzniká v rodině, která hospodaří v Pálavě už desítky let.</p>
              </div>
              <div className="rounded-2xl border border-stone/60 bg-white/60 p-4 shadow-inner shadow-stone/20">
                <strong>Limitované edice</strong>
                <p>Každá série je malá a pečlivě vybraná, ideální pro degustace.</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-lg shadow-forest/20">
            <Image
              src="/vina-lahve.png"
              alt="Vinařství Mayer Mikulov"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="section-padding bg-cream text-forest lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/80">
              Kontakt
            </p>
            <h2 className="font-playfair text-3xl text-forest sm:text-4xl">
              Napište mi, rád doporučím víno nebo domluvím degustaci
            </h2>
            <p className="text-lg text-muted">
              Stačí stručně napsat, pro jakou příležitost víno hledáte, kolik
              hostů čekáte nebo jaký styl máte rádi. Ozvu se zpět s doporučením
              a termínem.
            </p>
            <div className="grid gap-3 text-sm text-forest">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="font-semibold uppercase tracking-wide text-ivy">
                  E-mail
                </div>
                <div className="text-lg text-forest">mojzisekinfo@gmail.com</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="font-semibold uppercase tracking-wide text-ivy">
                  Telefon
                </div>
                <div className="text-lg text-forest">+420 734 693 019</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
