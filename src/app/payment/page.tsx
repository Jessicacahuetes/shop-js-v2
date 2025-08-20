import CartList from "@/components/CartList";
import PaymentForm from "@/components/PaymentForm";
import redirectIfNotAuth from "@/utils/redirectIfNotAuth";

const PaymentPage = async () => {
  await redirectIfNotAuth();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl text-center mb-6 uppercase tracking-wider">
        Cart Summary
      </h1>
      <div className="flex flex-col gap-12">
        <CartList />
        <PaymentForm />
      </div>
    </div>
  );
};
export default PaymentPage;
