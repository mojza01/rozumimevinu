import { promises as fs } from "fs";
import path from "path";
import { Order, OrderInput } from "./types";

const DATA_PATH =
  process.env.ORDERS_DB_PATH ||
  path.join(process.cwd(), "data", "orders.json");

let cache: Order[] | null = null;

async function loadOrders() {
  if (cache) return cache;
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    cache = JSON.parse(raw) as Order[];
  } catch (error) {
    cache = [];
  }
  return cache;
}

async function saveOrders(orders: Order[]) {
  cache = orders;
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(orders, null, 2), "utf-8");
}

export async function addOrder(input: OrderInput): Promise<Order> {
  const orders = await loadOrders();
  const now = new Date();
  const order: Order = {
    ...input,
    id: `obj-${now.getTime()}`,
    createdAt: now.toISOString(),
    paymentStatus: "čeká na platbu",
  };

  const updated = [order, ...orders];
  await saveOrders(updated);
  return order;
}

export async function listOrders() {
  const orders = await loadOrders();
  // return copy to avoid accidental mutations
  return [...orders];
}
