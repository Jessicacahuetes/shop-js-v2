"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const markDelivered = async (orderId: string, newValue: boolean) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("Admin not authenticated");

    console.log("newValue:", newValue);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/orders/mark-delivered/${orderId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ delivered: newValue }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to mark as delivered");
    }
    revalidatePath("/admin");
  } catch (error) {
    console.error(error);
  }
};
export default markDelivered;
