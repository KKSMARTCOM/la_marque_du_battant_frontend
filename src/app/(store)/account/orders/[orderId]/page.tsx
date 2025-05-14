"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchClient } from "../../../../../../utils/fetchClient";
import ItemsCard from "@/components/store/products/ItemsCard";

export default function CustomerOrderDetails() {
  const params = useParams();
  const [order, setOrder] = useState<any>();
  const [loading, setLoading] = useState(true);

  const getOrder = async (id: string | any) => {
    try {
      const res = await fetchClient(`/orders/${id}`);
      if (res && res.success === true) {
        console.log(res.data);
        setOrder(res.data);
      }
    } catch (error) {
      toast.error("Erreur interne du serveur !");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getOrder(params.orderId);
  }, [params.orderId]);

  return (
    <div className="p-10">
      {order && (
        <div>
          <h1 className="font-semibold text-xl py-4">
            Commande : {order.order_no}{" "}
          </h1>

          <p>Date de commande: {order.created_at}</p>
          <p>Prix total: {order.price} F cfa</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {order && order.cart_items.length > 0
          ? order.cart_items.map((item: any, index: number) => {
              return <ItemsCard key={index} orderItem={item} />;
            })
          : ""}
      </div>
    </div>
  );
}
