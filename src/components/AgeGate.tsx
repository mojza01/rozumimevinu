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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 text-forest backdrop-blur">
      <div className="w-full max-w-lg rounded-3xl border border-cream/30 bg-cream/95 px-8 py-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
        <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gold/80" />
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold/80">
          Upozornění
        </p>
        <h2 className="mt-4 font-playfair text-2xl text-forest sm:text-3xl">
          Vstupujete na stránky s nabídkou alkoholu
        </h2>
        <p className="mt-4 text-base text-forest/80">
          Je vám již 18 let? Prosíme o potvrzení věku. Pokud ne, obsah nebude
          zpřístupněn.
        </p>
        {!denied ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleConfirm}
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg hover:shadow-forest/40"
            >
              Ano, je mi 18+
            </button>
            <button
              onClick={handleDeny}
              className="rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-forest transition hover:bg-forest/5"
            >
              Ne
            </button>
          </div>
        ) : (
          <p className="mt-6 text-base text-red-500">
            Obsah tohoto webu je určen pouze osobám starším 18 let. Děkujeme za
            pochopení.
          </p>
        )}
      </div>
    </div>
  );
}
