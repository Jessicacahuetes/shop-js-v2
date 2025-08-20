"use client";

import { TOrder } from "@/types";
import DeliveredButton from "./DeliveredButton";

type OrderProps = {
  order: TOrder;
};
const Order = ({ order }: OrderProps) => {
  return (
    <div className="border p-4 flex flex-col gap-2">
      <div>
        <span className="text-sm font-semibold text-gray-500 uppercase">
          id:
        </span>
        <span> {order._id}</span>
      </div>
      <div>
        <span className="text-sm font-semibold text-gray-500 uppercase">
          Address:
        </span>
        <span> {order.address}</span>
      </div>
      <div>
        <span className=" text-sm font-semibold text-gray-500 uppercase">
          Price:
        </span>
        <span> {order.price} €</span>
      </div>
      <div className="flex justify-between items-center">
        <span className=" text-sm font-semibold text-gray-500 uppercase">
          Status:
        </span>
        <DeliveredButton delivered={order.delivered} orderId={order._id} />
      </div>
    </div>
  );
};
export default Order;
