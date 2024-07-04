"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { collectionsData } from "@/lib/data";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";
import { columns } from "@/components/admin/collections/CollectionColumns";

export default function Collections() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [collections, setCollections] = useState<CollectionType[]>([]);

  const getCollections = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setCollections(collectionsData);
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
        <p className="text-heading2-bold">Collections</p>
        <Button
          className="bg-black text-white"
          onClick={() => router.push("/collections/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
}

Collections;
