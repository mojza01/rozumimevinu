import { NextResponse } from "next/server";
import { addOrder, listOrders } from "@/lib/ordersStore";
import { generatePaymentQr } from "@/lib/qr";
import { sendOrderEmail } from "@/lib/email";

export async function GET() {
  return NextResponse.json(listOrders());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { message: "Neplatná data objednávky." },
      { status: 400 }
    );
  }

  const { wineId, wineName, quantity, name, email, phone, address, note } =
    body;

  if (
    !wineId ||
    !wineName ||
    !quantity ||
    !name ||
    !email ||
    !phone ||
    !address
  ) {
    return NextResponse.json(
      { message: "Vyplňte prosím všechny povinné údaje." },
      { status: 400 }
    );
  }

  const parsedQuantity = Number(quantity);

  if (Number.isNaN(parsedQuantity) || parsedQuantity <= 0) {
    return NextResponse.json(
      { message: "Počet lahví musí být kladné číslo." },
      { status: 400 }
    );
  }

  const order = addOrder({
    wineId,
    wineName,
    quantity: parsedQuantity,
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
