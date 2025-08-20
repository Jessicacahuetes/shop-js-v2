import Orderlist from "@/components/OrderList";

export const dynamic = "force-dynamic";

const AdminPage = async () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl text-center mb-6 uppercase tracking-wider">
        Your orders
      </h1>
      <Orderlist />
    </div>
  );
};
export default AdminPage;
