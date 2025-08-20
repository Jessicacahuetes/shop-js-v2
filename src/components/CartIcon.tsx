"use client";

import { useStore } from "@/store";
import { CgShoppingCart } from "react-icons/cg";

const CartIcon = () => {
  const cart = useStore((store) => store.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative flex h-full flex-col items-center justify-between hover:cursor-pointer">
      <CgShoppingCart className="size-5" />
      {cartCount > 0 && (
        <p className=" hover:scale-110 absolute -top-3.5 -right-3 flex size-6  items-center justify-center rounded-full bg-red-500/80 text-[10px] font-semibold text-white">
          {cartCount}
        </p>
      )}
    </div>
  );
};
export default CartIcon;
