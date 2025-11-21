import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone/50 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-10 lg:px-12 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-brand text-xl text-gold">ROZUMIMEVINU.CZ</h3>
          <p className="text-cream/80">
            Výběrová vína z Mikulova a řízené degustace, které vám dají hodnotu. 
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold uppercase tracking-wide text-gold">
            Kontakt
          </h4>
          <p className="text-cream/80">E-mail: mojzisekinfo@gmail.com</p>
          <p className="text-cream/80">Telefon: +420 734 693 019</p>
          <p className="text-cream/80">Adresa: Veská 100, Sezemice</p>
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

