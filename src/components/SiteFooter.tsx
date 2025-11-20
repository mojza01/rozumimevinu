import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone/50 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-10 lg:px-12 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-brand text-xl text-gold">ROZUMIMEVINU.CZ</h3>
          <p className="text-cream/80">
            Výběrová vína z Mikulova a řízené degustace s mladým someliérem
            Tomášem Mojžíškem.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold uppercase tracking-wide text-gold">
            Kontakt
          </h4>
          <p className="text-cream/80">E-mail: info@rozumimevinu.cz</p>
          <p className="text-cream/80">Telefon: +420 777 555 111</p>
          <p className="text-cream/80">Adresa: Mikulov, Česká republika</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold uppercase tracking-wide text-gold">
            Právní informace
          </h4>
          <div className="flex flex-col gap-1 text-cream/80">
            <Link href="/obchodni-podminky" className="hover:text-gold">
              Obchodní podmínky
            </Link>
            <Link href="/ochrana-osobnich-udaju" className="hover:text-gold">
              Ochrana osobních údajů
            </Link>
            <Link href="/informace-o-alkoholu" className="hover:text-gold">
              Informace o alkoholu
            </Link>
            <Link href="/admin" className="hover:text-gold">
              Přihlášení
            </Link>
          </div>
          <p className="pt-3 text-sm text-cream/60">
            Prodej alkoholu pouze osobám starším 18 let. Prosíme, pijte s mírou.
          </p>
        </div>
      </div>
    </footer>
  );
}

