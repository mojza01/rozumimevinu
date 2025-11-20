'use client';

import { useEffect, useState } from "react";

const STORAGE_KEY = "rozumimevinu_age_confirmed";

export function AgeGate() {
  const [open, setOpen] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Potřebujeme nastavit stav až na klientovi po načtení localStorage.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
    setDenied(false);
  };

  const handleDeny = () => {
    localStorage.removeItem(STORAGE_KEY);
    setOpen(false);
    setDenied(true);
  };

  if (!open && !denied) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest/80 px-6 text-cream">
      <div className="card-surface w-full max-w-lg bg-forest/95 p-8 text-center text-cream shadow-2xl shadow-black/30">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">
          Upozornění
        </p>
        <h2 className="mt-3 font-playfair text-2xl sm:text-3xl">
          Vstupujete na stránky s nabídkou alkoholu
        </h2>
        <p className="mt-4 text-base text-cream/80">
          Je vám již 18 let? Prosíme o potvrzení věku. Pokud ne, obsah nebude
          zpřístupněn.
        </p>
        {!denied ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleConfirm}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
            >
              Ano, je mi 18+
            </button>
            <button
              onClick={handleDeny}
              className="rounded-full border border-cream/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-cream/10"
            >
              Ne
            </button>
          </div>
        ) : (
          <p className="mt-6 text-base text-red-100">
            Obsah tohoto webu je určen pouze osobám starším 18 let. Děkujeme za
            pochopení.
          </p>
        )}
      </div>
    </div>
  );
}
