"use client";

import markDelivered from "@/actions/markDelivered";
import cn from "@/utils/cn";

type DeliveredButtonProps = {
  delivered: boolean;
  orderId: string;
  className?: string;
};

const DeliveredButton = ({
  delivered,
  orderId,
  className,
}: DeliveredButtonProps) => {
  const handleClick = () => {
    if (!delivered) {
      markDelivered(orderId, true);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={delivered}
      className={cn(
        delivered
          ? "border border-green-700 py-2 px-4 uppercase text-center text-green-700 hover:bg-green-500/15"
          : "border border-red-700 py-2 px-4 uppercase text-center text-red-700 hover:bg-red-500/15",
        className
      )}
    >
      {delivered ? "Delivered" : "Pending"}
    </button>
  );
};
export default DeliveredButton;
