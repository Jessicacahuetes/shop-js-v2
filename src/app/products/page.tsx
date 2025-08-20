import ProductList from "@/components/ProductList";

const ProductPage = async () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl text-center mb-6 uppercase tracking-wider">
        our products
      </h1>
      <ProductList />
    </div>
  );
};
export default ProductPage;
