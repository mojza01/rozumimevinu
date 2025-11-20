import { Order, OrderInput } from "./types";

const orders: Order[] = [];

export function addOrder(input: OrderInput): Order {
  const now = new Date();
  const order: Order = {
    ...input,
    id: `obj-${now.getTime()}`,
    createdAt: now.toISOString(),
    paymentStatus: "čeká na platbu",
  };

  orders.unshift(order);
  return order;
}

export function listOrders() {
  return orders;
}
