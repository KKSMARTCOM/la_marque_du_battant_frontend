"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { productsData } from "@/lib/data";
import Loader from "@/components/custom ui/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/admin/products/ProductColumns";

export default function Products() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);

  const getCollections = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setProducts(productsData);
    setLoading(false);
  };

  useEffect(() => {
    getCollections();
  });

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Produits</p>
        <Button
          className="bg-blue-1 text-white"
          onClick={() => router.push("/products/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Ajouter produit
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={products} searchKey="title" />
    </div>
  );
}
