"use client";

import createOrder from "@/actions/createOrder";
import { useStore } from "@/store";
import { useActionState } from "react";

const PaymentForm = () => {
  const cart = useStore((store) => store.cart);
  const [formState, formAction, isPending] = useActionState(
    (
      _currentState: { error: string | null; success: boolean },
      formData: FormData
    ) => createOrder(_currentState, formData, cart),
    { error: null, success: false }
  );

  return (
    <>
      {cart.length !== 0 && (
        <form
          action={formAction}
          className="flex flex-col md:w-xl lg:w-3x mx-auto gap-4"
        >
          <h2 className="text-2xl text-center mb-6 uppercase tracking-wider">
            Shipping Information
          </h2>
          <input
            name="address"
            placeholder="Enter your address"
            className="border p-2"
          />
          <button
            type="submit"
            disabled={isPending}
            className="py-2 px-4 hover:bg-gray-500/30 disabled:opacity-50 border sel"
          >
            {isPending ? "Processing..." : "Confirm Order"}
          </button>
          {formState.error && (
            <p className="text-red-500 text-center">{formState.error}</p>
          )}
          {formState.success && (
            <p className="text-green-700 text-center">Order confirmed!</p>
          )}
        </form>
      )}
    </>
  );
};
export default PaymentForm;
