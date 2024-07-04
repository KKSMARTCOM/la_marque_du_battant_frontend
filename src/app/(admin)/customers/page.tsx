"use client";
import { columns } from "@/components/admin/customers/CustomerColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import Loader from "@/components/custom ui/Loader";

import { Separator } from "@/components/ui/separator";
import { customersData } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Customers() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const getCustomers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCustomers(customersData);
    setLoading(false);
  };
  useEffect(() => {
    getCustomers();
  });
  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Clients</p>
      <Separator className="bg-grey-1 my-5" />
      <DataTable columns={columns} data={customers} searchKey="name" />
    </div>
  );
}

export const dynamic = "force-dynamic";
