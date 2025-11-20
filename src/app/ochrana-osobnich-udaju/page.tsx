export const metadata = {
  title: "Ochrana osobních údajů | ROZUMIMEVINU.CZ",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding mx-auto max-w-4xl">
      <h1 className="font-playfair text-3xl text-forest">Ochrana osobních údajů</h1>
      <p className="mt-3 text-muted">
        Stručný přehled GDPR požadavků. Text slouží jako placeholder, který lze
        doplnit o konkrétní právní formulace.
      </p>
      <div className="mt-6 space-y-4 text-sm text-forest">
        <p>• Správce: ROZUMIMEVINU.CZ, Mikulov</p>
        <p>• Účel zpracování: vyřízení objednávky vína a komunikace s klientem</p>
        <p>• Doba uchování: po dobu zákonných lhůt pro účetnictví</p>
        <p>• Práva subjektu údajů: přístup, oprava, výmaz, omezení zpracování</p>
        <p>• Kontaktní e-mail pro GDPR: info@rozumimevinu.cz</p>
      </div>
    </section>
  );
}
