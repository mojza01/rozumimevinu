'use client';

import { useEffect, useState } from "react";
import { Order } from "@/lib/types";

const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "vino-admin"; // jednoduché heslo, nahraďte v .env.local

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(() => setError("Nepodařilo se načíst objednávky."));
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError(null);
    } else {
      setError("Nesprávné heslo.");
    }
  };

  if (!authenticated) {
    return (
      <section className="section-padding mx-auto max-w-xl">
        <div className="card-surface p-8">
          <h1 className="font-playfair text-3xl text-forest">Admin</h1>
          <p className="mt-2 text-sm text-muted">
            Jednoduché heslo je uloženo v proměnné prostředí. Nahraďte ho prosím
            v produkci.
          </p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <label className="grid gap-2 text-sm font-semibold text-forest">
              Heslo
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border border-stone/60 bg-white px-3 py-2 text-forest shadow-inner shadow-stone/20 focus:border-forest focus:outline-none"
              />
            </label>
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-800">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="rounded-full bg-forest px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/20"
            >
              Přihlásit
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding mx-auto max-w-6xl">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest/70">
            Objednávky
          </p>
          <h1 className="font-playfair text-3xl text-forest">Admin přehled</h1>
          <p className="text-sm text-muted">
            Data jsou uložena pouze v paměti serveru pro demo účely.
          </p>
        </div>
        <div className="rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream">
          {orders.length} objednávek
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-stone/60 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-stone/60 text-sm">
          <thead className="bg-stone/40 text-left text-xs font-semibold uppercase tracking-wide text-forest/80">
            <tr>
              <th className="px-4 py-3">Datum</th>
              <th className="px-4 py-3">Zákazník</th>
              <th className="px-4 py-3">Kontakt</th>
              <th className="px-4 py-3">Objednávka</th>
              <th className="px-4 py-3">Stav platby</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone/50">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-muted">
                  Zatím žádné objednávky.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-stone/30">
                  <td className="px-4 py-3 text-forest">
                    {new Date(order.createdAt).toLocaleString("cs-CZ")}
                  </td>
                  <td className="px-4 py-3 text-forest">
                    <div className="font-semibold">{order.name}</div>
                    <div className="text-xs text-muted">{order.address}</div>
                  </td>
                  <td className="px-4 py-3 text-muted">
                    <div>{order.email}</div>
                    <div>{order.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-forest">
                    <div className="font-semibold">{order.wineName}</div>
                    <div className="text-xs text-muted">
                      {order.quantity}× lahev
                    </div>
                    {order.note && (
                      <div className="mt-1 text-xs text-muted">
                        Poznámka: {order.note}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-forest">
                      {order.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
