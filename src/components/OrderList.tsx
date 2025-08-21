import { getOrders } from "@/queries/getOrders";
import { TOrder } from "@/types";
import Order from "./Order";
import { cookies } from "next/headers";

const Orderlist = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return (
      <div className="text-center text-red-600 py-10">
        Cette page est réservée aux administrateurs.
      </div>
    );
  }
  const data: TOrder[] = await getOrders(token);

  if (!data || !data.length) {
    return (
      <div className="text-center text-red-600 py-10">
        Cette page est réservée aux administrateurs.
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};
export default Orderlist;
