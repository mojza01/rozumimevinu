'use client';

import { useState } from "react";
import { addCartItem } from "@/lib/cart";

type Props = {
  wineId: string;
  wineName: string;
  price: number;
  image: string;
};

export function AddToCart({ wineId, wineName, price, image }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleConfirm() {
    if (quantity <= 0) {
      setError("Zadejte prosím počet lahví větší než 0.");
      setMessage(null);
      return;
    }

    addCartItem({
      id: wineId,
      name: wineName,
      price,
      quantity,
      image,
    });

    setError(null);
    setMessage(
      `Uloženo ${quantity}× ${wineName} do košíku. Najdete ho v sekci Košík.`
    );
  }

  return (
    <div className="rounded-2xl border border-stone/60 bg-white/70 p-4 shadow-inner shadow-stone/20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
        Přidat do košíku
      </p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1 text-sm font-semibold text-forest">
          Počet lahví
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(event) => {
              const value = Number(event.target.value);
              setQuantity(Number.isNaN(value) ? 0 : value);
            }}
            className="mt-1 w-full rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
          />
        </label>
        <button
          type="button"
          onClick={handleConfirm}
          className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg hover:shadow-forest/25"
        >
          Potvrdit
        </button>
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {message && !error && (
        <p className="mt-3 text-sm text-forest" role="status">
          {message}
        </p>
      )}
    </div>
  );
}
