import { TProduct } from "@/types";

const getProducts = async (): Promise<TProduct[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    next: {
      revalidate: 60 * 3,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch products");

  // console.log(response);

  return response.json();
};
export default getProducts;
