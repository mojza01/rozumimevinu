import { CartItem } from "./types";

const CART_KEY = "rozumimevinu_cart";

function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(CART_KEY);
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch (error) {
    console.warn("Cart read error", error);
    return [];
  }
}

function persistCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function getCartItems() {
  return readCart();
}

export function addCartItem(item: CartItem) {
  const cart = readCart();
  const index = cart.findIndex((entry) => entry.id === item.id);
  if (index >= 0) {
    cart[index].quantity += item.quantity;
  } else {
    cart.push(item);
  }
  persistCart(cart);
  return cart;
}

export function removeCartItem(id: string) {
  const cart = readCart().filter((item) => item.id !== id);
  persistCart(cart);
  return cart;
}

export function clearCart() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CART_KEY);
}
