export const getOrders = async (token?: string) => {
  if (!token) {
    return [];
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    if (!res.ok) return [];

    return res.json();
  } catch {
    return [];
  }
};
