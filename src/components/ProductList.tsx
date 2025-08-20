import getProducts from "@/queries/getProducts";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const data = await getProducts();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
