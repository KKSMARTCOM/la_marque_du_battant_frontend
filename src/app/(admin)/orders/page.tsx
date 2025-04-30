"use client";

import { columns } from "@/components/admin/orders/OrderColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import Loader from "@/components/custom ui/Loader";

import { Separator } from "@/components/ui/separator";
import { ordersData } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Orders() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<OrderColumnType[]>([]);
  const getCollections = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setOrders(ordersData);
    setLoading(false);
  };

  useEffect(() => {
    getCollections();
  });

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Commandes</p>
      <Separator className="bg-black my-5" />
      <DataTable columns={columns} data={orders} searchKey="_id" />
    </div>
  );
}

export const dynamic = "force-dynamic";
