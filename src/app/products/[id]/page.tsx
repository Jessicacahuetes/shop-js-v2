import CartQuantity from "@/components/CartQuantity";
import getProductById from "@/queries/getProductById";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product = await getProductById(id);
  //   console.log(product);

  return (
    <div className="container mx-auto px-6 py-10 my-9 flex items-center">
      <div className="grid md:grid-cols-[auto_1fr] gap-10">
        {/* Image */}
        <div className="flex justify-center items-center">
          <div className="relative size-[250px] lg:size-[400px]">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 400px, 250px"
            />
          </div>
        </div>

        {/* Infos */}
        <div className="flex items-center">
          <div className="flex flex-col justify-center gap-6 md:border-l md:pl-6 py-4">
            <h1 className="text-xl  md:text-2xl font-bold">
              {product.title.toLocaleUpperCase()}
            </h1>
            <p className="text-xs tracking-wider">
              {product.description.toLocaleUpperCase()}
            </p>
            <span className="text-xl font-semibold text-gray-500">
              {product.price} €
            </span>
            {/* Boutons + et - (panier plus tard) */}
            <CartQuantity className="md:justify-normal" product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
