import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import CartQuantity from "./CartQuantity";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col border">
      <Link className="hover:cursor-pointer" href={`/products/${product._id}`}>
        <div className="flex justify-center p-4">
          <Image
            src={product.images[0]}
            alt={product.title}
            height={200}
            width={200}
            priority={true}
            className="h-50 w-50 object-contain"
          />
        </div>
        <div className="flex h-[150px] flex-col justify-between px-4">
          <h3 className="pb-2 text-sm font-medium tracking-wider">
            {product.title.toUpperCase()}
          </h3>
          <p className="line-clamp-3 text-[11px] font-light tracking-wider">
            {product.description.toUpperCase()}
          </p>
          <div>
            <span className="text-xs font-medium tracking-wider">PRICE: </span>
            <span className="font-semibold text-gray-500">
              {product.price} €
            </span>
          </div>
        </div>
      </Link>
      <CartQuantity className="my-6 justify-center" product={product} />
    </div>
  );
};
export default ProductCard;
