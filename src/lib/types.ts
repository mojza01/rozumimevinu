export type Wine = {
  id: string;
  nazev: string;
  rocnik: number;
  zatrideni2: string;
  zatrideni: string;
  vinarsvi: string;
  oblast: string;
  cena: number;
  popis: string;
  chut: string;
  vune: string;
  pairing: string;
  parametry: {
    cukr: string;
    kyseliny: string;
    alkohol: string;
  };
  obrazek: string;
  vyber?: boolean;
};

export type OrderItem = {
  wineId: string;
  wineName: string;
  quantity: number;
  price: number;
};

export type OrderInput = {
  items: OrderItem[];
  name: string;
  email: string;
  phone: string;
  address: string;
  note?: string;
};

export type Order = OrderInput & {
  id: string;
  createdAt: string;
  paymentStatus: "čeká na platbu" | "zaplaceno";
};

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};
