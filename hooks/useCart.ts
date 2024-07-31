import { IProduct } from "@/types";
import { create } from "zustand";

interface ICart extends IProduct {
  quantity: number;
}

interface ICartStore {
  carts: ICart[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  totalPrice: () => number;
  cartsLength: () => number;
  taxes: () => number;
  clearCart: () => void;
}

export const useCart = create<ICartStore>((set, get) => ({
  carts: [],
  addToCart: (product: IProduct) => {
    const { carts } = get();
    const existing = carts.find((cart) => cart.id === product.id);
    if (existing) {
      set((state) => {
        const newCarts = state.carts.map((cart) => cart);
        return { carts: newCarts };
      });
    } else {
      set({ carts: [...carts, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (id: number) => {
    const { carts } = get();
    const newCarts = carts.filter((cart) => cart.id !== id);
    set({ carts: newCarts });
  },
  increment: (id: number) => {
    const { carts } = get();
    const newCarts = carts.map((cart) => {
      if (cart.id === id) {
        return { ...cart, quantity: cart.quantity + 1 };
      }

      return cart;
    });
    set({ carts: newCarts });
  },
  decrement: (id: number) => {
    const { carts } = get();
    const newCarts = carts.map((cart) => {
      if (cart.id === id) {
        return { ...cart, quantity: cart.quantity - 1 };
      }

      return cart;
    });
    set({ carts: newCarts });
  },
  totalPrice: () => {
    const { carts } = get();

    const total = carts.reduce(
      (acc, cart) => acc + cart.price * cart.quantity,
      0
    );

    return total;
  },
  cartsLength: () => {
    return get().carts.reduce((acc, cart) => acc + cart.quantity, 0);
  },
  taxes: () => get().totalPrice() * 0.1,
  clearCart: () => set({ carts: [] }),
}));
