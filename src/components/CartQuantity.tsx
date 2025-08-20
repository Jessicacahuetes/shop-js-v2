"use client";
import { TProduct } from "@/types";
import { useStore } from "@/store";
import cn from "@/utils/cn";

type Props = {
  product: TProduct;
  className?: string;
};

export default function CartQuantity({ product, className }: Props) {
  const cart = useStore((state) => state.cart);
  const add_product = useStore((state) => state.add_product);
  const remove_product = useStore((state) => state.remove_product);

  const existingProduct = cart.find((p) => p._id === product._id);
  const quantity = existingProduct ? existingProduct.quantity : 0;

  return (
    <div className={cn("flex gap-4 justify-center items-center", className)}>
      <button
        className="px-3 py-1 border hover:bg-gray-500/30"
        onClick={() => remove_product(product)}
      >
        -
      </button>
      <span className="px-2 text-sm">quantity : {quantity}</span>
      <button
        className="px-3 py-1 border hover:bg-gray-500/30"
        onClick={() => add_product(product)}
      >
        +
      </button>
    </div>
  );
}
