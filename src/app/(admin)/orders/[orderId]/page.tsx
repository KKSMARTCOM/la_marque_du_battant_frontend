import { columns } from "@/components/admin/orderItems/OrderItemsColums";
import { DataTable } from "@/components/custom ui/DataTable";

export default function OrderDetails({
  params,
}: {
  params: { orderId: string };
}) {
  return (
    <div className="flex flex-col p-10 gap-5">
      <p className="text-base-bold">
        Order ID: <span className="text-base-medium">{2550}</span>
      </p>
      <p className="text-base-bold">
        Customer name:{" "}
        <span className="text-base-medium">{"customer.name"}</span>
      </p>
      <p className="text-base-bold">
        Shipping address:{" "}
        <span className="text-base-medium">
          {"street"}, {"city"}, {"state"}, {"postalCode"}, {"country"}
        </span>
      </p>
      <p className="text-base-bold">
        Total Paid: <span className="text-base-medium">${"orderDetails"}</span>
      </p>
      <p className="text-base-bold">
        Shipping rate ID:{" "}
        <span className="text-base-medium">{"orderDetails"}</span>
      </p>
      <DataTable columns={columns} data={[]} searchKey="product" />
    </div>
  );
}