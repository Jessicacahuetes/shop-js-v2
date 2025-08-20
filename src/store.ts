import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TProduct } from "./types";

type TStore = {
  cart: TProduct[];
  add_product: (payload: TProduct) => void;
  remove_product: (payload: TProduct) => void;
  total: number;
};

export const useStore = create<TStore>()(
  devtools(
    immer((set) => {
      return {
        cart: [],
        total: 0,
        add_product: (payload: TProduct) => {
          set((state) => {
            const existingProduct = state.cart.find(
              (p) => p._id === payload._id
            );
            if (existingProduct) {
              existingProduct.quantity++;
            } else {
              state.cart.push({ ...payload, quantity: 1 });
            }
            state.total = state.cart.reduce(
              (acc, p) => acc + p.price * p.quantity,
              0
            );
          });
        },
        remove_product: (payload: TProduct) => {
          set((state) => {
            const existingProduct = state.cart.find(
              (p) => p._id === payload._id
            );
            if (!existingProduct) return;
            if (existingProduct.quantity > 1) {
              existingProduct.quantity--;
            } else {
              state.cart = state.cart.filter((p) => p._id !== payload._id);
            }
            state.total = state.cart.reduce(
              (acc, p) => acc + p.price * p.quantity,
              0
            );
          });
        },
      };
    })
  )
);
