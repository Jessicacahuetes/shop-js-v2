"use server";

import { TProduct } from "@/types";
import { cookies } from "next/headers";

const createOrder = async (
  _currentState: { error: string | null; success: boolean },
  formData: FormData,
  cart: TProduct[]
) => {
  try {
    const address = formData.get("address");

    if (!address) return { error: "An address is required", success: false };
    if (!cart || cart.length === 0)
      return { error: "Cart is empty", success: false };

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return { error: "User not authenticated", success: false };

    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        address,
        price: totalPrice,
        products: cart.map((item) => ({
          product: item._id,
          quantity: item.quantity,
        })),
      }),
    });

    if (!res.ok) return { error: "Failed to create order", success: false };

    return { error: null, success: true };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred", success: false };
  }
};
export default createOrder;
