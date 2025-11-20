export const metadata = {
  title: "Informace o alkoholu | ROZUMIMEVINU.CZ",
};

export default function AlcoholInfoPage() {
  return (
    <section className="section-padding mx-auto max-w-4xl">
      <h1 className="font-playfair text-3xl text-forest">Informace o alkoholu</h1>
      <p className="mt-3 text-muted">
        Alkoholické výrobky prodáváme pouze osobám starším 18 let. Pijte s
        mírou a zodpovědně.
      </p>
      <div className="mt-6 space-y-3 text-sm text-forest">
        <p>• Při převzetí zásilky může být vyžádán doklad o věku.</p>
        <p>• Těhotné a kojící ženy by se měly vyvarovat konzumace alkoholu.</p>
        <p>• Konzumace alkoholu ovlivňuje schopnost řídit a obsluhovat stroje.</p>
      </div>
    </section>
  );
}
