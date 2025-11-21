import { NextResponse } from "next/server";
import { addOrder, listOrders } from "@/lib/ordersStore";
import { generatePaymentQr } from "@/lib/qr";
import { sendOrderEmail } from "@/lib/email";

export async function GET() {
  const orders = await listOrders();
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { message: "Neplatná data objednávky." },
      { status: 400 }
    );
  }

  const { items, name, email, phone, address, note } = body;

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { message: "Košík je prázdný, nelze vytvořit objednávku." },
      { status: 400 }
    );
  }

  if (!name || !email || !phone || !address) {
    return NextResponse.json(
      { message: "Vyplňte prosím všechny povinné údaje." },
      { status: 400 }
    );
  }

  const sanitizedItems = items
    .map((item: any) => ({
      wineId: String(item.wineId),
      wineName: String(item.wineName),
      quantity: Number(item.quantity),
      price: Number(item.price),
    }))
    .filter(
      (item) =>
        item.wineId &&
        item.wineName &&
        Number.isFinite(item.quantity) &&
        item.quantity > 0 &&
        Number.isFinite(item.price) &&
        item.price >= 0
    );

  if (sanitizedItems.length === 0) {
    return NextResponse.json(
      { message: "Neplatná položka košíku. Zkuste to prosím znovu." },
      { status: 400 }
    );
  }

  const order = await addOrder({
    items: sanitizedItems,
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    address: address.trim(),
    note: note?.toString(),
  });

  const qrCodeUrl = generatePaymentQr(order);
  await sendOrderEmail({ order, qrCodeUrl });

  return NextResponse.json(
    {
      message:
        "Děkujeme za objednávku! Potvrdíme ji e-mailem a zašleme instrukce k platbě.",
      order,
      qrCodeUrl,
    },
    { status: 201 }
  );
}
