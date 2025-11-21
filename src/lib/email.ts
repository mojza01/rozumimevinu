import { Order } from "./types";

export async function sendOrderEmail({
  order,
  qrCodeUrl,
}: {
  order: Order;
  qrCodeUrl: string;
}) {
  // TODO: Nahradit reálnou e-mailovou službou (SendGrid, Resend, apod.)
  console.log("=== SIMULACE ODESLÁNÍ E-MAILU ===");
  console.log(`Zákazník: ${order.name} (${order.email})`);
  order.items.forEach((item) => {
    console.log(`Víno: ${item.wineName}, množství: ${item.quantity}`);
  });
  console.log(`QR pro platbu: ${qrCodeUrl}`);
  console.log("=================================");
  return { ok: true };
}
