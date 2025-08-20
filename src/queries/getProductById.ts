import { TProduct } from "@/types";

const getProductById = async (id: string): Promise<TProduct> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
    {
      next: {
        revalidate: 60 * 3,
      },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch product");

  console.log(response);

  return response.json();
};
export default getProductById;
