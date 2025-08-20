"use client";

import { useStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

type CartListProps = {
  showCheckoutButton?: boolean;
  showImage?: boolean;
};

const CartList = ({
  showCheckoutButton = false,
  showImage = false,
}: CartListProps) => {
  const cart = useStore((store) => store.cart);
  const total = useStore((store) => store.total);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {cart.length === 0 ? (
        <p className="flex text-base md:text-xl text-center min-h-[25vh] md:min-h-[50vh] justify-center items-center">
          Your cart is empty
        </p>
      ) : (
        <div className="flex flex-col gap-4 md:w-xl lg:w-3xl mx-auto">
          <p className="text-sm text-gray-600 uppercase">
            total items: {cartCount}
          </p>
          {cart.map((p) => (
            <div
              key={p._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex justify-between">
                {showImage && (
                  <div className="relative size-[75px] md:size-[100px] lg:size-[150px]">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 100px, (min-width: 1024px) 150px, 75px"
                    />
                  </div>
                )}
                <div className="flex flex-col ml-3 justify-center">
                  <p className="text-xs lg:text-sm">
                    {p.title.toLocaleUpperCase()}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Qty : {p.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm md:text-base">{p.price} €</p>
                <p className="text-sm text-gray-600">
                  Sub-total: {p.price * p.quantity} €
                </p>
              </div>
            </div>
          ))}

          {/* Total global */}
          <div className="flex justify-between font-bold text-lg pt-4">
            <span className="uppercase">Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>

          {/* Bouton paiement */}
          {showCheckoutButton && cart.length > 0 && (
            <Link
              href="/payment"
              className="border text-center text-sm md:self-end-safe px-4 py-2 hover:bg-gray-500/30 mt-2 uppercase"
            >
              go to payment
            </Link>
          )}
        </div>
      )}
    </>
  );
};
export default CartList;
