'use client';

import { useState } from "react";

type Props = {
  wineId: string;
  wineName: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  quantity: number;
  note: string;
};

export function OrderForm({ wineId, wineName }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 6,
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!form.name || !form.email || !form.phone || !form.address) {
      setMessage("Vyplňte prosím všechny povinné údaje.");
      setLoading(false);
      return;
    }

    if (form.quantity <= 0) {
      setMessage("Počet lahví musí být větší než 0.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wineId,
          wineName,
          quantity: form.quantity,
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          note: form.note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Objednávku se nepodařilo odeslat.");
        setLoading(false);
        return;
      }

      setMessage(
        `Děkujeme za objednávku! Brzy se ozveme s potvrzením. Objednáno: ${form.quantity}× ${wineName}.`
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        quantity: 6,
        note: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Došlo k chybě při odesílání. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-surface mt-6 grid gap-4 p-6"
      id="objednavka"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest/70">
          Objednávka
        </p>
        <h3 className="font-playfair text-2xl text-forest">
          {wineName} — objednat
        </h3>
        <p className="text-sm text-muted">
          Krátký formulář, ozveme se s potvrzením a platebními údaji.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Jméno a příjmení
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          E-mail
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Telefon
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Adresa (ulice, město, PSČ)
          <input
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Počet lahví
          <input
            type="number"
            min={1}
            value={form.quantity}
            onChange={(e) =>
              setForm({ ...form, quantity: Number(e.target.value) })
            }
            className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Poznámka (nepovinné)
          <input
            type="text"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
            placeholder="Termín dodání, firemní faktura apod."
          />
        </label>
      </div>

      {message && (
        <div className="rounded-lg border border-forest/20 bg-forest/5 px-4 py-3 text-sm text-forest">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/20 disabled:cursor-not-allowed disabled:bg-stone"
      >
        {loading ? "Odesíláme..." : "Odeslat objednávku"}
      </button>
    </form>
  );
}
