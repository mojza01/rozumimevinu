'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem } from "@/lib/types";
import { getCartItems, removeCartItem, clearCart } from "@/lib/cart";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [confirming, setConfirming] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
  });

  useEffect(() => {
    setItems(getCartItems());

    function syncFromStorage() {
      setItems(getCartItems());
    }
    window.addEventListener("storage", syncFromStorage);
    return () => window.removeEventListener("storage", syncFromStorage);
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleRemove(id: string) {
    setItems(removeCartItem(id));
  }

  function handleClear() {
    clearCart();
    setItems([]);
    setConfirming(false);
  }

  function handleCheckout() {
    if (items.length === 0) return;
    setStatusMessage(null);
    setErrorMessage(null);
    setConfirming(true);
  }

  const nameRegex = /^[A-Za-zÀ-ž\s'-]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\s-]{6,}$/;

  async function handleConfirmOrder() {
    if (!nameRegex.test(form.name.trim())) {
      setErrorMessage("Zadejte celé jméno alespoň o 3 znacích.");
      return;
    }
    if (!emailRegex.test(form.email.trim())) {
      setErrorMessage("Zadejte platný e-mail.");
      return;
    }
    if (!phoneRegex.test(form.phone.trim())) {
      setErrorMessage(
        "Telefon musí obsahovat alespoň 6 číslic (může být i s + nebo mezerou)."
      );
      return;
    }
    if (form.address.trim().length < 5) {
      setErrorMessage("Adresa musí mít alespoň 5 znaků.");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            wineId: item.id,
            wineName: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          note: form.note,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Nepodařilo se odeslat objednávku.");
      }

      clearCart();
      setItems([]);
      setConfirming(false);
      setForm({ name: "", email: "", phone: "", address: "", note: "" });
      setErrorMessage(null);
      setStatusMessage(
        "Objednávka byla odeslána k vyřízení. Detaily a platební údaje posíláme e-mailem."
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Došlo k chybě při odeslání."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section-padding mx-auto max-w-5xl">
      <div className="card-surface space-y-6 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest/70">
            Košík
          </p>
          <h1 className="font-playfair text-3xl text-forest sm:text-4xl">
            Uložená vína
          </h1>
          <p className="text-sm text-muted">
            Tady uvidíte vína, která jste si připravili k objednání.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-stone/60 bg-white/70 p-6 text-center text-muted">
            <p>Košík je zatím prázdný.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="/viny"
                className="inline-flex items-center justify-center rounded-full border border-forest px-5 py-3 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/5"
              >
                Prohlédnout nabídku vín
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-forest/40 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/5"
              >
                Zpět na hlavní stránku
              </Link>
            </div>
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center gap-4 rounded-2xl border border-stone/60 bg-white/80 p-4 shadow-sm"
                >
                  <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-stone/50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-[180px]">
                    <p className="font-semibold text-forest">{item.name}</p>
                    <p className="text-sm text-muted">
                      {item.quantity}× {item.price} Kč / ks
                    </p>
                    <p className="text-sm font-semibold text-forest">
                      Mezisoučet: {item.quantity * item.price} Kč
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="rounded-full border border-forest/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/5"
                  >
                    Odebrat
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 border-t border-stone/50 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-semibold text-forest">
                Celkem k potvrzení:{" "}
                <span className="text-gold">{total} Kč</span>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded-full border border-forest/30 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/5"
                >
                  Vyprázdnit košík
                </button>
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-xs font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg hover:shadow-forest/20"
                >
                  Dokončit objednávku
                </button>
              </div>
            </div>
            {confirming && (
              <div className="rounded-2xl border border-forest/20 bg-forest/5 p-4 text-sm text-forest shadow-inner shadow-forest/10">
                <p className="font-semibold uppercase tracking-[0.2em] text-xs text-forest/70">
                  Potvrzení objednávky
                </p>
                <p className="mt-2 text-sm">
                  Vyplňte své údaje a potvrďte, že jste připraveni objednávku
                  odeslat a zaplatit.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="text-xs font-semibold uppercase tracking-wide">
                    Jméno a příjmení
                    <input
                      type="text"
                      pattern="[A-Za-zÀ-ž\s'-]{3,}"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-wide">
                    E-mail
                    <input
                      type="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-wide">
                    Telefon
                    <input
                      type="tel"
                      inputMode="tel"
                      pattern="[0-9+\s-]{6,}"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-wide">
                    Adresa (ulice, město, PSČ)
                    <input
                      type="text"
                      minLength={5}
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
                    />
                  </label>
                </div>
                <label className="mt-3 block text-xs font-semibold uppercase tracking-wide">
                  Poznámka (nepovinné)
                  <input
                    type="text"
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
                    placeholder="Termín dodání, faktura apod."
                  />
                </label>
                {errorMessage && (
                  <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
                    {errorMessage}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleConfirmOrder}
                    disabled={submitting}
                    className="rounded-full bg-forest px-5 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:bg-forest/90 disabled:cursor-not-allowed disabled:bg-stone"
                  >
                    {submitting ? "Odesíláme..." : "Potvrzuji"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirming(false)}
                    className="rounded-full border border-forest/30 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-forest transition hover:-translate-y-0.5 hover:bg-forest/5"
                  >
                    Zpět
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        {(statusMessage || errorMessage) && (
          <div
            className={`rounded-2xl border p-4 text-sm ${
              statusMessage
                ? "border-forest/20 bg-forest/5 text-forest"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            {statusMessage || errorMessage}
          </div>
        )}
      </div>
    </section>
  );
}
