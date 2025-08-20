import CartList from "@/components/CartList";

const CartPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl text-center mb-6 uppercase tracking-wider">
        Shopping Cart
      </h1>
      <CartList showCheckoutButton={true} showImage={true} />
    </div>
  );
};
export default CartPage;
