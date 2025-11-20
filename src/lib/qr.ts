import { Order } from "./types";

export function generatePaymentQr(order: Order) {
  // TODO: Tady připojit reálnou generaci QR (např. platební QR podle bankovní specifikace)
  const placeholder = `https://dummyimage.com/300x300/0f2f28/c6a060.png&text=QR+platba+${order.id}`;
  return placeholder;
}
