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
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-surface space-y-4 p-6">
              <h3 className="font-playfair text-2xl text-forest">
                Víno vybíráme jako pro sebe
              </h3>
              <p className="text-muted">
                V portfoliu držím jen vinaře, které znám osobně a kteří pracují
                s respektem k terroiru Mikulovska. Každý vzorek ochutnám se
                svým someliérským týmem a zapíšu si ho do degustací. Aktuálně
                zastupuji především rodinné vinařství Mayer Mikulov, ale
                vyhledávám i malé sklepy s vlastním rukopisem.
              </p>
              <p className="text-muted">
                Jako sommelier junior zajišťuji řízené degustace i privátní
                výběry vín. Chci, aby víno bylo pochopitelné a zároveň
                špičkové – od výběru hroznů, přes sklep až po servis na vašem
                stole.
              </p>
              <div className="grid gap-2 text-sm text-forest">
                <div className="rounded-2xl border border-stone/60 bg-white/70 px-4 py-3 shadow-inner shadow-stone/20">
                  <strong>Osobní výběr</strong>
                  <p>Každá lahev prochází slepou degustací a zápisem.</p>
                </div>
                <div className="rounded-2xl border border-stone/60 bg-white/70 px-4 py-3 shadow-inner shadow-stone/20">
                  <strong>Zastupuji Mayer Mikulov</strong>
                  <p>Rodinné vinařství s kořeny v Pálavě a ručním sběrem.</p>
                </div>
                <div className="rounded-2xl border border-stone/60 bg-white/70 px-4 py-3 shadow-inner shadow-stone/20">
                  <strong>Sommelier junior</strong>
                  <p>Řízené degustace, párování k menu i doporučení k investici.</p>
                </div>
              </div>
            </div>
            <div className="card-surface overflow-hidden">
              <div className="relative h-64 w-full lg:h-full">
                <Image
                  src="/foto1.jpg"
                  alt="Výběr vín Mayer Mikulov"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
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

      <section
        id="kontakt"
        className="section-padding bg-stone/60 text-forest lg:py-20"
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
                <div className="text-lg text-forest">info@rozumimevinu.cz</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <div className="font-semibold uppercase tracking-wide text-ivy">
                  Telefon
                </div>
                <div className="text-lg text-forest">+420 777 555 111</div>
              </div>
            </div>
            <Link
              href="mailto:info@rozumimevinu.cz"
              className="inline-flex w-fit items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/20"
            >
              Napsat e-mail
            </Link>
          </div>
          <div className="card-surface p-6">
            <div className="rounded-2xl border border-stone/60 bg-white p-6 shadow-inner shadow-stone/30">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
                Mikulov & Jižní Morava
              </p>
              <h3 className="font-playfair text-2xl text-forest">
                Odkud vína pocházejí
              </h3>
              <p className="mt-2 text-muted">
                Spolupracuji s vinařstvími v Mikulově, Dolních Dunajovicích a na
                Pálavě. Všechna vína jsou z rodinných podniků, které znám jménem
                a které respektují půdu.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-stone/50 px-4 py-3 text-sm text-forest">
                  <strong>Mayer Mikulov</strong>
                  <p>Rodinné vinařství s tradicí</p>
                </div>
                <div className="rounded-xl bg-stone/50 px-4 py-3 text-sm text-forest">
                  <strong>Pálava</strong>
                  <p>Vápencové podloží, aromatická vína</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
