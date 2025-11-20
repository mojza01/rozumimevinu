export const metadata = {
  title: "Obchodní podmínky | ROZUMIMEVINU.CZ",
};

export default function TermsPage() {
  return (
    <section className="section-padding mx-auto max-w-4xl">
      <h1 className="font-playfair text-3xl text-forest">Obchodní podmínky</h1>
      <p className="mt-3 text-muted">
        Toto je zjednodušený text, který můžete nahradit finálními obchodními
        podmínkami. Slouží jako struktura pro budoucí právní dokumenty.
      </p>
      <div className="mt-6 space-y-4 text-sm text-forest">
        <p>• Prodávající: ROZUMIMEVINU.CZ, Mikulov, Česká republika</p>
        <p>• Minimální věk kupujícího: 18 let</p>
        <p>• Platba: převodem na účet po potvrzení objednávky (QR platba)</p>
        <p>• Dodání: osobní převzetí nebo doprava dle dohody</p>
      </div>
    </section>
  );
}
