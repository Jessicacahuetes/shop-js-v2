import { getOrders } from "@/queries/getOrders";
import { TOrder } from "@/types";
import Order from "./Order";

const Orderlist = async () => {
  const data: TOrder[] = await getOrders();
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
